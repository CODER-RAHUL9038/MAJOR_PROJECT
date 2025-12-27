const Listing = require("../models/listing.js");
const mongoose = require("mongoose");
const Review = require("../models/review.js");


// new review
module.exports.createReview = async (req, res) => {
  let { id } = req.params;
  
  //validating if id exists
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new ExpressError(404, "Invalid Listing ID");
  }
  //finding listing
  let listing = await Listing.findById(id);
  //Creating new review using dynamic object key
  let newReview = new Review(req.body.review);
  newReview.author = req.user._id;
  //Pushing newly created review in the listing reviews array
  listing.reviews.push(newReview);
  //savin first reviews then listing
  await newReview.save();
  await listing.save();

  //redirecting to the same page
  req.flash("success", " Review Created!");
  res.redirect(`/listings/${listing.id}`);
};


// delete review
module.exports.deleteReview = async (req, res) => {
  let { id, reviewId } = req.params;
  await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
  await Review.findByIdAndDelete(reviewId);
  req.flash("success", " Review Deleted!");
  res.redirect(`/listings/${id}`);
};
