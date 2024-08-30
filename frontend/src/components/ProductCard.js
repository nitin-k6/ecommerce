import React from 'react';
import './ProductCard.css'; // Import the CSS file

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
      </div>
      <div className="product-content">
        <h2 className="product-title">{product.title}</h2>
        <p className="product-description">{product.description.substring(0, 100)}...</p>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <button
          className="product-button"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
