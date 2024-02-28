import React from "react";

export const Features = (props) => {
  return (
    <div id="features" className="text-center" style={{paddingBottom:'100px',paddingTop:'60px'}}>
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2 style={{paddingTop:'50px'}}>Our Works</h2>
        </div>
        <div className="row" style={{marginLeft:'200px',width:'1000px'}}>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                  {" "}
                  <i className={d.icon} style={{fontSize:'60px',color:"6088fd"}}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
