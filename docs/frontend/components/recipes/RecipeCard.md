# RecipeCard

## Overview

`RecipeCard.jsx` renders a single recipe entry inside the `Recipes` page.

It is responsible for:

- Displaying a recipe in collapsed mode (thumbnail + title + metadata + tags)
- Expanding to show the full recipe (hero image, ingredients, preparation, actions)
- Providing edit and delete controls for each recipe

---

## Structure

The component receives props from `Recipes` and manages its own expanded/collapsed state.

**Props:**
- `recipe` — Recipe object from Supabase with fields `titulo`, `descripcion`, `imagen`, `tiempo`, `ingredientes`, `preparacion`, `etiquetas`
- `onEdit` — Callback invoked when the Edit button is clicked, receives the recipe object
- `onDelete` — Callback invoked when the Delete button is clicked, receives the recipe `id`

**State:**
- `expanded` — Toggles between collapsed card header and full recipe view

**Behavior:**
- Clicking the collapsed card toggles to expanded view
- Clicking the "Contraer" button returns to collapsed view
- Clicking "Editar" or "Eliminar" buttons does not toggle the expanded state (uses `stopPropagation`)
- The hero image overlays the title with a dark gradient for readability
- Tags are displayed as pills in both collapsed and expanded views

---

## Dependencies

- `FiChevronUp` (from `react-icons/fi`): Chevron icon in the collapse button

---

## Styling

Co-located CSS file `RecipeCard.css` lives next to the component, following the project's component co-location convention.

### Key Styles

- `.recipe-card`: Card with `max-width: 1100px`, semi-transparent white background, backdrop blur, rounded corners, and hover lift effect.
- `.recipe-card--expanded`: Removes overflow clipping so the hero image shadow is fully visible.
- `.recipe-card-image`: Thumbnail at `180px` wide with `object-fit: cover` for the collapsed view.
- `.recipe-card-hero-wrapper`: Full-bleed hero container with negative margins, overflow hidden, and top border-radius to match the card.
- `.recipe-card-hero`: Full-width hero image at `360px` height (`220px` on mobile).
- `.recipe-card-hero-overlay`: Gradient overlay (`transparent` → `rgba(0,0,0,0.65)`) for title legibility.
- `.recipe-card-hero-title`: Absolute-positioned title over the hero with white text and text shadow.
- `.recipe-card-tag`: Pill-shaped tag (`border-radius: 999px`) with light background (`#e8e8f0`).
- `.recipe-card-btn--collapse`: Minimal collapse button centered below the action buttons.
