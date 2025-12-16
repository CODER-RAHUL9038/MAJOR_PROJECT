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

//Index Route
router.get("/", wrapAsync(listingController.index));

//New route
router.get("/new", isLoggedIn, listingController.renderNewForm);

// Post route
router.post(
  "/",
  isLoggedIn,
  validateListing,
  wrapAsync(listingController.createLisiting)
);

//Show Route
router.get("/:id", wrapAsync(listingController.showListings));

//Edit route

// Get request to edit form
router.get(
  "/:id/edit",
  isOwner,
  isLoggedIn,
  wrapAsync(listingController.editListingForm)
);

//Update Route
router.put(
  "/:id",
  isLoggedIn,
  isOwner,
  validateListing,
  wrapAsync(listingController.editListing)
);

// Delete Route
router.delete(
  "/:id",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.deleteListing)
);

module.exports = router;
