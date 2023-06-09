import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    return res.data.slice(0, 5);
  } catch (error) {
    throw new Error("Failed to fetch todos");
  }
});
