import "./Footer.css";
import React from 'react';
import {FaHome, FaPhone,FaMailBulk,FaTwitter, FaLinkedin, FaGithub} from 'react-icons/fa'

function Footer(){
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                    <div>
                        <p>Visakhapatnam</p>
                        <p>Andhra Pradesh</p>
                    </div>
                </div>
                <div className="phone">
                    <h4>
                    <FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                    7386859445
                    </h4>
                </div>
                <div className="email">
                    <h4>
                    <FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                    saikumarkaicherla200@gmail.com
                    </h4>
                </div>
            </div>
            <div className="right">
                <h4>About Me</h4>
                <p>This is me Sai kumar. MERN stack developer. I enjoy making new projects and design challenges.</p>
                <div className="social">
              <a href="https://github.com/saikumar2004" target="blank"><FaGithub size={20} style={{color:"#fff",marginRight:"2rem"}}/></a> 
                <FaTwitter size={20} style={{color:"#fff",marginRight:"2rem"}}/>
              <a href="https://www.linkedin.com/in/k-sai-kumar-2a1204264/" target="blank"> <FaLinkedin size={20} style={{color:"#fff",marginRight:"2rem"}}/></a> 
                </div>
            </div>

        </div>
      
    </div>
  );
}

export default Footer;
