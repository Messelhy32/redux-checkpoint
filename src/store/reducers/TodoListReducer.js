import { createSlice } from "@reduxjs/toolkit";
import { fetchTodos } from "../actions/fetchTodos";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    DoneTodo: function (state, action) {
      state.todos = state.todos.map((todo) => {
        if (todo.id == action.payload.id) {
          todo.completed = !todo.completed;
          return todo;
        }
        return todo;
      });
    },
    AddTodo: function (state, action) {
      state.todos.unshift(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        console.log(action.meta.requestStatus);
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        console.log("Error: " + action.error.message);
      });
  },
});

export default todoSlice.reducer;
export const { DoneTodo, AddTodo } = todoSlice.actions;
