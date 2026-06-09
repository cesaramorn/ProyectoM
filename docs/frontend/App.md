# App

## Overview

`App.jsx` is the main entry point of the React frontend application.

It is responsible for:

- Providing global authentication context
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

### Layout Routes

Wrapped inside the main layout component.

- `/travel` → Travel page

---

## Authentication Layer

The entire application is wrapped with `AuthProvider`.

This allows all components to access shared authentication state.

---

## Visual Layer

The `BackgroundClouds` component renders decorative animated clouds in the background while keeping visual logic separated from routing logic.