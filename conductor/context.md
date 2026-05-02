# Project Context: Algorithms CEI

## Workspace Overview
- **Root Path:** `/home/kira/Yandex.Disk/webapps/algorithms_cei`
- **Core Purpose:** Interactive algorithm simulation suite.
- **Project Structure:**
    - `WEB/`: Individual algorithm simulation pages (15 pages).
    - `src/`: Core logic and helpers.
    - `tests/`: Jest test suite for UI and logic.
    - `conductor/`: Project management and protocols.
    - `scripts/`: Maintenance and migration scripts.

## Search First: Initial Discovery
- **Frameworks:** Vanilla JS, Tailwind CSS (via CDN), Express (server), Jest (testing).
- **Style:** Cyberpunk/Dark theme (`bg-slate-950`, `text-slate-100`, purple/emerald accents).
- **Key Files:**
    - `index.html`: Landing page with algorithm list.
    - `WEB/**/index.html`: Simulation pages with split-screen layout.
    - `tests/two_column_layout.test.js`: Structural layout verification.

## Synthesis & Current State
- All 15 algorithm simulation pages have been updated to a 2-column layout.
- Visual markers (card backgrounds, borders) have been removed for a minimalist "floating" look.
- 150+ tests are passing, ensuring structural and logical integrity.
- **Open Gaps:** None identified in current track.

## External Wisdom
- **Tailwind CSS:** Documentation for utility-based responsive layouts.
- **Monocraft Font:** Used for pseudocode legibility.
