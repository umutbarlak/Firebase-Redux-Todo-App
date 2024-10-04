import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Container from "../../components/Container";
import { useDispatch, useSelector } from "react-redux";
import LeftSide from "./LeftSide";
import { getTodos } from "../../redux/slices/actions/todoActions";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/config";
import { TodoCard } from "../../components/TodoCard";
import Modal from "../../components/Modal";
import {
  filterLastDate,
  getAllCategories,
  userData,
} from "../../redux/slices/todoSlice";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [editingTodo, setEditingTodo] = useState(null);
  const dispatch = useDispatch();

  const { categories, searchTodos } = useSelector((store) => store.todos);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(getTodos());
        dispatch(userData(user.email));
      }
    });
  }, [dispatch]);

  return (
    <Container>
      <Header />
      <section className="flex max-md:flex-col md:h-[calc(100vh-88px)] gap-3 pb-3 relative">
        <LeftSide categories={categories} />
        <main className="flex-1  bg-[#D2E0FB] p-5 rounded-md overflow-scroll scroll-py-5">
          <div className="flex justify-between mb-3">
            <div>
              <button
                onClick={() => dispatch(filterLastDate())}
                className="bg-red-500 px-4 py-1 rounded-md text-white me-2"
              >
                Son Gün
              </button>
              <button
                onClick={() => dispatch(getAllCategories())}
                className="bg-green-700 px-4 py-1 rounded-md text-white"
              >
                Tümü
              </button>
            </div>
            <button
              onClick={() => setShowModal(true)}
              className="bg-blue-500 px-4 py-1 rounded-md text-white"
            >
              Add Todo
            </button>
          </div>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(255px,1fr))] gap-4">
            {searchTodos.map((todo) => {
              return (
                <TodoCard
                  key={todo.id}
                  todo={todo}
                  setShowModal={setShowModal}
                  setEditingTodo={setEditingTodo}
                />
              );
            })}
          </div>
        </main>
      </section>
      {showModal && (
        <Modal
          closeModal={() => {
            setShowModal(false);
            setEditingTodo(null);
          }}
          todo={editingTodo}
          setEditingTodo={setEditingTodo}
        />
      )}
    </Container>
  );
};

export default Home;
