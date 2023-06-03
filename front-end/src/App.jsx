import { Route, Routes } from "react-router-dom";

import Home from "./components/User/Home/Home.jsx";
import NavBar from "./components/User/NavBar/NavBar.jsx";
import Products from "./components/User/Products/Products.jsx";
import Footer from "./components/User/Footer/footer.jsx";
import Detail from "./components/User/Detail/Detail.jsx";
import AllProducts from "./components/User/AllProducts/AllProducts.jsx";
import AllDetail from "./components/User/AllDetail/AllDetail.jsx";
import Error from "./components/User/Error/Error.jsx";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllCategory, getProductsFiltered } from "./redux/action/index.js";
import SideBar from "./components/User/SideBar/SideBar.jsx";

import Sidebar from "./components/Admin/SideBar/SideBar.jsx";
import Dashboard from "./components/Admin/Dashboard/Dashboard.jsx";
import PrductTable from "./components/Admin/PrductTable/PrductTable.jsx";
import CreateProduct from "./components/Admin/CreateProduct/CreateProduct";

function App() {
  const product = useSelector((state) => state.productList);
  const filter = useSelector((state) => state.filter);
  const user = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsFiltered(filter));
    dispatch(getAllCategory());
  }, [dispatch, filter]);

  console.log(user);

  return (
    <>
      {user.role === "admin" ? (
        <div className="flex flex-row">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/products" element={<PrductTable />} />
            <Route path="/create" element={<CreateProduct />} />
          </Routes>
        </div>
      ) : (
        <div className="">
          <NavBar />
          <SideBar />
          <Routes>
            <Route path="/" element={<Home product={product} />} />
            {filter.category || filter.name ? (
              <Route path="/result" element={<Products />} />
            ) : null}

            <Route
              path="/products"
              element={<AllProducts product={product} />}
            />
            <Route path="/result/:id" element={<Detail />} />
            <Route path="/products/:id" element={<AllDetail />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
