import React from "react";
import { useCart } from "../context/CartContext";
const Cart = () => {
    const { state, dispatch } = useCart();
  
    return (
      <div className="container mt-4">
        <h2>Cart</h2>
        {state.cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul className="list-group">
            {state.cartItems.map((item) => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                {item.title}
                <span>${item.price}</span>
                <button onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item.id })} className="btn btn-danger">Remove</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };

export default Cart;