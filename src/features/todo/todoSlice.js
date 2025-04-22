import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
    todos: []
}


export const todoSlice = createSlice(
    {
        name: 'todo',
        initialState,
        reducers: {
            addTodo: (state, action) => {
                const todo = {
                    id: nanoid(),
                    text: action.payload
                }
                state.todos.push(todo)
            },
            removeTodo: (state, action) => {
                const removeTodo = state.todos.filter((todo) => todo.id !== action.payload);
                state.todos = removeTodo;
            },
            updateTodo: (state,action) => {
                const updateTodo = state.todos.find((todo) => todo.id === action.payload.id);
                updateTodo.text = action.payload.text;
            }
        }
    }
)

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions;
export default todoSlice.reducer;