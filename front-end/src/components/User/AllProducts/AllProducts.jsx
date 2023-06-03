import React from "react";
import { useDispatch } from "react-redux";
// import SideBar from "../SideBar/SideBar";
import { Link, useNavigate } from "react-router-dom";
import { getAllProdut, resetFilter } from "../../../redux/action";
import ALLProduct from "../AllProduct/AllProduct";

const AllProducts = ({product}) => {
  const dispatch = useDispatch();
  const navegate = useNavigate();

  const onHome = () => {
    dispatch(getAllProdut());
    dispatch(resetFilter());
    navegate("/");
  };

  return (
    <div className="w-full flex-col flex mt-10">
      <div class="bg-white p-4 flex items-center flex-wrap">
        <ul class="flex items-center">
          <li class="inline-flex items-center">
            <button
              onClick={onHome}
              href="#"
              class="text-gray-600 hover:text-blue-500"
            >
              <svg
                class="w-5 h-auto fill-current mx-2 text-gray-600 hover:text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#000000"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z" />
              </svg>
            </button>

            <svg
              class="w-5 h-auto fill-current mx-2 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
            </svg>
          </li>

          <li class="inline-flex items-center">
            <button
              onClick={onHome}
              href="#"
              class="text-gray-600 hover:text-blue-500"
            >
              Home
            </button>

            <svg
              class="w-5 h-auto fill-current mx-2 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
            </svg>
          </li>

          <li class="inline-flex items-center">
            <Link
              to={"/products"}
              href="#"
              class=" hover:text-blue-500 text-blue-500"
            >
              Products
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-full  drop-shadow-lg bg-white mx-2 flex-row flex justify-center flex-wrap">
        <div className="w-[12%]">
          {/* <SideBar /> */}
        </div>
        <div className="flex flex-wrap flex-row justify-center w-[82%] ">
          {product &&
            product.map(e => {
              return (
                <ALLProduct
                  key={e.id}
                  name={e.name}
                  condition={e.condition}
                  description={e.description}
                  image={e.image}
                  brand={e.brand}
                  visita={e.visits}
                  categories={e.categories}
                  price={e.price}
                  status={e.status}
                  stock={e.stock}
                  id={e.id}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
