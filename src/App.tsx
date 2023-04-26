import { Header } from './components/Header/Header';
import { TodoForm } from './components/TodoForm/TodoForm';
import s from './App.module.scss';
import { TodoList } from './components/TodoList/TodoList';
import { FC } from 'react';
import Button from './components/button';
import { useAppSelector } from './store/store';
import { themeSelector } from './store/todos/selectors';
import { ThemeVariants } from './components/TodoForm/constants';

// console.log('text');

const App: FC = () => {
  // const [theme, setTheme] = useState<>();
  const theme = useAppSelector(themeSelector);
  // const []
  
  const changeTheme = () => {
  
  };

  return (
    <div className={s.App}>
      <Button onClick={() => changeTheme(theme)}>{theme}</Button>
      <Header />
      <TodoForm />
      <TodoList />
    </div>
  );
};

export { App };
