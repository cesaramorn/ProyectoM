import { useState } from "react";
import Menu from "../components/Menu";
import { useAuth } from "../context/AuthContext";

import "./Home.css";

function Home() {
  const [menuVisible, setMenuVisible] = useState(false);
  const { isAuthenticated } = useAuth();

  const toggleMenu = () => setMenuVisible((prev) => !prev);

  const navigationItems = isAuthenticated
    ? [
        { label: "Home", path: "/" },
        // Future pages
      ]
    : [{ label: "Login", path: "/login" }];

  return (
    <div className="home">
      <h1 className="home-title" onClick={toggleMenu}>
        Esto solo es una página que dice que te quiero...
      </h1>

      <Menu items={navigationItems} isVisible={menuVisible} />
    </div>
  );
}

export default Home;