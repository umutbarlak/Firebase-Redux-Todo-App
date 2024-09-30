import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth, db } from "../../../firebase/config";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { toast } from "react-toastify";
import { formatDate } from "../../../utils";

export const getTodos = createAsyncThunk("todos/getTodos", async () => {
  const userUID = auth.currentUser.uid;
  const todosRef = collection(doc(collection(db, "users"), userUID), "todos");

  const q = query(todosRef, orderBy("timestamp", "desc"));

  try {
    const data = await getDocs(q);
    const todos = data.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      timestamp: doc.timestamp ? doc.timestamp.toDate() : null,
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
    await setDoc(todosRef, {
      ...todo,
      timestamp: serverTimestamp(),
      last_date: formatDate(todo.last_date),
    });
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
      timestamp: serverTimestamp(),
    });
    return todo;
  } catch (error) {
    return error.message;
  }
});
