const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");

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

router.get("/login", (req, res) => {
  res.render("user/login.ejs");
});

router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  async (req, res) => {
    req.flash("success", "Welcome back to Camellia! You are logged in");
    res.redirect("/listings");
  }
);

module.exports = router;
