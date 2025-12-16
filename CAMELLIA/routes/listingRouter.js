const express = require("express");
const router = express.Router();
exports.router = router;
const wrapAsync = require("../utils/wrapAsync.js");
const { listingSchema } = require("../schema.js");
const ExpressError = require("../utils/ExpressError.js");
const Listing = require("../models/listing.js");
const mongoose = require("mongoose");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingController = require("../controllers/listingController.js");

//Using router.route
router
  .route("/")
  .get(wrapAsync(listingController.index))
  .post(
    isLoggedIn,
    validateListing,
    wrapAsync(listingController.createLisiting)
  );

//New route
router.get("/new", isLoggedIn, listingController.renderNewForm);

router
  .route("/:id")
  .put(
    isLoggedIn,
    isOwner,
    validateListing,
    wrapAsync(listingController.editListing)
  )
  .delete(isLoggedIn, isOwner, wrapAsync(listingController.deleteListing))
  .get(wrapAsync(listingController.showListings));

// Get request to edit form
router.get(
  "/:id/edit",
  isOwner,
  isLoggedIn,
  wrapAsync(listingController.editListingForm)
);

module.exports = router;
