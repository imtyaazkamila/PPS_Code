// src/Navbar.js
import React from "react";
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="menu">
        <li className="menu-item">Menu</li>
        <li className="menu-item">Order</li>
        <li className="menu-item">Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
