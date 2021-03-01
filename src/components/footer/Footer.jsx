import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <Link className="logo" to="/">
        Pizza
      </Link>
      <div className="social">
        <Link to="/" aria-label="linkedin" target="_blank">
          <FaLinkedin className="icon red" />
        </Link>
        <Link to="/" aria-label="twitter" target="_blank">
          <FaTwitter className="icon yellow" />
        </Link>
        <Link to="/" aria-label="facebook" target="_blank">
          <FaFacebook className="icon red" />
        </Link>
        <Link to="/" aria-label="instagram" target="_blank">
          <FaInstagram className="icon yellow" />
        </Link>
        <Link to="/" aria-label="youtube" target="_blank">
          <FaYoutube className="icon red" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
