import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { TodosStateAPI} from '../../store/todosAPI/reducer';

export const getTodosThunk = createAsyncThunk(
  'todosAPI/getTodosThunk',
  async () => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/todos'
    );

    return response.data;
  }
);

export const deleteTodosThunk = createAsyncThunk(
  'todosAPI/deleteTodosThunk',
  async (id: string) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
      console.log(response.data);  
      const updatedList = response.data;
      const idDeleted = id;
      
      return {updatedList, idDeleted};

    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

export const doneTodoAPIThunk = createAsyncThunk(
  'todosApi/doneTodoAPIThunk',
  async ({ id, completed, title }: { id: string; completed: boolean; title: string }) => {
    try {
      const updatedTodo = {
        id,
        completed,
        title,
      };

      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        updatedTodo
      );

      return response.data;
      
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);