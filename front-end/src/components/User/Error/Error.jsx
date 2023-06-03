import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <main class="h-screen w-full flex flex-col justify-center items-center">
      <h1 class="text-9xl font-extrabold text-gray-600 tracking-widest">404</h1>
      <div class="bg-[#1c1272] text-gray-100  px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>
      <button class="mt-5">
        <Link
          to={"/"}
          class="relative inline-block text-sm font-medium text-[#e2e2e2] group active:text-[#e7e7e7] focus:outline-none focus:ring"
        >
          <span class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#1c1272] group-hover:translate-y-0 group-hover:translate-x-0"></span>

          <span class="relative block px-8 py-3 bg-[#1A2238] border border-current">
            <router-link to="/">Go Home</router-link>
          </span>
        </Link>
      </button>
    </main>
  );
};

export default Error;
