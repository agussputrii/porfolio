# BRUTAL.DIGITAL — Design System

A brutalist-tech design system for a **digital products & AI services portfolio**. The owner sells web development, custom developments, chatbots, local AI, audits, CRM/CLM systems, and related technical services. The portfolio needs to look sharp, technical, opinionated, and confident — not corporate, not playful, not Silicon-Valley-pastel.

> **TL;DR aesthetic:** near-black + acid lime + concrete gray. Oversized condensed uppercase display type, mono micro-labels, hard rectangles, no rounded corners, no drop shadows, no gradients. Editorial section markers (`§01 — FOUNDATIONS`). Diagonal lime accent lines and grain textures on dark surfaces.

---

## Sources

This system was built from a set of reference screenshots provided by the owner showing a brutalist AI deck (`AI Brutalist.html`) and a `Manual de Estilo` page in the same family. The captures are stored under `uploads/` for reference:

- `uploads/screenshots-1777545829519.png` — initial reference, "INNOVACIÓN DIGITAL Y ESTRATEGIA: UN ENFOQUE BRUTALISTA" cover
- `uploads/Captura de pantalla 2026-04-30 0738*.png` — 10 captures of the AI Brutalist deck slides (cover, definition, mechanics, families, LLM zoom-in, signals, quote, trajectories, end)

No codebase or Figma was provided — the system is reconstructed visually from the captures, then designed forward as a coherent kit.

---

## Index

```
README.md                  ← you are here
SKILL.md                   ← agent skill manifest
colors_and_type.css        ← all tokens + semantic vars + base styles
fonts/                     ← webfont files (or Google Font fallbacks)
assets/                    ← logos, textures, placeholders, icons
preview/                   ← Design System tab cards (one HTML per card)
ui_kits/
  portfolio/               ← portfolio website kit (Home, Index, Case Study, About, Contact, 404)
slides/                    ← brutalist deck templates (Cover, Definition, Steps, Families, Stat, Quote, Trajectories, End)
```

---

## What's inside (manifest)

| Path | What |
|---|---|
| `colors_and_type.css` | All design tokens (colors, type, spacing, motion) + base resets + utility classes (`.hl`, `.tag`, `.btn`, `.card`, `.mono`, `.grain`). Import this once. |
| `fonts/` | Reserved for `.woff2` files when paid display face is licensed. Currently uses Google Fonts (Archivo Black, Inter, JetBrains Mono). |
| `assets/` | Logos (`logo.svg`, `mark.svg`), backgrounds (`concrete-bg.svg`), placeholders (`placeholder-1.svg`, `placeholder-2.svg`). |
| `preview/` | 23 cards rendered in the Design System tab (Type / Colors / Spacing / Components / Brand). |
| `ui_kits/portfolio/` | Clickable portfolio prototype: Home, Project Index, Case Study, About, Contact, 404. Open `index.html`. |
| `slides/` | 8 slide templates (Cover, Definition, Steps, Families, Stat, Quote, Trajectories, End) at 1920×1080. |
| `SKILL.md` | Agent skill manifest for cross-tool reuse. |

---

## CONTENT FUNDAMENTALS

The voice is **direct, declarative, and slightly cocky** — the language of a builder who knows their craft and does not waste words. Bilingual ES + EN, with each surface picking one and committing.

**Tone**
- Statements, not invitations. "Construyo software." not "¿Necesitas ayuda con tu software?"
- Short, punchy sentences. Aphorisms. Editorial pull-quotes.
- Technical without jargon-soup. "LLM local en tu hardware" beats "Solución de IA empresarial integrada."
- A wink of irony in micro-copy ("FILE 001 — DRAFT", "© 2026 / END OF FILE", "YOUR TURN.").

**Casing**
- **DISPLAY type is ALL CAPS.** Always. Headlines, big numbers, hero statements.
- **Body is sentence case.** Normal punctuation, normal flow.
- **Mono micro-labels are ALL CAPS with letter-spacing.** Used for section markers, file tags, breadcrumbs, footer chrome (`AI.OVERVIEW`, `§ 02 / MECHANICS`, `TRAJECTORY 01`).

