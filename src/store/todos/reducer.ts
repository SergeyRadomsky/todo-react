import { PayloadAction, createSlice } from '@reduxjs/toolkit';


import {
  SortTypes,
  ViewOfLists,
  ThemeVariants,
} from '../../components/TodoForm/constants';

export type Todo = {
  text: string;
  id: string;
  completed: boolean;
};

export type TodoState = {
  todosState: Todo[];
  filteredTodosState: Todo[];
  viewTodos: string;
  ThemeApp: string;
};
export enum peremLS {
  todosLS = 'todosLS',
  viewTodosLS = 'viewTodosLS',
  ActualThemeLS = 'ActualThemeLS',
}

const initialViewTodos =
  localStorage.getItem(peremLS.viewTodosLS) || ViewOfLists.list;

const initialThemeApp =
  localStorage.getItem(peremLS.ActualThemeLS) || ThemeVariants.dark;

const initialTodosList = JSON.parse(
  localStorage.getItem(peremLS.todosLS) || '[]'
);

const initialState: TodoState = {
  filteredTodosState: initialTodosList,
  todosState: initialTodosList,
  viewTodos: initialViewTodos,
  ThemeApp: initialThemeApp,
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
        return new Date(a.id).getTime() - new Date(b.id).getTime();
      });

      state.filteredTodosState = [newTask, ...state.filteredTodosState].sort(
        (a, b) => {
          return new Date(a.id).getTime() - new Date(b.id).getTime();
        }
      );

      localStorage.setItem(peremLS.todosLS, JSON.stringify(state.todosState));
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

      state.filteredTodosState = state.todosState.map((todo) => {
        if (id !== todo.id) {
          return todo;
        }

        return {
          ...todo,
          text: value,
        };
      });

      localStorage.setItem(peremLS.todosLS, JSON.stringify(state.todosState));
    },

    removeTodoAction: (
      state: TodoState,
      { payload }: PayloadAction<string>
    ) => {
      state.todosState = state.todosState.filter((todo) => payload !== todo.id);
      state.filteredTodosState = state.filteredTodosState.filter(
        (todo) => payload !== todo.id
      );

      localStorage.setItem(
        peremLS.todosLS,
        JSON.stringify(state.filteredTodosState)
      );
    },

    toggleThemeAction: (state: TodoState) => {
      state.ThemeApp =
        state.ThemeApp === ThemeVariants.light
          ? ThemeVariants.dark
          : ThemeVariants.light;
      localStorage.setItem(peremLS.ActualThemeLS, state.ThemeApp);
    },

    toggleViewTodosAction: (state: TodoState) => {
      state.viewTodos =
        state.viewTodos === ViewOfLists.list
          ? ViewOfLists.table
          : ViewOfLists.list;
      localStorage.setItem(peremLS.viewTodosLS, state.viewTodos);
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
      // Сохранение отсортированного списка задач в localStorage
      localStorage.setItem(peremLS.todosLS, JSON.stringify(state.todosState));
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
      localStorage.setItem(
        peremLS.todosLS,
        JSON.stringify(state.filteredTodosState)
      );
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
  toggleThemeAction,
} = todos.actions;

export default todos.reducer;
