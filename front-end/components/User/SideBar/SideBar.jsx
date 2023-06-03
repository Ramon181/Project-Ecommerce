import React from "react";

const SideBar = ({setPrice, price}) => {
	console.log(price)
  return (
    <div class="min-h-screen flex mt-3 justify-center ">
      <div class="flex w-full max-w-xs  bg-white">
        <ul class="flex flex-col w-full">
          <li class="my-px">
            <span class="flex font-medium text-sm text-gray-400  uppercase">
              Price
            </span>
          </li>
          <li class="my-px">
            <button value="muyBajo" onClick={()=>setPrice("muyBajo")}
              href="#"
              class="flex flex-row items-center h-12  rounded-lg text-gray-600 hover:bg-gray-100"
            >
              <span class="ml-3">$50 to $100</span>
            </button>
          </li>
          <li class="my-px">
            <button value={"bajo"}  onClick={()=>setPrice("bajo")}
              href="#"
              class="flex flex-row items-center h-12 rounded-lg text-gray-600 hover:bg-gray-100"
            >
              <span class="ml-3">$100 to $200</span>
            </button>
          </li>
          <li class="my-px">
            <button value={"medio"}  onClick={()=>setPrice("medio")}
              href="#"
              class="flex flex-row items-center h-12  rounded-lg text-gray-600 hover:bg-gray-100"
            >
              <span class="ml-3">$200 to $300</span>
            </button>
          </li>
          <li class="my-px">
            <button value={"alto"}  onClick={()=>setPrice("alto")}
              href="#"
              class="flex flex-row items-center h-12  rounded-lg text-gray-600 hover:bg-gray-100"
            >
              <span class="ml-3" >$300 and Mas</span>
            </button>
          </li>
          <li class="my-px">
            <div>
              <label
                for="price"
                class="block text-sm font-medium text-gray-700"
              >
              </label>
              <div class="relative mt-1 flex flex-row rounded-md shadow-sm">
                <input
                  type="text"
                  name="price"
                  id="price"
                  class="block w-full rounded-md border-gray-300 pl-1 pr-1 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="$ Min"
                />
                <input
                  type="text"
                  name="price"
                  id="price"
                  class="block w-full rounded-md border-gray-300 ml-2 mr-2 pl-1 pr-1 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="$ Max"
                />
				<button className="border border-gray-300 rounded-md px-1">Go</button>
              </div>
            </div>
          </li>
          <li class="my-px">
            <span class="flex font-medium text-sm text-gray-400  my-4 uppercase">
              Branch
            </span>
          </li>
          <li class="my-px">
            <button
              href="#"
              class="flex flex-row items-center h-12  rounded-lg text-gray-600 hover:bg-gray-100"
            >
              <span class="ml-3">Timberland</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
