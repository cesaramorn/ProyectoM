import { useState } from "react";
import { useAuth } from "../context/AuthContext";

import { publicNavigationItems, privateNavigationItems } from "../data/navigation";

import Menu from "../components/menu/Menu";

import "./Home.css";

function Home() {
  const [menuVisible, setMenuVisible] = useState(false);
  const { isAuthenticated, signOut } = useAuth();

  const handleMenuAction = (action) => {
    if (action === "logout") signOut();
  };

  const toggleMenu = () => setMenuVisible((prev) => !prev);

  const items = isAuthenticated ? privateNavigationItems : publicNavigationItems;

  return (
    <div className="home">
      <h1 className="home-title" onClick={toggleMenu}>
        Esto solo es una página que dice que te quiero...
      </h1>

      <Menu items={items} isVisible={menuVisible} onAction={handleMenuAction}/>
    </div>
  );
}

export default Home;