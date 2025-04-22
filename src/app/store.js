import { configureStore } from "@reduxjs/toolkit";
import todoRedcer from "../features//todo/todoSlice.js";
import authReducer from "../features/auth/authSlice.js";

export const store = configureStore({
    reducer: todoRedcer,
    auth: authReducer,
});