import { RootState } from '../store';

export const todosAPISelector = (state: RootState) =>
  state.todosAPI.TodosStateAPIarrtodos;

export const todosGlobalAPISelector = (state: RootState) =>
  state.todosAPI;

  