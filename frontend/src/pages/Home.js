import React, { useState } from 'react';
import ProductList from '../components/ProductList.js';
import Cart from '../components/Cart.js';
import './Home.css'; 

const Home = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (index) => {
    const newCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newCartItems);
  };

  return (
    <div className="home-container">
      <h1 className="home-heading">Explore Our Products</h1>
      <ProductList addToCart={addToCart} />
      <div className="cart-container">
        <h2 className="cart-heading">Your Cart</h2>
        <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      </div>
    </div>
  );
};

export default Home;
