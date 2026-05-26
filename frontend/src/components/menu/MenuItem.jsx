import { Link } from "react-router-dom";

import "./MenuItem.css";

function MenuItem({ label, path, onClick }) {
  if (onClick) {
    return (
      <li className="menu-item">
        <button className="menu-item__link" onClick={onClick}>{label}</button>
      </li>
    );
  }
  return (
    <li className="menu-item">
      <Link className="menu-item__link" to={path}>{label}</Link>
    </li>
  );
}

export default MenuItem;