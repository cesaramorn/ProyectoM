# AGENTS.md — ProyectoM

## Project structure

- Single app lives in `frontend/`. All dev commands run from that directory.
- `docs/` — design docs (e.g., `docs/frontend/App.md`).
- `.venv/` — Python virtualenv exists but no Python code yet. Ignore unless adding a backend.

## Commands (run from `frontend/`)

| Command | What it does |
|---|---|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Production build → `dist/` |
| `npm run lint` | ESLint flat config |
| `npm run preview` | Preview production build locally |

No root-level scripts. No test framework configured.

## Routing

- Uses **`HashRouter`** from `react-router-dom` for GitHub Pages static-hosting compatibility. Do **not** switch to `BrowserRouter`.
- Routes are split into **public** (no layout) and **layout-wrapped** sections in `App.jsx`.

## Architecture notes (from `App.jsx`)

- **`AuthProvider`** (from `src/context/AuthContext`) wraps the entire app — all components can access auth state.
- **`BackgroundClouds`** renders animated background; kept separate from routing logic.
- **`Layout`** (`src/layouts/Principal`) is the shell for authenticated/internal pages.
- Public pages: `/` → `Inicio`, `/login` → `Login`.

## Missing pieces (code references files that don't exist yet)

App.jsx imports these but they have **not been created**:
- `src/pages/Inicio.jsx`
- `src/pages/Login.jsx`

`react-router-dom` is imported but **not listed** in `package.json` dependencies — must be installed (`npm install react-router-dom`) before the app can run.

## Conventions

- ESM (`"type": "module"`), flat ESLint config, `.jsx` extension for React files.
- Component co-location: CSS lives next to its component (e.g., `BackgroundClouds.css`).
- `public/` is empty; static assets go in `src/assets/`.
