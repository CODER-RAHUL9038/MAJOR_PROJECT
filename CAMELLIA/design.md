You are a senior EJS + Express frontend debugging engineer.

My Google OAuth avatar system is now saving correctly in MongoDB.

Confirmed working:
- Google OAuth login works
- Avatar URL is stored correctly
- MongoDB save succeeds
- Session auth works

BUT the avatar image is still broken in the navbar.

CURRENT SYMPTOM:
The avatar circle shows broken image text like:
"Pr..."

This means the browser is likely receiving:
src="[object Object]"

instead of the actual image URL.

IMPORTANT:
DO NOT redesign the auth system.
DO NOT rewrite Passport.js.
DO NOT change backend auth logic unnecessarily.

ONLY fix the frontend avatar rendering professionally.

LIKELY ROOT CAUSE:
The EJS template is rendering:
currUser.avatar

instead of:
currUser.avatar.url

because avatar is now an OBJECT.

TASKS:

1. DEBUG EJS NAVBAR
Inspect:
views/includes/navbar.ejs

Find all avatar rendering code.

2. FIX IMAGE SRC
Ensure image uses:
currUser.avatar.url

NOT:
currUser.avatar

3. HANDLE BOTH OLD + NEW FORMATS
Support:
- old string avatar
- new avatar object
- missing avatar

4. CREATE SAFE AVATAR VARIABLE
Create robust EJS logic like:

- if avatar is object → use avatar.url
- if avatar is string → use avatar
- else use fallback placeholder

5. VERIFY FINAL IMG TAG
Ensure final HTML becomes:

<img src="ACTUAL_IMAGE_URL">

and NEVER:
- undefined
- [object Object]
- empty string

6. ADD FALLBACK IMAGE
If avatar missing:
use professional placeholder avatar.

7. PREVENT IMAGE ERROR LOOP
If using onerror fallback:
prevent infinite recursion.

8. OUTPUT FORMAT
Provide:
- exact EJS fix
- exact avatar variable logic
- corrected img tag
- production-safe implementation

9. MOST IMPORTANT
ONLY fix avatar rendering.

Do NOT redesign:
- auth
- navbar
- dropdown
- session system