**Person**
- First-person singular for the portfolio owner ("**Yo construyo**…", "**I build**…"). It's a personal portfolio, not a faceless agency.
- Second-person ("**tu** producto", "**your** stack") when addressing the visitor in CTAs.
- Avoid "we" — there's no team to hide behind.

**Examples**
- ✅ `INNOVACIÓN DIGITAL: UN ENFOQUE BRUTALISTA`
- ✅ `WHAT IS A.I.?` / `HOW MACHINES ACTUALLY LEARN.`
- ✅ `A.I. WON'T REPLACE YOU. SOMEONE USING A.I. WILL.`
- ✅ Body: `Systems that perform tasks normally associated with human cognition — perceiving, reasoning, predicting, and deciding — by finding patterns in very large amounts of data.`
- ✅ Micro-label: `§ 02 / MECHANICS`
- ❌ "We help businesses leverage AI to unlock value at scale." (too SaaS, too plural)
- ❌ Title case headlines like `What Is A.I.?` (must be uppercase)

**Emoji & decorative chars**
- **No emoji.** Ever. They break the aesthetic.
- Section symbol `§` is canonical. Em-dash `—` is preferred over hyphens. Slashes `/` separate breadcrumb segments.
- Acceptable unicode: `■` (block), `▸ ▾` (arrows), `×` (close), `→ ←` (nav).

---

## VISUAL FOUNDATIONS

### Color
Three surfaces, in this priority:

| Mode | BG | FG | Use |
|---|---|---|---|
| **Dark** (primary) | `#0a0a0a` near-black | `#ededed` off-white | default; most slides; portfolio chrome |
| **Acid** (loud) | `#c4ff00` acid lime | `#0a0a0a` near-black | one slide per deck, hero CTAs, attention moments |
| **Light** (rare) | `#ededed` off-white | `#0a0a0a` near-black | docs, data-dense layouts, contrast slides |

Acid lime `#c4ff00` is the **only accent color**. It appears as: highlight blocks behind keywords, square bullets, diagonal trim lines, single-card emphasis in a row, mono-label text on dark, full-bleed loud surfaces. Never tinted, never gradient'd, never combined with another accent.

Concrete gray `#1a1a1a` / `#2a2a2a` for surface elevation and dividers. That is the entire palette. No blues, no purples, no oranges.

