const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
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
  price: Number,
  location: String,
  country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
