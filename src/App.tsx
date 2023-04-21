import React from 'react';
import { Header } from './components/Header/Header';
import { TodoForm } from './components/TodoForm/TodoForm';
import s from './App.module.css';
import { TodoList } from './components/TodoList/TodoList';

const App: React.FC = () => {
  return (
    <div className={s.App}>
      <Header />
      <TodoForm />
      <TodoList />
    </div>
  ); 
};

export { App };
