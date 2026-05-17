You are a senior full-stack frontend engineer.

I want to implement REAL dynamic tax toggle functionality for my Airbnb-style listings page.

CURRENT BEHAVIOR:
Right now when the toggle is enabled:
- only "+18% GST" text appears
- the actual listing price does NOT change

I want COMPLETE WORKING LOGIC like Airbnb pricing toggles.

IMPORTANT:
DO NOT break:
- existing listing cards
- EJS rendering
- routes
- pagination
- filtering
- responsiveness
- existing UI design
- card structure
- backend logic unless necessary

STACK:
- Node.js
- Express
- MongoDB
- EJS
- Vanilla JS
- Bootstrap

GOAL:
Implement a fully working "Display total before taxes" toggle.

REQUIRED BEHAVIOR:

1. DEFAULT STATE
- Listing prices are shown WITHOUT GST
Example:
₹1000/night

2. WHEN TOGGLE ENABLED
- Add 18% GST dynamically
- Update displayed price LIVE
- Preserve original base price internally

Example:
Original:
₹1000/night

After toggle ON:
₹1180/night

3. WHEN TOGGLE DISABLED
- Revert back to original base price

4. IMPORTANT REQUIREMENTS
- Price calculation must work for ALL listings
- Should update instantly without page reload
- Toggle state should persist while browsing/pagination if possible
- Avoid recalculating wrong values repeatedly
- Preserve formatting and UI styling

5. IMPLEMENTATION REQUIREMENTS
Use:
- data attributes OR
- hidden original price values

DO NOT:
- parse already modified prices repeatedly
- stack tax multiple times
- hardcode values manually

6. UI REQUIREMENTS
When toggle ON:
- smoothly animate price change
- optionally show:
  "incl. GST"

When OFF:
- return to clean base price display

7. GST LOGIC
Tax rate:
18%

Formula:
finalPrice = basePrice + (basePrice * 0.18)

OR:
finalPrice = basePrice * 1.18

Round properly for INR display.

8. RESPONSIVENESS
Ensure functionality works across:
- desktop
- tablet
- mobile

9. OUTPUT FORMAT
Provide:
- exact EJS modifications
- exact HTML/data-attribute setup
- exact JavaScript implementation
- exact CSS improvements if needed
- production-ready clean solution

10. MOST IMPORTANT
The original listing price should remain the SOURCE OF TRUTH.

Do NOT calculate tax on already-taxed prices.

The toggle should always:
BASE PRICE ↔ GST INCLUDED PRICE

cleanly and accurately.