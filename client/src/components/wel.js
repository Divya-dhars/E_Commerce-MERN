import React from 'react';
import Nav from '../components/nav.js';
import '../styles/home.css';


function Welcome() {
  return (
      <div className="cont">
        <Nav />
        <div className="grid-container">
          <div className="grid-item">
           
            <div className="overlay">
              <h2>Title 1</h2>
              <p>Description 1</p>
              <button>Button 1</button>
            </div>
          </div>
          <div className="grid-item">
            
            <div className="overlay">
              <h2>Title 2</h2>
              <p>Description 2</p>
              <button>Button 2</button>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Welcome;
