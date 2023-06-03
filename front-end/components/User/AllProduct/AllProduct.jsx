import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ALLProduct = ({
  name,
  brand,
  description,
  visita,
  image,
  price,
  condition,
  categories,
  stock,
  id,
  status,
}) => {
  const navegate = useNavigate();

  const onDetail = () => {
    navegate(`/products/${id}`);
  };

  return (
    <div className="">
      {
        status === true ? <div className="w-60 mx-3 my-5 bg-white rounded-lg drop-shadow-lg ">
        <div className=" h-62 w-full mb-3">
          <div className=" flex flex-col p-3"></div>
          <button onClick={onDetail}>
            <img
              src={image}
              alt="Just a flower"
              className=" w-full   object-fill h-44  rounded-2xl"
              style={{ objectFit: "scale-down" }}
            />
          </button>
        </div>
        <div className="flex-auto justify-evenly p-5">
          <div className="flex flex-wrap ">
            <div className="w-full flex-none text-sm flex items-center text-gray-600">
              <span className="text-gray-400 whitespace-nowrap mr-3">
                {(price, "$")}
              </span>

              {stock && stock > 3 ? (
                <span className="mr-2 text-gray-800">Disponible</span>
              ) : stock > 1 ? (
                <span className="mr-2 text-gray-800">{stock} Disponible</span>
              ) : (
                <span className="mr-2 text-red-600">{stock} Disponible</span>
              )}
            </div>
            <div className="flex items-center w-full justify-between min-w-0 ">
              <Link
                to={`/products/${id}`}
                className="text-lg mr-auto cursor-pointer text-gray-600 hover:text-blue-600 truncate "
              >
                {name}
              </Link>

              <div className="flex items-center bg-green-400 text-white text-xs px-2 py-1 ml-3 rounded">
                {condition}
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-starts text-xs text-white border-b-2 font-medium">
            <div className="flex flex-wrap justify-starts items-center py-3 text-xs text-white font-medium">
              <span className=" text-gray-800">Marca:</span>
              <span className="px-2 text-gray-800">{brand}</span>
            </div>
            <div className="flex flex-wrap justify-starts items-center py-3  text-xs text-white font-medium">
              <span className="text-gray-800"></span>
              <span className="px-2 text-gray-800"></span>
            </div>
          </div>
          <div className="flex space-x-2 text-sm font-medium justify-end mt-4">
            <button
              class={
                "transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 bg-blue-600 px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-blue-400"
              }
            >
              <span>Añadir al carrito</span>
            </button>
          </div>
        </div>
      </div>:null
      }
      
    </div>
  );
};

export default ALLProduct;
