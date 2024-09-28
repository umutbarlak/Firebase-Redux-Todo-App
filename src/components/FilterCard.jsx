import React from "react";
import { useDispatch } from "react-redux";

const FilterCard = ({ filterArray, filterFunction, title }) => {
  const dispatch = useDispatch();

  return (
    <div className="my-2 border-b-2 border-rose-700 pb-2">
      <h3 className={`text-2xl tracking-widest text-sky-800  mb-1`}>{title}</h3>
      <ul className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-2">
        {filterArray.map((item, i) => {
          return (
            <li
              onClick={() => dispatch(filterFunction(item))}
              key={i}
              className={`p-1 rounded-lg capitalize text-lg tracking-wide cursor-pointer text-sky-800 border hover:shadow-md`}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FilterCard;
