# Travel

## Overview

`Travel.jsx` is the private page that displays a list of travel adventures fetched from Supabase.

It is responsible for:

- Fetching travel records from the `Viajes` table in Supabase
- Sorting travels by date in descending order
- Rendering a list of `TravelCard` components for each record

---

## Structure

The component is a private route defined in `App.jsx` at path `/travel`, rendered inside the `Principal` layout.

**State:**
- `travels` — Array of travel objects fetched from Supabase

**Behavior:**
- On mount, fetches all records from the `Viajes` table
- Sorts results by date using `parseSpanishMonthYear` (newest first)
- Passes each travel's data as props to `TravelCard`

---

## Dependencies

- `supabaseClient` (from `src/services/supabaseClient`): Database client for fetching travels
- `parseSpanishMonthYear` (from `src/utils/date`): Date parser for sorting Spanish month/year strings
- `TravelCard` (from `src/components/travel/TravelCard`): Child component for individual travel entries

---

## Styling

Co-located CSS file `Travel.css` lives next to the component, following the project's component co-location convention.

### Key Styles

- `.travel-page`: Flex column container that centers its children with consistent gap.
- `.travel-list`: Flex column container for the list of cards. Width adapts to content and is centered by the parent.
