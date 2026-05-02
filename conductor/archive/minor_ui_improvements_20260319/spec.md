# Track minor_ui_improvements_20260319 Specification

## Overview
This track focuses on minor UI improvements across the Algorithm Simulations Suite. It aims to refine the glow effects on the landing page, add a "Back" button to all algorithm simulation pages for easier navigation, and ensure consistent background styling throughout the application.

## Functional Requirements
1.  **Glow Reduction (Landing Page):**
    -   Reduce the intensity of the neon glow effects (both `text-shadow` and `box-shadow`) on the root `index.html` page by approximately 75%.
2.  **Back Button (Algorithm Pages):**
    -   Add a "Volver" (Back) button to the top-left corner of all algorithm simulation pages (within the `WEB/` directory).
    -   The button MUST navigate back to the root `index.html` dashboard.
    -   The button's style MUST match the existing algorithm buttons (neon border style) but with a red color theme (e.g., matching the `red-500` palette).
3.  **Background Consistency (Algorithm Pages):**
    -   Set the background of all algorithm simulation pages to the same dark color as the landing page (`bg-slate-950`).
    -   Ensure text color is adjusted to be clearly legible against the dark background (e.g., `text-slate-100` or similar).

## Non-Functional Requirements
1.  **Responsiveness:** The "Back" button must be positioned consistently and look good on both mobile and desktop screens.
2.  **Consistency:** The neon styling (borders and glow) should remain consistent with the project's Cyberpunk/Dark theme, just with reduced intensity where specified.

## Acceptance Criteria
- [ ] Landing page glow effects (neon-text and neon-border) are visibly more subtle (roughly 25% of their original intensity).
- [ ] Every algorithm simulation page in the `WEB/` directory has a red "Volver" button in the top-left.
- [ ] Clicking the "Volver" button on any simulation page navigates the user back to the root dashboard.
- [ ] Every algorithm simulation page has a dark background (`bg-slate-950`) matching the root page.
- [ ] All text on simulation pages remains legible.

## Out of Scope
- Changing any functional algorithm logic.
- Redesigning the landing page layout or navigation structure.
- Modifying styles of the algorithm pages beyond the background and the back button addition.
