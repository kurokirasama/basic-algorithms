# Specification: Implement Missing Algorithm Simulations

## Overview
This track involves implementing the remaining 8 algorithm simulations defined in `docs/pseudocodigos.md`. These will be added as individual interactive pages in the `WEB/` directory, following the existing visual style and interactive simulation patterns.

## Functional Requirements
1.  **Minimo:** Find the minimum value in a vector.
2.  **Sort Descend:** Sort a vector in descending order using selection sort (as per pseudocode).
3.  **Reverse Digits:** Extract and reverse the digits of a number.
4.  **Palindrome:** Determine if a number is a palindrome by comparing it with its reversed version.
5.  **Piece-wise Function:** Evaluate a specific mathematical function based on input `x` ranges.
6.  **Vector Piece-wise Function:** Apply the piece-wise evaluation to each element in a vector.
7.  **Tridiagonal Matrix:** Generate an n x n tridiagonal matrix based on inputs `a`, `b`, and `c` with a grid-based visualization.
8.  **RUT Verification Digit:** Calculate the verification digit (DV) for a Chilean RUT.

## Non-Functional Requirements
- **Styling:** Use Tailwind CSS for rapid UI development and modern aesthetics.
- **Consistency:** Maintain the Cyberpunk/Dark theme (bg-slate-950, text-slate-100, neon borders/glows).
- **Navigation:** Each page MUST include a red "Volver" button at the top-left for returning to the root dashboard.
- **Responsiveness:** Ensure each page works across different screen sizes.
- **TDD:** Implement tests for each algorithm's core logic.

## Acceptance Criteria
- Each algorithm has its own directory in `WEB/` (e.g., `WEB/minimo/index.html`).
- Each page features:
    - Interactive Simulation mode with "Siguiente Paso".
    - A red "Volver" button navigating to root index.html.
    - Dark theme (bg-slate-950) consistent with the landing page.
- All algorithms correctly implement the logic from `pseudocodigos.md`.
- Code coverage for new implementations exceeds 80%.

## Out of Scope
- Integration with external APIs.
- User accounts or saving simulation state across sessions.
