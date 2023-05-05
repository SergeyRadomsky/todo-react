import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { TodosStateAPI } from '../../store/todosAPI/reducer';

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

export const deleteTodosThunk = createAsyncThunk(
  'todosAPI/deleteTodosThunk',
  async (id: string) => {
    try {
      const response = await axios.delete<TodosStateAPI[]>(
        `https://jsonplaceholder.typicode.com/todos/${id}`
      );      
      
      return response.data;
    }
     catch (error) {
      console.error(error);
      throw error;
    }
  }
);

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
