# Maison Lumière — Team Planning Guide

French clothing brand e-commerce prototype. 5 pages, 5 team members, one shared design system.

---

## Quick Start

```bash
# First time — install Tailwind
npm install

# While building your page — rebuilds CSS every time you save an HTML file
npm run watch

# Before committing — final clean build
npm run build

# Run the dev server (separate terminal)
pip3 install flask
python3 server.py
# open http://localhost:3000
```

> **Important:** `tailwind/output.css` is committed to the repo. You must run `npm run build` (or `watch`) after adding new Tailwind classes to your HTML — otherwise the browser won't see them.

---

## Page Assignments

| File | Page | Person |
|---|---|---|
| `index.html` | Home | Team Member 1 |
| `catalog.html` | Catalogue | Team Member 2 |
| `product.html` | Product view | Team Member 3 |
| `cart.html` | Cart | Team Member 4 |
| `checkout.html` | Checkout | Team Member 5 |

Each person works on their own **git branch**. The navbar, footer, and `<head>` block inside your file are already written — do not change them. Add your content only inside `<main id="main-content">`.

---

## Mobile First — The Most Important Rule

> **Write CSS for 375px phones first. Then add `sm:`, `md:`, `lg:` overrides for larger screens.**

Tailwind's unprefixed classes are the mobile baseline. Example:

```html
<!-- CORRECT: mobile first -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<!-- WRONG: desktop first, hard to override on mobile -->
<div class="grid grid-cols-4 gap-6">
```

### Breakpoint Reference

| Prefix | Min-width | Typical device |
|---|---|---|
| (none) | 0px | Mobile — 375px iPhone |
| `sm:` | 640px | Large phone / small tablet |
| `md:` | 768px | Tablet |
| `lg:` | 1024px | Laptop |
| `xl:` | 1280px | Desktop |

### Mobile Layout Per Page

| Page | Mobile (default) | Desktop (`lg:`) |
|---|---|---|
| Home | Single column, stacked sections | Wider containers, larger hero |
| Catalog | 1-col grid, filters above | Sidebar + 4-col grid |
| Product | Stacked: image then info | 2-col side by side |
| Cart | Stacked: items then summary | Items + summary side by side |
| Checkout | Stacked: each form section | Form + summary side by side |

### Minimum Tap Targets (mobile)
All buttons and links must be at least 44×44px. Use `py-3 px-6` for buttons and `py-2` minimum for nav links.

---

## Color Palette

| Role | Tailwind Class | Contrast on bg |
|---|---|---|
| Page background | `bg-stone-50` | — |
| Card surface | `bg-white` | — |
| **Primary button** | `bg-amber-700 hover:bg-amber-800 text-white` | 4.6:1 ✓ AA |
| Primary border | `border-amber-700` | — |
| **Heading text** | `text-stone-900` | 16:1 on white ✓ |
| **Body text** | `text-stone-600` | 7.7:1 on white ✓ |
| **Muted text** | `text-stone-400` | 3.5:1 — decorative only, not for important content |
| **Price** | `text-amber-700 font-semibold` | 4.6:1 ✓ |
| Navbar + Footer bg | `bg-stone-900` | — |
| Navbar link | `text-stone-300` | 9.3:1 on stone-900 ✓ |
| **Active nav link** | `text-amber-400 border-b-2 border-amber-400` | Large text AA ✓ |
| Input focus ring | `focus:ring-2 focus:ring-amber-700 focus:border-amber-700` | — |
| Sale badge | `bg-red-600 text-white` | 5.9:1 ✓ |
| Dividers | `border-stone-200` | — |

> `text-stone-400` (muted) only passes AA for text ≥18px bold or ≥24px normal. Never use it for important information — use `text-stone-600` instead.

---

## Typography

- **Headings** (`h1`–`h4`): `font-serif` → Cormorant Garamond (elegant, Parisian)
- **Body**: `font-sans` → Inter (clean, readable)
- Both fonts are loaded via Google Fonts in `<head>` — already in every page shell

---

## Utility Class Cheatsheet

Copy these directly. Do not invent new patterns.

