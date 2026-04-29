---
version: alpha
tokens:
  color:
    background: "#020617"
    surface: "#0f172a"
    primary: "#d8b4fe"
    secondary: "#38bdf8"
    accent: "#4ade80"
    text:
      base: "#e2e8f0"
      muted: "#94a3b8"
  typography:
    family:
      sans: "'Inter', sans-serif"
      mono: "'JetBrains Mono', 'Fira Code', monospace"
    size:
      base: "16px"
  layout:
    spacing:
      unit: "4px"
  elevation:
    glow: "0 0 10px rgba(216, 180, 254, 0.5)"
---

## Overview
The Algorithm Simulations Suite utilizes a **Cyberpunk/Dark** visual identity. The design emphasizes high contrast, neon accents, and a deep, immersive dark environment. It blends modern minimalist aesthetics with retro-futuristic synthwave elements.

## Colors
- **Core Background:** Deep Slate 950 (`#020617`).
- **Surface & Cards:** Slate 900 (`#0f172a`).
- **Neon Primary:** Purple 300 (`#d8b4fe`). Used for primary headings and active states.
- **Neon Secondary:** Blue 400 (`#38bdf8`). Used for secondary information and subtle links.
- **Neon Accent:** Green 400 (`#4ade80`). Used for success states and confirmation.
- **Text:** High-legibility Slate 200 for content, Slate 400 for metadata.

## Typography
- **Headings:** Sans-serif (Inter) with generous letter spacing and bold weights.
- **Body:** Sans-serif (Inter) for readability.
- **Code & Algorithms:** Monospace (JetBrains Mono) to emphasize the technical nature of the simulations.

## Layout
- **Grid:** Fluid layout using Tailwind CSS responsive utilities.
- **Spacing:** Based on a 4px (1rem = 16px) modular scale.
- **Containers:** Max-width containers for desktop readability, full-width with padding for mobile.

## Elevation & Depth
- **Layers:** Use Slate 900 for floating elements over Slate 950.
- **Glow Effects:** Subtle neon glows (`box-shadow`) applied to buttons, active inputs, and primary cards to simulate illuminated hardware.

## Shapes
- **Corners:** Rounded corners (Tailwind `rounded-lg`) for a modern feel.
- **Borders:** Thin, crisp borders (`border-slate-800`) to define sections without excessive visual weight.

## Components
- **Cards:** Dark surfaces with neon border-top accents.
- **Buttons:** Solid neon background with dark text, or ghost buttons with neon borders and text.
- **Inputs:** Dark slate background with high-contrast text and neon focus rings.

## Do's and Don'ts
### Do's
- Use high-contrast combinations (Neon on Deep Dark).
- Apply glow effects sparingly to highlight interactivity.
- Maintain consistent spacing using Tailwind's spacing scale.

### Don'ts
- Do not use pure white backgrounds.
- Avoid using low-contrast text on dark backgrounds (e.g., dark gray on black).
- Do not overload the UI with too many different neon colors; stick to the primary/secondary/accent palette.
