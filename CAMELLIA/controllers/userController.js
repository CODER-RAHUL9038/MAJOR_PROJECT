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
    req.login(registeredUser, (err) => {
      if (err) {
        return next(err);
      }
      req.flash("success", `Welcome to Camellia, ${username}!`);
      res.redirect("/listings");
    });
  } catch (error) {
    let message = "We couldn't create your account right now. Please try again.";

    if (error.name === "UserExistsError") {
      message = "That username is already taken. Please choose another one.";
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
  req.flash("success", "Welcome back! You're securely logged in.");
  let redirectUrl = res.locals.redirectUrl || "/listings";
  res.redirect(redirectUrl);
};

module.exports.logout = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.flash("success", "You've been successfully logged out. See you next time!");
    res.redirect("/listings");
  });
};
