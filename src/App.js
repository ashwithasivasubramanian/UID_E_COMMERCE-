import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Product';
import Cart from './components/Cart';
import './style.css';

function App() {
  // Define the list of food products with description
  const productsList = [
    { id: 1, name: 'Pizza', price: 129, description: 'A delicious pizza with tomato, mozzarella, and basil.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS1RKw_t9bvbCxQVyqD5CrBGwCcKVAUwP0Xg&s' },
    { id: 2, name: 'Chicken Burger', price: 399, description: 'Grilled chicken patty with lettuce, tomato, and special sauce.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa72xwP3fyWh_ve4SZYhAyeEfUX3ZUL0ITqw&s' },
    { id: 3, name: 'Pasta', price: 199, description: 'Classic Italian pasta with pancetta, eggs, and parmesan cheese.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEQ9IjUOFn8JxtVzjj2KKdg9pcgi0fh7NBrQ&s' },
  ];

  // Cart state
  const [cartItems, setCartItems] = useState([]);

  // Function to add items to the cart
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  // Function to remove items from the cart
  const removeFromCart = (indexToRemove) => {
    setCartItems(cartItems.filter((item, index) => index !== indexToRemove));
  };

  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products products={productsList} addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
      </Routes>
    </Router>
  );
}

export default App;
