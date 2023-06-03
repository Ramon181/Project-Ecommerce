import "./Orders.scss";

const Orders = () => {
  return (
    <div className="app-container">
      <div className="app-content">
        <div className="app-content-header">
          <h1 className="app-content-headerText">Products</h1>
          <button className="mode-switch" title="Switch Theme">
            <svg
              className="moon"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <defs></defs>
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
            </svg>
          </button>
        </div>
        <div className="app-content-actions">
          <div className="app-content-actions ">
            <form method="GET">
              <div className="relative w-80 text-gray-600 focus-within:text-gray-400">
                <span className="absolute  left-0 flex items-center pl-1">
                  <button
                    type="submit"
                    className="p-1 focus:outline-none focus:shadow-outline"
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      className="w-6 h-6"
                    >
                      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                  </button>
                </span>
                <input
                  type="text"
                  className="py-2 text-sm text-white w-full bg-gray-900 rounded-md pl-10 focus:outline-none "
                  placeholder="Search..."
                  autocomplete="off"
                />
              </div>
            </form>
            <button className="action-button filter jsFilter mb-1">
              reset search
            </button>
          </div>
          <div className="app-content-actions-wrapper">
            <div className="filter-button-wrapper">
              <button type="submit" className="action-button filter jsFilter">
                <span>Filter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-filter"
                >
                  <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                </svg>
              </button>
              <div className="filter-menu">
                <label>Category</label>
                <select>
                  <option>All Categories</option>
                  <option>Furniture</option> <option>Decoration</option>
                  <option>Kitchen</option>
                  <option>Bathroom</option>
                </select>
                <label>Status</label>
                <select>
                  <option>All Status</option>
                  <option>Active</option>
                  <option>Disabled</option>
                </select>
                <div className="filter-menu-buttons">
                  <button className="filter-button reset">Reset</button>
                  <button className="filter-button apply">Apply</button>
                </div>
              </div>
            </div>
            <button className="action-button list active" title="List View">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-list"
              >
                <line x1="8" y1="6" x2="21" y2="6" />
                <line x1="8" y1="12" x2="21" y2="12" />
                <line x1="8" y1="18" x2="21" y2="18" />
                <line x1="3" y1="6" x2="3.01" y2="6" />
                <line x1="3" y1="12" x2="3.01" y2="12" />
                <line x1="3" y1="18" x2="3.01" y2="18" />
              </svg>
            </button>
            <button className="action-button grid" title="Grid View">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-grid"
              >
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
              </svg>
            </button>
          </div>
        </div>
        <div className="products-area-wrapper tableView">
          <div className="products-header">
            <div className="product-cell image">
              Number
              <button className="sort-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z"
                  />
                </svg>
              </button>
            </div>
            <div className="product-cell category">
              Client
              <button className="sort-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z"
                  />
                </svg>
              </button>
            </div>
            <div className="product-cell status-cell">
              Status
              <button className="sort-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z"
                  />
                </svg>
              </button>
            </div>
            <div className="product-cell price">
              Direction
              <button className="sort-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z"
                  />
                </svg>
              </button>
            </div>

            <div className="product-cell stock">
              Date
              <button className="sort-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z"
                  />
                </svg>
              </button>
            </div>
            <div className="product-cell price">
              Amount
              <button className="sort-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z"
                  />
                </svg>
              </button>
            </div>
            <div className="product-cell sales">Action</div>
          </div>


		  <button className=" group border-t border-r border-l border-black focus:outline-none">

          <div className="products-row flex items-center justify-between h-12 font-semibold ">
            <div className="product-cell image">
              <span>jbib</span>
            </div>
            <div className="product-cell category">
              <span className="cell-label">Category:</span>
              hjvuhvu
            </div>
            <div className="product-cell status-cell">
              <span className="cell-label">Status:</span>
              <span className="status active">Pending</span>
            </div>
            <div className="product-cell category">
              <span className="cell-label">Diection:</span>
              Diection
            </div>
            <div className="product-cell stock">
              <span className="cell-label">Stock:</span>a
            </div>
            <div className="product-cell price">
              <span className="cell-label">Price:</span>p
            </div>

            <td className="product-cell py-4 whitespace-no-wrap text-sm leading-5">
              <div className="flex justify-center items-center">
                <a
                  href="#"
                  className="text-blue-500 flex flex-col justify-center items-center hover:text-blue-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                  <p>Edit</p>
                </a>
                <a
                  href="#"
                  className="text-red-500 flex flex-col justify-center items-center hover:text-red-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                  <p>Delete</p>
                </a>
              </div>
            </td>

            {/* <div className="product-cell dropdown relative mr-5">
                  <a
                    className="dropdown-toggle relative block bg-gray-800 rounded p-2 hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                    href="#"
                    id="dropdownMenuButton2"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <svg
                      className="h-6 w-6 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                      />
                    </svg>
                  </a>

                  <ul
                    className="dropdown-menu min-w-max absolute bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none left-auto right-0"
                    aria-labelledby="dropdownMenuButton2"
                  >
                    <li>
                      <a
                        href="#!"
                        to="/profile"
                        className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                      >
                        Edit
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100">
                        Delete
                      </a>
                    </li>
                  </ul>
                </div> */}
				<svg
                  className="h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                ></svg>
          </div>
		  <div className="max-h-0 overflow-hidden duration-300 group-focus:max-h-40">
                <a
                  className="flex items-center h-8 px-4 text-sm hover:bg-gray-200"
                  href="#"
                >
                  Item A
                </a>
                <a
                  className="flex items-center h-8 px-4 text-sm hover:bg-gray-200"
                  href="#"
                >
                  Item B
                </a>
                <a
                  className="flex items-center h-8 px-4 text-sm hover:bg-gray-200"
                  href="#"
                >
                  Item C
                </a>
              </div>
		  </button>
		  <button className=" group border-t border-r border-l border-black focus:outline-none">

          <div className="products-row flex items-center justify-between h-12 font-semibold ">
            <div className="product-cell image">
              <span>jbib</span>
            </div>
            <div className="product-cell category">
              <span className="cell-label">Category:</span>
              hjvuhvu
            </div>
            <div className="product-cell status-cell">
              <span className="cell-label">Status:</span>
              <span className="status active">Pending</span>
            </div>
            <div className="product-cell category">
              <span className="cell-label">Diection:</span>
              Diection
            </div>
            <div className="product-cell stock">
              <span className="cell-label">Stock:</span>a
            </div>
            <div className="product-cell price">
              <span className="cell-label">Price:</span>p
            </div>

            <td className="product-cell py-4 whitespace-no-wrap text-sm leading-5">
              <div className="flex justify-center items-center">
                <a
                  href="#"
                  className="text-blue-500 flex flex-col justify-center items-center hover:text-blue-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                  <p>Edit</p>
                </a>
                <a
                  href="#"
                  className="text-red-500 flex flex-col justify-center items-center hover:text-red-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                  <p>Delete</p>
                </a>
              </div>
            </td>

            {/* <div className="product-cell dropdown relative mr-5">
                  <a
                    className="dropdown-toggle relative block bg-gray-800 rounded p-2 hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                    href="#"
                    id="dropdownMenuButton2"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <svg
                      className="h-6 w-6 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                      />
                    </svg>
                  </a>

                  <ul
                    className="dropdown-menu min-w-max absolute bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none left-auto right-0"
                    aria-labelledby="dropdownMenuButton2"
                  >
                    <li>
                      <a
                        href="#!"
                        to="/profile"
                        className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                      >
                        Edit
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100">
                        Delete
                      </a>
                    </li>
                  </ul>
                </div> */}
				<svg
                  className="h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                ></svg>
          </div>
		  <div className="max-h-0 overflow-hidden duration-300 group-focus:max-h-40">
                <a
                  className="flex items-center h-8 px-4 text-sm hover:bg-gray-200"
                  href="#"
                >
                  Item A
                </a>
                <a
                  className="flex items-center h-8 px-4 text-sm hover:bg-gray-200"
                  href="#"
                >
                  Item B
                </a>
                <a
                  className="flex items-center h-8 px-4 text-sm hover:bg-gray-200"
                  href="#"
                >
                  Item C
                </a>
              </div>
		  </button>



        </div>
      </div>
    </div>
  );
};

export default Orders;
