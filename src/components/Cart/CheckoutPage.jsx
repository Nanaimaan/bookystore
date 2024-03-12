import React from "react";
import "./css/checkoutPage.css";

function CheckoutPage({ totalPrice }) {
  let total = parseFloat(Math.round(totalPrice));
  return (
    <div className='checkout_container'>
      <div className='checkout-title'>
        <h4>Order Summary</h4>
      </div>
      <div className='summary'>
        <div className='subtotal'>
          <p>Subtotal</p>
          <p>${total}</p>
        </div>
        <div className='shipping'>
          <p>Shipping</p>
          <p>FREE</p>
        </div>
        <div className='tax'>
          <p>Tax</p>
          <p>TBD</p>
        </div>
        <hr />
        <div className='estimated-total'>
          <h4>Estimated total</h4>
          <h4>${total}</h4>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
