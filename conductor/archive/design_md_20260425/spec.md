# Specification: Authoring DESIGN.md

## Overview
Create the project's official `DESIGN.md` file to formalize the "Cyberpunk/Dark" theme for the Algorithm Simulations Suite. This file will serve as the machine-readable and human-readable design system specification.

## Functional Requirements
- **YAML Front Matter:** Must include `version` and `tokens` schema (color, typography, etc.).
- **Markdown Body:** Must include design rationale organized into `##` sections.
- **Mandatory Section Order:** 
  1. `## Overview`
  2. `## Colors`
  3. `## Typography`
  4. `## Layout`
  5. `## Elevation & Depth`
  6. `## Shapes`
  7. `## Components`
  8. `## Do's and Don'ts`
- **Validation:** Must pass `npx @google/design.md lint DESIGN.md`.

## Aesthetic Direction
- **Primary Theme:** Cyberpunk/Dark (vibrant neon-on-dark palette).
- **Core Styles:**
  - High-Contrast: Vibrant neon colors against deep blacks.
  - Minimalist Cyberpunk: Subtle glowing accents, mostly dark UI with sparse neon text.
  - Retro-Wave: Incorporates 80s inspired grid lines and synthwave colors.
- **Platform Constraints:** Web Application (HTML5, Vanilla JS, Tailwind CSS). Focus on CSS variables, component-based tokens, and responsive layout rules.

## Acceptance Criteria
- `DESIGN.md` exists in the project root.
- The file structure strictly adheres to the open standard (YAML front matter + Markdown).
- The file passes linting via the `@google/design.md` CLI.