import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../components/Auth/store/authSlice";
import productsReducer from "../components/Products/store/productsSlice";
import cartReducer from "../components/Cart/store/cartSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer,
    cart: cartReducer,
  },
});
