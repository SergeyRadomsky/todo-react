import { configureStore } from '@reduxjs/toolkit';
import { todos } from './todos/reducer';

export const store = configureStore({
  reducer: {
    todos: todos.reducer,
  },
});

// Выведение типов `RootState` и `AppDispatch` из хранилища
export type RootState = ReturnType<typeof store.getState>
// Выведенные типы: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch