You are fixing a MOBILE avatar dropdown layering issue in my Camellia Airbnb-style app.

CURRENT ISSUE:
On phone/mobile view:
- clicking the avatar opens the dropdown
- username/email are visible
- BUT the logout button gets hidden behind the filters section

Result:
- dropdown is clipped by filters
- logout becomes partially hidden
- bad mobile UX

IMPORTANT:
This is ONLY a MOBILE issue.

Desktop is already working properly.

DO NOT modify:
- desktop navbar
- desktop dropdown
- desktop filters
- dropdown design
- logout styling

ONLY fix mobile layering/positioning.

REQUIREMENTS:

1. MOBILE DROPDOWN MUST FULLY OVERLAY FILTERS
When avatar dropdown opens on mobile:
- username
- email
- logout button

must ALL be fully visible above the filters section.

2. FIX MOBILE Z-INDEX
Current issue is caused by:
- filters having higher stacking context
- sticky/mobile containers overlapping dropdown

Ensure:
.dropdown-menu
has higher z-index than:
- mobile filters
- sticky filter bar
- search container

3. FIX MOBILE STACKING CONTEXT
Check for:
- overflow: hidden
- transform
- sticky parents
- position relative conflicts

Remove clipping behavior.

4. MOBILE ONLY FIX
Apply changes ONLY inside:
@media (max-width: 991px)

5. FIX MOBILE DROPDOWN POSITION
Dropdown should:
- appear below avatar
- stay fully visible
- not get cut off
- not overlap awkwardly

6. KEEP EXISTING UI
Do NOT redesign:
- logout button
- dropdown style
- avatar
- navbar structure

ONLY fix:
- visibility
- layering
- clipping
- z-index

7. FINAL RESULT
On mobile:
Clicking avatar should cleanly show:
- username
- email
- logout button

ALL fully visible ABOVE the filters section.