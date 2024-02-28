import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Why Choose us?</h2>
          <p>
          Unleash the potential of your projects with our superior power tools – 
          where quality meets performance effortlessly.
          </p>
        </div>
        <div className="row" style={{display:'flex',width:'1300px',justifyContent:'center',marginLeft:'-70px'}}>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i style={{fontSize:'60px'}}className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
