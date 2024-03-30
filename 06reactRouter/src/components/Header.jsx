import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
const Header = () => {
  return (
    <nav className="navbar">
      <img src="./logo.png" alt="logo" />
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/blog">Blog</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/github">Github</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
