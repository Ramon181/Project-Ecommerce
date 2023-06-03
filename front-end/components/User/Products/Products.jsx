import Product from "../Product/Product";
import { useDispatch, useSelector } from "react-redux";
import SideBar from "../SideBar/SideBar";
import { Link, useNavigate } from "react-router-dom";
import { getAllProdut, resetFilter, updateFilter } from "../../../redux/action";
import { useState } from "react";
import { useEffect } from "react";

const Products = () => {

  const product = useSelector(state => state.productList);
  const dispatch = useDispatch();
  const navegate = useNavigate();

  const [price, setPrice] = useState("");


  const onHome = () => {
    dispatch(getAllProdut());
    dispatch(resetFilter());
    navegate("/");
  };

  useEffect(() => {
    if (price === "muyBajo") {
      dispatch(updateFilter({minPrice:50}));
      dispatch(updateFilter({maxPrice:100}));
    }
    if (price === "bajo") {
      dispatch(updateFilter({minPrice:100}));
      dispatch(updateFilter({maxPrice:200}));
    }
    if (price === "medio") {
      dispatch(updateFilter({minPrice:200}));
      dispatch(updateFilter({maxPrice:300}));
    }
    if (price === "alto") {
      dispatch(updateFilter({minPrice:300}));
      dispatch(updateFilter({maxPrice:2147483647}));
    }

  }, [dispatch, price])

  return (
    <div className="w-full flex-col flex mt-10">
      <div className="bg-white p-4 flex items-center flex-wrap">
        <ul className="flex items-center">
          <li className="inline-flex items-center">
            <button
              onClick={onHome}
              href="#"
              className="text-gray-600 hover:text-blue-500"
            >
              <svg
                className="w-5 h-auto fill-current mx-2 text-gray-600 hover:text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#000000"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z" />
              </svg>
            </button>

            <svg
              className="w-5 h-auto fill-current mx-2 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
            </svg>
          </li>

          <li className="inline-flex items-center">
            <button
              onClick={onHome}
              href="#"
              className="text-gray-600 hover:text-blue-500"
            >
              Home
            </button>

            <svg
              className="w-5 h-auto fill-current mx-2 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
            </svg>
          </li>

          <li className="inline-flex items-center">
            <Link
              to={"/result"}
              href="#"
              class=" hover:text-blue-500 text-blue-500"
            >
              Result
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-full  drop-shadow-lg bg-white mx-2 flex-row flex justify-center flex-wrap">
        <div className="w-[12%]">
          <SideBar price={price} setPrice={setPrice} />
        </div>
        <div className="flex flex-wrap flex-row justify-center w-[82%] ">
          {
            product ? product &&
              product.map(e => {
                return (
                  <Product
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
              }):null
          }
          
        </div>
      </div>
    </div>
  );
};

export default Products;
