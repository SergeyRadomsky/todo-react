import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { TodosStateAPI, todosAPI } from '../../store/todosAPI/reducer';

export const getTodosThunk = createAsyncThunk(
  'todosAPI/getTodosThunk',
  async () => {
    const response = await axios.get<TodosStateAPI[]>(
      'https://jsonplaceholder.typicode.com/todos'
    );
    console.log(response);
    console.log(response.data);

    return response.data;
  }
);

const removeItemFromList = (
  idToRemove: string,
  list: TodosStateAPI.TodosStateAPIarrtodos[]) => {
  return list.filter((item) => item.id !== idToRemove);
};

const changeStatusOfTaskAction = (
  idToChange: string,
  list: TodosStateAPI[]
): TodosStateAPI[] => {
  list = list.map((todo) => {
    if (todo.id !== idToChange) {
      return todo;
    }

    return {
      ...todo,
      completed: !todo.completed,
    };
  });

  return list;
};

export const deleteTodosThunk = createAsyncThunk(
  'todosAPI/deleteTodosThunk',
  async (id: string) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
      // Получаем все элементы списка, за исключением удаленного
      const updatedList = removeItemFromList(id, todosAPI);

      return updatedList;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

export const doneTodoAPIThunk = createAsyncThunk(
  'todosApi/doneTodoAPIThunk',
  async ({ id, completed, title }: { id: string; completed: string; title: string }) => {
    try {
      const updatedTodo = {
        id,
        title,
        completed,
      };

      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        updatedTodo
      );
      console.log(response);

      return response.data;
    } catch (error) {
      console.log(id);
      console.log(completed);
      console.log(error);
      throw error;
    }
  }
);

// export const deleteTodosThunk = createAsyncThunk(
//   'todosAPI/deleteTodosThunk',
//   async (id: string) => {
//     try {
//       const response = await axios.delete<TodosStateAPI[]>(
//         `https://jsonplaceholder.typicode.com/todos/${id}`
//       );
//       console.log(response);
//       console.log(response.data);

//       return response.data;
//     }
//      catch (error) {
//       console.error(error);
//       throw error;
//     }
//   }

// );

// import axios from 'axios';
// import { useAppDispatch } from '../../store/store';

// export const FETCH_TODOS_REQUEST = 'FETCH_TODOS_REQUEST';
// export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
// export const FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE';

// export const fetchTodosRequest = () => {
//    const dispatch = useAppDispatch();

//   return {
//     type: FETCH_TODOS_REQUEST,
//   };
// };

//  export const fetchTodosSuccess = todosAPI => {
//   return {
//     type: FETCH_TODOS_SUCCESS,
//     payload: todos,
//   };
// };

//  export const fetchTodosFailure = error => {
//   return {
//     type: FETCH_TODOS_FAILURE,
//     payload: error,
//   };
// };

//  export const fetchTodos = () => {
//   return dispatch => {
//     dispatch(fetchTodosRequest());
//     axios
//       .get('https://jsonplaceholder.typicode.com/todos')
//       .then(response => {
//         const todos = response.data;
//         dispatch(fetchTodosSuccess(todos));
//       })
//       .catch(error => {
//         const errorMessage = error.message;
//         dispatch(fetchTodosFailure(errorMessage));
//       });
//   };
// };
