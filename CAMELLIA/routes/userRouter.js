const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");

router.get("/signup", (req, res) => {
  res.render("user/signup.ejs");
});

router.post(
  "/signup",
  wrapAsync(async (req, res) => {
    try {
      let { username, email, password } = req.body;
      const newUser = new User({
        email,
        username,
      });
      let regUser = await User.register(newUser, password);
      console.log(regUser);
      req.flash("success", "Welcome to Camellia");
      res.redirect("/listings");
    } catch (error) {
      console.log(error.message);
      req.flash("error", error.message);
      res.redirect("/signup");
    }
  })
);

module.exports = router;
