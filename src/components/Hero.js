import "./Hero.css";
import React from 'react';
// import IntroImg from "../assets/intro-bg.mp4"
import {Link} from "react-router-dom";
function Hero(){
  return (
    <div className="hero">
        <div className="mask">
           
           <video className="into-img" src="https://cdn.pixabay.com/video/2023/07/14/171558-845611823_tiny.mp4" autoPlay muted></video>
        </div>
        <div className="content">
            <p>HI I'M Sai Kumar Kaicherla</p>
            <h1>MERN stack Developer.</h1>
            <div>
                <Link to="/project" className="btn"> Projects</Link>
                <a href="https://drive.google.com/file/d/12dXmnj9samFvnjUltjihqqZaIReD44F2/view?usp=sharing" target="blank" className="btn light">Resume</a>
            </div>

        </div>
      
    </div>
  );
}

export default Hero;
