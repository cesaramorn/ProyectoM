# TravelCard

## Overview

`TravelCard.jsx` renders a single travel entry inside the `Travel` page.

It is responsible for:

- Displaying a travel image with descriptive alt text
- Showing the travel title, date, and description
- Providing a visually consistent card layout

---

## Structure

The component receives four props and renders a card with an image and content side by side.

**Props:**
- `image` — URL of the travel photo
- `title` — Name of the travel destination
- `date` — Date string in Spanish month/year format
- `description` — Text describing the travel experience

**Behavior:**
- Uses semantic `article` element for the card wrapper
- Lazily loads images via `loading="lazy"` for performance
- On screens under 768px, the layout stacks vertically (image above content)

---

## Styling

Co-located CSS file `TravelCard.css` lives next to the component, following the project's component co-location convention.

### Key Styles

- `.travel-card`: Horizontal flex row with rounded corners, semi-transparent white background, backdrop blur, and subtle shadow. Capped at `1100px` max width.
- `.travel-card-image`: Takes 40% of the card width on desktop. Uses `object-fit: cover` for proper cropping. On mobile, spans full width with fixed height.
- `.travel-card-content`: Flex column with centered content, `2.5rem` padding, and `1rem` gap between title, date, and description.
- `.travel-card-title`: Bold heading at `1.8rem`.
- `.travel-card-date`: Dimmed text at `1rem`.
- `.travel-card-description`: Justified text with comfortable line height.
