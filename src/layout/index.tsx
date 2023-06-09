import { FC } from 'react';
// import { FC, useState } from 'react';
import { Outlet } from 'react-router-dom';
// import Home from '../pages/Home/Home';
// БИБЛИОТЕКА classNames ####################################################################
// import classNames from 'classnames';
// import { ThemeVariants } from '../components/DropDownInput/constants';
// import { useAppSelector } from '../store/store';
// import { themeSelector } from '../store/todos/selectors';
import s from '../App.module.scss';
// import Home from '../pages/Home/Home';
import classNames from 'classnames';
import { Header } from '../components/Header/Header';

const Layout: FC = () => {
  // const [user, setUser] = useState(null);
  
  // const handleLogin = () => setUser({ id: '1', name: 'robin' });
  // const handleLogout = () => setUser(null);

  // const theme = useAppSelector(themeSelector);

  return (
    <div
      className={classNames(s.App)}
    >
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
