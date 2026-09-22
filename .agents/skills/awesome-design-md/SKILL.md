---
name: awesome-design-md
description: >-
  Systematic design specifications, token systems, UI patterns, and component rules based on Google Stitch's DESIGN.md open standard and 70+ curated design languages (Linear, Stripe, Supabase, Apple, Vercel, Raycast, Claude, etc.). Use whenever designing, refining, or evaluating UI/UX, layouts, color schemes, typography, spacing, or micro-interactions.
---

# Awesome DESIGN.md Skill

A universal design-system skill for AI agents based on the **Google Stitch DESIGN.md standard** and the **VoltAgent/awesome-design-md** collection.

## What is DESIGN.md?

`DESIGN.md` is a plain-text design system document that AI coding agents read to generate consistent, brand-aligned, high-fidelity UI without Figma exports, manual guesswork, or generic templates.

| Specification File | Target Agent Role | Primary Purpose |
|--------------------|-------------------|-----------------|
| `AGENTS.md` | Coding Agents | Architecture, workflows, procedures |
| `DESIGN.md` | Design & Frontend Agents | Visual tokens, layout hierarchy, aesthetics, components |

---

## Core Specification Format

Every `DESIGN.md` defines five key architectural pillars:

### 1. Palette & Semantic Color Tokens
```yaml
colors:
  primary: "#0B1E4D"          # Dominant brand color (Navy)
  accent: "#0078E0"           # Action / interactable elements (Blue)
  highlight: "#00C4F0"        # Eye-catchers, glows, active indicators (Cyan)
  canvas: "#FFFFFF"           # Default page surface (White)
  canvas-subtle: "#F7F9FC"    # Section alternating backgrounds (Off-white)
  hairline: "rgba(11,30,77,0.10)" # Minimal precision borders
  ink: "#111827"              # High-contrast body text
  ink-muted: "rgba(17,24,39,0.70)" # Subtext & secondary metadata
```

### 2. Typography Hierarchy & Weight Pairings
- **Display / Hero**: Tight line-height (1.05 - 1.15), negative letter-spacing (`tracking-tight`), standardized exclusively on the **Outfit** font family.
- **Body / Content**: Readable line-height (1.5 - 1.6), standard letter-spacing, maximum line-length 65-75 characters (`max-w-prose` or `max-w-2xl`).
- **Mono / Eyebrows**: Uppercase, tracking-wide or tracking-widest, paired with pulsing or status dots.

### 3. Layout Systems & Density
- **Bento Grids**: Asymmetrical 12-column layouts (`col-span-7` / `col-span-5` or `col-span-8` / `col-span-4`) with rounded cards (`rounded-2xl` / `rounded-3xl`).
- **White Space & Rhythm**: Strict section padding (minimum `py-20` on mobile, `py-28` to `py-32` on desktop).
- **Target Density**: Calibrated at 4/10 to 6/10 — never cluttered, each visual element earns its place.

### 4. Interactive Elements & Affordances
- **Pills & Buttons**: Explicit hover states, micro-transitions (`duration-200 ease-out`), subtle drop shadows (`shadow-sm` or `shadow-md` tinted with brand color).
- **Glow & Lighting**: Ambient radial glows, precision 1px border lines, dark-mode cockpit surfaces with backdrop blur (`backdrop-blur-md` / `backdrop-blur-xl`).

### 5. Curated Archetypes (from VoltAgent/awesome-design-md)
- **Stripe Archetype**: Deep navy ink, electric indigo accent, atmospheric mesh gradients, hairline card borders, tabular figures for data.
- **Linear Archetype**: Monochromatic void-canvas, subtle keyboard-first chrome, high-precision dark mode, minimal border-radii.
- **Vercel Archetype**: Pure black and white stark minimalism, Geist typeface, geometric precision, monochrome contrast.
- **Raycast Archetype**: Sleek dark metallic chrome, neon pill accents, vibrant subtle gradients, fluid micro-interactions.

---

## Applying to ConvergeTec

When generating or refining pages for ConvergeTec:
1. **Primary Navy**: `#0B1E4D`
2. **Action Blue**: `#0078E0`
3. **Cyber Cyan**: `#00C4F0`
4. **Editorial Canvas**: `#F7F9FC` (off-white)
5. **Typography**: Outfit font family for all display and body copy
6. **Imagery**: 2.5D connected editorial artwork with isometric/perspective depth
7. **Components**: Asymmetric bento grids, transformation pipeline steps, interactive simulator cockpit with dynamic topology nodes.
