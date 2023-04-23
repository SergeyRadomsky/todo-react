import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { SortTypes } from '../../components/TodoForm/constants';

export type Todo = {
  text: string;
  id: string;
  completed: boolean;
};

export type Filter = {
  completed: 'completed',
  all: 'all',
  active: 'active',
}

export type TodoState = {
  todosState: Todo[];
  filter: string;
  counterActive: number;
};

const initialState: TodoState = {
  todosState: [],
  filter: 'all',
  counterActive: 0,
};

export const todos = createSlice({
  name: 'todos',
  initialState,

  reducers: {
    addTodoAction: (
      state: TodoState,
      { payload: text }: PayloadAction<string>
    ) => {
      // const newTask = {
      //   id: Date.now().toString(),
      //   text,
      //   completed: false,
      //   // index: state.todosState.length // сохраняем индекс элемента
      // };

      // state.todosState = [newTask, ...state.todosState].sort((a, b) => {
      //   return b.id - a.id; // сортируем по индексу
      // });
      const newTask = {
        text,
        id: new Date().toISOString(),
        completed: false,
      };

      state.todosState = [newTask, ...state.todosState].sort((a, b) => {
        return new Date(b.id).getTime() - new Date(a.id).getTime();
      });
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
    },

    sortTodosAction: (
      state: TodoState,
      { payload: type }: PayloadAction<SortTypes>
    ) => {
      if (type === SortTypes.dateAsc) {
        state.todosState = state.todosState.sort((a, b) => {
          return new Date(a.id).getTime() - new Date(b.id).getTime();
        });
      }

      if (type === SortTypes.dateDesk) {
        state.todosState = state.todosState.sort((a, b) => {
          return new Date(b.id).getTime() - new Date(a.id).getTime();
        });
      }

      if (type === SortTypes.lenghtAsc) {
        state.todosState = state.todosState.sort((a, b) => {
          return a.text.length - b.text.length;
        });
      }

      if (type === SortTypes.lenghtDesk) {
        state.todosState = state.todosState.sort((a, b) => {
          return b.text.length - a.text.length;
        });
      }

      // if (type === SortTypes.completed) {
      //   state.todosState = state.todosState.filter((todo) => {
      //   return (todo.completed === true);
      //   });
      // }

      // if (type === SortTypes.all) {
      //   state.todosState = state.todosState.sort((a, b) => {
      //     return new Date(a.id).getTime() - new Date(b.id).getTime();
      //   });
      // }

      // if (type === SortTypes.active) {
      //   state.todosState = state.todosState.filter((todo) => {
      //    return (todo.completed === false);
      //   }
      //   );
      // }


    },

    changeStatusOfTaskAction: (
      state: TodoState,
      { payload: id }: PayloadAction<string>
    ) => {
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
} = todos.actions;

export default todos.reducer;
