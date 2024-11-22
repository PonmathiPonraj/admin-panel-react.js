// components/UserManagement.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserManagement = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users (Replace with actual API)
    axios.get('/api/users').then((response) => setUsers(response.data));
  }, []);

  const handleDelete = (userId) => {
    // Delete user logic (Replace with actual API)
    axios.delete(`/api/users/${userId}`).then(() => {
      setUsers(users.filter((user) => user.id !== userId));
    });
  };

  return (
    <div className="container mt-3">
      <h2>Manage Users</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
