import React from "react";
import CallToAction from "../CallToAction/CallToAction";
import News from "../News/News";
import { Link } from "react-router-dom";

const Home = ({product}) => {
 
  const datas = product.slice(0, 4);

  return (
    <div className="mt-10">
      <div className="bg-white p-4 flex items-center flex-wrap">
        <ul className="flex items-center">
          <li className="inline-flex items-center">
            <Link to={"/"} class="text-gray-600 hover:text-blue-500">
              <svg
                className="w-5 h-auto fill-current mx-2 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#000000"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z" />
              </svg>
            </Link>

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
            <Link to={"/"} href="#!" class="text-blue-500 hover:text-blue-500">
              Home
            </Link>
          </li>
        </ul>
      </div>
      <CallToAction product={product} />
      <News datas={datas} />
    </div>
  );
};

export default Home;
