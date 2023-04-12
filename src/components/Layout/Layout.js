import { Outlet, NavLink } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/contacts">Contacts</NavLink>
        </nav>
      </header>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
export default Layout;
