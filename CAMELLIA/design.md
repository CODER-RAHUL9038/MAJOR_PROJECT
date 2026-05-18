You are a senior frontend/full-stack engineer.

I want to completely replace my existing EJS flash message system with a modern PRODUCTION-GRADE toast notification system similar to the one used in my DriverVault project.

CURRENT STACK:
- Node.js
- Express
- EJS
- connect-flash
- express-session
- Bootstrap
- Vanilla JS

CURRENT ISSUE:
I am currently using traditional EJS flash alerts like:
- success alerts
- error alerts
- Bootstrap alert boxes

They look outdated and are not production quality.

GOAL:
Replace ALL flash alerts with modern animated toast notifications.

IMPORTANT:
DO NOT break:
- existing flash logic
- connect-flash
- backend routes
- validation flow
- redirects
- authentication
- CRUD operations

ONLY modernize the UI/UX presentation layer.

REQUIRED FEATURES:

1. MODERN TOAST SYSTEM
Create premium production-grade toast notifications:
- floating notifications
- smooth animations
- glassmorphism feel
- modern shadows
- premium styling
- clean typography

2. AUTO DISAPPEAR
Toast should:
- automatically disappear after 4 seconds
- smoothly fade out
- animate properly

3. TOAST TYPES
Support:
- success
- error
- warning
- info

Each with:
- proper icon
- color accent
- modern UI

4. KEEP CONNECT-FLASH
Continue using:
req.flash()

Backend logic should remain unchanged.

Example:
req.flash("success", "Listing created successfully!");

should automatically show toast.

5. GLOBAL TOAST SYSTEM
Implement:
- reusable toast container
- centralized notification rendering
- globally available layout integration

6. RESPONSIVENESS
Ensure:
- mobile friendly
- stacked properly
- no overflow
- proper spacing on smaller devices

7. UX IMPROVEMENTS
Add:
- entrance animation
- exit animation
- close button
- hover pause optional
- subtle blur effects

8. PRODUCTION-GRADE FEEL
Design inspiration:
- modern SaaS apps
- Airbnb
- Linear
- Notion
- DriverVault toast system

9. REMOVE OLD ALERTS
Completely remove:
- Bootstrap alert boxes
- inline flash UI
- old EJS alert containers

10. IMPLEMENTATION REQUIREMENTS
Use:
- clean EJS partial/component
- reusable JS
- maintainable CSS
- no messy inline scripts

11. OUTPUT FORMAT
Provide:
- exact EJS partial/component
- exact CSS
- exact JavaScript
- exact layout integration
- exact flash integration
- production-ready implementation

12. MOST IMPORTANT
The final toast system should feel:
- modern
- premium
- animated
- production-ready
- smooth
- minimal
- elegant

and automatically disappear after 4 seconds.