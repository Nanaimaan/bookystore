import { createSlice } from "@reduxjs/toolkit";
import { calcSubPrice, calcTotalPrice } from "../../../helpers/Func";

const initialState = {
  products: { products: [] },
  loading: false,
  error: "",
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      let cart = JSON.parse(localStorage.getItem("product"));
      if (!cart) {
        localStorage.setItem(
          "product",
          JSON.stringify({ products: [], totalPrice: 0 })
        );
        cart = {
          products: [],
          totalPrice: 0,
        };
      }

      let cartItem = {
        count: 1,
        subPrice: action.payload.price,
        item: action.payload,
      };
      let productToFind = cart.products.filter(
        (item) => item.item.id === action.payload.id
      );

      if (productToFind.length > 0) {
        cart.products = cart.products.filter(
          (item) => item.item.id !== action.payload.id
        );
        console.log(cart.products, "HELLLO");
        cart.totalPrice = calcTotalPrice(cart.products);
        localStorage.setItem("product", JSON.stringify(cart));
      } else {
        cart.products.push(cartItem);
        console.log("BYE");
        cart.totalPrice = calcTotalPrice(cart.products);

        localStorage.setItem("product", JSON.stringify(cart));
      }
      getCart();
      // cart.totalPrice = calcTotalPrice(cart.products);

      // localStorage.setItem("product", JSON.stringify(cart));
    },
    //save in state and render into the page
    getCart(state, action) {
      let getItem = JSON.parse(localStorage.getItem("product"));
      // console.log(getItem, "FROM getCart func");
      state.products = getItem;
    },

    changeProductCount(state, action) {
      let cart = JSON.parse(localStorage.getItem("product"));
      console.log(action.payload.count, "ID");
      cart.products = cart.products.map((item) => {
        if (item.item.id === action.payload.id) {
          item.count = action.payload.count;
          item.subPrice = calcSubPrice(item);
        }
        return item;
      });
      cart.totalPrice = calcTotalPrice(cart.products);
      console.log(cart, "FROM CHANGERPODUCTCOUNT");
      localStorage.setItem("product", JSON.stringify(cart));
      state.products = cart;
    },
    removeCart(state, action) {
      let cart = JSON.parse(localStorage.getItem("product"));
      cart.products = cart.products.filter(
        (item) => item.item.id !== action.payload.id
      );
      cart.totalPrice = calcTotalPrice(cart.products);
      localStorage.setItem("product", JSON.stringify(cart));
      state.products = cart;
    },
    existingProduct(state, action) {
      let cart = JSON.parse(localStorage.getItem("product"));
      let newCart = cart.products.filter(
        (elem) => elem.item.id === action.payload.id
      );
      return newCart.length > 0 ? true : false;
    },
  },
});

export const {
  addToCart,
  getCart,
  changeProductCount,
  removeCart,
  existingProduct,
} = cartSlice.actions;

export default cartSlice.reducer;
