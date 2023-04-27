import { Header } from './components/Header/Header';
import { TodoForm } from './components/TodoForm/TodoForm';
import s from './App.module.scss';
import { TodoList } from './components/TodoList/TodoList';
import { FC } from 'react';
// import { FC, ReactNode } from 'react';
// import Button, { ButtonVariants } from '';
import { useAppDispatch, useAppSelector } from './store/store';
import { themeSelector } from './store/todos/selectors';
// import { ThemeVariants } from './components/TodoForm/constants';
import { toggleThemeAction } from '../src/store/todos/reducer';
import { ThemeVariants } from './components/TodoForm/constants';
import Button, { ButtonVariants } from './components/button';
import classNames from 'classnames';
// import { ThemeVariants } from './components/TodoForm/constants';

const App: FC = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(themeSelector);

  const changeTheme = () => {
    dispatch(toggleThemeAction());
  };

  return (
    // <div className={`${s.App} ${theme === ThemeVariants.dark ? s.dark : s.light}`}>
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
      <Header />
      <TodoForm />
      <TodoList />
    </div>
  );
};
export default App;
