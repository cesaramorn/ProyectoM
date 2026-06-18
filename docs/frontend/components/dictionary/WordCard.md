# WordCard

## Overview

`WordCard.jsx` renders a single word entry inside the `Dictionary` page.

It is responsible for:

- Displaying a word with its definition
- Coloring the word based on the author

---

## Structure

The component receives three props and renders a card with the word and definition.

**Props:**
- `word` — The word text
- `definition` — The word's definition or description
- `author` — Author name used to determine the word color

**Behavior:**
- Uses an inline `style` prop to apply the author's color to the word
- Falls back to default color if author is not recognized
- Preserves line breaks in definitions via `white-space: pre-line`

---

## Styling

Co-located CSS file `WordCard.css` lives next to the component, following the project's component co-location convention.

### Key Styles

- `.word-card`: Card with `max-width: 1000px`, glass background (`rgba(255,255,255,0.8)` + `backdrop-filter: blur(10px)`), rounded corners, and hover lift effect.
- `.word-card h3`: Bold word text with `1.5rem` font size.
- `.word-card p`: Definition text with comfortable line height and `#555` color.
- Responsive adjustments reduce font sizes on screens under 768px.