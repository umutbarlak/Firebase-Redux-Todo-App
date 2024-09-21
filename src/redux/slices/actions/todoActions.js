import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth, db } from "../../../firebase/config";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { toast } from "react-toastify";

export const getTodos = createAsyncThunk("todos/getTodos", async () => {
  const userUID = auth.currentUser.uid;
  const todosRef = collection(doc(collection(db, "users"), userUID), "todos");

  try {
    const data = await getDocs(todosRef);
    const todos = data.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return todos;
  } catch (error) {
    console.log(error);
    return error.message;
  }
});

export const addTodo = createAsyncThunk("todos/addTodo", async (todo) => {
  const userUID = auth.currentUser.uid;
  const todosRef = doc(collection(db, "users", userUID, "todos"));

  try {
    await setDoc(todosRef, todo);
    return todo;
  } catch (error) {
    return error.message;
  }
});

export const deleteTodo = createAsyncThunk("todos/deleteTodo", async (id) => {
  const userUID = auth.currentUser.uid;
  const todoRef = doc(collection(db, "users", userUID, "todos"), id);

  try {
    await deleteDoc(todoRef);
    return id;
  } catch (error) {
    toast.error("Bir sorun oluştu" + error.message);
  }
});

export const updateTodo = createAsyncThunk("todos/updateTodo", async (todo) => {
  const userUID = auth.currentUser?.uid;
  const todoRef = doc(db, "users", userUID, "todos", todo.id);

  try {
    await updateDoc(todoRef, {
      text: todo.text,
      last_date: todo.last_date,
      category: todo.category,
      importance: todo.importance,
      status: todo.status,
    });
    return todo;
  } catch (error) {
    return error.message;
  }
});
