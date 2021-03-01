import React from "react";
import { Link } from "react-router-dom";
import { FaPizzaSlice } from "react-icons/fa";

import "./nav.scss";

const Nav = ({ toggle }) => {
  return (
    <nav>
      <div className="container" onClick={toggle}>
        <Link to="/" className="logo">
          Pizza
        </Link>
        <div className="nav-icon">
          <span>Menu</span>
          <FaPizzaSlice className="icon" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
