import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../../helpers/API";

const initialState = {
  products: [],
  oneProduct: { reviews: [] },
  reviews: [],
  loading: false,
  error: "",
  pageTotalCount: 1,
  shuffledProducts: [],
};

export const getProducts = createAsyncThunk(
  "product/getProducts",

  async () => {
    console.log(`${API}${window.location.search || "?_limit=9"}`, "here");
    const res = await axios.get(`${API}${window.location.search}&_limit=${9}`);
    console.log(res.headers["X-Total-Count"]);
    return { data: res.data, totalCount: res.headers.get("X-Total-Count") };
  }
);

export const addProduct = createAsyncThunk(
  "product/addProduct",
  async (newProduct) => {
    const res = await axios.post(API, newProduct);
    return res.data;
  }
);
export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (id, { dispatch }) => {
    const res = await axios.delete(`${API}/${id}`);

    dispatch(getProducts());
    return res.data;
  }
);

export const updateProduct = createAsyncThunk(
  "product/updateProduct",
  async (product) => {
    const res = await axios.patch(`${API}/${product.id}`, product);
    return res.data;
  }
);

export const getOneProduct = createAsyncThunk(
  "product/getOneProduct",
  async (id) => {
    const res = await axios.get(`${API}/${id}`);

    return res.data;
  }
);
export const addReviewToProduct = createAsyncThunk(
  "product/addReviewToProduct",
  async ({ productId, submitObj }, { dispatch }) => {
    const res = await axios.post(`${API}/${productId}/reviews`, submitObj);
    dispatch(showReviewOfProduct({ id: productId }));
    return res.data;
  }
);
export const showReviewOfProduct = createAsyncThunk(
  "product/showReviewOfProduct",
  async ({ id }) => {
    const res = await axios.get(`${API}/${id}/reviews`);

    return res.data;
  }
);
export const getShuffledProducts = createAsyncThunk(
  "product/getShuffledProducts",
  async (product) => {
    const res = await axios(API);

    return { data: res.data, totalCount: res.headers["x-total-count"] };
  }
);
export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},

  extraReducers: {
    [getProducts.fulfilled]: (state, { payload: { totalCount, data } }) => {
      state.products = data;
      state.loading = false;
      console.log(totalCount);
      if (totalCount) {
        const value = Math.ceil(totalCount / 9);

        state.pageTotalCount = value;
      }
    },
    [getOneProduct.fulfilled]: (state, action) => {
      const data = action.payload;
      state.oneProduct = data;
      state.loading = false;
    },
    [addReviewToProduct.fulfilled]: (state, action) => {
      // state.oneProduct = action.payload;
      // state.loading = false;
    },
    [showReviewOfProduct.fulfilled]: (state, action) => {
      state.reviews = action.payload;
    },
    [getShuffledProducts.fulfilled]: (state, { payload: { data } }) => {
      state.shuffledProducts = data;
      state.loading = false;
    },
  },
});

export default productsSlice.reducer;
