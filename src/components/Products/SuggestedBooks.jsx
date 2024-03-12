import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography, CardContent, Card, CardMedia } from "@mui/material";
import { getShuffledProducts } from "./store/productsSlice";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./css/suggestedBooks.css";
// import required modules
import { Navigation } from "swiper/modules";
import { getProducts } from "./store/productsSlice";
import { useNavigate } from "react-router-dom";

export default function SuggestedBooks() {
  const navigate = useNavigate();
  const [swiperRef, setSwiperRef] = useState(null);
  const [shuffled, setShuffled] = useState([]);
  const { products, shuffledProducts } = useSelector((state) => state.products);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getShuffledProducts());
  }, []);

  useEffect(() => {
    const arrayOfProducts = [...shuffledProducts];
    let random = arrayOfProducts.sort(() => Math.random() - 0.5);

    setShuffled(random);
  }, [shuffledProducts]);

  return (
    <div className='suggested-container'>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={4}
        spaceBetween={5}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          100: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          300: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 5,
          },

          800: {
            slidesPerView: 4,
            spaceBetween: 5,
          },
        }}
      >
        {shuffled.map((product, index) => (
          <SwiperSlide
            key={index}
            onClick={() => navigate(`/details/${product.id}`)}
          >
            <div className='suggested-cardContent'>
              <div className='suggested-wrapper'>
                <Card className='suggested-card'>
                  <CardMedia
                    className='suggestedImage'
                    sx={{
                      height: 230,
                      width: 150,
                      margin: "auto",
                      paddingTop: "15px",
                    }}
                    image={product.image}
                  />
                </Card>
                <CardContent
                  className='suggested-text'
                  sx={{ padding: 0, paddingTop: "10px" }}
                >
                  <Typography
                    gutterBottom
                    variant='h6'
                    component='div'
                    fontSize={"16px"}
                    fontWeight={600}
                  >
                    {product.title}
                  </Typography>
                  <Typography variant='body2' color='text.primary'>
                    {product.author}
                  </Typography>
                  <Typography variant='body2' color='text.primary'>
                    ${product.price}
                  </Typography>
                </CardContent>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
