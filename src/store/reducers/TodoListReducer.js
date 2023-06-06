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
    EditTodo: function (state, action) {
      state.todos = state.todos.map((todo) => {
        if (todo.id == action.payload.task.id) {
          todo.title = action.payload.title;
          return todo;
        }
        return todo;
      });
      console.log(state.todos);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        action.meta.requestStatus;
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
export const { DoneTodo, AddTodo, EditTodo } = todoSlice.actions;
