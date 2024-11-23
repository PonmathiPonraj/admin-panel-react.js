import React, { useState } from 'react';
import UserManagement from './UserManagement';
import RoleManagement from './RoleManagement';
import PermissionsManager from './PermissionsManager';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('users');

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <nav className="sidebar bg-dark text-white p-3" style={{ minWidth: '250px', height: '100vh' }}>
        <h2 className="text-center mb-4">Admin Panel</h2>
        <ul className="nav flex-column">
          <li className="nav-item mb-3">
            <button
              className={`btn w-100 text-start ${activeTab === 'users' ? 'btn-primary' : 'btn-dark text-white'}`}
              onClick={() => setActiveTab('users')}
            >
              User Management
            </button>
          </li>
          <li className="nav-item mb-3">
            <button
              className={`btn w-100 text-start ${activeTab === 'roles' ? 'btn-primary' : 'btn-dark text-white'}`}
              onClick={() => setActiveTab('roles')}
            >
              Role Management
            </button>
          </li>
          <li className="nav-item mb-3">
            <button
              className={`btn w-100 text-start ${activeTab === 'permissions' ? 'btn-primary' : 'btn-dark text-white'}`}
              onClick={() => setActiveTab('permissions')}
            >
              Permissions
            </button>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="content flex-grow-1 p-4">
        {activeTab === 'users' && <UserManagement />}
        {activeTab === 'roles' && <RoleManagement />}
        {activeTab === 'permissions' && <PermissionsManager />}
      </div>
    </div>
  );
};

export default AdminPanel;
