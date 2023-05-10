import { useEffect } from 'react';
import { getTodosThunk } from './thunk';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store/store';
import { TodoAPI } from '../../store/todosAPI/reducer';
import { TaskAPI } from '../TaskAPI/TaskAPI';

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


  // const handleChangeText = (id: string) => {
  //   dispatch(deleteTodosThunk())
  // }

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
        <TaskAPI
          completed={todo.completed}
          id={todo.id}
          key={todo.id}
          text={todo.title}
        />
      ))}
    </div>
  );
}

