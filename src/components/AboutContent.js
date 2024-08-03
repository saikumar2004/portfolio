import { Link } from "react-router-dom";
import "./AboutContent.css";
import React from 'react';


function AboutContent(){
  return (
    <div className="about">
       <div className="left">
        <h1>Who Am I?</h1>
        <p>Im a MERN stack developer. I create responsive secure website</p>
        <Link to="/contact">
        <button className="btn">Contact</button>
        </Link>
       </div>
       <div className="right">
        
        
         <div className="tech-stack">
         <h1>Technologies</h1>
            <img src="https://crowdforthink.com/assets/uploads/blogs/582d8348873b7e0fdfaa78320dd3b918.jpg" alt=""/>
            <img src="https://th.bing.com/th/id/OIP.AOFg5dBPUmicEwDWGzucAwHaIH?w=860&h=942&rs=1&pid=ImgDetMain"  alt=""/>
            <img src="https://pbs.twimg.com/profile_images/1255113654049128448/J5Yt92WW_400x400.png" alt=""/>
            <img src="https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png" alt=""/>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEc9A_S6BPxCDRp5WjMFEfXrpCu1ya2OO-Lw&s" alt=""/>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq15kdLZEWHPSQuhn3y4YqfX8cIBbcsA8FXw&s" alt=""/>
            <img src="https://static.javatpoint.com/bootstrappages/images/bootstrap-tutorial.png" alt=""/>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNhoXisDruJMDAq3Ltd-wuaMW2lGxck9wAKw&s" alt=""/>
            <img src="https://miro.medium.com/v2/resize:fit:522/0*Hdm7hBTZ-hKlbtlV.png" alt=""/>
            <img src="https://ih1.redbubble.net/image.2083639299.4034/fposter,medium,wall_texture,product,750x1000.webp" alt=""/>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5H-6obfIxXzU4t99HTdXjYRD9KF7R_LRtI3iKqiZ-0emR9hQSycnSTkt7iO2W5RWOmPE&usqp=CAU" alt=""/>
             <img src="https://github.blog/wp-content/uploads/2021/02/81721690-e2fb5d80-9445-11ea-8602-4b2294c964f3.png?fit=1200%2C630"alt=""/>

        </div>
       </div>
    </div>
  );
}

export default AboutContent;
