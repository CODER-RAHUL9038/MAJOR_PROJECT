const User = require("../models/user.js");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const userEmail = profile.emails[0].value;

        // 1. Try to find user by Google ID
        let user = await User.findOne({ googleId: profile.id });

        // 2. If not found by Google ID, try to find by Email (Account Linking)
        if (!user) {
          user = await User.findOne({ email: userEmail });

          if (user) {
            user.googleId = profile.id; // Link the Google ID
          }
        }

        // Extract high-res profile image URL
        let profilePic =
          profile.photos && profile.photos.length > 0
            ? profile.photos[0].value.split("=")[0] + "=s300-p"
            : "https://lh3.googleusercontent.com/a/default-user=s100-c";

        if (!user) {
          // 3. Create new user if neither Google ID nor Email found
          user = new User({
            googleId: profile.id,
            email: userEmail,
            username: profile.displayName,
            authProvider: "google",
            avatar: {
              url: profilePic,
              filename: "google_avatar",
            },
          });
          await user.save();
        } else {
          // 4. Update existing user (Linked or Recurring Google User)
          user.avatar = {
            url: profilePic,
            filename: "google_avatar",
          };
          user.authProvider = "google";
          await user.save();
        }

        return done(null, user);
      } catch (err) {
        console.error("CRITICAL: Google Auth Error:", err);
        return done(err, null);
      }
    },
  ),
);
