import { configureStore } from "@reduxjs/toolkit";
import todoRedcer from "../features//todo/todoSlice.js";

export const store = configureStore({
    reducer: todoRedcer,
});