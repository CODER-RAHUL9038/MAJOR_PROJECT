const { cloudinary } = require("../config/cloudConfig.js");
const Listing = require("../models/listing.js");
const mongoose = require("mongoose");
const axios = require("axios");
const ExpressError = require("../utils/ExpressError.js");

module.exports.index = async (req, res) => {
  const perPage = 12;
  let { search, category } = req.query;
  const page = parseInt(req.query.page) || 1;

  // 1️ Decide filter FIRST
  let filter = {};
  if (category) {
    filter.category = category;
  }

  //SEARCH LOGIC
  if (search) {
    filter.$or = [
      { title: { $regex: search, $options: "i" } },
      { description: { $regex: search, $options: "i" } },
      { category: { $regex: search, $options: "i" } },
      { location: { $regex: search, $options: "i" } },
      { country: { $regex: search, $options: "i" } },
    ];
  }

  // 2️⃣ Fetch filtered listings with pagination
  const listings = await Listing.find(filter)
    .sort({ createdAt: -1 })
    .skip((page - 1) * perPage)
    .limit(perPage);

  // 3️⃣ Count filtered listings (IMPORTANT)
  const totalListings = await Listing.countDocuments(filter);

  const hasResults = listings.length > 0;
  // 4️⃣ Render once
  res.render("listings/index", {
    listings,
    currentPage: page,
    totalPages: Math.ceil(totalListings / perPage),
    category: category || null,
    search: search || null,
    hasResults,
  });
};

module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};

//CREATE LISTING
module.exports.createListing = async (req, res) => {
  const url = req.file.path;
  const filename = req.file.filename;

  const newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id;
  newListing.image = { url, filename };

  // 1️⃣ Clean location (remove house numbers anywhere)
  const locationText = req.body.listing.location;
  const cleanedLocation = locationText.replace(
    /\b\d+[A-Za-z\-\/]*\b,?\s*/g,
    ""
  );
  const finalLocation = cleanedLocation.replace(/,\s*,/g, ",").trim();

  // 2️⃣ Geocode
  const response = await axios.get(
    `https://api.maptiler.com/geocoding/${encodeURIComponent(
      finalLocation
    )}.json`,
    {
      params: {
        key: process.env.MAPTILER_KEY,
        limit: 1,
        types: "address",
      },
    }
  );

  // 3️⃣ Validate result FIRST
  if (!response.data.features.length) {
    req.flash(
      "error",
      "Address not found. Please remove house number or enter a nearby landmark."
    );
    return res.redirect("/listings/new");
  }

  // 4️⃣ Extract coordinates
  const feature = response.data.features[0];
  const coordinates = feature.geometry.coordinates; // [lng, lat]

  newListing.geometry = {
    type: "Point",
    coordinates,
  };

  // 5️⃣ Save
  await newListing.save();
  req.flash("success", "New listing created!");
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

// RENDER EDIT LISTNG FORM
module.exports.editListingForm = async (req, res) => {
  let { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new ExpressError(404, "Invalid Listing ID");
  }
  let listing = await Listing.findById(id);
  if (!listing) {
    throw new ExpressError(404, "Listing not found");
  }

  res.render("listings/edit.ejs", { listing });
};

//EDIT LISTING
module.exports.editListing = async (req, res) => {
  let { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new ExpressError(404, "Invalid Listing ID");
  }

  const listing = await Listing.findById(id);

  // Update text fields first rom req.body
  //First storing present location before saving new listing location
  const oldLocation = listing.location;

  listing.set(req.body.listing);

  if (req.body.listing.location && req.body.listing.location !== oldLocation) {
    // 1️⃣ Clean location (remove house numbers anywhere)
    const locationText = req.body.listing.location;
    const cleanedLocation = locationText.replace(
      /\b\d+[A-Za-z\-\/]*\b,?\s*/g,
      ""
    );
    const finalLocation = cleanedLocation.replace(/,\s*,/g, ",").trim();

    // 2️⃣ Geocode
    const response = await axios.get(
      `https://api.maptiler.com/geocoding/${encodeURIComponent(
        finalLocation
      )}.json`,
      {
        params: {
          key: process.env.MAPTILER_KEY,
          limit: 1,
          types: "address",
        },
      }
    );

    // 3️⃣ Validate result FIRST
    if (!response.data.features.length) {
      req.flash("error", "Address not found. Please try a nearby landmark.");
      return res.redirect("/listings/new");
    }

    // 4️⃣ Extract coordinates
    const feature = response.data.features[0];
    const coordinates = feature.geometry.coordinates; // [lng, lat]

    listing.geometry = {
      type: "Point",
      coordinates,
    };
  }
  //Image logic
  if (req.file) {
    if (listing.image && listing.image.filename) {
      await cloudinary.uploader.destroy(listing.image.filename);
    }
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = { filename, url };
    await listing.save();
  }
  await listing.save();
  req.flash("success", "Listing Updated!");
  res.redirect(`/listings/${listing._id}`);
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

module.exports.privacy = (req, res) => {
  res.render("legal/privacy");
};
module.exports.terms = (req, res) => {
  res.render("legal/terms");
};
