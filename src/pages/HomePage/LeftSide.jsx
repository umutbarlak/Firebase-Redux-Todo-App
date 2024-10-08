import React, { useState } from "react";
import { catColors } from "../../constant";
import { CgMenuRound } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import {
  filterCategory,
  filterImportance,
  filterStatus,
  getAllCategories,
} from "../../redux/slices/todoSlice";
import FilterCard from "../../components/FilterCard";

const LeftSide = () => {
  const { categories, importance, status } = useSelector(
    (store) => store.todos
  );
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  return (
    <aside
      className={`bg-gray-300 p-3 rounded-md transition-all duration-500 overflow-scroll ${
        show ? "max-md:h-[500px]" : "max-md:h-14 "
      } ${show ? "md:w-64" : "md:w-14 "}`}
    >
      <>
        <div className="sticky top-0 left-0 right-0 bg-gray-300">
          <div className="flex gap-2">
            <button
              className="text-3xl text-white"
              onClick={() => setShow(!show)}
            >
              <CgMenuRound />
            </button>
            <h3
              className={`text-2xl tracking-widest text-sky-800  ${
                !show && "md:hidden"
              }`}
            >
              Filter
            </h3>
          </div>
          <button
            onClick={() => dispatch(getAllCategories())}
            className={`p-1 rounded-lg capitalize text-lg tracking-wide cursor-pointer bg-gray-100 text-sky-800 hover:shadow-md w-full mt-4 ${
              !show && "hidden"
            }`}
          >
            Tümü
          </button>
        </div>
        <div
          className={`flex flex-col gap-3 h-full transition-opacity mt-3 duration-700  ${
            !show && "hidden"
          }  `}
        >
          {/* <div>
            <h3 className={`text-2xl tracking-widest text-sky-800  `}>
              Category
            </h3>
            <ul className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-2">
              <li
                onClick={() => dispatch(getAllCategories())}
                className={`p-1 rounded-lg capitalize text-lg tracking-wide cursor-pointer bg-gray-100 text-sky-800 hover:shadow-md`}
              >
                Tümü
              </li>
              {categories.map((item, i) => {
                const bg = catColors[i];
                return (
                  <li
                    onClick={() => dispatch(filterCategory(item))}
                    key={i}
                    // style={{ backgroundColor: bg }}
                    className={`p-1 rounded-lg capitalize text-lg tracking-wide cursor-pointer text-sky-800 border hover:shadow-md`}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </div> */}
          <FilterCard
            filterArray={categories}
            filterFunction={filterCategory}
            title={"Category"}
          />
          <FilterCard
            filterArray={importance}
            filterFunction={filterImportance}
            title={"Importance"}
          />

          <FilterCard
            filterArray={status}
            filterFunction={filterStatus}
            title={"Status"}
          />
        </div>
      </>
    </aside>
  );
};

export default LeftSide;
