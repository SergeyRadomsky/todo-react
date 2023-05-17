import { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Home from '../pages/Home/Home';

const Layout: FC = () => {
  return ( <>
    <Home />

    <Outlet />
    </>
  );
};

export default Layout;