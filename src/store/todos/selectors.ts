import { RootState } from '../store';

export const todosSelector = (state: RootState) =>
  state.todos.filteredTodosState;
export const viewSelector = (state: RootState) => 
  state.todos.viewTodos;
export const themeSelector = (state: RootState) => 
  state.todos.ThemeApp;
