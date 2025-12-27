if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "../.env" });
}

const dbUrl = process.env.ATLASDB_URL;
const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const axios = require("axios");

main()
  .then((res) => {
    console.log("✅Connected to MongoDB");
  })
  .catch((err) => {
    console.log("❌Error connecting to Db", err);
  });
async function main() {
  await mongoose.connect(dbUrl);
}

const initDb = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "693e8695c07f8ab28bcf388f",
  }));
  await Listing.insertMany(initData.data);
  console.log("✅Data initialised");
  const listings = await Listing.find({});
  for (let listing of listings) {
    const res = await axios.get(
      `https://api.maptiler.com/geocoding/${encodeURIComponent(
        listing.location
      )}.json`,
      {
        params: {
          key: process.env.MAPTILER_KEY,
          limit: 1,
          types: "address",
        },
      }
    );

    const coords = res.data.features[0].geometry.coordinates;

    listing.geometry = {
      type: "Point",
      coordinates: coords,
    };

    await listing.save();
  }

  console.log("Old listings updated");
};

initDb();
