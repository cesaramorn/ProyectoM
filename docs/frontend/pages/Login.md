# Login

## Overview

`Login.jsx` is the public login page of the frontend application.

It is responsible for:

- Rendering a login form with email and password fields
- Authenticating users via Supabase Auth
- Displaying error messages for invalid credentials
- Redirecting authenticated users to the home page

---

## Structure

The component is a public route defined in `App.jsx` at path `/login`.

**State:**
- `email` — User's email input value
- `password` — User's password input value
- `error` — Error message to display on failed login attempts

**Behavior:**
- On mount, renders a `Menu` with `publicNavigationItems` always visible for navigation back to Home or other public routes
- On submit, calls `supabase.auth.signInWithPassword()` with the entered credentials
- Clears error state when the user starts typing again
- On successful login, navigates to `/`
- Shows user-friendly error messages for authentication failures

---

## Dependencies

- `supabaseClient` (from `src/services/supabaseClient`): Configured Supabase client for authentication
- `useNavigate` (from `react-router-dom`): Programmatic navigation after login
- `Menu` (from `src/components/menu/Menu`): Navigation menu always visible on the login page
- `publicNavigationItems` (from `src/data/navigation`): Centralized public navigation configuration

---

## Styling

Co-located CSS file `Login.css` lives next to the component, following the project's component co-location convention.

### Key Styles

- `.login`: Flex container with `min-height: 100vh` that centers the form both horizontally and vertically.
- `.login-form`: Card-style form with max-width of 420px, semi-transparent background, border, and shadow.
- `.login-form input`: Input fields with consistent height and no default border/outline.
- `.login-form button`: Submit button with dark background, white text, and orange hover effect.
- `.login-error`: Error message displayed in dark red, centered below the form.
- Responsive adjustments for screens under 768px (smaller heights and font sizes).
