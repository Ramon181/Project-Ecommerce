import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getAllProdut,
  getProductName,
  orderStock,
  OrderName,
  orderPrice,
  statusTrue,
  statusFalse,
} from "../../../redux/action";
import "./PrductTable.scss";

const ProductTable = () => {
  const [search, setSearch] = useState("");
  const [order, setOrder] = useState("");
  const [item, setItem] = useState("ASCENDENTE");
  const [price, setPrice] = useState("min");
  const [stoke, setStoke] = useState("min");

  const [disableItem, setDisableItem] = useState(false);
  const [disableCategory, setDisableCategory] = useState(false);
  const [disableStatus, setDisableStatus] = useState(false);
  const [disableStock, setDisableStock] = useState(false);
  const [disablePrice, setDisablePrice] = useState(false);
  const [disableAction, setDisableAction] = useState(false);

  const product = useSelector(state => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProdut());
  }, [dispatch]);

  console.log(order);

  const onChange = e => {
    setSearch(e);
  };

  const onSubmit = e => {
    e.preventDefault();
    dispatch(getProductName(search));
    setSearch("");
  };

  const OrderByNames = e => {
    if (item === "ASCENDENTE") {
      e.preventDefault();
      dispatch(OrderName("DESCENDENTE"));
      setOrder("Ordenado por" + item);
      setItem("DESCENDENTE");
    } else {
      e.preventDefault();
      dispatch(OrderName("ASCENDENTE"));
      setOrder("Ordenado por" + item);
      setItem("ASCENDENTE");
    }
  };

  const orderByPrice = e => {
    if (price === "min") {
      e.preventDefault();
      dispatch(orderPrice("max"));
      setOrder("Ordenado por" + price);
      setPrice("max");
    } else {
      setPrice("min");
      e.preventDefault();
      dispatch(orderPrice("min"));
      setOrder("Ordenado por" + price);
    }
  };

  const orderByCountinStock = e => {
    if (stoke === "min") {
      e.preventDefault();
      dispatch(orderStock("max"));
      setOrder("Ordenado por" + stoke);
      setStoke("max");
    } else {
      setStoke("min");
      e.preventDefault();
      dispatch(orderStock("min"));
      setOrder("Ordenado por" + stoke);
    }
  };

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
          <Link to={"/create"} className="app-content-headerButton">
            Add Product
          </Link>
        </div>
        <div className="app-content-actions">
          <div className="app-content-actions ">
            <form method="GET">
              <div className="relative w-80 text-gray-600 focus-within:text-gray-400">
                <span className="absolute  left-0 flex items-center pl-1">
                  <button
                    onClick={e => onSubmit(e)}
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
                  value={search}
                  onChange={e => onChange(e.target.value)}
                  type="text"
                  className="py-2 text-sm text-gray-800 w-full bg-gray-100 rounded-md pl-10 focus:outline-none "
                  placeholder="Search..."
                  autocomplete="off"
                />
              </div>
            </form>
          </div>
          <div className="app-content-actions-wrapper">
            <div className="filter-button-wrapper">
              <button
                onClick={() => dispatch(getAllProdut())}
                type="submit"
                className="action-button filter jsFilter"
              >
                <span>Reset</span>
              </button>
            </div>

         
              <div className="product-cell dropdown w-full relative">
                <a
                  className="dropdown-toggle relative block bg-gray-100 rounded p-2 hover:bg-gray-300 focus:outline-none focus:bg-gray-300"
                  href="#"
                  id="dropdownMenuButton1"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
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
                </a>

                <ul
                  className="dropdown-menu min-w-max absolute bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none left-auto right-0"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li className="flex flex-row items-center px-2">
                    <input
                      type="checkbox"
                      id="Item"
                      onClick={() => {
                        if (disableItem === false) {
                          setDisableItem(true);
                        } else {
                          setDisableItem(false);
                        }
                      }}
                    />
                    <label
                      for="Item"
                      className="dropdown-item text-sm py-1 px-1 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                    >
                      Item
                    </label>
                  </li>
                  <li className="flex flex-row items-center px-2">
                    <input
                      type="checkbox"
                      id="Category"
                      onClick={() => {
                        if (disableCategory === false) {
                          setDisableCategory(true);
                        } else {
                          setDisableCategory(false);
                        }
                      }}
                    />
                    <label
                      for="Category"
                      className="dropdown-item text-sm py-1 px-1 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                    >
                      Category
                    </label>
                  </li>
                  <li className="flex flex-row items-center px-2">
                    <input
                      type="checkbox"
                      id="Status"
                      onClick={() => {
                        if (disableStatus === false) {
                          setDisableStatus(true);
                        } else {
                          setDisableStatus(false);
                        }
                      }}
                    />
                    <label
                      for="Status"
                      className="dropdown-item text-sm py-1 px-1 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                    >
                      Status
                    </label>
                  </li>
                  <li className="flex flex-row items-center px-2">
                    <input
                      type="checkbox"
                      id="Stock"
                      onClick={() => {
                        if (disableStock === false) {
                          setDisableStock(true);
                        } else {
                          setDisableStock(false);
                        }
                      }}
                    />
                    <label
                      for="Stock"
                      className="dropdown-item text-sm py-1 px-1 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                    >
                      Stock
                    </label>
                  </li>
                  <li className="flex flex-row items-center px-2">
                    <input
                      type="checkbox"
                      id="Price"
                      onClick={() => {
                        if (disablePrice === false) {
                          setDisablePrice(true);
                        } else {
                          setDisablePrice(false);
                        }
                      }}
                    />
                    <label
                      for="Price"
                      className="dropdown-item text-sm py-1 px-1 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                    >
                      Price
                    </label>
                  </li>
                  <li className="flex flex-row items-center px-2">
                    <input
                      type="checkbox"
                      id="Action"
                      onClick={() => {
                        if (disableAction === false) {
                          setDisableAction(true);
                        } else {
                          setDisableAction(false);
                        }
                      }}
                    />
                    <label
                      for="Action"
                      className="dropdown-item text-sm py-1 px-1 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                    >
                      Action
                    </label>
                  </li>
                </ul>
              </div>
            
          </div>
        </div>
        <div className="products-area-wrapper tableView">
          <div className="products-header">
            {disableItem === false ? (
              <div className="product-cell image">
                Items
                <button onClick={OrderByNames} className="sort-button">
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
            ) : null}
            {disableCategory === false ? (
              <div className="product-cell category">
                Category
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
            ) : null}
            {disableStatus === false ? (
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
            ) : null}
            {disableStock === false ? (
              <div className="product-cell stock">
                Stock
                <button onClick={orderByCountinStock} className="sort-button">
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
            ) : null}
            {disablePrice === false ? (
              <div onClick={orderByPrice} className="product-cell price">
                Price
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
            ) : null}
            {disableAction === false ? (
              <div className="product-cell sales">Action</div>
            ) : null}
          </div>
          {product ? product &&
            product?.map(e => (
              <div key={e.id} className="products-row">
                {disableItem === false ? (
                  <div className="product-cell image">
                    <img
                      className="imagen_prduct"
                      src={e.image}
                      alt="product"
                    />
                    <span>{e.name}</span>
                  </div>
                ) : null}
                {disableCategory === false ? (
                  <div className="product-cell category">
                    <span className="cell-label">Category:</span>
                  </div>
                ) : null}
                {disableStatus === false ? (
                  <div className="product-cell status-cell">
                    <span className="cell-label">Status:</span>
                    {e.status && e.status === true ? (
                      <span className="status active">Active</span>
                    ) : (
                      <span className="status disabled">Disabled</span>
                    )}
                  </div>
                ) : null}
                {disableStock === false ? (
                  <div className="product-cell stock">
                    <span className="cell-label">Stock:</span>
                    {e.stock}
                  </div>
                ) : null}
                {disablePrice === false ? (
                  <div className="product-cell price">
                    <span className="cell-label">Price:</span>${e.price}
                  </div>
                ) : null}
                {disableAction === false ? (
                  <td className="product-cell py-4 whitespace-no-wrap text-sm leading-5">
                    <div className="flex justify-center items-center">
                      <button
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
                      </button>
                      {e.status === true ? (
                        <button
                          onClick={() => {
                            if (e.status === true) {

                              dispatch(getAllProdut())
                              dispatch(statusFalse({ id: e.id }))
                              
                            }else{
                              
                            }
                          }}
                          href="#"
                          className="text-red-500 flex flex-col justify-center items-center hover:text-red-600"
                        >
                          <span class="inline-flex items-center bg-gray-500 rounded-full px-2 text-sm text-white py-1 font-medium">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="fill-current mr-1.5 text-white"
                              viewBox="0 0 16 16"
                              width="16"
                              height="16"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M6.749.097a8.054 8.054 0 012.502 0 .75.75 0 11-.233 1.482 6.554 6.554 0 00-2.036 0A.75.75 0 016.749.097zM4.345 1.693A.75.75 0 014.18 2.74a6.542 6.542 0 00-1.44 1.44.75.75 0 01-1.212-.883 8.042 8.042 0 011.769-1.77.75.75 0 011.048.166zm7.31 0a.75.75 0 011.048-.165 8.04 8.04 0 011.77 1.769.75.75 0 11-1.214.883 6.542 6.542 0 00-1.439-1.44.75.75 0 01-.165-1.047zM.955 6.125a.75.75 0 01.624.857 6.554 6.554 0 000 2.036.75.75 0 01-1.482.233 8.054 8.054 0 010-2.502.75.75 0 01.858-.624zm14.09 0a.75.75 0 01.858.624 8.057 8.057 0 010 2.502.75.75 0 01-1.482-.233 6.55 6.55 0 000-2.036.75.75 0 01.624-.857zm-13.352 5.53a.75.75 0 011.048.165 6.542 6.542 0 001.439 1.44.75.75 0 01-.883 1.212 8.04 8.04 0 01-1.77-1.769.75.75 0 01.166-1.048zm12.614 0a.75.75 0 01.165 1.048 8.038 8.038 0 01-1.769 1.77.75.75 0 11-.883-1.214 6.543 6.543 0 001.44-1.439.75.75 0 011.047-.165zm-8.182 3.39a.75.75 0 01.857-.624 6.55 6.55 0 002.036 0 .75.75 0 01.233 1.482 8.057 8.057 0 01-2.502 0 .75.75 0 01-.624-.858z"
                              ></path>
                            </svg>
                            To disable
                          </span>
                        </button>
                      ) : (
                        <button
                          onClick={() => { 
                            if (e.status === false) {
                              dispatch(getAllProdut())
                              dispatch(statusTrue({ id: e.id }))
                            }else{
                            
                            }
                      
                          }}
                          href="#"
                          className="text-red-500 flex flex-col justify-center items-center hover:text-red-600"
                        >
                          <span class="inline-flex items-center bg-green-600 rounded-full px-2 text-sm text-white py-1 font-medium">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="fill-current mr-1.5 text-white"
                              viewBox="0 0 16 16"
                              width="16"
                              height="16"
                            >
                              <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                              <path
                                fill-rule="evenodd"
                                d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"
                              ></path>
                            </svg>
                            Active
                          </span>
                        </button>
                      )}
                    </div>
                  </td>
                ) : null}
              </div>
            )):null}
        </div>
      </div>
    </div>
  );
};

export default ProductTable;
