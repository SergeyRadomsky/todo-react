import { useState } from 'react';
import React from 'react';
import s from './TodoForm.module.css';
import { useDispatch } from 'react-redux';
import { addTodoAction } from '../../store/todos/reducer';

export const TodoForm = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const addTodo = (e) => {
    e.preventDefault();
    if (!!value.trim()) {
      dispatch(addTodoAction(value));
      setValue('');
    }
  };

  const onInputChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <form className={s.TodoForm} onSubmit={addTodo}>
      <input
        className={s.inputArea}
        placeholder="What needs to be done?"
        type="text"
        onChange={onInputChange}
        value={value}
      />
      <button className={s.btnInput}>New To do</button>
    </form>
  );
};
