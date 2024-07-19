import { createSlice , nanoid } from "@reduxjs/toolkit";

//nanoid is used to create unique id

const initalState = {
    todos : [{ id: 1, text: "Hello World"}]
}


export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state,action) => {
            const todo = {
                id: nanoid,
                text: action.payload
            }
        },
        removeTodo: () => {}
    }
})
