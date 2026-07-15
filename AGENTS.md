# AGENTS.md — ProyectoM

## Project layout

- **Single app** in `frontend/`. All dev commands run from there.
- `docs/frontend/` — design docs for each module.
- `.venv/` — unused Python virtualenv (ignore unless adding backend).

## Dev commands (from `frontend/`)

| Command | Action |
|---|---|
| `npm run dev` | Vite dev server |
| `npm run build` | Production build → `dist/` |
| `npm run lint` | ESLint (flat config) |
| `npm run preview` | Preview production build |
| `npm run deploy` | `gh-pages -d dist` → GitHub Pages |

No test framework configured.

## Routing

- **`HashRouter`** only (GitHub Pages static-hosting). Do not switch to `BrowserRouter`.
- Public routes (no layout): `/` → `Home`, `/login` → `Login`.
- Layout-wrapped routes (`src/layouts/Principal`): `/travel`, `/dictionary`, `/recipes`.

## Auth

- `AuthProvider` (`src/context/AuthContext`) wraps the whole app.
- Supabase client at `src/services/supabaseClient.js`, configured via `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY` in `.env`.

## Vite config

- `base: "/ProyectoM/"` — matches the GitHub Pages repo name.
- React plugin only.

## Conventions

- ESM (`"type": "module"`), `.jsx` for React files, flat ESLint config.
- Component co-location: CSS next to component (e.g., `BackgroundClouds.css`).
- `public/` is empty; static assets go in `src/assets/`.