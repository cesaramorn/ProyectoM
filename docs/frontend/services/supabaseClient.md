# supabaseClient

## Overview

`supabaseClient.js` initializes and exports the Supabase client instance used for authentication and database operations throughout the application.

It is responsible for:

- Reading Supabase credentials from environment variables
- Creating a configured Supabase client instance
- Providing a single shared instance for all auth and API calls

---

## Structure

The file reads two environment variables and passes them to `createClient` from `@supabase/supabase-js`.

### Environment Variables

| Variable | Purpose |
|----------|---------|
| `VITE_SUPABASE_URL` | Supabase project URL |
| `VITE_SUPABASE_ANON_KEY` | Supabase anonymous API key |

The client is then exported as the default export for use across the app.

---

## Dependencies

- `@supabase/supabase-js`: Supabase client library for browser environments.
