/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllProdut, maxVisits } from "../../../redux/action";

const CallToAction = ({product}) => {

  const visitMax = useSelector(state => state.visitMax);
  const dispatch = useDispatch();

  useEffect(() => {
    if (product.length > 1) {
      dispatch(maxVisits(Math.max.apply( this, product.map(e => e.visits))));
    }else{
      dispatch(getAllProdut)
    }
  }, [dispatch])
  

  return (
    <div class="bg-white dark:bg-gray-800 flex relative z-20 w-full items-center overflow-hidden">
      {visitMax &&
        visitMax.map(e => (
          <div class="container mx-auto px-6 flex relative py-16">
            <div class="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
              <span class="w-20 h-2 bg-gray-800 dark:bg-white mb-12"></span>
              <h1 class="font-bebas-neue uppercase text-3xl sm:text-5xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                {e.name}
                <span class="text-1xl sm:text-3xl">{e.brand}</span>
              </h1>
              <p class="text-sm sm:text-base text-gray-700 dark:text-white">
                {e.description}
              </p>
              <div class="flex mt-8">
                <Link to={`/products/${e.id}`}
                  class="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md"
                >
                  See More
                </Link>
              </div>
            </div>
            <div class="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
              <img
                src={e.image} alt=""
                class="max-w-xs md:max-w-sm m-auto"
              />
            </div>
          </div>
        ))}
    </div>
  );
};

export default CallToAction;
