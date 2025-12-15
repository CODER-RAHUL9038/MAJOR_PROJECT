const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { listingSchema } = require("../schema.js");
const ExpressError = require("../utils/ExpressError.js");
const Listing = require("../models/listing.js");
const mongoose = require("mongoose");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");

//Index Route
router.get(
  "/",
  wrapAsync(async (req, res) => {
    const allListings = await Listing.find().sort({ createdAt: -1 }); //latest listing will stack first
    res.render("listings/index.ejs", { allListings });
  })
);

//New route
//Handling new listing request
router.get("/new", isLoggedIn, (req, res) => {
  res.render("listings/new.ejs");
});

// Post route
router.post(
  "/",
  isLoggedIn,
  validateListing,
  wrapAsync(async (req, res) => {
    let newListing = await new Listing(req.body.listing); // shorter syntax of creating new listing when passing the entire form body
    newListing.owner = req.user._id;
    await newListing.save();
    req.flash("success", "New listing Created!");
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
  })
);

//Edit route
// Get request to edit form
router.get(
  "/:id/edit",
  isOwner,
  isLoggedIn,
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

//Update Route
router.put(
  "/:id",
  isLoggedIn,
  isOwner,
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
    req.flash("success", "Listing Updated!");
    res.redirect("/listings");
  })
);

// Delete Route
router.delete(
  "/:id",
  isOwner,
  isLoggedIn,
  wrapAsync(async (req, res) => {
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
  })
);

module.exports = router;
