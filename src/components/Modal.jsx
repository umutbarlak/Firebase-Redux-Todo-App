import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";
import { IoCloseCircleOutline } from "react-icons/io5";
import {
  categoriesOptions,
  importanceOptions,
  statusOptions,
} from "../constant";
import {
  addTodo,
  getTodos,
  updateTodo,
} from "../redux/slices/actions/todoActions";
import { useDispatch } from "react-redux";

const Modal = ({ closeModal, todo, setEditingTodo }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, setValue, getValues } = useForm();
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (todo) {
      setValue("text", todo.text);
      setValue("status", todo.status);
      setValue("category", todo.category);
      setValue("importance", todo.importance);
      setValue("last_date", todo.last_date);
      setValue("id", todo.id);
      setIsInitialized(true);
    }
  }, [setValue, todo]);

  const onSubmit = (data) => {
    if (todo) {
      dispatch(updateTodo(data));
    } else {
      dispatch(addTodo(data));
      dispatch(getTodos());
    }
    setEditingTodo(null);
    closeModal();
  };

  return (
    <div className="absolute inset-0 bg-gray-600 bg-opacity-50 grid place-items-center ">
      <div className="bg-white p-5 relative rounded-md">
        <button onClick={closeModal} className=" absolute right-5 text-3xl">
          <IoCloseCircleOutline />
        </button>
        <h3 className="text-center text-3xl">Add Todo</h3>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-5 max-md:w-[80vw] w-[60vw] text-black flex flex-col gap-3"
        >
          <input
            required
            className="h-9 w-full bg-gray-100 rounded-md px-3"
            type="text"
            placeholder="örn: faturaları öde"
            {...register("text")}
          />
          {(isInitialized || !todo) && (
            <>
              <Select
                required
                options={statusOptions}
                onChange={(selectedOption) => {
                  setValue("status", selectedOption.label);
                }}
                defaultValue={statusOptions.find(
                  (option) => option.value == getValues("status")
                )}
              />
              <Select
                required
                options={categoriesOptions}
                onChange={(selectedOption) =>
                  setValue("category", selectedOption.label)
                }
                defaultValue={categoriesOptions.find(
                  (option) => option.label == getValues("category")
                )}
              />
              <Select
                required
                options={importanceOptions}
                onChange={(selectedOption) =>
                  setValue("importance", selectedOption.label)
                }
                defaultValue={importanceOptions.find(
                  (option) => option.label == getValues("importance")
                )}
              />
            </>
          )}
          <input
            required
            className="border border-gray-200 px-2 py-1 rounded-md"
            type="date"
            {...register("last_date")}
          />
          <button type="submit" className="bg-cyan-600 text-white py-2">
            Kaydet
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
