# Specification: Two-Column Algorithm Pseudocode Display

## Overview
Implement a two-column layout for each algorithm example page in the "Algorithm Simulations Suite". The left column will display the existing simulation content, and the right column will display the corresponding pseudocode from `docs/pseudocodigos.md`.

## Functional Requirements
- **Layout Split:** Each algorithm example page (`WEB/*/index.html`) will be divided into two columns using Tailwind CSS.
- **Content Organization:** 
    - **Left Column:** Existing algorithm interaction and visualization components.
    - **Right Column:** Stylized code block containing the relevant pseudocode.
- **Static Embedding:** The pseudocode will be statically embedded into each HTML file during the implementation phase.
- **Mobile Experience:** On small screens, the pseudocode column will be hidden by default with a toggle button to show/hide it.

## Non-Functional Requirements
- **Consistency:** Maintain the existing "Cyberpunk/Dark" theme and Tailwind CSS styling.
- **Performance:** No significant impact on page load times.
- **Responsiveness:** Ensure a smooth transition between desktop (two columns) and mobile (stacked or hidden/toggle) layouts.

## Acceptance Criteria
- [ ] Each algorithm page has a clear two-column split on desktop.
- [ ] The right column correctly displays the specific pseudocode for that algorithm.
- [ ] Pseudocode is rendered in a stylized, readable code block.
- [ ] On mobile, the pseudocode is hidden by default and can be toggled via a button.
- [ ] No regression in existing algorithm functionality or styling.

## Out of Scope
- Global changes to the landing page (`index.html`).
- Dynamic fetching of pseudocode from `docs/pseudocodigos.md` at runtime.
- Complex syntax highlighting or interactive line-by-line tracing for the pseudocode.
