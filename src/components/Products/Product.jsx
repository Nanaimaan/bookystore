import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { deleteProduct } from "./store/productsSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

/*css*/

import "./css/product.css";

export default function Product({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className='product-card-container'>
      <Card
        className='product-card'
        onClick={() => navigate(`/details/${product.id}`)}
        sx={{ backgroundColor: "#0f2d481c" }}
      >
        <CardMedia
          sx={{ height: 230, width: 150, margin: "auto", paddingTop: "15px" }}
          image={product.image}
          alt={product.title}
          component='img'
        />
      </Card>
      <CardContent
        className='productCard-text'
        sx={{ padding: 0, paddingTop: "10px" }}
      >
        <Typography
          gutterBottom
          variant='h5'
          component='div'
          fontSize={"16px"}
          fontWeight={"600"}
        >
          {product.title}
        </Typography>
        <Typography>{product.author}</Typography>
        <Typography>${product.price}</Typography>
      </CardContent>
    </div>
  );
}
