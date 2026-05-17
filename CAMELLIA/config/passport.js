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
        let user = await User.findOne({ googleId: profile.id });

        if (!user) {
          // Extract profile image if available
          let profilePic = profile.photos && profile.photos.length > 0 ? profile.photos[0].value : undefined;
          
          user = new User({
            googleId: profile.id,
            email: profile.emails[0].value,
            username: profile.displayName,
            authProvider: "google",
            avatar: {
              url: profilePic,
              filename: "google_avatar"
            }
          });
          await user.save();
        } else {
          // OPTIONAL: Update avatar if it changed on Google
          if (profile.photos && profile.photos.length > 0 && user.avatar.url !== profile.photos[0].value) {
            user.avatar.url = profile.photos[0].value;
            await user.save();
          }
        }

        return done(null, user);
      } catch (err) {
        return done(err, null);
      }
    }
  )
);
