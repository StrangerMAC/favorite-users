import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import React, { useEffect } from 'react';
import { login } from './API/UserService';
import './App.css';

const App: React.FC = () => {
  useEffect(() => {
    login();
  }, []);

  return <RouterProvider router={router} />;
};

export { App };
