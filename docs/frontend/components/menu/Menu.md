# Menu

## Overview

`Menu.jsx` is the navigation menu component used by `Home.jsx`.

It is responsible for:

- Displaying navigation items in a paginated horizontal layout
- Providing previous/next arrows to navigate between item pages
- Sliding in and out of view based on a visibility prop

---

## Structure

The component receives two props and manages internal pagination state.

**Props:**
- `items` — Array of `{ label, path }` or `{ label, action }` objects to display as navigation links or action buttons
- `isVisible` — Boolean that controls whether the menu is visible (slides in from the left)
- `onAction` — Callback invoked when an item with `action` is clicked, receiving the action name as argument

**State:**
- `startIndex` — Tracks the current page offset for paginated items

**Behavior:**
- Displays up to 4 items per page
- Shows left/right arrow buttons when there are more items to navigate
- Clicking arrows adjusts `startIndex` by the page size (4 items)
- Applies the `menu--visible` CSS class when `isVisible` is true, triggering a slide-in transition

---

## Components Used

- **`MenuItem`** (from `./MenuItem`): Renders individual navigation links inside the list.
- **`AiOutlineLeft` / `AiOutlineRight`** (from `react-icons/ai`): Arrow icons for pagination controls.

---

## Styling

Co-located CSS file `Menu.css` lives next to the component, following the project's component co-location convention.

### Key Styles

- `.menu`: Fixed top bar that slides in from the left (`translateX(-100%)` → `translateX(0)`) with a semi-transparent white background and elevated `z-index` (100) to stay above other content.
- `.menu-list`: Horizontal flex container for items and arrows with `gap` spacing and no default list styling.
- `.menu-arrow`: Circular button with border and hover effects for pagination controls.
- Responsive adjustments reduce menu height, arrow size, and gap on screens under 768px.
