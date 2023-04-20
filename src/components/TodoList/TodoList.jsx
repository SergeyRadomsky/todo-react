import React from 'react';
import { Task } from './Task';
import { useSelector } from 'react-redux';
import { todosSelector } from '../../store/todos/selectors';

export const TodoList = () => {
  const todos = useSelector(todosSelector);

  return (
    <div>
      {todos.map(({ text, id, completed }) => (
        <Task text={text} completed={completed} id={id} key={id}  todos={todos}/>
      ))}
    </div>
  );
};
