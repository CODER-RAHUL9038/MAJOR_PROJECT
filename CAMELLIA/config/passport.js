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
        console.log("--- GOOGLE PROFILE DEBUG ---");
        console.log("Profile ID:", profile.id);
        console.log("Photos:", JSON.stringify(profile.photos));
        
        let user = await User.findOne({ googleId: profile.id });

        // Extract profile image URL
        let profilePic = profile.photos && profile.photos.length > 0 
          ? profile.photos[0].value.replace("s96-c", "s400-c") // Get higher res image
          : "https://res.cloudinary.com/dmue96vxb/image/upload/v1703612502/default_avatar_p3f2zv.png";
          
        if (!user) {
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
          console.log("SUCCESS: New User created with avatar:", profilePic);
        } else {
          // Force update the avatar object structure
          user.avatar = {
            url: profilePic,
            filename: "google_avatar"
          };
          user.authProvider = "google";
          await user.save();
          console.log("SUCCESS: Existing User updated with avatar:", profilePic);
        }

        return done(null, user);
      } catch (err) {
        console.error("Google Auth Error:", err);
        return done(err, null);
      }
    }
  )
);
