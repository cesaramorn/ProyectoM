import { Outlet } from "react-router-dom";

import Menu from "../components/menu/Menu";
import { privateNavigationItems } from "../data/navigation";
import { useAuth } from "../context/AuthContext";

import "./Principal.css";

function Principal() {

  const { signOut } = useAuth();
  const handleMenuAction = (action) => {
    if (action === "logout") signOut();
  };

  return (
    <main className="layout">
      <Menu items={privateNavigationItems} isVisible onAction={handleMenuAction}/>
      <section className="layout-content">
        <Outlet />
      </section>
    </main>
  );
}

export default Principal;