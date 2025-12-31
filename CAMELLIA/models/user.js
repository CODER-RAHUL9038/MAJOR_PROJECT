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
  // OAuth fields (safe to add)
  googleId: {
    type: String,
    unique: true,
    sparse: true, // 🔥 IMPORTANT
  },

  avatar: String,
});

// Addes username hasting and salting.
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
