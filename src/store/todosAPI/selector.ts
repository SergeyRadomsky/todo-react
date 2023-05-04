import { RootState } from '../store';

export const todosAPISelector = (state: RootState) =>
  state.todosAPI.todosStateAPI;
export const todosAPIFilteredSelector = (state: RootState) =>
  state.todosAPI.filteredTodosStateAPI;
  