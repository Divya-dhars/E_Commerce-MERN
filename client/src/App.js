import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Home from './components/home.js';
import Brands from './components/brands.js';
import Category from './components/categories.js';
import Login from './components/login.js';
import Cart from './components/cart.js';
import ProductDetails from './components/description.js';
import Admin from './components/Admin.js';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/brands' element={<Brands/>}></Route>
      <Route path='/categories' element={<Category/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/admin' element={<Admin/>}></Route>
      {/* <Route path="/product/:id" component={ProductDetails} /> */}
    </Routes>
  );
}

export default App;
