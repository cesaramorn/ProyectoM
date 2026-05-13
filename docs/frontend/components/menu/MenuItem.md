# MenuItem

## Overview

`MenuItem.jsx` renders a single navigation link inside the `Menu` component.

It is responsible for:

- Displaying a clickable link for a navigation item
- Handling client-side routing via React Router
- Providing consistent styling for each menu entry

---

## Structure

The component receives two props and renders a styled list item with a link.

**Props:**
- `label` — Display text for the navigation link
- `path` — Route path the link navigates to

**Behavior:**
- Uses React Router's `Link` component for client-side navigation without page reload
- Applies `menu-item` and `menu-item__link` CSS classes for styling
- The last item in the list automatically omits the right border via `:last-child`

---

## Dependencies

- `react-router-dom`: `Link` component for declarative routing

---

## Styling

Co-located CSS file `MenuItem.css` lives next to the component, following the project's component co-location convention.

### Key Styles

- `.menu-item`: Flex child that grows to fill available space with centered text and a right border separator. The last item removes its border.
- `.menu-item__link`: Block-level link filling the list item, with dark text color (`#1b1b32`), no underline, and an orange hover effect (`#ff6600`).
- Responsive adjustments reduce font size on screens under 768px, matching the parent `Menu` breakpoint.
