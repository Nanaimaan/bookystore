import React from "react";
import Register from "../Auth/Register";
import { Route, Routes } from "react-router-dom";
import Login from "../Auth/Login";
import Homepage from "../UI/Homepage";
import AddProduct from "../Products/AddProduct";
import EditProduct from "../Products/EditProduct";
import ProductDetails from "../Products/ProductDetails";
import CartPage from "../Cart/CartPage";
import Events from "../Products/Events";
import { idText } from "typescript";
import { useSelector } from "react-redux";
import NotFound from "../UI/NotFound";

const MainRouts = () => {
  const privateRoutes = { id: 1, link: "/admin", element: <AddProduct /> };
  const user = useSelector((state) => state.auth.user);

  return (
    <Routes>
      <Route path='/' element={<Homepage />}>
        {" "}
      </Route>
      <Route path='/signup' element={<Register />}>
        {" "}
      </Route>
      <Route path='/signin' element={<Login />}>
        {" "}
      </Route>
      {/* <Route path='/add' element={<AddProduct />}>
        {" "}
      </Route> */}
      {user.isAdmin && <Route path='/add' element={<AddProduct />} />}
      <Route path='/events' element={<Events />}>
        {" "}
      </Route>
      <Route path='/edit/:id' element={<EditProduct />}>
        {" "}
      </Route>
      <Route path='/details/:id' element={<ProductDetails />}>
        {" "}
      </Route>
      <Route path='/cart/' element={<CartPage />}>
        {" "}
      </Route>
      <Route path='*' element={<NotFound />}>
        {" "}
      </Route>
      {}
    </Routes>
  );
};

export default MainRouts;
