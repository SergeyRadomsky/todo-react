import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { SortTypes, ViewOfLists } from '../../components/TodoForm/constants';

export type Todo = {
  text: string;
  id: string;
  completed: boolean;
};

export type TodoState = {
  todosState: Todo[];
  filteredTodosState: Todo[];
  counterActive: number;
  viewTodos: ViewOfLists;
};

const initialState: TodoState = {
  filteredTodosState: [],
  todosState: [],
  counterActive: 0,
  viewTodos: ViewOfLists.list,
};

export const todos = createSlice({
  name: 'todos',
  initialState,

  reducers: {
    addTodoAction: (
      state: TodoState,
      { payload: text }: PayloadAction<string>
    ) => {
      const newTask = {
        text,
        id: new Date().toISOString(),
        completed: false,
      };

      state.todosState = [newTask, ...state.todosState].sort((a, b) => {
        return new Date(b.id).getTime() - new Date(a.id).getTime();
      });
      state.filteredTodosState = [newTask, ...state.filteredTodosState].sort(
        (a, b) => {
          return new Date(b.id).getTime() - new Date(a.id).getTime();
        }
      );
    },

    updateTodoTextAction: (
      state: TodoState,
      { payload: { value, id } }: PayloadAction<{ value: string; id: string }>
    ) => {
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

    removeTodoAction: (
      state: TodoState,
      { payload }: PayloadAction<string>
    ) => {
      state.todosState = state.todosState.filter((todo) => payload !== todo.id);
      state.filteredTodosState = state.filteredTodosState.filter(
        (todo) => payload !== todo.id
      );
    },

    toggleViewTodosAction: (state: TodoState) => {
      state.viewTodos =
        state.viewTodos === ViewOfLists.list
          ? ViewOfLists.table
          : ViewOfLists.list;
    },

    sortTodosAction: (
      state: TodoState,
      { payload: type }: PayloadAction<SortTypes>
    ) => {
      if (type === SortTypes.dateAsc) {
        state.filteredTodosState = state.todosState.sort((a, b) => {
          return new Date(a.id).getTime() - new Date(b.id).getTime();
        });
      }

      if (type === SortTypes.dateDesk) {
        state.filteredTodosState = state.todosState.sort((a, b) => {
          return new Date(b.id).getTime() - new Date(a.id).getTime();
        });
      }

      if (type === SortTypes.lenghtAsc) {
        state.filteredTodosState = state.todosState.sort((a, b) => {
          return a.text.length - b.text.length;
        });
      }

      if (type === SortTypes.lenghtDesk) {
        state.filteredTodosState = state.todosState.sort((a, b) => {
          return b.text.length - a.text.length;
        });
      }

      if (type === SortTypes.all) {
        state.filteredTodosState = state.todosState.sort((a, b) => {
          return new Date(a.id).getTime() - new Date(b.id).getTime();
        });
      }

      if (type === SortTypes.completed) {
        state.filteredTodosState = state.todosState.filter((todo) => {
          return todo.completed === true;
        });
      }

      if (type === SortTypes.active) {
        state.filteredTodosState = state.todosState.filter((todo) => {
          return todo.completed === false;
        });
      }
    },

    changeStatusOfTaskAction: (
      state: TodoState,
      { payload: id }: PayloadAction<string>
    ) => {
      state.filteredTodosState = state.todosState.map((todo) => {
        if (id !== todo.id) {
          return todo;
        }

        return {
          ...todo,
          completed: !todo.completed,
        };
      });
      state.todosState = state.todosState.map((todo) => {
        if (id !== todo.id) {
          return todo;
        }

        return {
          ...todo,
          completed: !todo.completed,
        };
      });
    },
  },
});

export const {
  addTodoAction,
  updateTodoTextAction,
  removeTodoAction,
  changeStatusOfTaskAction,
  sortTodosAction,
  toggleViewTodosAction,
} = todos.actions;

export default todos.reducer;
