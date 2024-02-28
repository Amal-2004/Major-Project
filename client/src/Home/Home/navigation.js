import React from "react";
import { Link } from "react-scroll";

const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <Link
            to="page-top"
            smooth={true}
            duration={1000}
            className="navbar-brand page-scroll"
            style={{ cursor: "pointer" }}
          >
           <span style={{color:'red',marginLeft:'-120px'}}>R&R</span> Power Tools
          </Link>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            
            
            <li>
              <Link
                to="about"
                smooth={true}
                duration={1000}
                className="page-scroll"
                style={{ cursor: "pointer",fontWeight:'bold' }}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="services"
                smooth={true}
                duration={1000}
                className="page-scroll"
                style={{ cursor: "pointer",fontWeight:'bold' }}
              >
                Why Choose us?
              </Link>
            </li>
            <li >
              <Link
                to="features"
                smooth={true}
                duration={1000}
                className="page-scroll"
                style={{ cursor: "pointer" ,fontWeight:'bold'}}
              >
                Our Works
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={1000}
                className="page-scroll"
                style={{ cursor: "pointer",fontWeight:'bold' }}
              >
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export { Navigation };
