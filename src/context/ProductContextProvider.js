import React, { useReducer } from 'react';
import { createContext, useState, useEffect } from 'react';
import fire from '../helpers/Fire';
import {Navigate, useNavigate} from "react-router-dom"
import axios from 'axios';
import { API } from '../helpers/API';



export const productContext = createContext();


const initialvalue = {
    products: [],
    productDetails: {}
}
const reducer = (state, action) => {
switch (action.type){
    case 'GET_PRODUCTS':
        return {
            ...state, products: action.payload 
        }
    
    }
}


const ProductContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialvalue) 
    const navigate = useNavigate();
  
    

   const getProducts = async () => {
    try{
        const res = await axios(API)
        dispatch({
            type: 'GET_PRODUCTS',
            payload: res.data
        })
    } catch (error){
        console.log(error)
    }
   }
 const addProduct = async (newProduct) => {
    try{
        const res = await axios.post(API, newProduct)
      navigate("/")
    } catch (error){
        console.log(error)
    }
 }
   
    
    let value={getProducts, products: state.products, addProduct}

    return (
        <productContext.Provider value={value}>
            {children}
        </productContext.Provider>
    );
};

export default ProductContextProvider;