You are a senior full-stack frontend engineer.

I want to add a FULLY WORKING "Clear Filters" feature to my Airbnb-style Camellia listings page.

IMPORTANT:
DO NOT break:
- existing filters
- category filtering
- search functionality
- pagination
- toggle functionality
- EJS rendering
- routes
- responsive design
- sticky header
- backend logic

ONLY implement a professional clear/reset filters system.

CURRENT FEATURES:
- Category filters already work
- Query parameters are used
- Listings filter dynamically
- Search exists
- Tax toggle exists

GOAL:
Add a professional Airbnb-style "Clear Filters" button that COMPLETELY resets the page state.

REQUIRED BEHAVIOR:

1. CLEAR FILTER BUTTON
Add:
- modern "Clear Filters" button
OR
- subtle reset icon/button

Placement:
- near filters/search area
- visually integrated into filter bar

2. WHEN CLICKED
The button should:
- remove active category filter
- clear search input
- reset tax toggle
- remove query params
- restore ALL listings
- reset pagination if needed

3. URL CLEANUP
Example:

Before:
/listings?category=beach&search=goa

After clear:
/listings

4. ACTIVE STATE RESET
- remove active filter highlighting
- restore default UI state
- reset toggle visuals

5. UI REQUIREMENTS
Design should feel:
- modern
- minimal
- premium
- Airbnb-inspired

Add:
- hover animation
- subtle transitions
- elegant icon if needed

6. RESPONSIVENESS
Ensure:
- works on mobile
- touch friendly
- no layout breaking

7. IMPLEMENTATION REQUIREMENTS
Use:
- clean query param handling
- proper DOM reset logic
- safe URL manipulation

DO NOT:
- reload unnecessarily
- break existing event listeners
- hardcode categories

8. OPTIONAL ENHANCEMENT
Show:
"Filters Applied"

when filters are active,
and hide it when cleared.

9. OUTPUT FORMAT
Provide:
- exact EJS/HTML additions
- exact JavaScript logic
- exact CSS styling
- production-ready implementation

10. MOST IMPORTANT
The "Clear Filters" button must FULLY reset the page state cleanly and reliably like a professional booking platform.