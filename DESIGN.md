# ConvergeTec Design System (DESIGN.md)

> Standardized design system specification following the Google Stitch `DESIGN.md` format.

---

## 1. Brand Identity & Aesthetic Direction

ConvergeTec is an Australian enterprise business transformation partner uniting four practices:
1. **Consulting** (Strategy & Delivery)
2. **Digital & Software** (Engineering & Cloud)
3. **Academy** (Workforce Capability)
4. **Resources & Talent** (Contract & Fractional Leaders)

**Visual Language**:
- **Tone**: High-calibre, architectural, authoritative, editorial.
- **Visual Style**: 2.5D connected editorial artwork with isometric/perspective depth, precision hairline borders, ambient glow accents, and asymmetric bento layouts.
- **Target Density**: 4.5/10 — airy, spacious, executive-grade.

---

## 2. Design Tokens

### Color Palette
```yaml
colors:
  # Primary Brand Identity
  navy: "#0B1E4D"          # Deep rich navy - header, footer, cockpits, dominant headings
  navy-light: "#162B66"    # Elevated dark surfaces, card borders in dark zones
  blue: "#0078E0"          # Primary action blue - buttons, links, accents
  cyan: "#00C4F0"          # Vibrant cyber cyan - badges, glows, live simulation telemetry
  
  # Canvas & Neutrals
  offwhite: "#F7F9FC"      # Editorial warm canvas - page background
  white: "#FFFFFF"         # Card surfaces, high-contrast panels
  ink: "#111827"           # Primary text color
  ink-muted: "#4B5563"     # Secondary descriptive body copy (70-80% opacity)
  border-hairline: "rgba(11, 30, 77, 0.10)" # Minimal precision separator lines
```

### Typography Scale (Outfit Font Exclusively)
- **Primary Typeface**: `Outfit`, sans-serif (self-hosted locally for privacy and performance).
- **Hero / Display Headline**: `text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight leading-[1.12]`
- **Section Titles**: `text-3xl sm:text-4xl font-bold font-display text-navy tracking-tight`
- **Card Headings**: `text-xl sm:text-2xl font-bold font-display text-navy`
- **Body Copy**: `text-base sm:text-lg text-ink/75 leading-relaxed`
- **Monospace Eyebrows / Badges**: `font-mono text-xs uppercase tracking-widest font-semibold`

---

## 3. UI Components & Layout Grammars

### A. Eyebrow Badges
Pill-shaped indicator with a status dot:
```tsx
<div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-navy/15 bg-white text-navy text-xs font-mono tracking-widest uppercase mb-4 shadow-xs">
  <span className="w-1.5 h-1.5 rounded-full bg-blue" />
  Operating Model
</div>
```

### B. Asymmetric Bento Grid
- 12-column responsive layout:
  - Wide cards: `lg:col-span-7`
  - Standard cards: `lg:col-span-5`
- High-elevation cards: `rounded-2xl border border-navy/10 hover:border-navy/20 hover:shadow-lg transition-all duration-200`

### C. Dark Cockpit Panels (e.g. Simulator, Glow Zones)
- Surface: `bg-navy text-offwhite border border-navy-light/90 shadow-2xl rounded-2xl`
- Top precision border line: `h-[1px] bg-gradient-to-r from-transparent via-cyan/50 to-transparent`
- Backdrop filter: `backdrop-blur-xl`

### D. Buttons & CTAs
- **Primary**: `bg-blue hover:bg-blue/90 text-white font-display font-semibold rounded-xl shadow-md shadow-blue/20`
- **Secondary**: `border border-navy/20 bg-white hover:bg-offwhite text-navy font-display font-semibold rounded-xl`

---

## 4. Diagram & Artwork Conventions
- **Diagrams**: Self-contained SVG/HTML conforming to `diagram-design` principles — zero generic rounded shapes, crisp directional lines, and brand-matched blue/cyan accents.
- **Artwork**: 2.5D editorial connected illustrations depicting agile systems, cloud architecture, and collaborative practice teams.
