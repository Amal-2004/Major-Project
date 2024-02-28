import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1 style={{color:"#fbf823"}}>
                  {props.data ? props.data.title : "Loading"}
                  <br/><span style={{color:'white',fontSize:'30px'}}></span>
                </h1><br/>
                <p style={{color:"white",fontWeight:'bold',fontSize:'30px'}}>{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                Explore Power Tools
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};