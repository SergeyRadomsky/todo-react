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

const initialViewTodos =
  localStorage.getItem('viewTodosLS') || ViewOfLists.list;

const initialThemeApp =
  localStorage.getItem('ActualThemeLS') || ThemeVariants.dark;

const initialState: TodoState = {
  filteredTodosState: [],
  todosState: [],
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

    // chooseThemeAction: (state: TodoState) => {
    //   if (localStorage.getItem('ActualThemeLS') == ThemeVariants.dark) {
    //     state.ThemeApp === ThemeVariants.dark;

    //     return 's.darkTheme';
    //   }

    //   if (localStorage.getItem('ActualThemeLS') == ThemeVariants.light) {
    //     state.ThemeApp === ThemeVariants.light;

    //     return 's.lightTheme';
    //   }

    //   if (localStorage.getItem('ActualThemeLS') == undefined || null) {
    //     return 's.none';
    //   }

    //   return 's.none';
    // },

    toggleThemeAction: (state: TodoState) => {
      localStorage.setItem(
        'ActualThemeLS',
        state.ThemeApp === ThemeVariants.dark
          ? ThemeVariants.light
          : ThemeVariants.dark
      );
      state.ThemeApp =
        state.ThemeApp === ThemeVariants.light
          ? ThemeVariants.dark
          : ThemeVariants.light;
    },

    toggleViewTodosAction: (state: TodoState) => {
      localStorage.setItem(
        'viewTodosLS',
        state.viewTodos === ViewOfLists.list
          ? ViewOfLists.table
          : ViewOfLists.list
      );
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
  toggleThemeAction,
  // chooseThemeAction,
} = todos.actions;

export default todos.reducer;
