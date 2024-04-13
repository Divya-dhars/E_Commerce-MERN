import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios'
import Cart from '../components/cart.js'; // Assuming Cart component is in a separate file

function ParentComponent() {
  // Assuming cart is fetched from some API or stored in state
  const [cart, setCart] = useState([]);

  // Fetch cart data or set it from somewhere else
  useEffect(() => {
    // Fetch cart data or set it from somewhere else
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/cart');
        const data = await response.json();
        setCart(data); // Set cart data from the response
      } catch (error) {
        console.error('Error fetching cart data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* Render the Cart component only if cart data is available */}
      {cart.length > 0 ? <Cart cart={cart} /> : <p>No items in cart</p>}
    </div>
  );
}

export default ParentComponent;
