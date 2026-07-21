# App

## Overview

`App.jsx` is the main entry point of the React frontend application.

It is responsible for:

- Providing global authentication context
- Handling password recovery detection and redirect
- Defining application routes
- Rendering the main layout structure
- Organizing public and internal pages

---

## Routing Strategy

The application uses `HashRouter` for static hosting compatibility with GitHub Pages.

### Public Routes

Accessible without internal layout:

- `/` → Home page
- `/login` → Login page
- `/reset-password` → ResetPassword page (reached via password recovery email link)
- `*` → Catch-all, redirects to Home page

### Layout Routes

Wrapped inside the main layout component.

- `/travel` → Travel page
- `/dictionary` → Dictionary page
- `/recipes` → Recipes page

---

## Authentication Layer

### AuthProvider

The entire application is wrapped with `AuthProvider`.

This allows all components to access shared authentication state.

### AuthEventHandler

A child component inside the router that listens for `PASSWORD_RECOVERY` auth events.

On detection, it programmatically navigates to `/reset-password` so the user can set a new password after clicking the recovery link in their email.

---

## Visual Layer

The `BackgroundClouds` component renders decorative animated clouds in the background while keeping visual logic separated from routing logic.