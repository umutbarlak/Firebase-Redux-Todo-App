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
  importance: [],
  status: [],
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
    filterImportance: (state, action) => {
      console.log(action.payload);
      state.searchTodos = state.todos.filter(
        (todo) => todo.importance === action.payload
      );
    },
    filterStatus: (state, action) => {
      console.log(action.payload);
      state.searchTodos = state.todos.filter(
        (todo) => todo.status === action.payload
      );
    },
    filterLastDate: (state, action) => {
      state.searchTodos = state.todos.filter(
        (todo) =>
          (state.searchTodos =
            todo.last_date == new Date().toLocaleDateString())
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
      state.categories = [...new Set(state.todos.map((item) => item.category))];
      state.importance = [
        ...new Set(state.todos.map((item) => item.importance)),
      ];
      state.status = [...new Set(state.todos.map((item) => item.status))];
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
      const newTodos = state.todos.filter((todo) => todo.id !== action.payload);
      state.searchTodos = newTodos;
      state.todos = newTodos;
      state.categories = [...new Set(state.todos.map((item) => item.category))];
      state.importance = [
        ...new Set(state.todos.map((item) => item.importance)),
      ];
      state.status = [...new Set(state.todos.map((item) => item.status))];
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
      const index1 = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.loading = false;
      state.searchTodos.splice(index, 1);
      state.searchTodos.unshift(action.payload);
      state.todos.splice(index1, 1);
      state.todos.unshift(action.payload);
      state.categories = [...new Set(state.todos.map((item) => item.category))];
      state.importance = [
        ...new Set(state.todos.map((item) => item.importance)),
      ];
      state.status = [...new Set(state.todos.map((item) => item.status))];
    });
  },
});

export const {
  filterCategory,
  filterImportance,
  filterStatus,
  filterLastDate,
  getAllCategories,
  userData,
} = todoSlice.actions;

export default todoSlice.reducer;
