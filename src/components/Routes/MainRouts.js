import React from "react";
import Register from "../Auth/Register";
import { Route, Routes } from "react-router-dom";
import Login from "../Auth/Login";
import Homepage from "../UI/Homepage";
import AddProduct from "../Products/AddProduct";
import EditProduct from "../Products/EditProduct";
import ProductDetails from "../Products/ProductDetails";
import CartPage from "../Cart/CartPage";

const MainRouts = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}>
        {" "}
      </Route>
      <Route path="/signup" element={<Register />}>
        {" "}
      </Route>
      <Route path="/signin" element={<Login />}>
        {" "}
      </Route>
      <Route path="/add" element={<AddProduct />}>
        {" "}
      </Route>
      <Route path="/edit/:id" element={<EditProduct />}>
        {" "}
      </Route>
      <Route path="/details/:id" element={<ProductDetails />}>
        {" "}
      </Route>
      <Route path="/cart/" element={<CartPage />}>
        {" "}
      </Route>
    </Routes>
  );
};

export default MainRouts;
