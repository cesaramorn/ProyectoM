# Home

## Overview

`Home.jsx` is the public home page of the frontend application.

It is responsible for:

- Displaying a central message to the user
- Providing a toggleable navigation menu based on authentication state
- Conditionally showing navigation items for authenticated vs unauthenticated users

---

## Structure

The component is a public route defined in `App.jsx` at path `/`.

**State:**
- `menuVisible` — Controls visibility of the navigation menu

**Behavior:**
- Clicking the title toggles the menu
- Navigation items change based on `isAuthenticated` from `useAuth()`

### Navigation Items

| Auth State | Items |
|------------|-------|
| Authenticated | Home (`/`) + internal pages |
| Unauthenticated | Login (`/login`) |

---

## Components Used

- `Menu` (from `src/components/Menu`): Renders the navigation menu with configured items.
- `useAuth` (from `src/context/AuthContext`): Provides authentication state including `isAuthenticated`.

---

## Styling

Co-located CSS file `Home.css` lives next to the component, following the project's component co-location convention.

### Key Styles

- `.home`: Flex container that centers content vertically and horizontally with padding and centered text.
- `.home-title`: Interactive heading with pointer cursor, transition effects, and responsive font size via media query.
