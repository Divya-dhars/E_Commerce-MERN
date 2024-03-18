import React from 'react';
import '../styles/nav.css';
import { Link} from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { IoPersonCircleSharp } from "react-icons/io5";
 function Nav(){
    return (
        <><div className='header'>
          <div className='icon'>
            <span>Palatto</span>
          </div>
          <div className='navbar'>
            <ul>
              <li>
                <Link to='/' className='nav-link' reloadDocument>HOME</Link>
              </li>
              <li>
              <Link to='/categories' className='nav-link' reloadDocument>PRODUCTS</Link>
              </li>
              <li>
              <Link to='/brands' className='nav-link' reloadDocument>BRANDS</Link>
              </li>
              <li>
                <Link to='/' className='nav-link' reloadDocument>NEW ARRIVALS</Link>
              </li>
            </ul>
          </div>
          {false ?
            <div className='profile'>
              <IoPersonCircleSharp size={40} />
            </div> :
            (<div className='loginbutton'>
              <Link to='/login' className='nav-link'>
                <button className='login'>LOGIN</button>
              </Link>
            </div>
            )}
          <div className='whislist'> 
            <Link to='/admin' reloadDocument className='nav-link'><FaRegHeart size={30}/></Link>
          </div>
          <div className='cart'>
            <Link to='/cart' reloadDocument className='nav-link'><FaShoppingCart size={30} /></Link>
          </div>
        </div>
           
       </>
      )
    }
    
export default Nav;