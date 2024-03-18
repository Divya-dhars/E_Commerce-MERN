import React from 'react';
import Nav from '../components/nav.js';
import '../styles/home.css';
import {Link} from 'react-scroll';
import '../components/wel.js';

function Home() {
    return (
        <div className="container">
            <Nav />
            <div className="img-con">
                <div className="card">
                 <div className="content">
                    <p className="main-heading">Find Beauty And Define Yourself</p>
                    <p className="sub">Unlock Your Beauty Potential Today! Welcome to Palatto, where we believe in empowering individuals to embrace their unique beauty. <br/>Explore our premium skincare, makeup, and wellness products designed to enhance your natural radiance and confidence.</p>
                 <div className="btn-1">
                 <Link to='cont' smooth={true} offset={600}>
                     <button className="btn">SHOP NOW</button>
                    </Link>
                 </div>
                 </div>
                </div>
            </div>
       </div> 
    );
} 
 export default Home;