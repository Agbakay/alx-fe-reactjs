import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <link to="/">
          <li>Home</li>
        </link>
        <Link to={"/about"}>
          {" "}
          <li>About</li>
        </Link>

        <Link to={"/services"}>
          {" "}
          <li>Services</li>
        </Link>

        <Link to={"/contact"}>
          {" "}
          <li>Contact</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
