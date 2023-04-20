import { configureStore } from '@reduxjs/toolkit';
import { todos } from './todos/reducer';

export const store = configureStore({
  reducer: {
    todos: todos.reducer,
  },
});
