// components/RoleManagement.js
import React, { useState } from 'react';

const RoleManagement = () => {
  const [roles, setRoles] = useState(['Admin', 'Editor', 'Viewer']);

  const handleAddRole = (newRole) => {
    setRoles([...roles, newRole]);
  };

  return (
    <div className="container mt-3">
      <h2>Manage Roles</h2>
      <ul className="list-group">
        {roles.map((role, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between">
            {role}
            <button className="btn btn-danger btn-sm">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoleManagement;
