import {createSlice, createSelector} from '@reduxjs/toolkit'
import { v4 as uuidv4 } from "uuid";


export const todoSlice = createSlice ({
  name: "todos",
  initialState: {
    todosState: [],
    filter: 'all',
    counterActive: 0,
  },

  reducers: {
    //Add new task
    addTodo: (state, action) => {
        if (!action.payload.trim()) {
            return;
        }
        const newTask = {
            text: action.payload,
            id: uuidv4(),
            completed: false,
        }
        // console.log(newTask);
        state.todosState.unshift(newTask)
        // console.log(state.todosState);
        // console.log(state.initialState);
        // return
    },
//////////////////////////
    doAll: (state) => {
        const isAllCompleted = state.todosState.every(elem => elem.completed)
        state.todosState = state.todosState.map((todo) => {
            return {
                ...todo,
                completed: !isAllCompleted,
            }
        })
    },
//////////////////////////////
    changeValueInTodo: (state, action) => {
        state.todosState = state.todosState.map(todo => {
            console.log(action.payload);
            if (action.payload.id !== todo.id) {
                return todo
            }
            return {
                ...todo,
                text: action.payload.text,
            }
        })
    },

    completeTodo: (state, action) => {
        state.todos = state.todos.map((todo) => {
            if (action.payload !== todo.id) {
                return todo
            }
            return {
                ...todo,
                completed: !todo.completed,
            }
        })
    },

    removeTodo: (state, action) => {
        state.todos = state.todos.filter((todo) => action.payload !== todo.id)
    },

    removeCompleted: (state) => {
        state.todos = state.todos.filter((todo) => !todo.completed)
    },
  }
});

    // counterActive: (state) => {
    // }
    // }

 export const visibleTodos = createSelector(
    ({todos}) => todos,
    (todos) => {
      if (todos.filter === "all") 
        return todos.todosState

      if (todos.filter === "active") 
        return todos.todosState.filter((todo) => !todo.completed)

      if (todos.filter === "completed") 
        return todos.todosState.filter((todo) => todo.completed)
    }
 )

  export const {
    addTodo,
    doAll,
    changeValueInTodo,
    completeTodo,
    removeTodo,
    removeCompleted,
  } = todoSlice.actions

export default todoSlice.reducer
    // counterActive: (state) => {useMemo(() => {
    //     return state.todos.filter((todo) => !todo.completed).length
    //   }, [todos])},