### Primary button (CTA)
```html
<a href="..." class="inline-block bg-amber-700 hover:bg-amber-800 text-white font-medium px-6 py-3 rounded transition-colors duration-200">
  Texte du bouton
</a>
```

### Outline button
```html
<a href="..." class="inline-block border border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white font-medium px-6 py-3 rounded transition-colors duration-200">
  Texte
</a>
```

### Section container (use on every section's inner wrapper)
```html
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
```

### Section heading (h2)
```html
<h2 class="font-serif text-3xl sm:text-4xl text-stone-900 mb-8">Titre de section</h2>
```

### Product card
```html
<article class="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden group">
  <a href="product.html" aria-label="Voir [Nom produit] — [Prix] €">
    <div class="relative overflow-hidden h-72">
      <img src="..." alt="[Description détaillée : couleur, matière, coupe]"
           class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
           width="400" height="480" loading="lazy" />
    </div>
    <div class="p-4">
      <h2 class="font-serif text-stone-900 text-lg">[Nom produit]</h2>
      <p class="text-stone-500 text-sm mt-1">[Couleur · Tailles]</p>
      <p class="mt-2 font-semibold text-amber-700">[Prix] €</p>
    </div>
  </a>
</article>
```

### Form input (use for all form fields)
```html
<div class="mb-5">
  <label for="field-id" class="block text-sm font-medium text-stone-700 mb-1">
    Libellé <span class="text-red-600" aria-hidden="true">*</span>
  </label>
  <input type="text" id="field-id" name="field_name" required
         autocomplete="[valeur appropriée]"
         placeholder="Exemple"
         class="w-full px-4 py-2.5 border border-stone-300 rounded bg-white text-stone-900 placeholder-stone-400 text-sm focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-amber-700 transition duration-200" />
</div>
```

### Breadcrumb nav
```html
<nav aria-label="Fil d'Ariane" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
  <ol class="flex items-center gap-2 text-sm text-stone-500 list-none p-0 m-0" role="list">
    <li><a href="index.html" class="hover:text-amber-700 transition-colors duration-200">Accueil</a></li>
    <li aria-hidden="true" class="text-stone-400">/</li>
    <li><a href="catalog.html" class="hover:text-amber-700 transition-colors duration-200">Catalogue</a></li>
    <li aria-hidden="true" class="text-stone-400">/</li>
    <li class="text-stone-900 font-medium" aria-current="page">Nom de la page</li>
  </ol>
</nav>
```

### CSS-only size selector (radio buttons, no JS)
```html
<fieldset class="border-0 p-0 m-0">
  <legend class="text-sm font-medium text-stone-700 mb-3">Taille</legend>
  <div class="flex flex-wrap gap-2">
    <label class="cursor-pointer">
      <input type="radio" name="size" value="XS" class="sr-only peer" />
      <span class="block peer-checked:bg-stone-900 peer-checked:text-white border border-stone-300 text-stone-700 text-sm px-3 py-1.5 rounded hover:border-stone-900 transition-colors duration-200 select-none">
        XS
      </span>
    </label>
    <!-- Repeat for S, M, L, XL -->
  </div>
</fieldset>
```

---

## Active Nav Link — How to Set It

Each page shell has the navbar pre-built. The active link for **your page** already has `aria-current="page"` and the amber highlight applied. Do not change the other links.

Active link classes (desktop):
```
text-amber-400 pb-1 border-b-2 border-amber-400
```
Active link classes (mobile):
```
text-amber-400 bg-stone-800
```

---

## Heading Hierarchy (SEO + Accessibility)

- **One `<h1>` per page** — the primary topic of that page
- **Never skip levels** — h1 → h2 → h3 strictly, never h1 → h3
- Navbar brand link is NOT a heading — it's an `<a>` tag
- Footer column headings use `<h2>` (they are section headings inside `<footer>`)

| Page | `<h1>` value |
|---|---|
| index.html | Brand tagline (e.g. "La mode parisienne, réinventée") |
| catalog.html | "Catalogue" |
| product.html | The product name (e.g. "Robe Midi Crêpe") |
| cart.html | "Mon Panier" |
| checkout.html | "Finaliser la commande" |

---

## Image Rules

