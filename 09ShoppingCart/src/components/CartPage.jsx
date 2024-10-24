
import React, { useState } from 'react';
import ProductList from './ProductList';
import './CSS/cartpage.css';

const CartPage = () => {
  // Sample list of products
  const [products] = useState([
    { id: 1, name: 'Item 1', price: 100 },
    { id: 2, name: 'Item 2', price: 200 },
    { id: 3, name: 'Item 3', price: 150 },
  ]);

  // Cart initially empty
  const [cartItems, setCartItems] = useState([]);

  // Function to add items to the cart
  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // Function to handle quantity increase or decrease
  const handleQuantityChange = (itemId, action) => {
    const updatedItems = cartItems.map((item) =>
      item.id === itemId
        ? {
            ...item,
            quantity: action === 'increase' ? item.quantity + 1 : item.quantity - 1,
          }
        : item
    ).filter((item) => item.quantity > 0);
    setCartItems(updatedItems);
  };

  // Function to remove an item from the cart
  const handleRemoveItem = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  // Calculate total price
  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      
      {/* Product List */}
      <ProductList products={products} addToCart={addToCart} />

      {/* Cart Items */}
      <div className="cart-section">
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty. Add items from the product list.</p>
        ) : (
          <>
            <ul>
              {cartItems.map((item) => (
                <li key={item.id} className="cart-item">
                  <span>{item.name}</span>
                  <span>Price: ${item.price}</span>
                  <span>
                    Quantity: 
                    <button onClick={() => handleQuantityChange(item.id, 'decrease')} disabled={item.quantity === 1}>-</button>
                    {item.quantity}
                    <button onClick={() => handleQuantityChange(item.id, 'increase')}>+</button>
                  </span>
                  <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
                </li>
              ))}
            </ul>
            <h3>Total: ${calculateTotal()}</h3>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;