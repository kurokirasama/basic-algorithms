# Implementation Plan: Minimalist Split-Screen (No Visual Markers)

## Objective
Remove visual markers (borders, card backgrounds, shadows) from the two-column layout in all algorithm simulation pages to align with the requirement in `todos.md`. The simulation and pseudocode should appear to "float" on the common background.

## Key Files & Context
- **WEB/**/*.html:** All 15 algorithm simulation pages.
- **tests/two_column_layout.test.js:** Existing tests that verify the layout structure.

## Implementation Steps

### Phase 1: Research & Scripting
- [x] Task: Create a Nushell script to batch remove the card-like Tailwind classes from `main` and `aside` tags.
- [x] Task: Targeted classes for removal: `bg-slate-900`, `rounded-2xl`, `shadow-xl`, `border border-slate-800`.
- [x] Task: Ensure the inner pseudocode block also loses its card-like container for a truly "marker-less" division.

### Phase 2: Execution
- [x] Task: Run the Nushell script on all `WEB/**/index.html` files.
- [x] Task: Manually verify a sample page (e.g., `WEB/all_digits/index.html`) to ensure the layout remains functional and readable.

### Phase 3: Verification
- [x] Task: Update `tests/two_column_layout.test.js` if necessary to explicitly check for the absence of these classes (optional but recommended for regression).
- [x] Task: Run all tests: `node node_modules/jest/bin/jest.js`.
- [x] Task: Conductor - User Manual Verification (Manual visual check on desktop/mobile).

## Verification & Testing
- **Automated Tests:** `npm test` should continue to pass.
- **Manual Verification:** Inspect pages to confirm no borders/backgrounds separate the columns, but they remain aligned in a grid.
