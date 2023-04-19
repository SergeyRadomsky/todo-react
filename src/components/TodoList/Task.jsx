import React, { useState } from 'react';
import s from './Task.module.css';
import { useDispatch } from 'react-redux';
import {
  removeTodoAction,
  updateTodoTextAction,
} from '../../store/todos/reducer';

export const Task = ({ completed, text, id }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const [isEditable, setIsEditable] = useState(false);

  const changeTaskForm = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const submitTaskForm = (e) => {
    e.preventDefault();
    if (!!value.trim()) {
      dispatch(updateTodoTextAction({ value, id }));
    }
    setIsEditable(false);
  };

  const onCancel = (e) => {
    e.preventDefault();
    if (e.code === 'Escape') {
      setIsEditable(false);
    }
  };

  const setTodoEditable = (e) => {
    e.preventDefault();
    setIsEditable(true);
    setValue(text);
  };

  const removeTodo = () => {
    dispatch(removeTodoAction(id));
  };

  return (
    <>
      <div className={s.Task}>
        {isEditable ? (
          <form onSubmit={submitTaskForm}>
            <input
              onKeyUp={onCancel}
              autoFocus
              onChange={changeTaskForm}
              type="text"
              value={value}
              className={s.inputInTask}
            />
          </form>
        ) : (
          <div className={s.taskText} onDoubleClick={setTodoEditable}>
            {text}
          </div>
        )}
        <button className={s.delete} onClick={removeTodo}>
          X
        </button>
      </div>
    </>
  );
};
