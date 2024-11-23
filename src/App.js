import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import AdminPanel from './components/AdminPanel';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return <>{isLoggedIn ? <AdminPanel /> : <LoginPage onLogin={handleLogin} />}</>;
};

export default App;
