````md
# AGENTS.md

## Project

Production website built with:

- Astro
- Tailwind CSS 4
- Vanilla JavaScript / TypeScript only when necessary
- No React
- No Vue
- No UI libraries

Keep the project simple, consistent and reusable.

The existing design system and shared components are the source of truth.

---

## 1. Inspect before editing

Before changing UI, first inspect:

- `src/styles/global.css`
- `src/layouts/BaseLayout.astro`
- `src/components/ui/`
- the relevant section/component

Always check whether the project already has:

- the required component
- the required design token
- the required spacing pattern
- the required color
- the required typography style
- an established pattern for the same type of UI

Do not invent a new solution before checking the existing system.

---

## 2. Use the existing page architecture

Standard sections should use this structure:

```text
SpecificSection
└── Section
    └── Container
        ├── SectionHeader (optional)
        └── Section content
````

Typical example:

```astro
---
import Section from "../../ui/Section.astro";
import Container from "../../ui/Container.astro";
import SectionHeader from "../../ui/SectionHeader.astro";
---

<Section>
  <Container>
    <SectionHeader
      eyebrow="..."
      title="..."
      text="..."
    />

    <div>
      ...
    </div>
  </Container>
</Section>
```

Do not manually recreate the responsibilities of `Section`, `Container` or `SectionHeader` inside every new section.

### Section

Use `Section.astro` for normal page sections.

It is responsible for:

* vertical section spacing
* section background
* section positioning
* section id

Do not manually repeat section padding in every section if `Section` already provides it.

### Container

Use `Container.astro` for standard content width and horizontal page padding.

Do not repeatedly create custom wrappers like:

```text
max-w-[1400px] mx-auto px-6
max-w-[1440px] mx-auto px-8
max-w-7xl mx-auto px-5
```

If a genuinely new width is needed more than once, add a reusable `Container` variant.

### SectionHeader

Use `SectionHeader.astro` when a section follows the standard:

```text
eyebrow
title
text
```

pattern.

Do not manually recreate the same heading structure in every section.

A section can omit `SectionHeader` if it has no heading or uses a genuinely different layout.

---

## 3. Tailwind-first styling

Tailwind CSS is the default styling method.

Use Tailwind directly in Astro components for almost all normal styling:

* layout
* grid
* flex
* spacing
* sizing
* typography overrides
* colors
* borders
* radius
* positioning
* responsive behavior
* simple transitions
* simple hover/focus states

Prefer:

```astro
<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
```

over:

```css
.services-grid {
  display: grid;
  gap: 24px;
}
```

Do NOT create custom CSS classes for ordinary component styling.

Custom CSS should normally be used only when Tailwind is not practical, especially for:

* shared animation systems
* complex keyframes
* unusual selectors
* special effects that are significantly clearer in CSS

Do not create CSS classes only to make Tailwind markup shorter.

---

## 4. Design tokens are the source of truth

Before using a new visual value, check `global.css`.

Reuse existing values and tokens for:

* colors
* backgrounds
* text colors
* borders
* radius
* typography
* container widths
* section spacing
* repeated spacing patterns

Do not create many slightly different values for the same visual role.

Avoid patterns like:

```text
#F7F7F7
#F8F8F8
#F6F6F6
#FAFAFA
```

when they all represent the same surface.

Avoid:

```text
rounded-[22px]
rounded-[24px]
rounded-[26px]
rounded-[28px]
```

when there is no real design reason.

Avoid:

```text
text-[15px]
text-[16px]
text-[17px]
```

for elements that belong to the same text style.

Consistency is more important than inventing a perfectly custom value for every component.

---

## 5. Rules for new visual values

When a new component needs a value that does not already exist, follow this order:

### 1. Reuse an existing token

If an existing token is visually correct, use it.

### 2. Reuse an existing pattern

Check whether another component already solves the same or a very similar problem.

### 3. Add a reusable token or variant

If the new value is clearly part of the design system and will be reused, add a semantic token or controlled component variant.

Examples:

```text
new surface color
new repeated radius
new repeated card padding
new repeated spacing pattern
new container width
```

### 4. Use a one-off Tailwind arbitrary value only if it is genuinely unique

Examples:

```text
max-w-[780px]
top-[18px]
```

Do not turn every one-off value into a global token.

### 5. If the new reusable value is unclear, ask first

Do not invent a new reusable design decision when the intended value is not obvious from the design.

---

## 6. Prefer semantic tokens

When a semantic project token exists, use it.

Prefer:

```text
bg-bg
text-text
text-text-muted
border-border
bg-surface
```

over repeatedly choosing unrelated raw palette values.

Do not create a new semantic token for every single element.

Raw Tailwind values are acceptable when the value is intentionally unique and no semantic token exists.

---

## 7. Typography

Base typography for common elements is defined globally:

```text
h1
h2
h3
p
```

Do not repeat the base typography classes on every normal heading and paragraph.

Prefer:

```astro
<h2>Наши услуги</h2>
```

when the global `h2` style is already correct.

Use Tailwind classes only when a specific element intentionally differs from the global typography.

Do not invent a new text size for every component.

Spacing between:

```text
eyebrow
title
text
```

belongs to `SectionHeader`, not to global `h2` or `p` margins.

---

## 8. Avoid generic hover effects

Do not automatically add visual effects simply because an element is interactive.

### Do not add shadows by default

Avoid:

```text
shadow
shadow-lg
shadow-xl
drop-shadow
hover:shadow-lg
hover:shadow-xl
```

unless the design explicitly uses shadows.

### Do not move cards upward on hover

Avoid:

```text
hover:-translate-y-1
hover:-translate-y-2
```

unless explicitly requested.

### Do not zoom images on hover by default

Avoid:

```text
group-hover:scale-105
group-hover:scale-110
```

unless the design specifically requires image zoom.

### Preferred hover behavior

Prefer restrained interactions such as:

* color change
* background change
* border change
* opacity change
* subtle icon movement when appropriate

Do not add decorative hover effects that were not requested.

---

## 9. Spacing consistency

Do not invent different gaps and paddings for every component.

Repeated patterns should use the same spacing values.

Examples:

* card internal padding
* grid gap
* section-to-content gap
* eyebrow-to-title gap
* title-to-text gap
* button padding

Avoid near-duplicate values such as:

```text
gap-5
gap-[22px]
gap-6
gap-[26px]
```

for the same conceptual spacing.

If the same relationship appears repeatedly, reuse the same Tailwind value, token or component setting.

---

## 10. Components

Each component should have one clear responsibility.

Examples:

```text
Section → vertical section structure
Container → content width
SectionHeader → standard section heading
Button → button
ServiceCard → service card
ServicesSection → complete services section
```

Before creating a new component, check whether an existing component can be reused or extended.

Do not create duplicate components with slightly different styling.

Avoid names like:

```text
ServiceCardNew.astro
SimpleCard2.astro
FinalCard.astro
NewSection.astro
```

Do not create tiny components for trivial markup that is used only once.

---

## 11. Shared component variants

Before modifying shared components such as:

```text
Section
Container
SectionHeader
Button
shared cards
global.css
```

check how they are already used.

Do not solve one local problem by changing a shared component in a way that breaks other sections.

If the new requirement is genuinely reusable, add a controlled variant.

Examples:

```text
spacing="sm" | "md" | "lg"
align="left" | "center" | "right"
size="default" | "wide" | "narrow"
```

Prefer a small number of deliberate variants over many one-off props.

---

## 12. Responsive design

Every section must work intentionally on:

* desktop
* tablet
* mobile

Use Tailwind responsive utilities.

Do not create separate custom CSS files for responsive layout.

Avoid excessive breakpoints.

Do not fix one breakpoint by accidentally breaking another.

Keep the same overall design logic across screen sizes unless the design clearly requires a different composition.

---

## 13. Animations

Use the project's shared motion/reveal system for normal entrance animations.

Do not create a separate animation implementation inside every section.

Use Tailwind transitions for simple interactions whenever possible.

Custom CSS is acceptable for animation behavior that cannot be expressed cleanly with Tailwind.

Do not add animation libraries unless explicitly requested.

Animations should be subtle and consistent.

Do not automatically animate every small element.

---

## 14. Change only what was requested

When asked to change one thing, change only that thing.

Do not:

* redesign nearby elements
* change unrelated typography
* change unrelated colors
* change unrelated spacing
* refactor unrelated components
* replace approved patterns with a preferred alternative

A small task should produce a small focused change.

---

## 15. Before finishing

For meaningful UI changes, verify:

* existing components were reused where appropriate
* `Section`, `Container` and `SectionHeader` were not unnecessarily bypassed
* Tailwind was used instead of unnecessary custom CSS
* existing tokens were reused
* no unnecessary new colors were introduced
* no unnecessary new font sizes were introduced
* no unnecessary new spacing values were introduced
* no unnecessary new radius values were introduced
* no unrequested shadows were added
* no unrequested image zoom was added
* no unrequested hover elevation was added
* desktop and mobile still work
* unrelated UI was not changed

Run:

```bash
npm run build
```

after significant code changes and fix errors caused by the change.

---

## Core principle

Do not design each new component in isolation.

Before introducing something new, follow this order:

```text
reuse component
→ reuse token
→ reuse established pattern
→ add controlled reusable variant
→ only then create a genuinely new value
```

Prefer consistency over unnecessary uniqueness.