### Type
- **Display:** heavy condensed uppercase — `Archivo Black` (Google Fonts substitute for the captured deck's display face). Used at 96–240px in slides, 64–160px in web heroes. Tight tracking (`-0.02em`), tight leading (`0.9`).
- **Body:** clean grotesque — `Inter` 400/500. 16–18px web, 22–28px slides.
- **Mono:** `JetBrains Mono` 500. 11–14px, uppercase, `letter-spacing: 0.12em`. Used for ALL micro-labels, section markers, file tags, code.

Type is a system, not a paragraph. Headlines should be one or two words per line, broken intentionally — `LARGE / LANGUAGE / MODELS.`

### Spacing & layout
- 8px base grid. Everything is a multiple of 8.
- Generous outer padding on slides: 80px / 96px from edges.
- Hard column structure (3-up, 4-up). No fluid magazine flow.
- Fixed header chrome: tag top-left, breadcrumb top-right, separated by ~80px from content.
- Fixed footer chrome: section marker bottom-left.

### Backgrounds
- **Dark surfaces** carry a faint concrete/grain texture (1–3% noise) and may layer one or two diagonal lime trim lines (1–2px stroke) at the corner.
- **Acid surfaces** are flat — no texture. Loud is loud.
- **Light surfaces** are flat too. Reserved for moments where data needs to breathe.
- Full-bleed only — no inset cards-on-cards, no soft pastel hero illustrations.

### Borders, radii, shadows
- **Corner radius: 0.** Always. Cards, buttons, inputs, tags. Hard rectangles only.
- **Borders:** 1–2px solid, `#ededed` on dark, `#0a0a0a` on acid/light. Used to define cards in 3-up rows.
- **Shadows: none.** Elevation comes from contrast and color, not blur.

### Cards
A card is a hard rectangle: 1–2px border, no radius, no shadow. Three flavors per row — usually one is filled lime, the others outlined or filled black, to create rhythm. Inside: small mono label top, large display headline, small body paragraph. Generous padding (32px+).

### Highlight / emphasis blocks
The signature move: **acid-lime rectangle behind a single word or phrase**, set tight to the type. Used like a marker pen. e.g. `WHAT IS [A.I.]?` — the `A.I.` sits inside a tight `#c4ff00` block with `#0a0a0a` text.

### Buttons
Hard rectangles, 0 radius, 2px border, uppercase mono label.
- **Primary:** `#c4ff00` bg, `#0a0a0a` text, `#0a0a0a` 2px border.
- **Secondary:** transparent bg, `#ededed` border + text on dark.
- **Hover:** invert fg/bg. No transitions on color, just snap. Optional 2px translate for tactile feel.
- **Active/press:** translate (2px, 2px) and remove border-shadow if any. No scale-down.

### Inputs
Hard rect, 2px border, mono label above, no radius, no inner shadow. Focus = swap border to lime. No softening anywhere.

### Animation
- **Almost none.** This is a brutalist system; movement should feel like a typewriter, not a UI.
- Allowed: `100–150ms` linear color/border swaps on hover. Cursor blink in code blocks. Diagonal trim lines may animate on page-load (translate from off-screen, 400ms ease-out, once).
- **Banned:** spring bounces, easing curves with overshoot, parallax, fade-up-on-scroll, gradient shimmers, blur-ins.
- **Cursor:** crosshair on links/CTAs is on-brand.

### Hover & press states
- Links: switch text color to lime, no underline animation. Or: invert (black text + lime block behind).
- Cards on hover: lime 2px outline appears, the rest stays put. No lift, no scale.
- Buttons: invert as above. Press translates 2px diagonal.

### Imagery
- High contrast. Either pure black-and-white grain, or duotone black + lime.
- Subjects: hardware, hands typing, server racks, abstract concrete textures, terminal screens. Never lifestyle stock.
- Treatment: 60–80% black overlay so type can sit on top.

### Transparency / blur
- **No glassmorphism.** Use solid color with full opacity.
- Acceptable: a 70–90% black overlay on imagery so display type stays readable.

### Iconography (full section below)
- Geometric, monoline, 1.5–2px stroke, square caps, no fill.
- Lucide as the working set; lime accent only when an icon is the focal point.

---

## ICONOGRAPHY

This system did not ship with a custom icon font. We use **[Lucide](https://lucide.dev)** as the working icon set — flagged as a substitution because the original captures don't show a defined icon system, only typographic markers (`§`, `■`, `01`, `→`).

**Rules**
- **Stroke:** 1.75px (Lucide default). Square caps, square joins.
- **Fill:** none. Monoline only.
- **Size:** 16, 20, 24, 32, 48 px. Always a multiple of 4.
- **Color:** inherits text color. Lime `#c4ff00` only when the icon is the single focal point of a region (e.g. a 48px arrow on a hero CTA).
- **No emoji.** Period.
- **Numbers as ornament:** `01`, `02`, `03` set in display type at 96–160px function as iconography for steps and section starters. Prefer this over abstract pictograms when the meaning is "first / second / third".
- **Section glyphs:** `§` (section), `■` (block bullet), `→` (forward), `←` (back), `×` (close), `/` (separator). Use these unicode chars directly in mono micro-labels.

**CDN setup** (drop in `<head>`):

```html
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
<script>document.addEventListener('DOMContentLoaded', () => lucide.createIcons());</script>
```

Then `<i data-lucide="arrow-right" stroke-width="1.75"></i>` anywhere.

> **Flag for owner:** if you have a custom icon set you'd like to use instead, drop the SVGs in `assets/icons/` and we'll wire them up. Until then, Lucide is the substitute.

---

## Font substitutions

The original captures use a heavy condensed display face that's likely a paid foundry font (e.g. Druk, NB Architekt, or similar). We've substituted **Archivo Black** (Google Fonts, free) which has the same heavy uppercase presence at large sizes. Body is **Inter**, mono is **JetBrains Mono** — both Google Fonts.

> **Flag for owner:** if you own license to the original display face (Druk, Druk Wide Bold, NB Architekt, GT America Condensed Black, etc), drop the `.woff2` files in `fonts/` and update `colors_and_type.css` — the system will pick them up automatically.
