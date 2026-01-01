const express = require("express");
const router = express.Router();
exports.router = router;
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingController = require("../controllers/listingController.js");
const multer = require("multer");
const { storage } = require("../config/cloudConfig.js");
const upload = multer({ storage });


//Using router.route
router
  .route("/")
  .get(wrapAsync(listingController.index))
  .post(
    isLoggedIn,
    validateListing,
    upload.single("listing[image]"),
    wrapAsync(listingController.createListing)
  );

//New route
router.get("/new", isLoggedIn, listingController.renderNewForm);

router.get("/privacy", listingController.privacy);
router.get("/terms", listingController.terms);

router
  .route("/:id")
  .put(
    isLoggedIn,
    isOwner,
    upload.single("listing[image]"),
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
