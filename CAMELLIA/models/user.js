const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const User = new Schema({
  email: {
    type: String,
    required: true,
  },
});

// Addes username hasting and salting.
User.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", User);
