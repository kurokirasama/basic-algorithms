# Track minor_ui_improvements_20260319 Implementation Plan

## Phase 1: Landing Page Glow Adjustment
- [x] Task: Reduce glow intensity on `index.html` ee45ebe
    - [x] Write tests to verify `text-shadow` and `box-shadow` values are reduced
    - [x] Update `index.html` CSS styles to reduce glow by approximately 75%
- [x] Task: Conductor - User Manual Verification 'Landing Page Glow Adjustment' (Protocol in workflow.md) [checkpoint: 13b7383]

## Phase 2: Algorithm Pages Style Update [checkpoint: fe8b9e8]
- [x] Task: Update background and text color on algorithm pages 4a8d715
    - [x] Write tests to verify `bg-slate-950` and legibility on simulation pages
    - [x] Update `bg-slate-950` and `text-slate-100` on all algorithm pages in `WEB/`
- [x] Task: Add "Volver" button to algorithm pages 72cb2e7
    - [x] Write tests to verify presence and functionality of the red "Volver" button
    - [x] Implement red neon-style "Volver" button on all algorithm pages in `WEB/`
- [x] Task: Update UI guides and plans in 'implement_missing_algorithms' track to match new styles
    - [x] Review and update `conductor/tracks/implement_missing_algorithms_20260319/spec.md`
    - [x] Review and update `conductor/tracks/implement_missing_algorithms_20260319/plan.md`
- [x] Task: Conductor - User Manual Verification 'Algorithm Pages Style Update' (Protocol in workflow.md) [checkpoint: fe8b9e8]

## Phase 3: Final Verification [checkpoint: f04ef72]
- [x] Task: Verify overall navigation and visual consistency f04ef72
    - [x] Run full test suite
    - [x] Perform final manual walk-through of all pages to ensure no regressions
- [x] Task: Conductor - User Manual Verification 'Final Verification' (Protocol in workflow.md) [checkpoint: f04ef72]
