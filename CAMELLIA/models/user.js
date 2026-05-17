const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose").default;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    lowercase: true,
    trim: true,
  },
  // Dynamic Avatar Support
  avatar: {
    url: {
      type: String,
      default: "https://res.cloudinary.com/dmue96vxb/image/upload/v1703612502/default_avatar_p3f2zv.png" // Professional default placeholder
    },
    filename: String,
  },
  
  // Future-proofing for Profile System
  bio: {
    type: String,
    maxlength: 250,
  },
  authProvider: {
    type: String,
    enum: ["local", "google"],
    default: "local"
  },

  // OAuth fields
  googleId: {
    type: String,
    unique: true,
    sparse: true,
  },
}, { timestamps: true });

// Adds username, hashing, and salting
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
