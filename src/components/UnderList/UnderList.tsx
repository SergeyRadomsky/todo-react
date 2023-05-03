// import axios from 'axios';
import { useEffect } from 'react';
import { Task } from '../Task/Task';
import { TodoAPI } from '../../store/todos/reducer';
import { postTodosThunk } from './thunk';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';


export default function UnderList() {
  const dispatch = useDispatch();
  const todos = useSelector<RootState, TodoAPI[]>((state) => state.todos.todosState);
  const isLoading = useSelector<RootState, boolean>(
    (state) => state.todos.isLoading
  );
  const error = useSelector<RootState, string | null>(
    (state) => state.todos.error
  );

  useEffect(() => {
    dispatch(postTodosThunk());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <p>List with use API</p>
      {todos.map((todo) => (
        <Task
          completed={todo.completed}
          id={todo.id}
          key={todo.id}
          text={todo.title}
        />
      ))}
    </div>
  );
}

// import axios from 'axios';
// import { useState, useEffect } from 'react';
// import { Task } from '../Task/Task';
// import { TodoAPI } from '../../store/todos/reducer';
// import { postTodosThunk } from './thunk';
// import { useDispatch, useSelector } from 'react-redux';

// // export type Todo = {
// //   id: number;
// //   title: string;
// //   completed: boolean;
// // }

// export default function UnderList() {
//   const [todos, setTodos] = useState<Array<TodoAPI>>([]);

//   const getTodos = async () => {
//     try {
//       const response = await axios.get(
//         'https://jsonplaceholder.typicode.com/todos'
//       );
//       setTodos(response.data);
//     }
//     catch (error) {
//       alert(error);
//     }
//   };

//   useEffect(() => {
//     getTodos();
//   }, []);

//   return (
//     <div>
//       <p>List with use API</p>
//       {todos.map((todo) => (
//         <Task
//           completed={todo.completed}
//           id={todo.id}
//           key={todo.id}
//           text={todo.title}
//         />
//       ))}
//     </div>
//   );
// }

// import axios from 'axios';
// import { useState, useEffect } from 'react';
// import { Task } from '../Task/Task';
// import { createAsyncThunk } from "@reduxjs/toolkit";

// export type Todo = {
//   id: number;
//   title: string;
//   completed: boolean;
// }
// export const fetchTodos = createAsyncThunk(
//   'todos/'

// )

// export default function UnderList() {
//   const [todos, setTodos] = useState<Array<Todo>>([]);

//   // const getTodos = async () => {
//   //   try {
//   //     const response = await axios.get(
//   //       'https://jsonplaceholder.typicode.com/todos'
//   //     );
//   //     setTodos(response.data);
//   //   }
//   //   catch (error) {
//   //     alert(error);
//   //   }
//   // };

//   useEffect(() => {
//     getTodos();
//   }, []);

//   return (
//     <div>
//       <p>List with use API</p>
//       {todos.map((todo) => (
//         <Task
//           completed={todo.completed}
//           id={todo.id}
//           key={todo.id}
//           text={todo.title}
//         />
//       ))}
//     </div>
//   );
// }