1. **Always** include `alt`, `width`, `height`, and `loading` attributes on every `<img>`
2. **Hero / first visible image:** `loading="eager" fetchpriority="high"` — keeps LCP fast
3. **All other images:** `loading="lazy"`
4. **Alt text for product images** — describe color, style, material, garment:
   - ✓ `alt="Robe midi en crêpe ivoire, coupe ajustée, col V"`
   - ✗ `alt="robe"` or `alt="img1"` or missing entirely
5. **Decorative images:** `alt=""` (empty string, not missing)
6. **Prototype images:** use Unsplash with explicit dimensions
   `https://images.unsplash.com/photo-[ID]?w=800&h=960&fit=crop&q=80`

---

## Schema.org JSON-LD Templates

Each page shell already has the correct `<script type="application/ld+json">` block. Replace placeholder values with your actual content.

### catalog.html — add itemListElement entries
```json
{
  "@type": "ListItem",
  "position": 1,
  "url": "https://maisonlumiere.fr/product.html",
  "name": "Robe Midi Crêpe"
}
```

### product.html — replace all placeholder values
Fields to update: `name`, `description`, `image`, `sku`, `price`, `ratingValue`, `reviewCount`

---

## Accessibility Checklist

Run before every commit.

- [ ] Skip link (`<a href="#main-content">`) is present — already in the shell, do not remove
- [ ] `<main id="main-content">` has the correct `id` — do not remove
- [ ] Tab through the entire page — every button, link, and input is reachable by keyboard
- [ ] No `focus:outline-none` without `focus:ring-2 focus:ring-amber-700` alongside it
- [ ] Every `<img>` has an `alt` attribute
- [ ] Every `<input>` has a paired `<label for="">` with matching `id=""`
- [ ] Every icon-only button or link has `aria-label` describing the action
- [ ] Decorative SVGs have `aria-hidden="true"`
- [ ] Color is never the ONLY way to convey information (errors also use text, not just red)

---

## SEO Checklist

Run before every commit.

- [ ] `<title>` is unique to your page and under 60 characters
- [ ] `<meta name="description">` is 150–160 characters and unique
- [ ] `<link rel="canonical">` matches the page URL
- [ ] OG tags (`og:title`, `og:description`, `og:image`, `og:url`) are all filled in
- [ ] Exactly ONE `<h1>` on the page
- [ ] No heading levels are skipped
- [ ] All `<img>` have `width` and `height` attributes (prevents Cumulative Layout Shift)

---

## GEO & E-E-A-T Reminders

**GEO (helps AI search engines surface this content)**
- Lead with the key fact — product name and price before the marketing copy
- Use specific, concrete language: `"Laine mérinos 100%, fabriquée en France"` not `"de haute qualité"`
- The brand entity (name, address, contact) is already in the footer and Schema.org — do not remove

**E-E-A-T (Experience, Expertise, Authority, Trust)**
- Never use "Lorem ipsum" — write realistic French fashion copy
- Product descriptions must include: material, care instructions, origin
- Trust signals (address, phone, email, secure payment) are in the shared footer — do not remove

---

## Architectural Flags — What NOT to Do

| Avoid | Why | Do this instead |
|---|---|---|
| `<div onclick="...">` | Not keyboard accessible, not semantic | `<button>` for actions, `<a>` for links |
| `style="..."` inline | Untraceable, can't be purged | Tailwind utility classes only |
| `focus:outline-none` alone | Removes keyboard focus indicator | Always pair with `focus:ring-2 focus:ring-amber-700` |
| `<img>` without `alt` | A11y violation + SEO penalty | Always include `alt` |
| `<img>` without `width`/`height` | Layout shift, hurts performance | Always include both |
| Multiple `<h1>` tags | Confuses screen readers + search engines | One `<h1>` per page |
| Skipping heading levels | Screen reader navigation breaks | h1 → h2 → h3 strictly |
| `loading="lazy"` on hero | Delays LCP, hurts page speed score | `loading="eager" fetchpriority="high"` on first image |
| Adding `<script>` JS logic | Project is HTML + CSS only | Use CSS-only patterns: `peer`, `<details>`/`<summary>` |
| Editing the shared navbar or footer | Breaks consistency across all 5 pages | Only edit inside `<main id="main-content">` |
