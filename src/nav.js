import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function NavBar() {
  const navStyle = {
    color: "white",
    textDecoration: "none",
  };

  return (
    <div>
      <nav className="navigation">
        <h2 className="logo">ADEHENRY.</h2>
        <ul className="nav-links">
          <Link style={navStyle} to="/about">
            <li>About</li>
          </Link>
          <Link style={navStyle} to="/shop">
            <li>Shop</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
