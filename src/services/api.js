// services/api.js
let mockUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active', roles: ['Admin'] },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Inactive', roles: ['Editor'] },
];

let mockRoles = [
  { id: 1, name: 'Admin', permissions: ['Read', 'Write', 'Delete'] },
  { id: 2, name: 'Editor', permissions: ['Read', 'Write'] },
];

export const fetchUsers = () => Promise.resolve(mockUsers);

export const fetchRoles = () => Promise.resolve(mockRoles);

export const createUser = (user) => {
  const newUser = { id: mockUsers.length + 1, ...user };
  mockUsers.push(newUser);
  return Promise.resolve(newUser);
};

export const updateUser = (id, updatedUser) => {
  mockUsers = mockUsers.map(user => user.id === id ? { ...user, ...updatedUser } : user);
  return Promise.resolve(updatedUser);
};

export const deleteUser = (id) => {
  mockUsers = mockUsers.filter(user => user.id !== id);
  return Promise.resolve(id);
};

export const createRole = (role) => {
  const newRole = { id: mockRoles.length + 1, ...role };
  mockRoles.push(newRole);
  return Promise.resolve(newRole);
};

export const updateRole = (id, updatedRole) => {
  mockRoles = mockRoles.map(role => role.id === id ? { ...role, ...updatedRole } : role);
  return Promise.resolve(updatedRole);
};
