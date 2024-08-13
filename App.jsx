import React, { useState } from 'react';
import ProductCard from './ProductCard';
import './App.css';
import { products } from './products'; // Assuming products data is imported

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (productId) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });

    const productToAdd = products.find((product) => product.id === productId);
    if (!updatedCart.some((item) => item.id === productId)) {
      updatedCart.push({ ...productToAdd, quantity: 1 });
    }

    setCartItems(updatedCart);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
  };

  const calculateTotal = () => {
    const total = cartItems.reduce((accumulator, item) => {
      return accumulator + item.price * item.quantity;
    }, 0);
    return total.toFixed(2); // Format the total to two decimal places
  };

  return (
    <div className="container">
      <header className="header">
        {/* Your header content */}
      </header>

      <main className="main">
        <section className="products">
          <h3 className="back_colour">
            <h1>Shopping Cart</h1>
          </h3>
          <h2>All Products</h2>
          <div className="product-grid">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            ))}
          </div>
        </section>

        {/* Other sections like about, contact, etc. */}
      </main>

      <aside className="cart">
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="cart-items-container">
            <ul className="cart-items">
              {cartItems.map((item) => (
                <li key={item.id}>
                  {item.name} - Quantity: {item.quantity} - Price: ${item.price * item.quantity}
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </li>
              ))}
            </ul>
            <div className="cart-total">
              <p>Total: ${calculateTotal()}</p>
              {/* Add checkout button or other actions */}
            </div>
          </div>
        )}
      </aside>
    </div>
  );
};

export default App;
