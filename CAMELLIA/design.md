You are a senior frontend debugging engineer specializing in infinite request/render loop issues.

My Camellia app is now continuously sending requests after implementing the avatar/profile system.

CURRENT ISSUE:
- Browser continuously sends requests
- Network tab keeps firing requests endlessly
- UI becomes unstable/sluggish
- Likely infinite frontend loop

IMPORTANT:
DO NOT redesign the app.
DO NOT rewrite authentication.
DO NOT rewrite frontend architecture.

ONLY debug and stop the infinite request/render loop professionally.

CURRENT CONTEXT:
Recent changes include:
- dynamic avatar rendering
- Google profile image support
- navbar avatar logic
- filter/toggle scripts
- responsive redesign

LIKELY ROOT CAUSES TO CHECK:

1. AVATAR IMAGE LOOP
Check for:
- img.onerror recursion
- invalid fallback logic
- broken avatar URL retry loop

Example issue:
img.onerror → sets another invalid src → infinite loop

2. REPEATED FETCH CALLS
Check:
- fetch() inside render loops
- recursive API calls
- repeated polling
- useEffect-style repeated logic patterns

3. EVENT LISTENER DUPLICATION
Check:
- listeners attached repeatedly
- scripts running multiple times
- nested DOMContentLoaded handlers

4. AUTO RELOAD / REDIRECT LOOP
Check:
- redirect recursion
- auth redirect loops
- repeated location.reload()
- repeated res.redirect()

5. FILTER / TOGGLE SCRIPT LOOP
Check:
- category filter JS
- tax toggle logic
- DOM mutation causing rerenders

6. DEBUG NETWORK TAB
Identify:
- which exact request repeats continuously
- image request?
- route request?
- API request?
- auth request?

7. FIX AVATAR SAFELY
If avatar image fails:
- fallback ONLY ONCE
- prevent recursive image retries

Safe pattern:
- remove onerror after first fallback
- use default placeholder safely

8. PERFORMANCE FIX
Ensure:
- scripts initialize only once
- no recursive rendering
- no duplicate listeners

9. OUTPUT FORMAT
Provide:
- exact root cause
- exact frontend fix
- exact avatar fix
- exact JS corrections
- production-safe solution

10. MOST IMPORTANT
Stop the infinite request loop WITHOUT breaking:
- avatar system
- filters
- toggle
- auth
- responsiveness
- existing UI