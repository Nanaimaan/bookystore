import React, { useEffect } from "react";
import { TextField } from "@mui/material";
import { addReviewToProduct, showReviewOfProduct } from "./store/productsSlice";
import Rating from "@mui/material/Rating";

import { useDispatch, useSelector } from "react-redux";

import Button from "@mui/material/Button";
import { useState } from "react";
const Reviews = ({ productId, user }) => {
  const dispatch = useDispatch();
  const { products, reviews } = useSelector((state) => state.products);

  const [value, setValue] = React.useState(3);
  const [comment, setComment] = useState("");
  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = () => {
    const submitObj = { rating: value, author: user.email, text: comment };
    dispatch(addReviewToProduct({ productId, submitObj }));
    dispatch(showReviewOfProduct({ id: productId }));
    setComment("");
  };

  return (
    <>
      <div>
        <TextField
          className='add-input'
          onChange={handleChange}
          value={comment}
          name='review'
          label='Review'
          borderColor='#21272d'
          sx={{ marginBottom: "20px", borderColor: "#21272d" }}
        />
      </div>
      <Rating
        name='simple-controlled'
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />

      <button
        variant='outlined'
        onClick={handleSubmit}
        style={{ marginLeft: "20px" }}
        className='button'
      >
        Submit
      </button>
    </>
  );
};

export default Reviews;
