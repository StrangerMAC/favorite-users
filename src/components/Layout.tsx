import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar } from './NavBar';

const Layout: React.FC = () => {
  return (
    <>
      <header className="App-header">
        <NavBar />
      </header>

      <main className="App-main">
        <Outlet />
      </main>

      <footer className="App-footer">
        <h4>Made in 2023 year</h4>
      </footer>
    </>
  );
};

export { Layout };
