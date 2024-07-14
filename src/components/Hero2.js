import "./Hero2.css";
import React from 'react';

function Hero2(props){
  return (
    <div className="hero2">
        <div className="heading">
            <h1>{props.heading}</h1>
            <p>{props.text}</p>

        </div>
      
    </div>
  );
}

export default Hero2;
