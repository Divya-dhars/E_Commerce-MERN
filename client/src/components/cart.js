// import React from 'react';
// import Nav from '../components/nav.js';
// import '../styles/cart.css';


// function Cart({ cart}) {
//     return (
//         <div>
//             <Nav />
//             <div className="cart-container">
//                 <h2>YOUR CART</h2>
//                 <div className="cart-items">
//                     {cart.map((product, index) => (
//                         <div key={index} className="cart-item">
//                             <img src={product.image} alt={product.name} />
//                             <div className="item-details">
//                                 <h3>{product.name}</h3>
//                                 <p>Price: {product.price}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//                 <div className="cart-total">
//                     <h3>Total: {cart.reduce((total, product) => total + product.price, 0)}</h3>
//                     <button className="checkout-btn">Proceed to Checkout</button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Cart;


import React from 'react'

function cart() {
  return (
    <div>cart</div>
  )
}

export default cart