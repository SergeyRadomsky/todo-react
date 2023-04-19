import { configureStore } from '@reduxjs/toolkit';
import { todoSlice } from './todos/reducer';

export const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
  },
});
