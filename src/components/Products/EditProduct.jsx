import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, TextField } from "@mui/material";
import { getOneProduct, updateProduct } from "./store/productsSlice";
import { useNavigate, useParams } from "react-router-dom";
import "./css/editProduct.css";

const EditProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [expandedText, setExpandedText] = useState(false);
  const { oneProduct } = useSelector((state) => state.products);
  const [newProduct, setNewProduct] = useState({
    title: "",
    image: "",
    description: "",
    author: "",
    price: 0,
    genre: "",
  });
  const { id } = useParams();

  useEffect(() => {
    dispatch(getOneProduct(id));
  }, [dispatch]);

  useEffect(() => {
    setNewProduct(oneProduct);
  }, [oneProduct]);

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleButton = () => {
    dispatch(updateProduct(newProduct));
    alert("Successfully updated!");
    navigate("/");
  };

  return (
    <div className="edit-info">
      <Button onClick={handleButton}> Edit Product</Button>

      <TextField
        className="input-width"
        onChange={handleChange}
        name="title"
        id="outlined-basic"
        label="Title"
        value={newProduct.title}
        variant="outlined"
      />
      <TextField
        className="input-width"
        onChange={handleChange}
        id="outlined-basic"
        name="author"
        label="Author"
        value={newProduct.author}
        variant="outlined"
      />
      <TextField
        className="input-width"
        onChange={handleChange}
        id="outlined-basic"
        name="image"
        label="Image"
        value={newProduct.image}
        variant="outlined"
      />
      <TextField
        className="input-width"
        onChange={handleChange}
        id="outlined-basic"
        name="genre"
        label="Genre"
        value={newProduct.genre}
        variant="outlined"
      />
      <TextField
        className="input-width"
        onChange={handleChange}
        id="outlined-basic"
        name="price"
        label="Price"
        value={newProduct.price}
        variant="outlined"
      />
      {/* <TextField
      onClick={}
        onChange={handleChange}
        id="standard-multiline-flexible"
        label="Multiline"
        multiline
        maxRows={newProduct.description.length}
        fullWidth 
        value={newProduct.description}
        variant="outlined"
      /> */}
      {expandedText ? (
        <TextField
          className="input-width"
          onChange={handleChange}
          id="standard-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={newProduct.description.length}
          fullWidth
          value={newProduct.description}
          variant="outlined"
        />
      ) : (
        <TextField
          className="input-width"
          // onClick={}
          onChange={handleChange}
          id="standard-multiline-flexible"
          label="Description"
          value={newProduct.description}
          variant="outlined"
          minRows={3}
          multiline
          maxRows={6}
        />
      )}
    </div>
  );
};

export default EditProduct;
