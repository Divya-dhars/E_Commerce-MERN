import React from 'react';
import '../styles/brands.css';
import Nav from '../components/nav.js';
import img from '../assets/loreal.jpg';
import img1 from '../assets/mama.jpg';
import img2 from '../assets/good.jpg';
import img3 from '../assets/bae.png';
import img4 from '../assets/face.png';
import img5 from '../assets/maybe.jpg';
import img6 from '../assets/mac.png';
import img7 from '../assets/sugar1.png';
import img8 from '../assets/renee.png';
import img9 from '../assets/lak.png';
import img10 from '../assets/huda.png';
import img11 from '../assets/him.jpg';
import img12 from '../assets/plom.jpg';
import img13 from '../assets/bio1.jpg';
import img14 from '../assets/dot.avif';
import img15 from '../assets/nivea.jpg';
 function Brands() {
    return (
        <div className="b-con">
            <Nav/>
            <div className="b-imgcon">
               <div className="img-cont">
                <img src={img} alt="img"></img>
               </div>
               <div className="img-cont">
                <img src={img10} alt="img"></img>
               </div>
               <div className="img-cont">
                <img src={img2} alt="img"></img>
               </div>
               <div className="img-cont">
                <img src={img9} alt="img"></img>
               </div>
            </div>
            <div className="b-imgcon">
               <div className="img-cont">
                <img src={img4} alt="img"></img>
               </div>
               <div className="img-cont">
                <img src={img5} alt="img"></img>
               </div>
               <div className="img-cont">
                <img src={img6} alt="img"></img>
               </div>
               <div className="img-cont">
                <img src={img7} alt="img"></img>
               </div>
            </div>
            <div className="b-imgcon">
               <div className="img-cont">
                <img src={img8} alt="img"></img>
               </div>
               <div className="img-cont">
                <img src={img3} alt="img"></img>
               </div>
               <div className="img-cont">
                <img src={img12} alt="img"></img>
               </div>
               <div className="img-cont">
                <img src={img11} alt="img"></img>
               </div>
            </div>
            <div className="b-imgcon">
               <div className="img-cont">
                <img src={img1} alt="img"></img>
               </div>
               <div className="img-cont">
                <img src={img13} alt="img"></img>
               </div>
               <div className="img-cont">
                <img src={img14} alt="img"></img>
               </div>
               <div className="img-cont">
                <img src={img15} alt="img"></img>
               </div>
            </div>
            
        </div>
    )
 }
 export default Brands;