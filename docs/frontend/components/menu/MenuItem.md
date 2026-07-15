# MenuItem

## Overview

`MenuItem.jsx` renders a single navigation link inside the `Menu` component.

It is responsible for:

- Displaying a clickable link for a navigation item
- Handling client-side routing via React Router
- Providing consistent styling for each menu entry

---

## Structure

The component receives props and renders either a React Router `Link` or a `<button>` depending on the presence of `onClick`.

**Props:**
- `label` — Display text for the navigation item
- `path` — Route path the link navigates to (optional; requires `react-router-dom`)
- `onClick` — Click handler for action-based items like logout (optional)
- `variant` — Visual variant string (optional). `"danger"` applies red styling for destructive actions like logout

**Behavior:**
- If `onClick` is provided, renders a `<button>` that calls the handler when clicked
- If `path` is provided, renders a React Router `Link` for client-side navigation
- Applies `menu-item` and `menu-item__link` CSS classes for styling
- The last item in the list automatically omits the right border via `:last-child`

---

## Dependencies

- `react-router-dom`: `Link` component for declarative routing (only when `path` is provided)

---

## Styling

Co-located CSS file `MenuItem.css` lives next to the component, following the project's component co-location convention.

### Key Styles

- `.menu-item`: Flex child that grows to fill available space with centered text and a right border separator. The last item removes its border.
- `.menu-item__link`: Block-level link filling the list item, with dark text color (`#1b1b32`), no underline, and an orange hover effect (`#ff6600`).
- `.menu-item__link--danger`: Red text color variant (`#c0392b`) for destructive actions like logout. Hover shifts to a lighter red (`#e74c3c`).
- Responsive adjustments reduce font size on screens under 768px, matching the parent `Menu` breakpoint.
