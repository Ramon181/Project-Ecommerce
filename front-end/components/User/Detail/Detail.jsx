/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { detailsProduct, getAllProdut, resetFilter, visits } from "../../../redux/action";
import Review from "../Review/Review";
const Detail = () => {
  const dispatch = useDispatch();
  const details = useSelector(state => state.details);
  const { id } = useParams();
  const navegate = useNavigate()

  useEffect(() => {
    dispatch(detailsProduct(id));
    const visit = details.visits + 1;
    dispatch(visits(details.id, visit));
  }, [dispatch, id]);
  console.log(details);

  if (!details.id) {
    return (
      <div className="loader-div">
        <span class="loader-details"></span>
      </div>
    );
  }

  const onHome = () => {
    dispatch(getAllProdut())
    dispatch(resetFilter());
    navegate("/")
  };

  return (
    <div className="mt-10">
      <div class="bg-white p-4 flex items-center flex-wrap">
        <ul class="flex items-center">
          <li class="inline-flex items-center">
            <button onClick={onHome} href="#" class="text-gray-600 hover:text-blue-500">
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
            <button onClick={onHome} href="#" class="text-gray-600 hover:text-blue-500">
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
              to={"/result"}
              href="#"
              class="text-gray-600 hover:text-blue-500 "
            >
              Result
            </Link>
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
              to={"/result"}
              href="#"
              class=" hover:text-blue-500 text-blue-500"
            >
              {details.name}
            </Link>
          </li>
        </ul>
      </div>
      <div class="bg-white">
        <div class="pt-6">
          <div class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div class="aspect-w-3 h-3/4 overflow-hidden rounded-lg">
              <img
                src={details.image}
                alt="Two each of gray, white, and black shirts laying flat."
                class="h-full w-full "
              />
            </div>
            <div class="border-2 aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
      

              <div class="mt-8 lg:pl-4 lg:row-span-3 lg:mt-mt-2">
                <h2 class="sr-only">Product information</h2>
                <p class="text-sm tracking-tight text-gray-900">
                  {details.condition}
                </p>
                <p class="text-3xl mt-4 tracking-tight text-gray-900">
                  ${details.price}
                </p>

                <div class="mt-6">
                  <h3 class="sr-only">Reviews</h3>
                  <div class="flex items-center">
                    <div class="flex items-center">
                      <svg
                        class="text-gray-900 h-5 w-5 flex-shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                          clip-rule="evenodd"
                        />
                      </svg>

                      <svg
                        class="text-gray-900 h-5 w-5 flex-shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                          clip-rule="evenodd"
                        />
                      </svg>

                      <svg
                        class="text-gray-900 h-5 w-5 flex-shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                          clip-rule="evenodd"
                        />
                      </svg>

                      <svg
                        class="text-gray-900 h-5 w-5 flex-shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                          clip-rule="evenodd"
                        />
                      </svg>

                      <svg
                        class="text-gray-200 h-5 w-5 flex-shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <p class="sr-only">4 out of 5 stars</p>
                    <Link
                      href="#"
                      class="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      117 reviews
                    </Link>
                  </div>
                </div>

                <form class="mt-10">
                  <div>
                    <h3 class="text-xl font-medium text-gray-900">
                      {details.name}
                    </h3>

                    <fieldset class="mt-4">
                      <legend class="sr-only">Choose a color</legend>
                      <div class="flex items-center space-x-3">
                        <label class="-m-0.5 relative p-0.5 text-xl rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                          {details.description}
                        </label>
                      </div>
                    </fieldset>
                  </div>

                  <div class="mt-16">
                    <div class="flex items-center flex-row">
                      <h3 class="text-xl font-medium text-gray-900">Brand: </h3>
                      <h3 class="text-ms mt-1 ml-2 text-gray-900">
                        {details.brand}
                      </h3>
                    </div>
                    <div class="flex items-center flex-row">
                      <h3 class="text-xl font-medium text-gray-900">
                        Visit the Store{" "}
                      </h3>
                      <h3 class="text-xl font-medium ml-2 text-gray-900">
                        {details.categories.map(e => e.name)}
                      </h3>
                    </div>

                    <div class="flex items-center mt-10 flex-row">
                      <h3 class="text-xl font-medium text-gray-900">Stock</h3>
                      {details.stock > 0 ? (
                        <h3 class="text-xl ml-2 text-gray-900">Available</h3>
                      ) : (
                        <h3 class="text-xl ml-2 text-gray-900">No Available</h3>
                      )}
                    </div>
                  </div>

                  

                  <div className="flex flex-row justify-between items-center mt-10">
                  <div class="inline-flex items-center">
                    <button class="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M20 12H4"
                        />
                      </svg>
                    </button>
                    <div class="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none">
                      2
                    </div>
                    <button class="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </button>
                  </div>
                    <div className="flex flex-row justify-end mr-2">
                    <div class="inline-block align-bottom">
                      <button class="bg-blue-800 opacity-75 hover:opacity-100 text-gray-400 mx-2 hover:text-gray-900 rounded px-10 py-2 font-semibold">
                        <i class="mdi mdi-cart -ml-2 mr-2"></i> Buy Now
                      </button>
                    </div>

                    <div class="inline-block align-bottom">
                      <button class="px-10 py-2 bg-gray-800 opacity-75 hover:opacity-100 text-gray-400 hover:text-white  font-semibold rounded">
                        <i class="mdi mdi-cart -ml-2 mr-2"></i>Add to Card
                      </button>
                    </div>
                    </div>
                  </div>
                </form>
              </div>
              




            </div>


            
          </div>

          <Review/>


        </div>
      </div>
    </div>
  );
};

export default Detail;
