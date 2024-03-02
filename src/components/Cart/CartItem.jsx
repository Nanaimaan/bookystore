import React from "react";
import "./css/cartItem.css";
import { changeProductCount, removeCart } from "./store/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ product: { item, count, subPrice } }) => {
  const dispatch = useDispatch();
  // console.log(item);
  return (
    <div className="cartItem">
      <div className="cartItemBody">
        <img src={item.image} />

        <div className="cartText">
          <p>{item.title}</p>
          <p>{item.author}</p>
          <p>{item.genre}</p>
        </div>
        <div className="cartItemPrice">
          <p>
            ${item.price}
            <p>SubPrice - {subPrice}</p>
          </p>
        </div>
      </div>

      <div className="cartItemAction">
        <input
          onChange={(e) =>
            dispatch(
              changeProductCount({ id: item.id, count: +e.target.value })
            )
          }
          type="number"
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
  );
};

export default CartItem;
