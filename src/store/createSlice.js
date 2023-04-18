import {createSlice, createSelector} from '@reduxjs/toolkit'
import { v4 as uuidv4 } from "uuid";


export const todoSlice = createSlice ({
  name: "todosName",
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
        state.todos.unshift(newTask)
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

  const visibleTodos = createSelector(
    ({todos, initialState}) => todos,
    (todos) => {
      if (todos.filter === "all") 
        return todos.todos

      if (todos.filter === "active") 
        return todos.filter((todo) => !todo.completed)

      if (todos.filter === "completed") 
        return todos.filter((todo) => todo.completed)
    }
  )



    // counterActive: (state) => {useMemo(() => {
    //     return state.todos.filter((todo) => !todo.completed).length
    //   }, [todos])},