import { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import MenuItem from "./MenuItem";

import "./Menu.css";

function Menu({ items, isVisible }) {
  const [startIndex, setStartIndex] = useState(0);

  const itemsPerPage = 4;

  const canGoBack = startIndex > 0;
  const canGoForward = startIndex + itemsPerPage < items.length;

  const visibleItems = items.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleNext = () => {
    if (canGoForward) {
      setStartIndex((prev) => prev + itemsPerPage);
    }
  };

  const handlePrevious = () => {
    if (canGoBack) {
      setStartIndex((prev) => prev - itemsPerPage);
    }
  };

  return (
    <nav className={`menu ${isVisible ? "menu--visible" : ""}`}>
      <ul className="menu-list">
        {canGoBack && (
          <li
            className="menu-arrow"
            onClick={handlePrevious}
          >
            <AiOutlineLeft />
          </li>
        )}

        {visibleItems.map((item) => (
          <MenuItem
            key={item.path}
            label={item.label}
            path={item.path}
          />
        ))}

        {canGoForward && (
          <li
            className="menu-arrow"
            onClick={handleNext}
          >
            <AiOutlineRight />
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Menu;