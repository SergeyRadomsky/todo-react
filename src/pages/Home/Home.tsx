import Button, { ButtonVariants } from '../../components/button';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { themeSelector } from '../../store/todos/selectors';
import { toggleThemeAction } from '../../store/todos/reducer';
import classNames from 'classnames';
import { ThemeVariants } from '../../components/DropDownInput/constants';
import { SVGComponent } from '../../components/SvgComp';
import { Header } from '../../components/Header/Header';
import { DropDownInput } from '../../components/DropDownInput/DropDownInput';
import { Link } from 'react-router-dom';
import s from './Home.module.scss';

const Home = () => {
    const dispatch = useAppDispatch();
    const theme = useAppSelector(themeSelector);
  
    const changeTheme = () => {
      dispatch(toggleThemeAction());
    };

  return (

    <div
      className={classNames(s.App, {
        [s.dark]: theme === ThemeVariants.dark,
        [s.light]: theme === ThemeVariants.light,
      })}
    >
      <Button
        onClick={changeTheme}
        variant={ButtonVariants.defaultTheme}
        activeTheme={ThemeVariants.dark === theme ? true : false}
      >
        {theme}
      </Button>
      <SVGComponent className={s.helllo} />
      <Header />
      <DropDownInput />
      <Link to="/"> Home </Link>
      <Link to="/local-todos" > List of local Todo</Link>
      <Link to="/api-todos">List of API Todo</Link>
    </div>
  );
};

export default Home;