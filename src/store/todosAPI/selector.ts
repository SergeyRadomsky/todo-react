import { RootState } from '../store';

export const todosAPISelector = (state: RootState) =>
  state.todosAPI.todosStateAPI;

  