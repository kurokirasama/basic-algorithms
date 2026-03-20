# Implementation Plan: Two-Column Algorithm Pseudocode Display

## Objective
Implement a two-column layout for each algorithm page in the "Algorithm Simulations Suite", displaying the simulation on the left and its corresponding pseudocode on the right.

## Key Files & Context
- **WEB/**/*.html:** Algorithm example pages to be updated.
- **docs/pseudocodigos.md:** Source of the pseudocode for each algorithm.
- **src/algorithms.js:** Existing algorithm logic (for reference).
- **Tailwind CSS:** Used for styling and layout.

## Implementation Steps

### Phase 1: Preparation & Initial Test
- [ ] Task: Create a base template for the two-column layout with a stylized code block.
- [ ] Task: Write failing tests in `tests/two_column_layout.test.js` verifying the existence of two columns and the code block on a sample algorithm page.
- [ ] Task: Conductor - User Manual Verification 'Phase 1: Preparation & Initial Test' (Protocol in workflow.md)

### Phase 2: Implement Layout & Toggle (Sample Page)
- [ ] Task: Update `WEB/maximun/index.html` to include the two-column layout and the corresponding pseudocode.
- [ ] Task: Implement the mobile toggle button logic for showing/hiding the pseudocode.
- [ ] Task: Verify tests pass for the sample page.
- [ ] Task: Conductor - User Manual Verification 'Phase 2: Implement Layout & Toggle (Sample Page)' (Protocol in workflow.md)

### Phase 3: Rollout to All Algorithm Pages
- [ ] Task: Systematically update each algorithm page (mean, median, mode, sort_ascend, etc.) with the two-column layout and its specific pseudocode.
- [ ] Task: Ensure all algorithm pages match the approved spec (static embedding, stylized code block, mobile toggle).
- [ ] Task: Conductor - User Manual Verification 'Phase 3: Rollout to All Algorithm Pages' (Protocol in workflow.md)

### Phase 4: Verification & Final Polish
- [ ] Task: Run all existing tests to ensure no regressions.
- [ ] Task: Verify >80% code coverage for any new or modified logic.
- [ ] Task: Final visual check on both desktop and mobile devices.
- [ ] Task: Conductor - User Manual Verification 'Phase 4: Verification & Final Polish' (Protocol in workflow.md)

## Verification & Testing
- **Automated Tests:** `npm test` (using Jest and Cheerio for DOM assertions).
- **Manual Verification:** Inspect each algorithm page in the browser (desktop and mobile view).
