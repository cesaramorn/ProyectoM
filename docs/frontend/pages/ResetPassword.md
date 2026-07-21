# ResetPassword

## Overview

`ResetPassword.jsx` is the public password reset page of the frontend application.

It is responsible for:

- Rendering a form with new password and confirm password fields
- Validating that the new password meets the minimum length requirement
- Validating that both passwords match
- Updating the user's password via Supabase Auth
- Displaying success or error messages

---

## Structure

The component is a public route defined in `App.jsx` at path `/reset-password`.

Users reach this page after clicking the recovery link in their password reset email. The `AuthEventHandler` in `App.jsx` detects the `PASSWORD_RECOVERY` event and navigates here automatically.

**State:**
- `password` — New password input value
- `confirmPassword` — Confirm password input value
- `error` — Error message to display on validation or update failures
- `message` — Success message after a successful password update

**Behavior:**
- On submit, validates that password is at least 6 characters and both fields match
- Calls `supabase.auth.updateUser({ password })` with the new password
- On success, displays a confirmation message and prompts the user to log in again
- Shows user-friendly error messages for validation or API failures

---

## Dependencies

- `supabaseClient` (from `src/services/supabaseClient`): Configured Supabase client for updating the user password
- `useNavigate` (from `react-router-dom`): Programmatic navigation after password update

---

## Styling

Reuses shared styles from `Login.css`, which lives at `src/pages/Login.css`.

The previous dedicated `ResetPassword.css` was removed to eliminate duplication. Both login and reset forms share the same visual structure, so they use the same CSS classes:

- `.login` — Flex container with `min-height: 100vh` that centers the form both horizontally and vertically
- `.login-form` — Card-style form with max-width of 420px, semi-transparent background, border, and shadow
- `.login-title` — Form title with centered bold text
- `.login-form input` — Input fields with consistent height and no default border/outline
- `.login-form button` — Submit button with dark background, white text, and orange hover effect
- `.login-success` — Success message displayed in dark green, centered below the form
- `.login-error` — Error message displayed in dark red, centered below the form
Refer to `docs/frontend/pages/Login.md` for the full list of available styles.
