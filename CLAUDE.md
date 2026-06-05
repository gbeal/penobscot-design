# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Penobscot is a UI design system for web and mobile, named after the Penobscot River and region of Maine. The aesthetic is subtly masculine — rugged without being aggressive, refined without being precious. Think weathered granite, working harbors, and old-growth forests.

## Design Identity

**Mood:** Grounded, capable, understated. The design should feel like it was built to last.

**Anti-patterns to avoid:**
- Rounded, bubbly, or playful UI elements
- Pastel or washed-out colors
- Thin, wispy typography
- Excessive whitespace that feels airy or editorial

## Color Palette

All colors must derive from this Maine-inspired palette. Do not introduce colors outside this system.

| Token | Description | Example Hex |
|---|---|---|
| `sea-gray` | Gray-green coastal water, primary neutral | `#6B7C72` |
| `sea-foam` | White sea foam, primary surface/background | `#F2F4F1` |
| `granite` | Medium-dark granite gray, borders and secondary surfaces | `#4A4E4B` |
| `granite-dark` | Deep granite, primary text and dark surfaces | `#252826` |
| `river` | Deep blue, rivers and lakes — primary accent | `#1E3A5F` |
| `river-light` | Lighter river blue, interactive states | `#2E5480` |
| `pine` | Deep forest green, secondary accent | `#2D4A35` |
| `pine-light` | Lighter pine, hover/active states | `#3D6347` |
| `bark` | Warm brown, used sparingly for warmth | `#5C4033` |

**Semantic mappings:**
- Background: `sea-foam`
- Surface (card, panel): `white` or `sea-foam`
- Border: `granite` at 30–40% opacity
- Primary text: `granite-dark`
- Secondary text: `sea-gray`
- Primary action: `river`
- Secondary action: `pine`

## Typography

Fonts must reinforce the rugged-but-refined character of the system.

**Recommended stack:**
- **Display/Heading:** A slab serif or strong geometric sans — e.g., *Playfair Display* (serif gravitas), *Barlow Condensed* (utility, masculine), or *DM Serif Display*
- **Body:** *DM Sans*, *Inter*, or *Source Sans 3* — legible, neutral, unpretentious
- **Mono:** *JetBrains Mono* or *IBM Plex Mono*

**Scale:** Use a typographic scale with clear hierarchy. Headings should be bold (700+) and confident. Body text at 16–18px base.

**Rules:**
- No font weight below 400 in UI contexts (thin weights undermine the masculine character)
- Heading line-height tight: 1.1–1.2
- Body line-height comfortable: 1.5–1.6

## Layout & Spacing

**Philosophy:** Bold and structured. Elements should occupy space deliberately — no timid half-measures.

- Prefer 8px base grid
- Generous padding inside components (don't pack elements)
- Section spacing should be substantial — let content breathe but not float
- Grid gutters: 24px minimum on desktop, 16px mobile
- Max content width: 1280px, with a comfortable reading column at ~720px

**Component sizing:** Lean large. Touch targets minimum 44px. Input fields and buttons should be visually substantial, not hair-thin.

## Design Tokens Structure

When implementing tokens, follow this naming convention:

```
{category}-{variant}-{modifier}
color-river-light
spacing-section-lg
radius-card
shadow-panel
```

## Platform Targets

Both web (responsive) and mobile (iOS/Android via React Native or similar). Design mobile-first but do not compromise desktop density.

## Commands

```bash
pnpm dev      # Start Storybook dev server at http://localhost:6006
pnpm build    # Build static Storybook to storybook-static/
```

## Toolchain

- **Storybook 10** with `@storybook/html-vite` — framework-agnostic HTML stories, Vite builder
- **No component framework** — stories return raw HTML strings
- **CSS only** — no preprocessor, no Tailwind

## File Organization

```
src/
  tokens/tokens.css   # All design tokens as CSS custom properties
  base.css            # Reset + typographic defaults, imports tokens
  components/         # One CSS file per component (BEM)
stories/
  tokens.stories.js   # Foundation — color swatches, type scale
  <component>.stories.js
.storybook/
  main.js             # Storybook config (framework, story globs)
  preview.js          # Global CSS imports, background/viewport presets
```

## Story Conventions

Stories are plain JS files. Each story `render()` returns an HTML string.

```js
export default { title: 'Components/Button' };

export const Primary = {
  render: () => `<button class="btn btn--primary">Label</button>`,
};
```

## Component CSS Conventions

BEM naming: `block__element--modifier`. One file per component in `src/components/`.

```css
/* src/components/button.css */
.btn { ... }
.btn--primary { background: var(--color-action); }
.btn--secondary { background: var(--color-action-alt); }
```

Import each component CSS in its story file, not in `preview.js`.
