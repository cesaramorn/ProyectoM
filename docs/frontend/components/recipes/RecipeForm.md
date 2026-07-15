# RecipeForm

## Overview

`RecipeForm.jsx` is a modal overlay form for creating and editing recipes.

It is responsible for:

- Collecting recipe data (title, description, image, time, tags, ingredients, preparation)
- Managing file selection for recipe images with client-side preview
- Managing tag input with chip-style display and keyboard-based addition
- Submitting data to the parent `Recipes` component

---

## Structure

The component receives props from `Recipes` and manages all form field state internally.

**Props:**
- `recipe` — Optional recipe object for editing mode, or `null` for create mode
- `onSubmit` — Callback invoked with form data when the form is submitted
- `onCancel` — Callback invoked when the overlay backdrop or Cancel button is clicked

**State:**
- `titulo`, `descripcion`, `tiempo`, `ingredientes`, `preparacion` — Controlled form field values
- `imagenFile` — Selected `File` object for image upload
- `imagenPreview` — Object URL or existing image URL for preview
- `tagInput` — Current text in the tag input field
- `etiquetas` — Array of tag strings

**Behavior:**
- In editing mode, form fields are pre-populated from the `recipe` prop
- Tag input adds tags on Enter or comma, prevents duplicates
- Tags display as removable chips below the input
- Changing the file input revokes the previous blob URL to prevent memory leaks
- Clicking the overlay background triggers `onCancel`
- Clicking inside the form does not close it (`stopPropagation`)

---

## Styling

Co-located CSS file `RecipeForm.css` lives next to the component, following the project's component co-location convention.

### Key Styles

- `.recipe-form-overlay`: Fixed full-screen backdrop with semi-transparent black background and centered flex layout.
- `.recipe-form`: Modal card at `max-width: 640px` with white background, rounded corners, shadow, and scrollable content.
- `.recipe-form-field`: Flex column layout for each label + input group.
- `.recipe-form-input`, `.recipe-form-textarea`: Shared input styles with border, rounded corners, and dark border on focus.
- `.recipe-form-tag-chip`: Pill-shaped tag chip with light background (`#e8e8f0`) and removable × button.
- `.recipe-form-image-preview`: Preview thumbnail for the selected image with `object-fit: cover`.
