import { Outlet } from "react-router-dom";

import Menu from "../components/Menu";
import { navigationItems } from "../data/navigation";

import "./Principal.css";

function Principal() {
  return (
    <main className="layout">
      <Menu items={navigationItems} isVisible />
      <section className="layout-content">
        <Outlet />
      </section>
    </main>
  );
}

export default Principal;