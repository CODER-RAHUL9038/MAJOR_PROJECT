const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const MONGO_URL = "mongodb://127.0.0.1:27017/camellia";
const path = require("path");
const methodOverride = require("method-override");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

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
//Index Route
app.get("/listings", async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
});

//Create route
//Handling new listing request
app.get("/listings/new", (req, res) => {
  res.render("listings/new.ejs");
});

//Handling form data from new
app.post("/listings", async (req, res) => {
  let newListing = await new Listing(req.body.listing); // shorter syntax of creating new listing when passing the entire form body
  await newListing.save();
  console.log("✅New Listing Created");
  res.redirect("/listings");
});

//Show Route
app.get("/listings/:id", async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/show.ejs", { listing });
});

//Edit route
// Get request to edit form
app.get("/listings/:id/edit", async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findById(id);
  res.render("listings/edit.ejs", { listing });
});

//Handling edit form data
app.put("/listings/:id", async (req, res) => {
  let { id } = req.params;
  let updatedListing = await Listing.findByIdAndUpdate(
    id,
    { ...req.body.listing }, // spread create copy of object
    {
      new: true,
    }
  ); // shortcut of destructuring --> req.body.listing

  res.redirect("/listings");
});

app.delete("/listings/:id", async (req, res) => {
  let { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  console.log("❌Listing deleted");
  res.redirect("/listings");
});

app.get("/", (req, res) => {
  res.send("Hi! i am root");
});

app.listen(8080, () => {
  console.log("✅Listening on Port - 8080");
});
