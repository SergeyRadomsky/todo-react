import React, { useState, FC } from 'react';
import s from '../Task/Task.module.scss';
import {
  // removeTodoAction,
  // updateTodoTextAction,
  // changeStatusOfTaskAction,
} from '../../store/todos/reducer';

import { useAppDispatch } from '../../store/store';
import { deleteTodosThunk, doneTodoAPIThunk } from '../UnderList/thunk';

interface TaskProps {
  completed: boolean;
  title: string;
  id: string;
}

export const TaskAPI: FC<TaskProps> = ({ completed, title, id}) => {
  const dispatch = useAppDispatch();

  const [value, setValue] = useState('');
  const [isEditable, setIsEditable] = useState(false);
  
  const onDelete = (id: string) => {  
    console.log('hello');
    dispatch(deleteTodosThunk(id));
  };

  const changeTaskForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const submitTaskForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!!value.trim()) {
      // dispatch(updateTodoTextAction({ value, id }));
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
    setValue(title);
  };

  // const removeTodo = () => {
  //   dispatch(removeTodoAction(id));
  // };

  const handleChange = (id: string, completed: boolean) => {
    dispatch(doneTodoAPIThunk({id, completed: !completed, title: title}));
  };

  return (
    <div className={s.Task}>
      <input
        className={s.checkbox}
        checked={completed}
        type="checkbox"
        onChange={() => handleChange(id, completed)}
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
          {title}
        </div>
      ) : (
        <div className={s.taskText} onDoubleClick={setTodoEditable}>
          {title}
        </div>
      )}
      <button className={s.delete} onClick={() => onDelete(id)}>
        X
      </button>
    </div>
  );
};
