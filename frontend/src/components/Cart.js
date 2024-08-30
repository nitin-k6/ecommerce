import React from 'react';
import './Cart.css'; // Import the CSS file

const Cart = ({ cartItems, removeFromCart }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart-container">
      <h2 className="cart-heading">Cart</h2>
      {cartItems.length > 0 ? (
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <span className="cart-item-title">{item.title}</span>
              <span className="cart-item-price">${item.price.toFixed(2)}</span>
              <button
                className="remove-button"
                onClick={() => removeFromCart(index)}
              >
                Remove
              </button>
            </div>
          ))}
          <div className="cart-total">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      ) : (
        <p className="empty-cart-message">Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
