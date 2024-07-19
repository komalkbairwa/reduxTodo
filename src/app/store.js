import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../features/todo/todoSlice.js'; // Adjust the path if necessary

export const store = configureStore({
    reducer: {
        todos: todoReducer, // 'todos' is the key for the todo slice
    },
});
