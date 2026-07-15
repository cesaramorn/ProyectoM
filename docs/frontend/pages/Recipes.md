# Recipes

## Overview

`Recipes.jsx` is the private page for managing a collection of recipes.

It is responsible for:

- Fetching recipes from the `Recetas` table in Supabase
- Filtering recipes in real time by title or tags
- Creating, editing, and deleting recipes
- Uploading recipe images to the `recetas` Supabase Storage bucket

---

## Structure

The component is a private route defined in `App.jsx` at path `/recipes`, rendered inside the `Principal` layout.

**State:**
- `recipes` — Full array of recipe objects fetched from Supabase
- `searchQuery` — Current search input value for live filtering
- `filteredRecipes` — Derived via `useMemo`, filters by title or tag match (case-insensitive)
- `editingRecipe` — The recipe being edited, or `null` for create mode
- `showForm` — Controls the `RecipeForm` modal overlay
- `error` — Error message displayed above the search bar

**Behavior:**
- On mount, fetches all records from the `Recetas` table and normalizes `etiquetas` via `parsePgArray`
- Search filters the full list in real time as the user types
- Empty filter state shows "No se encontraron recetas"
- Create/edit/delete operations update Supabase and re-fetch the list
- Image files are uploaded to the `recetas` Storage bucket with a timestamped filename

---

## Dependencies

- `supabaseClient` (from `src/services/supabaseClient`): Database client for CRUD and Storage uploads
- `RecipeCard` (from `src/components/recipes/RecipeCard`): Renders individual recipe entries
- `RecipeForm` (from `src/components/recipes/RecipeForm`): Modal form for creating/editing recipes
- `parsePgArray`, `toPgArray` (from `src/utils/helpers`): Supabase array serialization utilities
- `FiSearch`, `FiX` (from `react-icons/fi`): Search and clear icons

---

## Styling

Co-located CSS file `Recipes.css` lives next to the component, following the project's component co-location convention.

### Key Styles

- `.recipes-page`: Flex column container that centers its children.
- `.recipes-search-wrapper`: Relative container that positions the search icon and clear button inside the input.
- `.recipes-search-input`: Pill-shaped input (`border-radius: 999px`) with semi-transparent white background, backdrop blur, and dark border on focus.
- `.recipes-search-clear`: Circular clear button that appears when the search has text.
- `.recipes-list`: Flex column list of recipe cards with consistent gap.
- `.recipes-empty`: Dimmed text shown when no recipes match the filter.
