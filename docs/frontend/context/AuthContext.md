# AuthContext

## Overview

`AuthContext.jsx` provides global authentication state management for the frontend application using Supabase Auth.

It is responsible for:

- Managing user authentication state
- Listening to Supabase auth state changes
- Detecting password recovery sessions
- Providing a loading state during initial session fetch
- Exposing authentication data via React Context

---

## Structure

The module exports two main pieces:

### AuthProvider

Wraps the application and provides authentication context to all children.

**State:**
- `user` — Current authenticated user object or `null`
- `loading` — Boolean indicating if the initial session is being fetched
- `isRecoverySession` — Boolean set to `true` when a `PASSWORD_RECOVERY` event is received, indicating the user arrived via password reset email

**Effects:**
- On mount, fetches the current session from Supabase and sets the initial user state
- Subscribes to `onAuthStateChange` to update user state on login, logout, password recovery, or token refresh
- Sets `isRecoverySession` to `true` on `PASSWORD_RECOVERY` events and resets it to `false` on `SIGNED_IN` or `TOKEN_REFRESHED`
- Cleans up the subscription on unmount

**Context Value:**
Memoized object containing `{ user, loading, isRecoverySession, isAuthenticated, signOut }` to prevent unnecessary re-renders.

### useAuth Hook

Custom hook to consume the authentication context.

Throws an error if used outside of an `AuthProvider`, helping catch misconfiguration early.

---

## Dependencies

- `supabaseClient` (from `src/services/supabaseClient`): Configured Supabase client for auth operations
- `react`: `createContext`, `useContext`, `useEffect`, `useState`, `useMemo`

---

## Usage

Wrap the application (typically in `App.jsx`) with `AuthProvider`:

```jsx
<AuthProvider>
  <App />
</AuthProvider>
```

Access auth state in components:

```jsx
const { user, loading, isRecoverySession, isAuthenticated, signOut } = useAuth();
```
