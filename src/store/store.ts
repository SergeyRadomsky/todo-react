import {
  Action,
  configureStore,
  ThunkAction,
  ThunkDispatch,
} from '@reduxjs/toolkit';

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { todos } from './todos/reducer';

export const store = configureStore({
  reducer: {
    todos: todos.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export type ThunkAppDispath = ThunkDispatch<RootState, void, Action>;
export const useAppDispatch = () => useDispatch<ThunkAppDispath>();
