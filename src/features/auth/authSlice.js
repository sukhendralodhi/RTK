import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  users: [
    {
      id: 1,
      name: "John",
      email: "john@gmail.com",
      password: "123456",
    },
    {
      id: 2,
      name: "Jane",
      email: "jane@gmail.com",
      password: "123456",
    },
    {
      id: 3,
      name: "Jack",
      email: "jack@gmail.com",
      password: "123456",
    },
  ],
  currentUser: JSON.parse(localStorage.getItem("currentUser")) || null, 
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { email, password } = action.payload;
      const found = state.users.find(
        (user) => user.email === email && user.password === password
      );

      if (found) {
        state.currentUser = found;
        localStorage.setItem("currentUser", JSON.stringify(found));
      } else {
        state.currentUser = null;
      }
    },

    register: (state, action) => { 
      const { name, email, password } = action.payload;
      const found = state.users.find((user) => user.email === email);

      if (!found) {
        const newUser = {
          id: nanoid(),
          name,
          email,
          password,
        };
        state.users.push(newUser);
      }
    },

    logout: (state) => {
      state.currentUser = null;
      localStorage.removeItem("currentUser");
    },
  },
});

export const { login, register, logout } = authSlice.actions;
export default authSlice.reducer;
