import React, { useState } from 'react';
import s from './Task.module.css';
import { useDispatch } from 'react-redux';
import {
  removeTodoAction,
  updateTodoTextAction,
  changeStatusOfTaskAction,
} from '../../store/todos/reducer';

export const Task = ({ completed, text, id, todos}) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const [isEditable, setIsEditable] = useState(false);
  // const [isCompleted, setIsCompleted] = useState(false);
  console.log(completed);

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
    if (e.code === 'Escape') {
      setIsEditable(false);
    }
  };

  const setTodoEditable = (e) => {
    setIsEditable(true);
    setValue(text);
  };

  const removeTodo = () => {
    dispatch(removeTodoAction(id));
  };

  // const handleChange = (e) => {
  //   // setIsCompleted(true)
  //   setIsCompleted(e.target.checked)
  //   dispatch(changeStatusOfTaskAction(id))
  //   return e.target.checked = !completed;
  // }

  return (
    <>
      <div className={s.Task}>
        <input 
          className={s.checkbox}
          checked={completed}
          type="checkbox" 
          onChange={() => dispatch(changeStatusOfTaskAction(id))}
        >  
        </input>
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
        ) : (!completed ?
              (<div className={s.taskText} onDoubleClick={setTodoEditable}>
                {text}
               </div>
              ) : (
          <div className={`${s.taskText} ${s.TaskComplete}`} onDoubleClick={setTodoEditable}>
            {text}
          </div>)
        )}
        <button className={s.delete} onClick={removeTodo}>
          X
        </button>
      </div>
    </>
  );
};
