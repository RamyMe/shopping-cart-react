import React from 'react';

const ProductCard = ({ product, addToCart, removeFromCart }) => {
  return (
    <div className="product-card">
      <img src={`/images/${product.image}`} alt={product.name} className="product-image" />
      <h3 className="product-title">{product.name}</h3>
      <p className="product-description">{product.description}</p>
      <div className="product-price">${product.price}</div>
      <button
        className="product-button"
        onClick={() => (product.quantity ? removeFromCart(product.id) : addToCart(product.id))}
      >
        {product.quantity ? `Remove from Cart (${product.quantity})` : 'Add to Cart'}
      </button>
    </div>
  );
};

export default ProductCard;
