# Project Memory: Algorithms CEI

## Obsidian Synchronization
- **Vault Location:** Managed via `obsidian-memory-expert` skill.
- **Priority Folder:** `INSIGHTS/`
- **Key Search Terms:** `algorithms_cei`, `cyberpunk_ui`, `split_screen_layout`.

## Architectural Decisions (ADRs)
1. **Minimalist Split-Screen (2026-03-27):** Removed card backgrounds and borders from the simulation/pseudocode columns to achieve a "floating" minimalist look. Verified by 150+ tests.
2. **Nushell-First Operations:** All batch file manipulations (e.g., UI updates) should use Nushell scripts for consistency and data safety.

## Key Insights
- **Visual Markers:** The user prefers a layout "without any visual markers" between columns.
- **Responsiveness:** Ensure `lg:grid-cols-12` with `lg:col-span-8`/`lg:col-span-4` split for desktop, stacking on smaller screens.

## Sources
- `docs/pseudocodigos.md`: Source of truth for algorithm logic.
- `conductor/workflow.md`: Operational guidelines.
