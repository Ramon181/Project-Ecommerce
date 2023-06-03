import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCategory } from "../../../redux/action";

const CreateCategory = (setOpenAddCategory) => {

  const [ name, setName ] = useState("");
  const dispatch = useDispatch();

  const onChange = (e)=>{
    setName(e)
    
  }
  console.log(name)

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addCategory({name:name}))
    setOpenAddCategory(false)
    setName("")
  }

  return (
    <div className="bg-white rounded-lg shadow relative dark:bg-gray-700">
      <div className="flex justify-end p-2">
        <button onClick={()=> setOpenAddCategory(false)}
          type="button"
          className="text-gray-400 w-8 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
          data-modal-toggle="authentication-modal"
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <form onSubmit={(e)=> onSubmit(e)} className="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8" action="#">
        <div>
          <label
            for="name"
            className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
          >
            Add Category
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e)=> onChange(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="Name"
            required=""
          />
        </div>
        <div>
        <button className="text-base  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-teal-700 hover:text-teal-100 
        bg-teal-100 
        text-teal-700 
        border duration-200 ease-in-out 
        border-teal-600 transition">
                <div className="flex leading-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-save w-5 h-5 mr-1">
                        <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
                        <polyline points="17 21 17 13 7 13 7 21"></polyline>
                        <polyline points="7 3 7 8 15 8"></polyline>
                    </svg>
                    Save</div>
            </button>
        </div>
      </form>
    </div>
  );
};

export default CreateCategory;
