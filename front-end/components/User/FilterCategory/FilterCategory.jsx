import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetFilter, updateFilter } from "../../../redux/action";

const FilterCategory = ({ setCategory }) => {

  const categories = useSelector(state => state.allCategory);
  const dispatch = useDispatch();
  const navegate = useNavigate();



  return (
    <div class="relative w-full bg-white">
      <div class=" w-full flex justify-center items-center px-2">
        <div class="grid grid-cols-4 gap-y-10 items-center gap-x-8 py-10">
          {categories &&
            categories.map(e => (
              <button
                value={e.name}
                onClick={() => {
                  navegate("/result");
                  setCategory(false);
                  dispatch(resetFilter())
                  dispatch(updateFilter({ category: e.name }));
                }}
                class="group relative w-52"
              >
                <div class="aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-02.jpg"
                    alt="Hats and sweaters on wood shelves next to various colors of t-shirts on hangers."
                    class="object-center object-cover"
                  />
                </div>
                <p href="#" class="mt-4 block font-medium text-gray-900">
                  <span class="absolute z-10 inset-0" aria-hidden="true"></span>
                  {e.name}
                </p>
                <p aria-hidden="true" class="mt-1">
                  Shop now
                </p>
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default FilterCategory;
