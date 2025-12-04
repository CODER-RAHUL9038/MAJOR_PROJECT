const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const MONGO_URL = "mongodb://127.0.0.1:27017/camellia";
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const { listingSchema } = require("./schema.js");
const Review = require("./models/review.js");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

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

//Joi schema server side validation
const validateListing = (req, res, next) => {
  const { error } = listingSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    console.log(errMsg);
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

//Index Route
app.get(
  "/listings",
  wrapAsync(async (req, res) => {
    const allListings = await Listing.find().sort({ createdAt: -1 }); //latest listing will stack first
    res.render("listings/index.ejs", { allListings });
  })
);

//Create route
//Handling new listing request
app.get("/listings/new", (req, res) => {
  res.render("listings/new.ejs");
});

//Handling form data from new

app.post(
  "/listings",
  validateListing,
  wrapAsync(async (req, res, next) => {
    let newListing = await new Listing(req.body.listing); // shorter syntax of creating new listing when passing the entire form body
    await newListing.save();
    console.log("✅New Listing Created in dB");
    res.redirect("/listings");
  })
);

//Show Route
app.get(
  "/listings/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new ExpressError(404, "Invalid Listing ID");
    }

    const listing = await Listing.findById(id);
    if (!listing) {
      throw new ExpressError(404, "Listing not found");
    }
    res.render("listings/show.ejs", { listing });
  })
);

//Edit route
// Get request to edit form
app.get(
  "/listings/:id/edit",
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

//Handling edit form data
app.put(
  "/listings/:id",
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

    res.redirect("/listings");
  })
);

app.delete(
  "/listings/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new ExpressError(404, "Invalid Listing ID");
    }
    let deletedListing = await Listing.findByIdAndDelete(id);
    if (!deletedListing) {
      throw new ExpressError(404, "Listing not found");
    }
    console.log("❌Listing deleted from dB");
    res.redirect("/listings");
  })
);

//Listings Review
//Post route

app.post(
  "/listings/:id/reviews",
  wrapAsync(async (req, res, next) => {
    let { id } = req.params;
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
    console.log("new Review Saved", newReview);
    //redirecting to the same page
    res.redirect(`/listings/${listing.id}`);
  })
);

app.get("/", (req, res) => {
  res.send("Hi! i am root");
});

//For all request for handling page not found
app.all(/.*/, (req, res, next) => {
  next(new ExpressError(404, "Page not Found"));
});

// Custom error handler middleware
app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Something went wrong!" } = err;
  // if (statusCode == 404) {

  // }
  res.status(statusCode).render("error.ejs", { err });
});

app.listen(8080, () => {
  console.log("✅Listening on Port - 8080");
});
