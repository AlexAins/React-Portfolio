import React from 'react';
import { Link } from 'react-router-dom';

function NavTabs() {
  return (
    <ul className="navbar-nav ms-auto me-3">
      <li className="nav-item">
        <Link to="/" className="text-decoration-none mx-3">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/projects" className="text-decoration-none mx-3">
          Projects
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/contact" className="text-decoration-none mx-3">
          Contact Me
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
