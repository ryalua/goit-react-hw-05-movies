// import Header from 'components/Header/Header';
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Footer, Header, Pages } from './LayoutStyled';

function Layout() {
  return (
    <>
      <Header>
        <nav>
          <NavLink className="link" to="/">
            Home
          </NavLink>
          <NavLink className="link" to="/movies">
            Movies
          </NavLink>
        </nav>
      </Header>

      <Pages>
        <Outlet />
      </Pages>

      <Footer>ReactRouter Kharkiv 2023</Footer>
    </>
  );
}

export default Layout;
