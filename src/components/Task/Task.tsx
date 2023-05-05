import React, { useState, FC } from 'react';
import s from '../Task/Task.module.scss';
import {
  removeTodoAction,
  updateTodoTextAction,
  changeStatusOfTaskAction,
} from '../../store/todos/reducer';

import { useAppDispatch } from '../../store/store';

interface TaskProps {
  completed: boolean;
  text: string;
  id: string;
  onDelete: () => void;
}

const onDelete = () => {
  console.log('hello');
};

export const Task: FC<TaskProps> = ({ completed, text, id, onDelete }) => {
  const dispatch = useAppDispatch();

  const [value, setValue] = useState('');
  const [isEditable, setIsEditable] = useState(false);

  const changeTaskForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const submitTaskForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!!value.trim()) {
      dispatch(updateTodoTextAction({ value, id }));
    }
    setIsEditable(false);
  };

  const onCancel = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Escape') {
      setIsEditable(false);
    }
  };

  const setTodoEditable = () => {
    setIsEditable(true);
    setValue(text);
  };

  const removeTodo = () => {
    dispatch(removeTodoAction(id));
  };

  const handleChange = (id: string) => {
    dispatch(changeStatusOfTaskAction(id));
  };

  return (
    <div className={s.Task}>
      <input
        className={s.checkbox}
        checked={completed}
        type="checkbox"
        onChange={() => handleChange(id)}
      />
      {isEditable ? (
        <form onSubmit={submitTaskForm}>
          <input
            onKeyUp={onCancel}
            autoFocus
            onChange={changeTaskForm}
            value={value}
            className={s.inputInTask}
          />
        </form>
      ) : completed ? (
        <div
          className={`${s.taskText} ${s.TaskComplete}`}
          onDoubleClick={setTodoEditable}
        >
          {text}
        </div>
      ) : (
        <div className={s.taskText} onDoubleClick={setTodoEditable}>
          {text}
        </div>
      )}
      <button className={s.delete} onClick={onDelete} /* onClick={removeTodo} */>
        X
      </button>
    </div>
  );
};
