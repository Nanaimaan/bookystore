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
          className="add-input"
          onChange={handleChange}
          value={comment}
          id="outlined-basic"
          name="review"
          label="Review"
          variant="outlined"
        />
      </div>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />

      <Button variant="outlined" onClick={handleSubmit}>
        Submit
      </Button>
    </>
  );
};

export default Reviews;
