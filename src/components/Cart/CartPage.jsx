import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getCart } from "./store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import CartItem from "./CartItem";
import "./css/cartPage.css";

export default function CartPage() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);

  console.log(products, "FROM CARTPAGE");

  useEffect(() => {
    dispatch(getCart());
  }, []);
  return (
    <div>
      <div className="cartList">
        {products?.products.map((item, index) => {
          return <CartItem key={index} product={item} />;
        })}
      </div>
      <div className="bill">{products.totalPrice}</div>
    </div>
  );
}
