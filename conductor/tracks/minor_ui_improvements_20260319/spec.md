# Track split_screen_pseudocode_20260319 Specification

## Overview
This track introduces a split-screen UI layout for all algorithm simulation pages. The screen will be divided into two columns: the left column will display the existing interactive simulation, and the right column will display the corresponding pseudocode from `docs/pseudocodigos.md`.

## Functional Requirements
1. **Split-Screen Layout:**
    - Each simulation page in the `WEB/` directory must be updated to a two-column responsive layout.
    - Left column: The interactive simulation (current content).
    - Right column: The corresponding pseudocode for that algorithm.
    - No explicit visual markers (dividers) between the two columns, maintaining a clean look.
2. **Pseudocode Integration:**
    - Pseudocode will be hardcoded into each individual `index.html` file to ensure simplicity and reliability.
    - Pseudocode text must follow the Cyberpunk/Dark theme, using a mono font (Monocraft) and appropriate text colors for legibility.

## Non-Functional Requirements
1. **Consistency:** The UI must maintain the Cyberpunk/Dark theme (bg-slate-950, text-slate-100).
2. **Responsiveness:** The two-column layout should stack vertically on smaller mobile screens for better accessibility.

## Acceptance Criteria
- [ ] All simulation pages in `WEB/` implement a split-screen layout.
- [ ] Pseudocode for each algorithm is displayed in the right column.
- [ ] The theme remains Cyberpunk/Dark, matching the rest of the site.
- [ ] Layout is responsive (stacks on small screens).

## Out of Scope
- Dynamic fetching of pseudocode from `docs/pseudocodigos.md`.
- Modifying the existing logic of the interactive simulations.
