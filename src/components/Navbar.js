import { Link } from 'react-router-dom';
import {FaBars,FaTimes} from "react-icons/fa";
import './Navbar.css';
import React, { useState } from 'react';

function  Navbar(){
    const [click,setClick]=useState(false);
    const [color,setColor]=useState(false);
    function changeColor(){
      if(window.scrollY>=100){
        setColor(true);
      }
      else{
        setColor(false);
      }
    }
    function handleClick(){
        setClick(!click);
    }
    window.addEventListener("scroll",changeColor)
  return (
    <div className={color?"header header-bg":"header"}>
      <Link to="/home">
      <h1>KSK</h1>
      </Link>
      <ul className={click?"nav-menu active":"nav-menu"}>
        
            <Link to="/home"><li>Home</li></Link>
            <Link to="/about"><li>About</li></Link>
            <Link to="/project"><li>Project</li></Link>
            <Link to="/contact"><li>Contact</li></Link>
        
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click?(<FaTimes size={20} style={{color:"#fff"}}/>):( <FaBars size={20} style={{color:"#fff"}}/>)}
      </div>
    </div>
  );
}

export default Navbar;
