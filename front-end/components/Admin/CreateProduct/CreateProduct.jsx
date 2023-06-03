import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { postProdut, getAllCategory } from "../../../redux/action/index";
import Modal from "react-modal";
import "./CreateProduct.scss";
import AddProduct from "../Alerts/AddProduct";
import ErrorProduct from "../Alerts/ErrorProduct";
import CreateCategory from "../CreateCategory/CreateCategory";
import axios from "axios";

Modal.setAppElement("#root");

const CreateProduct = () => {
  const dispatch = useDispatch();
  const product = useSelector(state => state.allProduct);
  const categories = useSelector(state => state.allCategory);
  // const productCategory = useSelector((state)=> state.allCategory)

  const [openAddProduct, setIsOpenAddProduct] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);
  const [openAddCategory, setOpenAddCategory] = React.useState(false);

  console.log(product);

  useEffect(() => {
    dispatch(getAllCategory());
    dispatch(getAllCategory());
  }, []);

  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    name: "",
    image: "",
    description: "",
    brand: "",
    price: 0,
    stock: 0,
    categories: "",
  });

  function handleInputChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleSelect(e) {
    if (
      !input.categories.includes(e.target.value) &&
      e.target.value !== "select"
    ) {
      setInput({
        ...input,
        categories: [...input.categories, e.target.value],
      });
      console.log(input);
    } else {
      alert("The categories is already added");
    }
  }

  /*function handleDelete(el){
     setInput({
         ...input,
         categories: input.categories.filter(d=> d !== el) 
     })
 }
 */

  function handleSubmit(e) {
    e.preventDefault();
    if (
      input.name &&
      input.image &&
      input.description &&
      input.price &&
      input.stock &&
      input.categories &&
      !errors.name &&
      !errors.image &&
      !errors.description &&
      !errors.price &&
      !errors.stock
    ) {
      //console.log(input.categories[0])

      dispatch(postProdut(input));
      setIsOpenAddProduct(true);
      setInput({
        name: "",
        image: "",
        brand: "",
        description: "",
        price: 0,
        stock: 0,
        categories: "",
      });
    } else {
      setOpenError(true);
    }
  }

  function validate(input) {
    let errors = {};

    //! Validacion Nombres de recetas

    if (!input.name) {
      errors.name = "El campo nombre es requerido";
    } else if (product.find(e => e.name === input.name)) {
      errors.name = "existing name";
    }

    if (!input.description) {
      errors.description = "Please add a comment about your product";
    } else if (!/^.{0,300}$/.test(input.description)) {
      errors.description = "This field cannot contain more than 300 characters";
    }
    if (!input.image) errors.image = " ingrese img";
    else if (
      !/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+(?:png|jpg|jpeg|gif|svg)+$/.test(
        input.image
      )
    ) {
      errors.image = "Formato no Valido";
    }
    if (!input.price) {
      errors.price = "A value is required";
    } else {
      if (input.price < 1 || input.price > 10000)
        errors.price = "The value must be within this range";
    }
    if (!input.stock) {
      errors.stock = "A value is required";
    } else {
      if (input.stock < 1 || input.stock > 99)
        errors.stock = "The value must be within this range";
    }
    return errors;
  }

  useEffect(() => {
    console.log(input);
  }, [input]);

  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("");

  const uploadImage = async e => {
    try {
      let image1;
      const files = e.target.files[0];
      const data = new FormData();
      data.append("file", files);
      data.append("upload_preset", "imagenes");
      setLoading(true);
      await axios
        .post("https://api.cloudinary.com/v1_1/ddgtvlmvp/image/upload", data)
        .then(ress => {
          image1 = ress.data.secure_url;
        });
      console.log(image1);
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="app-container">
      <div className="app-contents">
        <div className="app-contents-header">
          <h1 className="app-contents-headerText">Add Product</h1>
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

        <div className="px-10 py-2 shadow h-1/6 md:w-10/12 mx-auto lg:w-10/12">
          <form onSubmit={handleSubmit} className="form w-full">
            <div className="mb-5">
              <label for="name" className="block mb-2 font-bold text-white">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Put in your fullname."
                className="border border-gray-400 shadow p-3 w-full rounded mb-"
                value={input.name}
                onChange={handleInputChange}
              />
              {errors.name && <p className="danger absolute ">{errors.name}</p>}
            </div>
            <div className="mb-5">
              <label for="brand" className="block mb-2 font-bold text-white">
                brand
              </label>
              <input
                type="text"
                name="brand"
                placeholder="Put in your fullname."
                className="border border-gray-400 shadow p-3 w-full rounded mb-"
                value={input.brand}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-5">
              {/* <label className="block mb-2 font-bold text-white">Image</label>
              <input
                type="text"
                value={input.image}
                onChange={handleInputChange}
                name="image"
                placeholder="Image"
                className="border border-gray-400 shadow p-3 w-full rounded mb-"
              />
              {errors.image && (
                <p className="danger absolute">{errors.image}</p>
              )} */}
              <label
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                for="file_input"
              >
                Upload file
              </label>
              <input
                onChange={uploadImage}
                class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                aria-describedby="file_input_help"
                id="file_input"
                name="file"
                type="file"
              />
              <p
                class="mt-1 text-sm text-gray-500 dark:text-gray-300"
                id="file_input_help"
              >
                SVG, PNG, JPG or GIF (MAX. 800x400px).
              </p>
            </div>

            <div className="mb-5">
              <label
                for="description"
                className="block mb-2 font-bold text-white"
              >
                Description
              </label>
              <input
                value={input.description}
                onChange={handleInputChange}
                type="text"
                name="description"
                placeholder="description...."
                className="border border-gray-400 shadow p-3 w-full rounded mb-"
              />
              {errors.description && (
                <p className="danger absolute">{errors.description}</p>
              )}
            </div>
            <div className="flex flex-nowrap  w-full justify-between">
              <div className="mb-5 mr-3 w-full">
                <label for="price" className="block mb-2 font-bold text-white">
                  Price
                </label>
                <input
                  type="number"
                  placeholder="Price"
                  name="price"
                  value={input.price}
                  onChange={handleInputChange}
                  className="border border-gray-400 shadow p-3 w-full rounded mb-"
                />
                {errors.price && (
                  <p className="danger absolute">{errors.price}</p>
                )}
              </div>

              <div className="mb-5 w-full">
                <label
                  for="countInStock"
                  className="block mb-2 font-bold text-white"
                >
                  Stock
                </label>
                <input
                  type="number"
                  placeholder="countInStock"
                  name="stock"
                  value={input.stock}
                  onChange={handleInputChange}
                  className="border border-gray-400 shadow p-3 w-full rounded mb-"
                />
                {errors.stock && (
                  <p className="danger absolute">{errors.stock}</p>
                )}
              </div>
            </div>

            <div className="flex flex-row items-center mb-0 justify-between">
              <select onChange={e => handleSelect(e)} className="select">
                <option disabled selected defaultValue>
                  Select Category
                </option>
                <option value="tipos">Filter Category</option>
                {categories &&
                  categories.map(e => <option value={e.name}>{e.name}</option>)}
              </select>
              <a
                onClick={() => setOpenAddCategory(true)}
                href
                className="py-2 ml-4 px-4 cursor-pointer capitalize tracking-wide bg-gray-800 text-white font-medium rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
              >
                Add Category
              </a>
            </div>
            <div className="absolute flex flex-row">
              {!input.categories
                ? null
                : input.categories.map((c, i) => {
                    return (
                      <span
                        key={i}
                        className="transition ease-in text-gray-200 duration-300 inline-flex items-center mt-2 mb-2 md:mb-0  px-3 cursor-pointer hover:shadow-lg tracking-wider  rounded-full hover:bg-gray-700"
                        onClick={() =>
                          setInput(prev => {
                            var filtered = input.categories.filter(
                              e => e !== c
                            );
                            return {
                              ...prev,
                              categories: filtered,
                            };
                          })
                        }
                      >
                        {c}
                      </span>
                    );
                  })}
            </div>
            {/*<select  onChange ={(e)=>handleSelect(e)} className="select">
         <option  disabled selected defaultValue>select category</option>
         
         {product.map(el=>(
             <option value ={el.categories}>{el.categories}</option>
         ))}
         </select>
        </select>*/}

            {/*  <div className="lista-container">
         <ul>{input.categories.map(el =><li className="lista"><button className="block w-full bg-gray-600 text-white font-bold p-4 rounded-lg"
          onClick={()=>handleDelete(el)}>{el}</button></li>)}</ul>
         </div>
 */}
            <div className="flex flex-row w-full justify-end">
              <Link to="/products">
                <button className="block w-24 mx-2 bg-gray-600 text-white font-bold p-2 rounded-lg">
                  Volver{" "}
                </button>
              </Link>
              <button className="block w-24  bg-gray-600 text-white font-bold p-2 rounded-lg">
                Submit
              </button>
            </div>
          </form>
        </div>
        <Modal
          isOpen={openAddProduct}
          onRequestClose={() => setIsOpenAddProduct(false)}
          overlayClassName={{
            base: "overlay-base",
            afterOpen: "overlay-after",
            beforeClose: "overlay-before",
          }}
          className={{
            base: "content-base",
            afterOpen: "content-after",
            beforeClose: "content-before",
          }}
          closeTimeoutMS={500}
        >
          <AddProduct setIsOpenAddProduct={setIsOpenAddProduct} />
        </Modal>
        <Modal
          isOpen={openError}
          onRequestClose={() => setOpenError(false)}
          overlayClassName={{
            base: "overlay-base",
            afterOpen: "overlay-after",
            beforeClose: "overlay-before",
          }}
          className={{
            base: "content-base",
            afterOpen: "content-after",
            beforeClose: "content-before",
          }}
          closeTimeoutMS={500}
        >
          <ErrorProduct setOpenError={setOpenError} />
        </Modal>
        <Modal
          isOpen={openAddCategory}
          onRequestClose={() => setOpenAddCategory(false)}
          overlayClassName={{
            base: "overlay-base",
            afterOpen: "overlay-after",
            beforeClose: "overlay-before",
          }}
          className={{
            base: "content-base",
            afterOpen: "content-after",
            beforeClose: "content-before",
          }}
          closeTimeoutMS={500}
        >
          <CreateCategory setOpenAddCategory={setOpenAddCategory} />
        </Modal>
      </div>
    </div>
  );
};

export default CreateProduct;
