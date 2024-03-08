import React from "react";
import "./css/cartItem.css";
import { changeProductCount, removeCart } from "./store/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ product: { item, count, subPrice } }) => {
  const dispatch = useDispatch();

  // console.log(item);
  return (
    <div className='cartItem'>
      <div className='cartItemBody'>
        <div className='cartItem-content'>
          <img src={item.image} />

          <div className='cartText'>
            <div className='item-cart-text'>
              <h4>{item.title}</h4>
              <p>{item.author}</p>
            </div>
            <div className='cartItemAction'>
              <input
                onChange={(e) =>
                  dispatch(
                    changeProductCount({ id: item.id, count: +e.target.value })
                  )
                }
                type='number'
                value={count}
                // placeholder={count}
              />
              <button> Add to wishlist</button>
              <button onClick={() => dispatch(removeCart({ id: item.id }))}>
                {" "}
                Remove
              </button>
            </div>
          </div>
        </div>
        <div className='cartItemPrice'>
          <p>${count > 1 ? subPrice : item.price}</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
