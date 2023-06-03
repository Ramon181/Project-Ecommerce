import { useState } from "react";
import SeachBar from "../SeachBar/SeachBar";
import Modal from "react-modal";
import LogOn from "../LogOn/LogOn";
import "./NavBar.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { userState } from "../../../redux/action";
import LogIn from "../LogIn/LogIn";
import { Link } from "react-router-dom";

Modal.setAppElement("#root");

const NavBar = () => {
  const [hamburg, setHamburg] = useState(false);
  const [registerModal, setRegisterModal] = useState();
  const [loginModal, setLoginModal] = useState();

  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userInfo);
  const user = useSelector((state) => state.errorUser);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.token) {
      dispatch(userState(user));
    } else {
      dispatch(
        userState({
          userName: null,
          name: null,
          token: null,
          role: null,
          profile: null,
          banned: null
        })
      );
    }
  }, [dispatch]);

  console.log(userInfo);
  console.log(user);

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
    <nav className="flex items-center flex-wrap justify-between bg-[#131921] py-4">
      <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2  border-gray-300  lg:pb-0">
        <div className="flex items-center flex-shrink-0 text-gray-800 mr-16">
          <span className="font-semibold text-[#fefefe] text-xl tracking-tight">
            My Navbar
          </span>
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
            className="flex items-center px-3 py-2 border-2 rounded text-white hover:hover:border-white"
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

      <div className="flex flex-row space-x-6 items-center px-8">
        <div className="lg:block text-white hidden space-x-6">
          <Link
            to="/"
            className="font-semibold font-heading space-x-12 hover:text-gray-200"
          >
            Home
          </Link>
          <Link
            to="/products"
            href="#responsive-header"
            className="font-semibold font-heading space-x-12 hover:text-gray-200"
          >
            Articles
          </Link>
        </div>
        <div className="ml-2 lg:ml-4 relative inline-block">
          <a
            className="flex items-center text-white hover:text-gray-200"
            href="#"
          >
            <div className="absolute text-[10px] -top-2 -right-2 z-10 bg-yellow-400 text-xs font-bold px-[2px] py-[0px] rounded-sm">
              0
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </a>
        </div>

        {userInfo.userName === null ? (
          <div className="lg:flex hidden mt-auto space-x-1">
            <button
              onClick={() => setLoginModal(true)}
              className="block px-4 py-1 leading-loose text-xs text-center font-semibold bg-gray-50 hover:bg-gray-100 rounded-xl"
            >
              Sign in
            </button>

            <button
              onClick={() => setRegisterModal(true)}
              className="block px-4 py-1 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl"
            >
              Sign up
            </button>
          </div>
        ) : (
          <button onClick={() => logOut()}>logOut</button>
        )}
      </div>

      {hamburg === true ? (
        <div className="menu lg:hidden w-full flex flex-col mx-auto">
          <div className="text-md font-bold flex flex-col justify-center items-center text-white">
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0  hover:text-white px-4 py-2 rounded hover:bg-gray-500 mr-2"
            >
              Menu 1
            </a>
            <a
              href="#responsive-header"
              className=" block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-gray-500 mr-2"
            >
              Menu 2
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-gray-500 mr-2"
            >
              Menu 3
            </a>
          </div>

          <div className="relative mx-auto text-gray-600 lg:block hidden">
            <SeachBar />
          </div>
          <div className="flex text-white justify-end">
            <a
              href="#!"
              className="block text-md px-4 py-2 rounded ml-2 font-bold hover:text-white mt-4 hover:bg-gray-500 lg:mt-0"
            >
              Sign in
            </a>

            <a
              href="#!"
              className=" block text-md px-4 mr-2 py-2 rounded font-bold hover:text-white mt-4 hover:bg-gray-500 lg:mt-0"
            >
              login
            </a>
          </div>
        </div>
      ) : null}

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
      <Modal
        isOpen={loginModal}
        onRequestClose={() => setLoginModal(false)}
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
        <LogIn setLoginModal={setLoginModal} />
      </Modal>
    </nav>
  );
};

export default NavBar;
