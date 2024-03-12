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

  return (
    <div>
      <div className='detailWrapper'>
        <div className='bookImage'>
          <img src={oneProduct.image} />
        </div>
        <div className='bookDetails'>
          <div className='book-title'>
            <h1>{oneProduct.title}</h1>
            <p>{oneProduct.author}</p>
            <p>${oneProduct.price}</p>
          </div>

          <div>
            <button
              className='button'
              onClick={() => dispatch(addToCart(oneProduct))}
            >
              Add to Bag
            </button>
          </div>
          {user.isAdmin ? (
            <div className='admin-buttons'>
              {" "}
              <button onClick={() => navigate(`/edit/${oneProduct.id}`)}>
                Edit
              </button>
              <button
                onClick={() => dispatch(deleteProduct(oneProduct.id))}
                size='small'
              >
                Delete
              </button>
            </div>
          ) : null}

          <p>{reviews.length > 0 ? calculateReviewsAverage() : "No reviews"}</p>

          <div className='book-description'>
            <h3>Overview</h3>
            <p>{oneProduct.description}</p>
          </div>
        </div>
      </div>

      <div className='suggested-part'>
        <h3 className='details-suggested-text'>You might also like</h3>
        <SuggestedBooks />

        <div
          style={{
            paddingTop: "100px",

            marginBottom: "10px",
          }}
        >
          <Reviews productId={id} user={user} />
        </div>
        <div>
          <h3>Product Reviews </h3>
          <ul className='reviews-list'>
            {reviews.map((review, index) => (
              <li key={index}>
                <div
                  className='review
                '
                >
                  <p> User: {review.author}</p>
                  <p> Rating: {review.rating}</p>
                </div>
                <p> Review: {review.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
