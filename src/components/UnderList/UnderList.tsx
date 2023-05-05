import { useEffect } from 'react';
import { Task } from '../Task/Task';
import { deleteTodosThunk, getTodosThunk } from './thunk';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store/store';
import { TodoAPI } from '../../store/todosAPI/reducer';

export default function UnderList() {
  const dispatch = useAppDispatch();
  const todosAPI = useSelector<RootState, TodoAPI[]>(
    (state) => state.todosAPI.todosStateAPI
  );
  const isLoading = useSelector<RootState, boolean>(
    (state) => state.todosAPI.isLoading
  );
  const error = useSelector<RootState, string | null>(
    (state) => state.todosAPI.error
  );

  useEffect(() => {
    dispatch(getTodosThunk());
  }, [dispatch]);

  const handleDelete = (id: string) => {
    dispatch(deleteTodosThunk(id));
  };
  
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <p>List with use API</p>
      {todosAPI.map((todo) => (
        <Task
          completed={todo.completed}
          id={todo.id}
          key={todo.id}
          text={todo.title}
          onDelete={() => handleDelete(todo.id)} // передаем функцию для удаления задачи в компонент Task
        />
      ))}
    </div>
  );
}

