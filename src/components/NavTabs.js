import React from 'react';
import { Link } from 'react-router-dom';

function NavTabs() {
  return (
    <ul className="navbar-nav ms-auto">
      <li className="nav-item">
        <Link to="/">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/projects">
          Projects
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/contact">
          Contact Me
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
