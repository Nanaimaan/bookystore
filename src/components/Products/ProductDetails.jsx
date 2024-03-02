import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  getOneProduct,
  deleteProduct,
  showReviewOfProduct,
} from "./store/productsSlice";
import { useParams } from "react-router-dom";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./css/productDetails.css";
import { addToCart, existingProduct } from "../Cart/store/cartSlice";
import SuggestedBooks from "./SuggestedBooks";
import Reviews from "./Reviews";
import Rating from "@mui/material/Rating";
import { useLocation } from "react-router-dom";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { oneProduct, reviews } = useSelector((state) => state.products);
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const { id } = useParams();
  useEffect(() => {
    dispatch(getOneProduct(id));
    dispatch(showReviewOfProduct({ id }));
  }, [dispatch]);
  const location = useLocation();

  useEffect(() => {
    dispatch(getOneProduct(id));
  }, [location]);

  // const findRating = () => {
  //   let sum = 0;
  //   reviews?.reviews.map((review) => {
  //     sum += +review.rating;
  //   });

  //   return sum / oneProduct?.reviews.length;
  // };
  const calculateReviewsAverage = () => {
    let average = reviews.reduce((acc, review) => {
      return acc + review.rating;
    }, 0);
    average = average / reviews.length;
    return average > 0 ? average.toFixed(1) : 0;
  };
  console.log(oneProduct, "oneP");

  return (
    <div>
      <div className="detailWrapper">
        <div className="bookImage">
          <img src={oneProduct.image} />
        </div>
        <div className="bookDetails">
          <div className="book-title">
            <h1>{oneProduct.title}</h1>
            <p>{oneProduct.author}</p>
          </div>
          <p>${oneProduct.price}</p>
          <div>
            <Button
              onClick={() => dispatch(addToCart(oneProduct))}
              // color={
              //   dispatch(existingProduct({ id: oneProduct.id }))
              //     ? "secondary"
              //     : "primary"
              // }
            >
              Add to Bag
            </Button>
          </div>
          {user.isAdmin ? (
            <div>
              {" "}
              <Button onClick={() => navigate(`/edit/${oneProduct.id}`)}>
                Edit
              </Button>
              <Button
                onClick={() => dispatch(deleteProduct(oneProduct.id))}
                size="small"
              >
                Delete
              </Button>
            </div>
          ) : null}
          <div>
            <p>{calculateReviewsAverage()}</p>

            <div className="book-description">
              <p>{oneProduct.description}</p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ width: "100%", height: "300px" }}>
        <h3>You might also like</h3>
        <SuggestedBooks />
      </div>
      <div style={{ paddingTop: "100px", paddingLeft: "50px" }}>
        <Reviews productId={id} user={user} />
      </div>
      <div className="reviews-list">
        <h3>Product Reviews </h3>
        <ul>
          {reviews.map((review, index) => (
            <li key={index}>
              <p> User: {review.author}</p>
              <p> Rating: {review.rating}</p>
              <p> Review: {review.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductDetails;
