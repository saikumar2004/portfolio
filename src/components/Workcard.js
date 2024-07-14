import "./Workcard.css";
import React from 'react';


function Workcard(props){
  return (
            <div className="project-card">
            <img src={props.imgsrc} alt="pro" />
            <h2 className="project-title">{props.title}</h2>
            <div className="pro-details">
              <p>{props.text?.substring(0,200).concat("...")}</p>
              <h3>Tech :{props.tech}</h3>
              <div className="pro-btns">
                    <a href={props.view} target="blank" className="btn">View</a>
                    <a href={props.source} target="blank" className="btn">source</a>
              </div>
            </div>
            </div>
  );
}

export default Workcard;
