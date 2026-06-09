# Principal (Layout)

## Overview

`Principal.jsx` is the main layout component for authenticated/internal pages in the frontend application.

It is responsible for:

- Wrapping child routes with consistent layout structure
- Rendering the global navigation menu
- Providing a container for routed child content via `Outlet`

---

## Structure

The component uses `Outlet` from `react-router-dom` to render matching child route content. It includes a `Menu` component with `privateNavigationItems` and applies the `layout` CSS class to the wrapper div.

### Menu Configuration

The `Menu` component receives `privateNavigationItems` (centralized private navigation including "Inicio", "Viajes", and "Salir") and an `onAction` handler that calls `signOut` from `useAuth()` when the logout action is triggered.

---

## Components Used

- `Menu` (from `src/components/menu/Menu`): Renders the navigation menu with configured items and handles action-based items via `onAction`.
- `Outlet`: React Router DOM component that renders the matching child route inside the layout.
- `useAuth` (from `src/context/AuthContext`): Provides `signOut` for the logout action handler.
- `privateNavigationItems` (from `src/data/navigation`): Centralized private navigation configuration.

---

## Styling

Co-located CSS file `Principal.css` lives next to the component, following the project's component co-location convention.
