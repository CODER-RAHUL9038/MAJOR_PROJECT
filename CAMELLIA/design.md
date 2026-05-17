You are a senior frontend architecture engineer.

I want to RESTRUCTURE my layout professionally to permanently solve the sticky filter overlapping issues.

Current problem:
- Separate sticky navbar + separate sticky filter bar are causing layout conflicts
- Listings either overlap filters OR get pushed too far down
- Spacing hacks are making the architecture messy

I want to switch to a PROFESSIONAL Airbnb-style architecture:

ONE unified sticky header containing:
1. Navbar
2. Search bar
3. Filter/category section

GOAL:
Create:
- one single sticky top section
- filters integrated naturally below navbar
- listings starting cleanly below the header
- no overlapping
- no excessive gaps
- premium modern layout

IMPORTANT:
DO NOT break:
- filter functionality
- EJS rendering
- routes
- JavaScript event listeners
- responsive behavior
- search functionality
- Bootstrap integration
- backend logic

ONLY restructure layout safely.

TASKS:

1. CREATE UNIFIED STICKY HEADER
Structure:
- sticky header wrapper
  - navbar
  - search section
  - filters section

The entire top section should scroll together naturally.

2. REMOVE MULTIPLE STICKY CONFLICTS
- eliminate separate sticky filter hacks
- eliminate duplicate top offsets
- remove spacing hacks
- remove overlap issues

3. FIX LAYOUT FLOW
Listings should:
- start naturally below the sticky header
- never overlap filters
- maintain balanced spacing

4. MAINTAIN PREMIUM UI
Keep:
- glassmorphism
- premium shadows
- hover effects
- smooth scrolling
- Airbnb-inspired aesthetic

5. RESPONSIVENESS
Ensure:
- unified sticky layout works on mobile
- filters scroll horizontally
- navbar stays compact
- no overflow issues

6. CLEAN ARCHITECTURE
Use:
- proper flex/grid layout
- natural document flow
- minimal hacks
- production-ready structure

7. OUTPUT FORMAT
Provide:
- exact HTML/EJS structure
- exact CSS fixes
- explain why unified sticky architecture is better
- minimal safe changes
- production-ready code

MOST IMPORTANT:
Do NOT use spacing hacks.

Create a proper single-header architecture like Airbnb.