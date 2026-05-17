You partially implemented the avatar system correctly, but the avatar image is STILL not rendering in the navbar.

CURRENT ISSUE:
The <img> element appears broken and only shows partial alt text ("Us..."), meaning:
- the image src is invalid OR undefined
- OR the avatar object structure is inconsistent
- OR EJS is resolving the wrong property path

IMPORTANT:
DO NOT redesign the system again.

We now need PURE DEBUGGING and FIXING.

CURRENT CONTEXT:
- Google OAuth works
- Session auth works
- User exists
- Avatar data is supposedly stored
- Navbar is rendering an <img>
- But the image URL is broken/undefined

LIKELY ROOT CAUSES TO CHECK:

1. DATABASE STRUCTURE MISMATCH
Some users may still have:
avatar: "string-url"

while newer users have:
avatar: {
  url: "...",
  filename: "..."
}

2. EJS PATH ISSUE
Possible issue:
currUser.avatar.url

when actual value may be:
currUser.avatar
OR
currUser.profileImage
OR undefined

3. GOOGLE PROFILE IMAGE ISSUE
Google image may not actually be saved in DB.

4. SERIALIZATION ISSUE
Passport session serialization may not include updated avatar field.

5. CURRENT USER MIDDLEWARE ISSUE
res.locals.currUser may not contain fresh avatar data.

TASKS:

1. DEBUG EXACT DATA STRUCTURE
FIRST:
Add temporary console logs to inspect:

- req.user
- res.locals.currUser
- avatar field structure

Check:
Is avatar:
- string?
- object?
- undefined?

2. FIX EJS RENDERING SAFELY
Create ROBUST fallback logic:

Handle ALL cases safely:
- object avatar
- string avatar
- missing avatar
- broken avatar

Example logic:
- if avatar.url exists → use it
- else if avatar is string → use it
- else → use default fallback avatar

3. VERIFY GOOGLE STRATEGY
Ensure Google strategy actually saves:
profile.photos[0].value

into MongoDB correctly.

4. VERIFY SESSION SERIALIZATION
Ensure latest avatar data exists after login:
- serializeUser
- deserializeUser

5. VERIFY MIDDLEWARE
Check:
res.locals.currUser = req.user

Ensure avatar data survives correctly.

6. TEST WITH EXISTING USERS
Handle old DB records safely.

If needed:
auto-migrate old avatar strings into object format.

7. IMAGE URL VALIDATION
Check:
- URL is not undefined
- URL is not null
- URL is accessible
- No broken Google image URL

8. NAVBAR FIX
Ensure:
<img src="VALID_URL">

actually renders properly.

9. OUTPUT FORMAT
Provide:
- exact debug steps
- exact console logs to add
- exact EJS fix
- exact schema fix if needed
- exact Passport/session fix
- production-ready debugging solution

10. MOST IMPORTANT
Do NOT create another architecture redesign.

ONLY debug why the image URL is not rendering and fix the existing system properly.