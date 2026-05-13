import { Link } from "react-router-dom";

import "./MenuItem.css";

function MenuItem({ label, path }) {
  return (
    <li className="menu-item">
      <Link className="menu-item__link" to={path}>
        {label}
      </Link>
    </li>
  );
}

export default MenuItem;