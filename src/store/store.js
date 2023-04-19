//
import {configureStore} from '@reduxjs/toolkit'
import {todoSlice} from "./TDSlice"

export const store = configureStore({
    reducer: {
        todos: todoSlice.reducer,
    },
})