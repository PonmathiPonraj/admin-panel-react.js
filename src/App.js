import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import AdminPanel from './components/AdminPanel';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return <>{isLoggedIn ? <AdminPanel onLogout={handleLogout} /> : <LoginPage onLogin={handleLogin} />}</>;
};

export default App;
