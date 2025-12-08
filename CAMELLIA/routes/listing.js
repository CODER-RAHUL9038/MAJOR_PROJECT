const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { listingSchema } = require("../schema.js");
const ExpressError = require("../utils/ExpressError.js");
const Listing = require("../models/listing.js");
const methodOverride = require("method-override");
const mongoose = require("mongoose");

//Joi schema server side validation for listings
const validateListing = (req, res, next) => {
  const { error } = listingSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    console.log(errMsg);
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

//Index Route
router.get(
  "/",
  wrapAsync(async (req, res) => {
    const allListings = await Listing.find().sort({ createdAt: -1 }); //latest listing will stack first
    res.render("listings/index.ejs", { allListings });
  })
);

//Create route
//Handling new listing request
router.get("/new", (req, res) => {
  res.render("listings/new.ejs");
});

//Handling form data from new

router.post(
  "/",
  validateListing,
  wrapAsync(async (req, res, next) => {
    let newListing = await new Listing(req.body.listing); // shorter syntax of creating new listing when passing the entire form body
    await newListing.save();
    req.flash("success", "New listing Created!")
    res.redirect("/listings");
  })
);

//Show Route
router.get(
  "/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new ExpressError(404, "Invalid Listing ID");
    }

    const listing = await Listing.findById(id).populate("reviews");
    if (!listing) {
      throw new ExpressError(404, "Listing not found");
    }
    res.render("listings/show.ejs", { listing });
  })
);

//Edit route
// Get request to edit form
router.get(
  "/:id/edit",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new ExpressError(404, "Invalid Listing ID");
    }
    let listing = await Listing.findById(id);
    if (!listing) {
      throw new ExpressError(404, "Listing not found");
    }
    res.render("listings/edit.ejs", { listing });
  })
);

//Handling edit form data
router.put(
  "/:id",
  validateListing,
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new ExpressError(404, "Invalid Listing ID");
    }

    let updatedListing = await Listing.findByIdAndUpdate(
      id,
      { ...req.body.listing }, // spread create copy of object
      {
        new: true,
      }
    ); // shortcut of destructuring --> req.body.listing

    res.redirect("/listings");
  })
);

router.delete(
  "/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new ExpressError(404, "Invalid Listing ID");
    }
    let deletedListing = await Listing.findByIdAndDelete(id);
    if (!deletedListing) {
      throw new ExpressError(404, "Listing not found");
    }
    console.log("❌Listing deleted from dB");
    res.redirect("/listings");
  })
);



module.exports = router;
