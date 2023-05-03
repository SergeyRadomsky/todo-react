import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { TodoAPI } from '../../store/todos/reducer';


export const postTodosThunk = createAsyncThunk(
  'todos/fetchTodos', async () => {
    const response = await axios.get<TodoAPI[]>(
      'https://jsonplaceholder.typicode.com/todos'
    );

    return response.data;
  });
