import React from "react";
import { importanceColors, statusColors } from "../constant";
import { FiEdit } from "react-icons/fi";
import { GoTrash } from "react-icons/go";
import { deleteTodo } from "../redux/slices/actions/todoActions";
import { useDispatch } from "react-redux";
import { formatDate } from "../utils";

export const TodoCard = ({ todo, setShowModal, setEditingTodo }) => {
  const dispatch = useDispatch();
  const importanceBgColor = importanceColors[todo.importance];
  const statusBgColor = statusColors[todo.status];

  const date = formatDate(todo.last_date);

  return (
    <div className="p-3 rounded-2xl bg-[#DEE5D4] flex flex-col ">
      <div className="flex items-center justify-end gap-3 text-xs">
        <span
          style={{ background: importanceBgColor }}
          className="p-1 text-center rounded-md"
        >
          {todo.importance}
        </span>
        <span
          style={{ background: statusBgColor }}
          className="w-24 text-center rounded-md p-1"
        >
          {todo.status}
        </span>
      </div>

      <p className="my-2 text-lg tracking-wider flex-1"> {todo.text}</p>

      <div className="flex justify-between items-center mt-2 text-2xl ">
        <div className="flex justify-between items-center">
          <span className="text-sm">{date}</span>
          <span className="text-sm ms-2">({todo.category})</span>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => {
              setShowModal(true);
              setEditingTodo(todo);
            }}
            className="text-blue-600"
          >
            <FiEdit />
          </button>
          <button
            onClick={() => dispatch(deleteTodo(todo.id))}
            className="text-red-600"
          >
            <GoTrash />
          </button>
        </div>
      </div>
    </div>
  );
};
