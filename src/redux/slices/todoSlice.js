import { createSlice } from "@reduxjs/toolkit";
import {
  addTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from "./actions/todoActions";

const initialState = {
  todos: [],
  searchTodos: [],
  categories: [],
  loading: false,
  error: "",
  userEmail: "",
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    filterCategory: (state, action) => {
      console.log(action.payload);
      state.searchTodos = state.todos.filter(
        (todo) => todo.category === action.payload
      );
    },
    getAllCategories: (state) => {
      state.searchTodos = state.todos;
    },
    userData: (state, action) => {
      state.userEmail = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTodos.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getTodos.fulfilled, (state, action) => {
      state.loading = false;
      state.todos = action.payload;
      state.searchTodos = action.payload;
      const cat = [...new Set(state.todos.map((item) => item.category))];
      state.categories = cat;
    });
    builder.addCase(getTodos.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || "Failed to fetch todos";
    });
    builder.addCase(addTodo.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addTodo.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(addTodo.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(deleteTodo.fulfilled, (state, action) => {
      state.loading = false;
      const newTodos = state.searchTodos.filter(
        (todo) => todo.id !== action.payload
      );
      state.searchTodos = newTodos;
      state.todos = newTodos;
      const cat = [...new Set(state.todos.map((item) => item.category))];
      state.categories = cat;
    });
    builder.addCase(updateTodo.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(updateTodo.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(updateTodo.fulfilled, (state, action) => {
      const index = state.searchTodos.findIndex(
        (todo) => todo.id == action.payload.id
      );
      const index1 = state.searchTodos.findIndex(
        (todo) => todo.id == action.payload.id
      );
      state.loading = false;
      state.searchTodos[index] = action.payload;
      state.todos[index1] = action.payload;
      const cat = [...new Set(state.todos.map((item) => item.category))];
      state.categories = cat;
    });
  },
});

export const { filterCategory, getAllCategories, userData } = todoSlice.actions;

export default todoSlice.reducer;
