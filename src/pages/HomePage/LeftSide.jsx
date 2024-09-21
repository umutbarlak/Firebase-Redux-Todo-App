import React, { useState } from "react";
import { catColors } from "../../constant";
import { CgMenuRound } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { filterCategory, getAllCategories } from "../../redux/slices/todoSlice";

const LeftSide = ({ categories }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  return (
    <aside
      className={`bg-[#8EACCD] p-3 rounded-md transition-all duration-500 ${
        show ? "max-md:h-fit" : "max-md:h-14 justify-between"
      } ${show ? "md:w-64" : "md:w-14 justify-between"}`}
    >
      <>
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
            Categories
          </h3>
        </div>
        <div
          className={`flex flex-col justify-between h-full transition-opacity mt-3 duration-700  ${
            !show && "hidden"
          }  `}
        >
          <div>
            <ul className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-2">
              <li
                onClick={() => dispatch(getAllCategories())}
                className={`p-1 rounded-lg capitalize text-lg tracking-wide cursor-pointer bg-gray-100 text-sky-800`}
              >
                Tümü
              </li>
              {categories.map((item, i) => {
                const bg = catColors[i];
                return (
                  <li
                    onClick={() => dispatch(filterCategory(item))}
                    key={i}
                    style={{ backgroundColor: bg }}
                    className={`p-1 rounded-lg capitalize text-lg tracking-wide cursor-pointer text-sky-800`}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </>
    </aside>
  );
};

export default LeftSide;
