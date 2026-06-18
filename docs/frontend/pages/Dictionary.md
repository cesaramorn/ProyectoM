# Dictionary

## Overview

`Dictionary.jsx` is the private page that displays a collection of words with definitions from Supabase.

It is responsible for:

- Fetching words from the `Palabras` table in Supabase
- Sorting words alphabetically by word
- Rendering a list of `WordCard` components for each entry

---

## Structure

The component is a private route defined in `App.jsx` at path `/dictionary`, rendered inside the `Principal` layout.

**State:**
- `words` — Array of word objects fetched from Supabase

**Behavior:**
- On mount, fetches all records from the `Palabras` table
- Sorts alphabetically using `localeCompare`
- Passes each word's data as props to `WordCard`

---

## Dependencies

- `supabaseClient` (from `src/services/supabaseClient`): Database client for fetching words
- `WordCard` (from `src/components/dictionary/WordCard`): Child component for individual word entries

---

## Styling

Co-located CSS file `Dictionary.css` lives next to the component, following the project's component co-location convention.

### Key Styles

- `.dictionary`: Flex column container that centers its children with consistent gap.
- Title uses the shared `.page-title` class from `Principal.css`.