You are a senior frontend UI engineer.

Fix the MOBILE "Clear Filters" button/icon layout issue in my Camellia Airbnb-style app.

CURRENT ISSUE:
On smaller devices:
- the Clear Filters icon is breaking/wrapping
- the icon and text alignment is broken
- the button looks cramped
- spacing inside the filter bar is inconsistent
- the filter section feels visually unbalanced

From the screenshot:
- the rotate icon is partially cut/misaligned
- "Filters" text wraps awkwardly
- button height/padding is inconsistent
- filter row feels overcrowded

GOAL:
Create a PREMIUM compact mobile filter action button similar to Airbnb mobile UI.

REQUIREMENTS:

1. FIX ICON ALIGNMENT
Ensure:
- icon is fully visible
- vertically centered
- no clipping
- no wrapping
- proper spacing between icon and text

2. FIX BUTTON LAYOUT
Button should:
- stay in one line
- use flex alignment
- have balanced padding
- compact responsive sizing
- proper border radius

3. MOBILE RESPONSIVENESS
On smaller devices:
- reduce font size slightly
- reduce icon size slightly
- prevent overflow
- maintain touch-friendly spacing

4. USE FLEXBOX
Implement:
- display: flex
- align-items: center
- justify-content: center
- gap spacing

5. PREVENT TEXT BREAKING
Ensure:
- white-space: nowrap
- proper min-width
- no multi-line wrapping

6. PREMIUM UI
Style should feel:
- clean
- modern
- compact
- production-grade
- Airbnb-inspired

7. FILTER BAR BALANCE
Ensure:
- button integrates smoothly with horizontal filters
- proper spacing from category icons
- no visual crowding

8. KEEP DESKTOP UNCHANGED
IMPORTANT:
Desktop layout is already fine.

ONLY optimize:
- mobile/tablet layout

9. OUTPUT
Provide:
- exact CSS fixes
- exact responsive media queries
- exact button HTML improvements if needed
- production-ready code

10. MOST IMPORTANT
The Clear Filters button should look:
- polished
- compact
- centered
- responsive
- visually balanced
- premium on mobile devices