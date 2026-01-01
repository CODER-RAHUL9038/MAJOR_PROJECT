const User = require("../models/user.js");

module.exports.signupForm = (req, res) => {
  res.render("user/signup");
};

module.exports.signup = async (req, res) => {
  try {
    let { username, email, password } = req.body;
    const newUser = new User({
      email,
      username,
    });
    let registeredUser = await User.register(newUser, password);
    req.login(registeredUser, (error) => {
      if (error) {
        return next(err);
      }
      req.flash("success", "Welcome to Camellia");
      res.redirect("/listings");
    });
  } catch (error) {
    let message = "Signup failed. Please try again.";

    if (error.name === "UserExistsError") {
      message = "This username is not available.";
    } else {
      message = error.message; // fallback
    }
    req.flash("error", message);
    res.redirect("/signup");
  }
};

module.exports.loginForm = (req, res) => {
  res.render("user/login.ejs");
};

module.exports.login = (req, res) => {
  req.flash("success", "Welcome back to Camellia!");
  let redirectUrl = res.locals.redirectUrl || "/listings";
  res.redirect(redirectUrl);
};

module.exports.logout = (req, res) => {
  req.logout((err) => {
    if (err) {
      next(err);
    }
    req.flash("success", "Logout Successfully");
    res.redirect("/listings");
  });
};
