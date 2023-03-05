import React from 'react';
import { NavLink } from 'react-router-dom';

function NavTabs() {
  return (
    <ul className="navbar-nav ms-auto">
      <li className="nav-item">
        <NavLink
          to="/react-portfolio"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/react-portfolio/projects"
          className={({ isActive }) =>
          isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Projects
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/react-portfolio/contact"
          className={({ isActive }) =>
          isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Contact Me
        </NavLink>
      </li>
    </ul>
  );
}

export default NavTabs;
