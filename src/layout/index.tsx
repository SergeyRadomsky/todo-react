import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../pages/Home/Home';
import classNames from 'classnames';
import { ThemeVariants } from '../components/DropDownInput/constants';
import { useAppSelector } from '../store/store';
import { themeSelector } from '../store/todos/selectors';
import s from '../App.module.scss';

const Layout: FC = () => {

  const theme = useAppSelector(themeSelector);


  return (
    <div
      className={classNames(s.App, {
        [s.dark]: theme === ThemeVariants.dark,
        [s.light]: theme === ThemeVariants.light,
      })}
    >
      <Home />

      <Outlet />
    </div>
  );
};

export default Layout;
