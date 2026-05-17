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
      default: "https://res.cloudinary.com/dmue96vxb/image/upload/v1703612502/default_avatar_p3f2zv.png"
    },
    filename: String,
  },
  
  bio: {
    type: String,
    maxlength: 250,
  },
  authProvider: {
    type: String,
    enum: ["local", "google"],
    default: "local"
  },

  googleId: {
    type: String,
    unique: true,
    sparse: true,
  },
}, { timestamps: true });

// SAFE DATA HANDLING: Ensure avatar always returns an object with a url
userSchema.set('toObject', { virtuals: true });
userSchema.set('toJSON', { virtuals: true });

// Pre-save middleware to handle old data format if any
userSchema.pre('save', async function() {
  if (typeof this.avatar === 'string') {
    const oldAvatar = this.avatar;
    this.avatar = {
      url: oldAvatar || "https://res.cloudinary.com/dmue96vxb/image/upload/v1703612502/default_avatar_p3f2zv.png",
      filename: "converted_avatar"
    };
  }
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
