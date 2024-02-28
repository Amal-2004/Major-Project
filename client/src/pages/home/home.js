
import React from 'react';
//import './home.css';

function Homes() {
  return (
    <>
      <div className="hero">
        <nav>
          <h2 className="logo"><span>R&R</span> Power Tools</h2>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About us</a></li>
            <li><a href="#service">Our Services</a></li>
            <li><a href="#contact-us">Contact us</a></li>
          </ul>
          <a href="#" className="btn">Explore Power Tools</a>
        </nav>
      </div>

      <div className="img">
        <img src="" alt="Cutter" />
      </div>

      <div className="content">
        <h1><span>R&R</span> Power Tools</h1>
        <h3>The great Power tools Destination</h3>
      </div>

      <section className="about">
        <div className="main">
          <img src="about.png" alt="About" />
          <div className="about-text">
            <h1>About us</h1>
            <h2><span>R&R</span> Power Tools</h2>
            <h5>Since 1990</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ratione iste ipsum vel. Magnam, vitae mollitia. Provident magnam illum autem eos recusandae at, beatae perspiciatis ullam nam velit, repellat tempora.</p>
          </div>
        </div>
      </section>

      <div className="service">
        <div className="title">
          <h2>Our Services</h2>
        </div>
        {/* ... (your existing service cards) ... */}
        <div className="box">
        <div className="card">
            <i className="fas fa-bars"></i>
            <h5>Web Development</h5>
            <div className="pra">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, saepe. Reprehenderit, quo. Quis reiciendis in veritatis, accusantium minima temporibus illum molestias natus voluptatibus officia, impedit dolore hic, cupiditate voluptatum dolor!</p>
            </div>
        </div>

        <div className="card">
            <i className="fas fa-bars"></i>
            <h5>Web Development</h5>
            <div className="pra">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, saepe. Reprehenderit, quo. Quis reiciendis in veritatis, accusantium minima temporibus illum molestias natus voluptatibus officia, impedit dolore hic, cupiditate voluptatum dolor!</p>
            </div>
        </div>

        <div className="card">
            <i className="fas fa-bars"></i>
            <h5>Web Development</h5>
            <div className="pra">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, saepe. Reprehenderit, quo. Quis reiciendis in veritatis, accusantium minima temporibus illum molestias natus voluptatibus officia, impedit dolore hic, cupiditate voluptatum dolor!</p>
            </div>
        </div>
        </div>

      </div>

      <div className="contact-us" id="contact-us">
        <div className="contact-container">
          <h2>Contact Us</h2>
          <p>For any Queries about Products or our Service, Please Contact us</p>
          
          <form action="#" method="post" className="contact-form">
            <input type="text" name="name" placeholder="Your Name" />
            <input type="email" name="email" placeholder="Your Email" />
            <textarea name="message" placeholder="Your Message"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-logo">
            <h2><span>R&R</span> Power Tools</h2>
          </div>
          <div className="footer-info">
            <p>123 Main Street, Cityville</p>
            <p>Email: info@rrpowertools.com</p>
          </div>
          <div className="footer-social">
            <a href="#" className="social-icon"><i className="fab fa-facebook"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Homes;
