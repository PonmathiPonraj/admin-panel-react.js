// components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-dark text-white vh-100 p-3">
      <h3>Admin Dashboard</h3>
      <ul className="nav flex-column">
        <li className="nav-item my-2">
          <Link to="/users" className="nav-link text-white">Manage Users</Link>
        </li>
        <li className="nav-item my-2">
          <Link to="/roles" className="nav-link text-white">Manage Roles</Link>
        </li>
        <li className="nav-item my-2">
          <Link to="/permissions" className="nav-link text-white">Manage Permissions</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
