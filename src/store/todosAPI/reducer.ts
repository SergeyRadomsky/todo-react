import { createSlice } from '@reduxjs/toolkit';
import { deleteTodosThunk, doneTodoAPIThunk, getTodosThunk } from '../../components/UnderList/thunk';
// import { PayloadAction, createSlice } from '@reduxjs/toolkit';
// import { getTodosThunk } from '../../components/UnderList/thunk';
// import axios from 'axios';

export type TodoAPI = {
  id: string;
  title: string;
  completed: boolean;
};

export type TodosStateAPI = {
  TodosStateAPIarrtodos: TodoAPI[];
  // filteredTodosStateAPI: TodoAPI[] | [];
  isLoading: boolean;
  error: string | null;
};

const initialTodosListAPI: TodosStateAPI = {
  TodosStateAPIarrtodos: [],
  isLoading: false,
  error: 'error',
};

const initialState: TodosStateAPI = {
  TodosStateAPIarrtodos: initialTodosListAPI.TodosStateAPIarrtodos,
  // filteredTodosStateAPI: JSON.parse(initialTodosListAPI),

  isLoading: false,
  error: null,
};


/* ИМЯ СЕЛЕКТОРА!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */
export const todosAPI = createSlice({
  name: 'todosAPI',
  initialState,

  reducers: {
    // addTodoAction: (
    //   state: TodosStateAPI,
    //   { payload: PayloadAction<string>
    // { payload: text }: PayloadAction<string>
    // ) => {
    //   const newTask = {
    //     text,
    //     id: new Date().toISOString(),
    //     completed: false,
    //   };
    //   state.todosStateAPI = [newTask, ...state.todosStateAPI].sort((a, b) => {
    //     return new Date(a.id).getTime() - new Date(b.id).getTime();
    //   });
    //   state.filteredTodosState = [newTask, ...state.filteredTodosState].sort(
    //     (a, b) => {
    //       return new Date(a.id).getTime() - new Date(b.id).getTime();
    //     }
    //   );
    //   // localStorage.setItem(peremLS.todosLS, JSON.stringify(state.todosState));
    // },
    // updateTodoTextAction: (
    //   state: TodosStateAPI,
    //   { payload: { value, id PayloadAction<{ value: string; id: string }>
    // { payload: { value, id } }: PayloadAction<{ value: string; id: string }>
    // ) => {
    //   state.todosStateAPI = state.todosStateAPI.map((todo) => {
    //     if (id !== todo.id) {
    //       return todo;
    //     }
    //     return {
    //       ...todo,
    //       text: value,
    //     };
    //   });
    //   state.filtered.todosStateAPI = state.todosStateAPI.map((todo) => {
    //     if (id !== todo.id) {
    //       return todo;
    //     }
    //     return {
    //       ...todo,
    //       text: value,
    //     };
    //   });
    //   localStorage.setItem(peremLS.todosLS, JSON.stringify(state.todosState));
    // },
    // removeTodoAction: (
    //   state: TodoState,
    //   { PayloadAction<string>
    // { payload }: PayloadAction<string>
    // ) => {
    //   state.todosState = state.todosState.filter((todo) => payload !== todo.id);
    //   state.filteredTodosState = state.filteredTodosState.filter(
    //     (todo) => payload !== todo.id
    //   );
    //   localStorage.setItem(
    //     peremLS.todosLS,
    //     JSON.stringify(state.filteredTodosState)
    //   );
    // },
    // toggleThemeAction: (state: TodoState) => {
    //   state.ThemeApp =
    //     state.ThemeApp === ThemeVariants.light
    //       ? ThemeVariants.dark
    //       : ThemeVariants.light;
    //   localStorage.setItem(peremLS.ActualThemeLS, state.ThemeApp);
    // },
    // toggleViewTodosAction: (state: TodoState) => {
    //   state.viewTodos =
    //     state.viewTodos === ViewOfLists.list
    //       ? ViewOfLists.table
    //       : ViewOfLists.list;
    //   localStorage.setItem(peremLS.viewTodosLS, state.viewTodos);
    // },
    // sortTodosAction: (
    //   state: TodoState,
    //   { payload: type }: PayloadAction<SortTypes>
    // ) => {
    //   if (type === SortTypes.dateAsc) {
    //     state.filteredTodosState = state.todosState.sort((a, b) => {
    //       return new Date(a.id).getTime() - new Date(b.id).getTime();
    //     });
    //   }
    //   if (type === SortTypes.dateDesk) {
    //     state.filteredTodosState = state.todosState.sort((a, b) => {
    //       return new Date(b.id).getTime() - new Date(a.id).getTime();
    //     });
    //   }
    //   if (type === SortTypes.lenghtAsc) {
    //     state.filteredTodosState = state.todosState.sort((a, b) => {
    //       return a.text.length - b.text.length;
    //     });
    //   }
    //   if (type === SortTypes.lenghtDesk) {
    //     state.filteredTodosState = state.todosState.sort((a, b) => {
    //       return b.text.length - a.text.length;
    //     });
    //   }
    //   if (type === SortTypes.all) {
    //     state.filteredTodosState = state.todosState.sort((a, b) => {
    //       return new Date(a.id).getTime() - new Date(b.id).getTime();
    //     });
    //   }
    //   if (type === SortTypes.completed) {
    //     state.filteredTodosState = state.todosState.filter((todo) => {
    //       return todo.completed === true;
    //     });
    //   }
    //   if (type === SortTypes.active) {
    //     state.filteredTodosState = state.todosState.filter((todo) => {
    //       return todo.completed === false;
    //     });
    //   }
    //   // Сохранение отсортированного списка задач в localStorage
    //   localStorage.setItem(peremLS.todosLS, JSON.stringify(state.todosState));
    // },
    // changeStatusOfTaskAction: (
    //   state: TodoState,
    //   { payload: id }: PayloadAction<string>
    // ) => {
    //   state.filteredTodosState = state.todosState.map((todo) => {
    //     if (id !== todo.id) {
    //       return todo;
    //     }
    //     return {
    //       ...todo,
    //       completed: !todo.completed,
    //     };
    //   });
    //   state.todosState = state.todosState.map((todo) => {
    //     if (id !== todo.id) {
    //       return todo;
    //     }
    //     return {
    //       ...todo,
    //       completed: !todo.completed,
    //     };
    //   });
    //   localStorage.setItem(
    //     peremLS.todosLS,
    //     JSON.stringify(state.filteredTodosState)
    //   );
    // },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getTodosThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getTodosThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.TodosStateAPIarrtodos = payload;
      })
      .addCase(getTodosThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload?.toString() ?? 'unknow error';
      })

      .addCase(deleteTodosThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteTodosThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.TodosStateAPIarrtodos = payload;
      })
      .addCase(deleteTodosThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.TodosStateAPIarrtodos = state.TodosStateAPIarrtodos.filter(
          (todo) => todo.id !== payload
        );
      })

      .addCase(doneTodoAPIThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(doneTodoAPIThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        // const updatedTodo = payload;
        // console.log(updatedTodo);
        // const index = state.TodosStateAPIarrtodos.findIndex(todo => todo.id === updatedTodo.id);
        // state.TodosStateAPIarrtodos[index] = payload;
      })
      .addCase(doneTodoAPIThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.TodosStateAPIarrtodos = payload;
      });
  },
});

export const {
  // addTodoAction,
  // updateTodoTextAction,
  // removeTodoAction,
  // changeStatusOfTaskAction,
  // sortTodosAction,
  // toggleViewTodosAction,
  // toggleThemeAction,
} = todosAPI.actions;

export default todosAPI.reducer;
