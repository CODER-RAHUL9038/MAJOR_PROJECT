const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose").default;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    lowercase: true,
    trim: true,
  },
});

// Addes username hasting and salting.
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
