const { cloudinary } = require("../cloudConfig.js");
const Listing = require("../models/listing.js");
const mongoose = require("mongoose");

module.exports.index = async (req, res) => {
  const allListings = await Listing.find().sort({ createdAt: -1 }); //latest listing will stack first
  res.render("listings/index.ejs", { allListings });
};

module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};

module.exports.createLisiting = async (req, res) => {
  let url = req.file.path;
  let filename = req.file.filename;

  let newListing = new Listing(req.body.listing); // shorter syntax of creating new listing when passing the entire form body
  newListing.owner = req.user._id;
  newListing.image = { url, filename };
  await newListing.save();
  req.flash("success", "New listing Created!");
  res.redirect("/listings");
};

module.exports.showListings = async (req, res) => {
  let { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new ExpressError(404, "Invalid Listing ID");
  }

  const listing = await Listing.findById(id)
    .populate({
      path: "reviews",
      populate: {
        path: "author",
      },
    })
    .populate("owner");

  if (!listing) {
    req.flash("error", "Listing does not exists ");
    return res.redirect("/listings");
  }

  res.render("listings/show.ejs", { listing });
};

module.exports.editListingForm = async (req, res) => {
  let { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new ExpressError(404, "Invalid Listing ID");
  }
  let listing = await Listing.findById(id);
  if (!listing) {
    throw new ExpressError(404, "Listing not found");
  }
  // let originalImageUrl;
  // if (listing.image?.url) {
  //   originalImageUrl = listing.image.url;
  //   originalImageUrl = originalImageUrl.replace(
  //     "/upload",
  //     "/upload/c_scale,h_200,w_200"
  //   );
  // }
  res.render("listings/edit.ejs", { listing });
};

module.exports.editListing = async (req, res) => {
  let { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new ExpressError(404, "Invalid Listing ID");
  }

  const listing = await Listing.findById(id);

  // Update text fields first rom req.body
  listing.set(req.body.listing);

  if (req.file) {
    if (listing.image && listing.image.filename) {
      await cloudinary.uploader.destroy(listing.image.filename);
    }
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = { filename, url };
    await listing.save();
  }
  req.flash("success", "Listing Updated!");
  res.redirect("/listings");
};

module.exports.deleteListing = async (req, res) => {
  let { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new ExpressError(404, "Invalid Listing ID");
  }
  let deletedListing = await Listing.findByIdAndDelete(id);
  if (!deletedListing) {
    throw new ExpressError(404, "Listing not found");
  }
  req.flash("success", " Listing Deleted!");
  res.redirect("/listings");
};
