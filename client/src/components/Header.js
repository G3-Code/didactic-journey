import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav className="nav-wrapper teal">
      <div className="container">
        <a href="/" className="brand-logo left">
          Prodpedia
        </a>
        <ul className="right">
          <li>
            <NavLink to="/addProduct">Add Product</NavLink>
          </li>
          <li>
            <NavLink to="/searchProduct">Search Product</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
