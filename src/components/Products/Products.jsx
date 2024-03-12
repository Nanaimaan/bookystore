import React from "react";
import { useEffect } from "react";
import Product from "./Product";
import Grid from "@mui/material/Grid";
import { getProducts } from "./store/productsSlice";
import { useSelector, useDispatch } from "react-redux";
import PaginationComp from "../UI/PaginationComp";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Filter from "../UI/Filter";
import "./css/products.css";

const Products = () => {
  const dispatch = useDispatch();
  const { products, loading, error, pageTotalCount } = useSelector(
    (state) => state.products
  );
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(0);

  // useEffect(() => {
  //   dispatch(getProducts());
  // }, [dispatch]);

  useEffect(() => {
    setSearchParams({
      q: searchParams.get("q") ? searchParams.get("q") : "",
      _page: page,
      // _limit: 9,
    });
    dispatch(getProducts());
  }, [page]);

  return (
    <div className='productsList-container'>
      <div className='filter-products-wrapper'>
        <Filter
          className='product-filter'
          searchParams={searchParams}
          setSearchParams={setSearchParams}
          getProducts={getProducts}
          dispatch={dispatch}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          gap: "150px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Grid
            className='products_card'
            sx={{ display: "flex", flexGrow: 1 }}
            container
            spacing={5}
            justifyContent='center'
          >
            {products.map((product) => (
              <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                <Product product={product} />
              </Grid>
            ))}
          </Grid>
        </div>

        <PaginationComp
          page={page}
          setPage={setPage}
          pageTotalCount={pageTotalCount}
        />
      </div>
    </div>
  );
};

export default Products;
