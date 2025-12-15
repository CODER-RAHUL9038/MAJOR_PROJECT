const express = require("express");
const mongoose = require("mongoose");
const router = express.Router({ mergeParams: true });
const Review = require("../models/review.js");
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const { reviewSchema } = require("../schema.js");
const ExpressError = require("../utils/ExpressError.js");

//Joi schema server side validation for reviews
const validateReview = async (req, res, next) => {
  //error provided by joi
  const { error } = reviewSchema.validate(req.body);

  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    console.log(errMsg);
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

router.post(
  "/",
  validateReview,
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    console.log(id);
    //validating if id exists
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new ExpressError(404, "Invalid Listing ID");
    }
    //finding listing
    let listing = await Listing.findById(id);
    //Creating new review using dynamic object key
    let newReview = new Review(req.body.review);
    //Pushing newly created review in the listing reviews array
    listing.reviews.push(newReview);
    //savin first reviews then listing
    await newReview.save();
    await listing.save();

    //redirecting to the same page
    req.flash("success", " Review Created!");
    res.redirect(`/listings/${listing.id}`);
  })
);

//Delete Review Route
router.delete(
  "/:reviewId",
  wrapAsync(async (req, res) => {
    let { id, reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    req.flash("success", " Review Deleted!");
    res.redirect(`/listings/${id}`);
  })
);

module.exports = router;
