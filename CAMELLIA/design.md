You are a senior full-stack authentication and profile-system engineer.

I want to implement REAL dynamic user profile avatar support in my Airbnb-style Camellia project.

CURRENT STACK:
- Node.js
- Express
- MongoDB
- EJS
- Passport.js
- express-session
- Google OAuth
- Local Authentication (email/password)
- Session-based auth

CURRENT SITUATION:
- Google OAuth login already works
- User sessions work
- Current user is available in EJS
- But the UI still shows a static/default avatar icon
- Google profile image is NOT being used yet

GOAL:
When a user logs in using Google OAuth:
- automatically use their Google profile picture everywhere in the UI

Later:
I will implement full profile creation/editing for both:
- Google-auth users
- Local-auth users

So the architecture should be scalable and future-proof.

IMPORTANT:
DO NOT break:
- existing authentication
- sessions
- Passport.js flow
- Google OAuth
- local auth
- EJS rendering
- existing navbar/profile dropdown

ONLY implement profile avatar support professionally.

REQUIRED FEATURES:

1. GOOGLE PROFILE IMAGE SUPPORT
When user logs in with Google:
- fetch Google avatar/profile image
- save it properly in DB
- display it dynamically in navbar/profile sections

Example:
Instead of static icon:
show real Google avatar image

2. DATABASE STRUCTURE
Implement scalable user schema structure:

Possible fields:
- profileImage
- authProvider
- googleId
- avatarType
- etc.

Architecture must support:
- future custom uploaded avatars
- local auth users later
- profile editing later

3. LOCAL AUTH FALLBACK
For users using email/password:
- if no profile image exists
- show elegant default avatar placeholder

4. EJS INTEGRATION
Update navbar/profile UI:
- dynamically render user avatar
- fallback safely if image missing
- keep premium modern UI

5. SESSION INTEGRATION
Ensure:
- req.user contains avatar info
- currentUser in EJS works properly
- avatar persists across pages

6. GOOGLE STRATEGY UPDATE
If needed:
- extract profile image from Google OAuth response
- save it in MongoDB during login/signup

7. SECURITY + CLEAN CODE
- sanitize image URLs
- avoid broken images
- handle missing avatar safely
- production-ready implementation

8. FUTURE-PROOF ARCHITECTURE
VERY IMPORTANT:
The structure should later support:
- custom uploaded profile pictures
- profile edit page
- bio/about section
- user dashboard
- profile settings
- both Google + local users

DO NOT create temporary hacky logic.

Create proper scalable architecture.

9. UI REQUIREMENTS
Avatar should:
- be circular
- responsive
- premium modern style
- properly aligned in navbar
- elegant fallback state

10. OUTPUT FORMAT
Provide:
- exact MongoDB schema updates
- exact Passport Google strategy updates
- exact EJS updates
- exact middleware/session updates
- exact CSS styling
- production-ready implementation

11. MOST IMPORTANT
Current requirement:
Google-auth users should immediately show their REAL Google profile image dynamically throughout the app.

Future requirement:
Architecture should seamlessly support full profile systems later.