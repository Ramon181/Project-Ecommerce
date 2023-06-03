/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import FilterCategory from "../FilterCategory/FilterCategory";
import SeachBar from "../SeachBar/SeachBar";
import Modal from "react-modal";
import LogOn from "../LogOn/LogOn";
import "./NavBar.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { userState } from "../../../redux/action";

Modal.setAppElement("#root");

const NavBar = () => {
  const [hamburg, setHamburg] = useState(false);
  const [registerModal, setRegisterModal] = useState();
  // const [loginModal, setLoginModal] = useState();
  const [category, setCategory] = useState(1);

  const dispatch = useDispatch();
  const userInfo = useSelector(state => state.userInfo);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.token) {
      dispatch(userState(user));
    }else{
      dispatch(
        userState({
          userName: null,
          name: null,
          token: null,
          role: null,
        })
      )
    }
  }, [dispatch]);

  console.log(userInfo)


  const logOut = () => {
    localStorage.removeItem("user");
    dispatch(
      userState({
        userName: null,
        name: null,
        token: null,
        role: null,
      })
    );
  };

  return (
    <nav className="flex items-center flex-wrap justify-between bg-white py-4  shadow border-solid border-t-2 border-blue-700">
      <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2  border-gray-300  lg:pb-0">
        <div className="flex items-center flex-shrink-0 text-gray-800 mr-16">
          <span className="font-semibold text-xl tracking-tight">
            My Navbar
          </span>
        </div>
        <div className="relative mx-auto text-gray-600 lg:hidden block">
          <SeachBar />
        </div>
        <div className="block lg:hidden ">
          <button
            onClick={() => {
              if (hamburg === false) {
                setHamburg(true);
              } else {
                setHamburg(false);
              }
            }}
            id="nav"
            className="flex items-center px-3 py-2 border-2 rounded text-blue-700 border-blue-700 hover:text-blue-700 hover:border-blue-700"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex flex-row items-center px-8">
        <div className="lg:block text-md font-bold text-blue-700 hidden">
          <button
            className=" block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
            onClick={() => {
              if (category === false) {
                setCategory(true);
              } else {
                setCategory(false);
              }
            }}
            type="button"
            class=""
            aria-expanded="false"
          >
            Men
          </button>

          <a
            href="#responsive-header"
            className=" block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
          >
            Menu 2
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
          >
            Menu 3
          </a>
        </div>

        <div className="relative mx-auto text-gray-600 lg:block hidden">
          <SeachBar />
        </div>

        {userInfo.userName === null ? (
          <div className=" lg:flex hidden ">
            <button
              onClick={() => setRegisterModal(true)}
              href="#!"
              className="block text-md px-4 py-2 rounded text-blue-700 ml-2 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0"
            >
              Sign in
            </button>

            <a
              href="#!"
              className=" block text-md px-4  ml-2 py-2 rounded text-blue-700 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0"
            >
              login
            </a>
          </div>
        ) : (
          <button onClick={()=>logOut()}>
            logOut
          </button>
          // <li>
          //   <button
          //     id="dropdownNavbarLink"
          //     data-dropdown-toggle="dropdownNavbar"
          //     class="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 font-medium flex items-center justify-between w-full md:w-auto"
          //   >
          //     Dropdown{" "}
          //     <svg
          //       class="w-4 h-4 ml-1"
          //       fill="currentColor"
          //       viewBox="0 0 20 20"
          //       xmlns="http://www.w3.org/2000/svg"
          //     >
          //       <path
          //         fill-rule="evenodd"
          //         d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          //         clip-rule="evenodd"
          //       ></path>
          //     </svg>
          //   </button>
          //   <div
          //     id="dropdownNavbar"
          //     class="hidden bg-white text-base z-10 list-none divide-y divide-gray-100 rounded shadow my-4 w-44"
          //   >
          //     <ul class="py-1" aria-labelledby="dropdownLargeButton">
          //       <li>
          //         <a
          //           href="#"
          //           class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
          //         >
          //           Dashboard
          //         </a>
          //       </li>
          //       <li>
          //         <a
          //           href="#"
          //           class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
          //         >
          //           Settings
          //         </a>
          //       </li>
          //       <li>
          //         <a
          //           href="#"
          //           class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
          //         >
          //           Earnings
          //         </a>
          //       </li>
          //     </ul>
          //     <div class="py-1">
          //       <a
          //         href="#"
          //         class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
          //       >
          //         Sign out
          //       </a>
          //     </div>
          //   </div>
          // </li>
        )}
      </div>

      {hamburg === true ? (
        <div className="menu lg:hidden w-full  flex-grow  lg:items-center lg:w-auto lg:px-3 px-8">
          <div className="text-md font-bold text-blue-700 lg:flex-grow">
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
            >
              Menu 1
            </a>
            <a
              href="#responsive-header"
              className=" block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
            >
              Menu 2
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
            >
              Menu 3
            </a>
          </div>

          <div className="relative mx-auto text-gray-600 lg:block hidden">
            <SeachBar />
          </div>
          <div className="flex ">
            <a
              href="#!"
              className="block text-md px-4 py-2 rounded text-blue-700 ml-2 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0"
            >
              Sign in
            </a>

            <a
              href="#!"
              className=" block text-md px-4  ml-2 py-2 rounded text-blue-700 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0"
            >
              login
            </a>
          </div>
        </div>
      ) : null}

      {category === true ? <FilterCategory setCategory={setCategory} /> : null}

      <Modal
        isOpen={registerModal}
        onRequestClose={() => setRegisterModal(false)}
        overlayClassName={{
          base: "overlay-base",
          afterOpen: "overlay-after",
          beforeClose: "overlay-before",
        }}
        className={{
          base: "content-base",
          afterOpen: "content-box",
          beforeClose: "content-before",
        }}
        closeTimeoutMS={500}
      >
        <LogOn setRegisterModal={setRegisterModal} />
      </Modal>
    </nav>
  );
};

export default NavBar;
