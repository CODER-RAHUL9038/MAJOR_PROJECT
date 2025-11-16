const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const MONGO_URL = "mongodb://127.0.0.1:27017/camellia";

main()
  .then((res) => {
    console.log("✅Connected to MongoDB");
  })
  .catch((err) => {
    console.log("❌Error connecting to Db");
  });
async function main() {
  await mongoose.connect(MONGO_URL);
}

app.get("/", (req, res) => {
  res.send("Hi! i am root");
});

app.get("/testListing", async (req, res) => {
  let samplelisting = new Listing({
    title: "New Villa",
    description: "Sea View ",
    price: 1800,
    location: "Kolkata",
    country: "India",
  });
  await samplelisting.save();
  console.log("✅Saved");
  res.send("Listing Created");
});

app.listen(8080, () => {
  console.log("✅Listening on Port - 8080");
});
