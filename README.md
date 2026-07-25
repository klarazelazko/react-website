# Nova — Digital Product Studio

A landing page for a fictional digital product studio, built with React, Vite and Tailwind CSS v4.

**Design:** Figma → code, design-first workflow <br>
**Live demo:** [react-website-delta-ruby.vercel.app](react-website-kzelazko.vercel.app)


---

## About this project

This started as a YouTube tutorial build (GreatStack's "agency.ai" landing page) and turned into a
full redesign. The tutorial gave me a working React + Tailwind setup; almost everything visible on
the page has since been rebuilt.

I kept the tutorial credit here on purpose. The interesting part of this repo isn't that a landing
page exists — it's the diff between the original and what it became.

## What I changed from the tutorial

| Area | Tutorial | This version |
|---|---|---|
| Branding | GreatStack logo and assets | Own logo and favicon, drawn in Illustrator, exported as SVG |
| Color | Tailwind's default `indigo-500` | Custom theme tokens defined in `@theme` |
| Type | Single sans-serif | Manrope + Instrument Serif italic as a display accent |
| Hero | Centered single column | Two-column layout with a stats row and a CSS-only background blob |
| Theme toggle | Inline `<img>` with a click handler | Extracted `ThemeToggleBtn` component |
| Icons | Individual PNG/SVG files per icon | `lucide-react`, inheriting `currentColor` so dark mode needs no second file |

## Tech stack

- **React** + **Vite**
- **Tailwind CSS v4** — configuration lives in `src/index.css` via `@theme`, no `tailwind.config.js`
- **lucide-react** — icons
- **Google Fonts** — Manrope (body), Instrument Serif (display)

## Running locally

```bash
git clone https://github.com/klarazelazko/react-website.git
cd react-website
npm install
npm run dev
```

Opens on `http://localhost:5173`.

## What I learned

**Tailwind v4 moved configuration into CSS.** There's no `tailwind.config.js` anymore — theme
tokens go in an `@theme` block in your stylesheet. I spent a while looking for a config file that
was never going to exist.

**Unlayered CSS beats Tailwind utilities regardless of specificity.** I had a global
`* { font-family: Manrope }` rule that silently overrode every `font-*` utility class in the
project. Tailwind's utilities live inside `@layer`, and anything outside a layer wins the cascade.
Moving the rule to `body` and letting inheritance do the work fixed it.

**`public/` and `src/assets/` are two different worlds.** Anything referenced from `index.html`
(favicon, meta images) must be in `public/`, because that file is served as-is and never touches
the bundler. Files in `src/assets/` only exist once something `import`s them. I lost a good twenty
minutes to a favicon sitting in the wrong folder.

**`bg-clip-text` clips the gradient to the element's box, not to the glyphs.** Descenders — the
tails on "p" and "y" — fall outside that box and get cut off. Tightening `line-height` on a heading
makes it worse. Worth knowing before reaching for gradient text on a serif italic.

**React silently ignores unknown props.** I typed `onCClick` instead of `onClick` and the menu
simply did nothing — no error, no red screen, just a warning in the console. Now that's the first
place I look when a handler doesn't fire.

**Components in JSX must start with a capital letter.** Mapping over an array of icon components
means renaming during destructuring: `{ icon: Icon }`, because React reads lowercase `<icon />` as
an HTML tag.

**`fill="currentColor"` in an SVG removes the need for light/dark variants** of the same asset —
the icon inherits the text color from its parent. It does not work for favicons, though, since a
browser tab has no parent to inherit from.

## Roadmap

- [ ] Design the dashboard mockup for the hero in Figma
- [ ] Replace placeholder client logos with neutral ones
- [ ] Rebuild the "Featured work" section with an asymmetric layout
- [ ] Working contact form with validation and loading/error/success states
- [ ] Accessibility pass — focus states, contrast, semantic landmarks
- [ ] `prefers-reduced-motion` support
- [ ] Deploy to Vercel

## Credits

Original tutorial by [GreatStack](https://www.youtube.com/@GreatStackDev). Icons by
[Lucide](https://lucide.dev). Fonts from [Google Fonts](https://fonts.google.com).
