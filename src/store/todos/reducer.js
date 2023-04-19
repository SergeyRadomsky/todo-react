import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todosState: [],
    filter: 'all',
    counterActive: 0,
  },

  reducers: {
    addTodoAction: (state, { payload }) => {
      const newTask = {
        text: payload,
        id: new Date().toISOString(),
        completed: false,
      };
      state.todosState.push(newTask);
    },

    updateTodoTextAction: (state, { payload: { value, id } }) => {
      state.todosState = state.todosState.map((todo) => {
        if (id !== todo.id) {
          return todo;
        }
        return {
          ...todo,
          text: value,
        };
      });
    },

    removeTodoAction: (state, { payload }) => {
      state.todosState = state.todosState.filter((todo) => payload !== todo.id);
    },
  },
});

export const {
  addTodoAction,
  doAll,
  updateTodoTextAction,
  completeTodo,
  removeCompleted,
  removeTodoAction,
} = todoSlice.actions;

export default todoSlice.reducer;
