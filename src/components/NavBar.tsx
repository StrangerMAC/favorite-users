import { NavLink } from 'react-router-dom';
import cl from './NavBar.module.css';
import { login, logout } from '../API/UserService';

const NavBar: React.FC = () => {
  return (
    <>
      <div>
        <NavLink className="App-link" to="/">
          About
        </NavLink>
        <NavLink className="App-link" to="/users">
          Users
        </NavLink>
        <NavLink className="App-link" to="/favorite">
          Favorite users
        </NavLink>
      </div>
      <div className="menu">
        <button className={cl.myButton} onClick={login}>
          Login
        </button>
        <button className={cl.myButton} onClick={logout}>
          Logout
        </button>
      </div>
    </>
  );
};

export { NavBar };
