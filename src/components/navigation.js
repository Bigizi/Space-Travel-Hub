import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './navigation.css';

const Navigation = () => (
  <>
    <nav>
      <div className="links">
        <NavLink to="/" className="lists">
          Rockets
        </NavLink>
        <NavLink to="/missions" className="list">
          Missions
        </NavLink>
        <NavLink to="/dragons" className="list">
          Dragons
        </NavLink>
        <NavLink to="/profile" className="list">
          My Profile
        </NavLink>
      </div>
    </nav>
    <Outlet />
  </>
);

export default Navigation;
