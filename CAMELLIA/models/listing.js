const mongoose = require("mongoose");
const Review = require("./review.js");

const Schema = mongoose.Schema;

const listingSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: String,
    image: {
      type: String,
      default:
        "https://images.pexels.com/photos/34629974/pexels-photo-34629974.jpeg",
      set: (v) =>
        v && v.trim() !== ""
          ? v
          : "https://images.pexels.com/photos/34629974/pexels-photo-34629974.jpeg",
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    location: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    reviews: [
      // used array of id since multiple reviews can exists
      {
        type: Schema.Types.ObjectId,
        ref: "Review", //reference to the Review model
      },
    ],
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

listingSchema.post("findOneAndDelete", async (listing) => {
  if (listing) {
    await Review.deleteMany({ _id: { $in: listing.reviews } });
  }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
