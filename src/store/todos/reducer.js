import { createSlice } from '@reduxjs/toolkit';

export const todos = createSlice({
  name: 'todos',
  initialState: {
    todosState: [],
    filter: 'all',
    counterActive: 0,
  },

  reducers: {
    addTodoAction: ( state, { payload: text }) => {
      const newTask = {
        text,
        id: new Date().toISOString(),
        completed: false,
      };
      state.todosState.unshift(newTask);
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

    changeStatusOfTaskAction: ( state, { payload: { id } }) => {
      state.todosState = state.todosState.map((todo) => {
        if (id !== todo.id) return todo
        return {
          ...todo,
          completed: !todo.completed,
        }
      })
    },


  },
});

export const { addTodoAction, updateTodoTextAction, removeTodoAction, changeStatusOfTaskAction } =
  todos.actions;

export default todos.reducer;
