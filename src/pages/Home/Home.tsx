import Button, { ButtonVariants } from '../../components/button';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { themeSelector } from '../../store/todos/selectors';
import { toggleThemeAction } from '../../store/todos/reducer';
import classNames from 'classnames';
import { ThemeVariants } from '../../components/DropDownInput/constants';
import { SVGComponent } from '../../components/SvgComp';
import { Header } from '../../components/Header/Header';
import DropDownInput from '../../components/DropDownInput/DropDownInput';
import { Link } from 'react-router-dom';
import s from './Home.module.scss';
import { useState } from 'react';
import { SortedButtons } from '../../components/sortedButton/SortedButtons';

const Home = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(themeSelector);

  const changeTheme = () => {
    dispatch(toggleThemeAction());
  };

  const initialOptions = ['1', '2', '3', '4'];

  const [value, setValue] = useState('');
  const [options, setOptions] = useState(initialOptions);

  const onChange = (value: string) => {
    setValue(value);
    setOptions(initialOptions.filter((option) => option.includes(value)));
  };

  const initialOptions1 = ['11', '22', '33', '44'];

  const [value1, setValue1] = useState('');
  const [options1, setOptions1] = useState(initialOptions1);

  const onChange1 = (value: string) => {
    setValue1(value);
    setOptions1(initialOptions1.filter((option) => option.includes(value)));
  };

  return (
    <div
      className={classNames(s.Home, {
        [s.dark]: theme === ThemeVariants.dark,
        [s.light]: theme === ThemeVariants.light,
      })}
    >
      <div className={s.Menu}>
        <Link to="/" className={s.Links}>
          {' '}
          Home{' '}
        </Link>
        <Link to="/local-todos" className={s.Links}>
          {' '}
          List of local Todo
        </Link>
        <Link to="/api-todos" className={s.Links}>
          List of API Todo
        </Link>
        <Button
          onClick={changeTheme}
          variant={ButtonVariants.defaultTheme}
          activeTheme={ThemeVariants.dark === theme ? true : false}
        >
          {theme}
        </Button>
      </div>
      <SVGComponent className={s.helllo} />
      <Header />
      <DropDownInput
        options={options}
        value={value}
        onChange={onChange}
        onSubmit={() => {
          console.log();
        }}
      />
      <DropDownInput
        options={options1}
        value={value1}
        onChange={onChange1}
        onSubmit={() => {
          console.log();
        }}
      />
      <SortedButtons />
    </div>
  );
};

export default Home;
