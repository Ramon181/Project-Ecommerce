import { useState } from "react";
import FilterCategory from "../FilterCategory/FilterCategory";
import Modal from "react-modal";
import SeachBar from "../SeachBar/SeachBar";

const SideBar = () => {

  const [allModal, setAllModal] = useState();

  return (
    <div className="bg-[#232f3e] px-2 py-2">
      <div className="relative flex items-center justify-center m-auto">
        <div className=" mt-0 mb-1 mx-1">
          <button onClick={() => setAllModal(true)} id="nav" className="flex rounded text-white hover:hover:border-white"
          >
            <svg
              className="fill-current h-7 w-7"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>All</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div className="flex m-auto items-center w-full justify-center">
          <SeachBar/>
        </div>
      </div>
      <Modal
        isOpen={allModal}
        onRequestClose={() => setAllModal(false)}
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
        <FilterCategory setAllModal={setAllModal} />
      </Modal>
    </div>
  );
};

export default SideBar;
