import { Header } from './components/Header/Header';
import { TodoForm } from './components/TodoForm/TodoForm';
import s from './App.module.scss';
import { TodoList } from './components/TodoList/TodoList';
import { FC } from 'react';

const App: FC = () => {
  return (
    <div className={s.App}>
      <Header />
      <TodoForm />
      <TodoList />
    </div>
  );
};

export { App };
