import { Link } from "react-router-dom";

import "./MenuItem.css";

function MenuItem({ label, path, onClick, variant }) {
  const isDanger = variant === "danger";
  const linkClass = `menu-item__link${isDanger ? " menu-item__link--danger" : ""}`;

  if (onClick) {
    return (
      <li className="menu-item">
        <button className={linkClass} onClick={onClick}>{label}</button>
      </li>
    );
  }
  return (
    <li className="menu-item">
      <Link className={linkClass} to={path}>{label}</Link>
    </li>
  );
}

export default MenuItem;