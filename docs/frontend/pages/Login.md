# Login

## Overview

`Login.jsx` is the public login page of the frontend application.

It is responsible for:

- Rendering a login form with email and password fields
- Authenticating users via Supabase Auth
- Displaying a "Forgot password?" toggle that switches to a recovery email form
- Sending password recovery emails via Supabase Auth
- Displaying error messages for invalid credentials
- Redirecting authenticated users to the home page

---

## Structure

The component is a public route defined in `App.jsx` at path `/login`.

**State:**
- `email` — User's email input value
- `password` — User's password input value
- `error` — Error message to display on failed login attempts
- `message` — Success message after sending a password recovery email
- `recovery` — Boolean toggling between login form and recovery email form

**Behavior:**
- On mount, renders a `Menu` with `publicNavigationItems` always visible for navigation back to Home or other public routes
- In login mode (`recovery === false`), submit calls `supabase.auth.signInWithPassword()` with the entered credentials
- In recovery mode (`recovery === true`), submit calls `supabase.auth.resetPasswordForEmail()` with the entered email
- "Forgot password?" link toggles `recovery` state and changes the form title/submit text accordingly
- Clears error state when the user starts typing again
- On successful login, navigates to `/`
- On successful recovery email, displays a confirmation message
- Shows user-friendly error messages for failures

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
- `.login-title`: Form title with centered bold text.
- `.login-form input`: Input fields with consistent height and no default border/outline.
- `.login-form button`: Submit button with dark background, white text, and orange hover effect.
- `.login-success`: Success message displayed in dark green, centered below the form.
- `.login-error`: Error message displayed in dark red, centered below the form.
- Responsive adjustments for screens under 768px (smaller heights and font sizes).
