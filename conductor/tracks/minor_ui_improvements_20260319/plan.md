# Track minor_ui_improvements_20260319 Implementation Plan

## Phase 1: Landing Page Glow Adjustment
- [x] Task: Reduce glow intensity on `index.html` ee45ebe
    - [x] Write tests to verify `text-shadow` and `box-shadow` values are reduced
    - [x] Update `index.html` CSS styles to reduce glow by approximately 75%
- [x] Task: Conductor - User Manual Verification 'Landing Page Glow Adjustment' (Protocol in workflow.md) [checkpoint: 13b7383]

## Phase 2: Algorithm Pages Style Update
- [x] Task: Update background and text color on algorithm pages 4dd9a78
    - [x] Write tests to verify `bg-slate-950` and legibility on simulation pages
    - [x] Update `bg-slate-950` and `text-slate-100` on all algorithm pages in `WEB/`
- [x] Task: Add "Volver" button to algorithm pages 72cb2e7
    - [x] Write tests to verify presence and functionality of the red "Volver" button
    - [x] Implement red neon-style "Volver" button on all algorithm pages in `WEB/`
- [ ] Task: Update UI guides and plans in 'implement_missing_algorithms' track to match new styles
    - [ ] Review and update `conductor/tracks/implement_missing_algorithms_20260319/spec.md`
    - [ ] Review and update `conductor/tracks/implement_missing_algorithms_20260319/plan.md`
- [ ] Task: Conductor - User Manual Verification 'Algorithm Pages Style Update' (Protocol in workflow.md)

## Phase 3: Final Verification
- [ ] Task: Verify overall navigation and visual consistency
    - [ ] Run full test suite
    - [ ] Perform final manual walk-through of all pages to ensure no regressions
- [ ] Task: Conductor - User Manual Verification 'Final Verification' (Protocol in workflow.md)
