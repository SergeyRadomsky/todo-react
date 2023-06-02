import { RootState } from '../store';

export const todosSelector = (state: RootState) =>
  state.todos.filteredTodosState;
export const DropFilterArrSelector = (state: RootState) =>
  state.todos.dropFilterArr;
export const viewSelector = (state: RootState) => 
  state.todos.viewTodos;
export const themeSelector = (state: RootState) => 
  state.todos.ThemeApp;

