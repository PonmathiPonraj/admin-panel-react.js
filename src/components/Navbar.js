// components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Admin Dashboard</a>
        <button className="btn btn-outline-danger">Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
