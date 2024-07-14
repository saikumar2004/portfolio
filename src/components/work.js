import "./Workcard.css";
import React from 'react';
import Workcard from "./Workcard";
import WorkData from "./WorkData"
function Work(){
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
          {WorkData.map((val,ind)=>{
            return(
              <Workcard 
              key={ind}
              imgsrc={val.imgsrc} 
              title={val.title}
              text={val.text}
              tech={val.tech}
              view={val.view}
              source={val.source}

              />
            )
          })}
        </div>
    </div>
  );
}

export default Work;
