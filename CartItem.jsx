import React from 'react';

const CartItem = ({ item, removeFromCart }) => {
  return (
    <li className="cart-item">
      <div className="cart-item-details">
        <img src={item.image} alt={item.name} className="cart-item-image" />
        <div>
          <p>{item.name}</p>
          <p>Price: ${item.price}</p>
        </div>
      </div>
      <div className="cart-item-quantity">
        <span>Quantity: {item.quantity}</span>
        <button onClick={() => removeFromCart(item.id)}>Remove</button>
      </div>
    </li>
  );
};

export default CartItem;
