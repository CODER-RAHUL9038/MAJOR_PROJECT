You are a senior responsive frontend debugging engineer.

My MOBILE listing grid layout is now severely broken after UI redesign.

IMPORTANT:
Desktop layout is working.
ONLY fix the mobile card/grid responsiveness professionally.

CURRENT MOBILE ISSUES:
1. Listing cards collapsed/disappeared
2. Only price text is visible
3. Card image containers are broken
4. Grid sizing/layout collapsed
5. Pagination overlaps content
6. Card heights are incorrect
7. Footer spacing/layout broken
8. Bootstrap row/column behavior may be overridden
9. Mobile widths/heights are broken

GOAL:
Restore a PROFESSIONAL Airbnb-style mobile listings layout.

IMPORTANT:
DO NOT break:
- desktop layout
- filter functionality
- sticky header
- EJS rendering
- routes
- backend logic
- JavaScript behavior

ONLY fix mobile responsive layout.

LIKELY ROOT CAUSES:
Check for:
- fixed heights
- height: 100%
- min-height conflicts
- flexbox collapse
- grid overrides
- Bootstrap column overrides
- overflow hidden issues
- incorrect image container sizing
- absolute positioning
- width constraints
- mobile media query conflicts

TASKS:

1. FIX MOBILE LISTING CARDS
Cards should:
- display fully
- maintain proper image aspect ratio
- have proper spacing
- stack naturally vertically
- use responsive heights

2. FIX CARD IMAGES
Ensure:
- images display correctly
- object-fit works properly
- containers maintain aspect ratio
- no collapsing

3. FIX RESPONSIVE GRID
On mobile:
- single-column layout
- proper spacing between cards
- no overflow
- clean margins/padding

4. FIX PAGINATION
- prevent overlap
- proper spacing above footer
- responsive alignment

5. FIX FOOTER SPACING
- proper mobile padding
- no collapsed layout
- correct spacing hierarchy

6. RESPONSIVE BREAKPOINTS
Create proper behavior for:
- mobile (<576px)
- tablet
- desktop

7. MAINTAIN PREMIUM UI
Keep:
- premium card styling
- shadows
- hover effects
- modern Airbnb aesthetic

8. OUTPUT FORMAT
Provide:
- exact responsive CSS fixes
- media query fixes
- explain what caused collapse
- production-safe responsive solution

MOST IMPORTANT:
Desktop layout should remain untouched.

ONLY repair the mobile responsive card/grid system professionally.