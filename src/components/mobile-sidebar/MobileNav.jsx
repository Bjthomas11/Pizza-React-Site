import React from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import styled from "styled-components";

import "./mobileNav.scss";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 350px;
  height: 100%;
  background: #ffc500;
  display: grid;
  align-items: center;
  top: 0;
  transition: 0.3s ease-in-out;
  right: ${({ isOpen }) => (isOpen ? "0" : "-1000px")};

  @media screen and (max-width: 560px) {
    width: 100%;
  }
`;

const MobileNav = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer
      className="mobile-container"
      isOpen={isOpen}
      onClick={toggle}
      style={styled.SidebarContainer}
    >
      <div className="close" onClick={toggle}>
        <FaTimes className="icon" />
      </div>
      <div className="links">
        <Link to="/" className="link">
          Pizzas
        </Link>
        <Link to="/" className="link">
          Desserts
        </Link>
        <Link to="/" className="link">
          Full Menu
        </Link>
      </div>
      <button>Order Now</button>
    </SidebarContainer>
  );
};

export default MobileNav;
