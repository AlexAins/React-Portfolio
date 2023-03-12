import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"

function NavTabs() {
  return (
    <ul className="navbar-nav ms-auto me-3">
      <li className="nav-items mx-4">
        <Link to="/" className="text-decoration-none nav-item">
          Home
        </Link>
      </li>
      <li className="nav-items mx-4">
        <Link to="/projects" className="text-decoration-none nav-item">
          Projects
        </Link>
      </li>
      <li className="nav-items ms-4 me-5">
        <Link to="/contact" className="text-decoration-none nav-item">
          Contact Me
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
