import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div>Navbar</div>
      <nav>
        <ul>
          <NavLink to={"/"}>home</NavLink>
          <NavLink>Services</NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
