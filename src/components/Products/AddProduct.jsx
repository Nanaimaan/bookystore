import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, TextField } from "@mui/material";
import { addProduct } from "./store/productsSlice";
import "./css/addProduct.css";

const AddProduct = () => {
  const dispatch = useDispatch();
  const [newProduct, setNewProduct] = useState({
    title: "",
    image: "",
    description: "",
    author: "",
  });

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleButton = () => {
    dispatch(addProduct(newProduct));
    alert("Successfully added!");
  };

  return (
    <div className='add-info'>
      <h1>Add New Book</h1>
      <TextField
        className='add-input'
        onChange={handleChange}
        name='title'
        id='outlined-basic'
        label='Title'
        variant='outlined'
      />
      <TextField
        className='add-input'
        onChange={handleChange}
        id='outlined-basic'
        name='author'
        label='Author'
        variant='outlined'
      />
      <TextField
        className='add-input'
        onChange={handleChange}
        id='outlined-basic'
        name='image'
        label='Image'
        variant='outlined'
      />
      <TextField
        className='add-input'
        onChange={handleChange}
        id='outlined-basic'
        name='genre'
        label='Genre'
        variant='outlined'
      />
      <TextField
        className='add-input'
        onChange={handleChange}
        id='outlined-basic'
        name='price'
        label='Price'
        variant='outlined'
      />
      <TextField
        className='add-input'
        onChange={handleChange}
        id='outlined-basic'
        name='description'
        label='Description'
        variant='outlined'
      />{" "}
      <button className='button' onClick={handleButton}>
        {" "}
        Add Product
      </button>
    </div>
  );
};

export default AddProduct;
