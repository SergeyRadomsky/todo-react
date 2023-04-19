import React from 'react';
import { Header } from './components/Header/Header.jsx';
import { TodoForm } from './components/TodoForm/TodoForm';
import s from './App.module.css';
import { TodoList } from './components/TodoList/TodoList.jsx';

const App = () => {
  return (
    <div className={s.App}>
      <Header />
      <TodoForm />
      <TodoList />
    </div>
  );
};

export { App };
