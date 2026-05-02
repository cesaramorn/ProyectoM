# Principal (Layout)

## Overview

`Principal.jsx` is the main layout component for authenticated/internal pages in the frontend application.

It is responsible for:

- Wrapping child routes with consistent layout structure
- Rendering the global navigation menu
- Providing a container for routed child content via `Outlet`

---

## Structure

The component uses `Outlet` from `react-router-dom` to render matching child route content. It includes a `Menu` component for navigation and applies the `principal` CSS class to the wrapper div.

### Menu Configuration

The `Menu` component is initialized with an array of navigation elements, starting with an "Inicio" link pointing to the root route `/`.

---

## Components Used

- `Menu` (from `src/components/Menu`): Renders the navigation menu with configured elements.
- `Outlet`: React Router DOM component that renders the matching child route inside the layout.

---

## Styling

Co-located CSS file `Principal.css` lives next to the component, following the project's component co-location convention.
