
import React from 'react';
import './home.css';
import homeLogo from '../assets/images/cutter.png'
function Home() {
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
        <img src={homeLogo} alt="Cutter" />
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
            <h5>Since </h5>
            <p>At R&R Power tools, we're not just another power tool retailer; we're your
              partner in craftsmanship, your ally in efficiency, and your source for top-tier tools
              that get the job done right, every time. Whether you're a seasoned professional or a DIY
              enthusiast, we've got everything you need to tackle any project with confidence and precision.
            </p>
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
            <h5>Extensive Selection</h5>
            <div className="pra">
              <p>Explore our vast inventory featuring the latest and greatest power tools
                from industry-leading brands.
                From drills and saws to sanders and routers, we've got it all under one roof</p>
            </div>
          </div>

          <div className="card">
            <i className="fas fa-bars"></i>
            <h5>Quality Assurance</h5>
            <div className="pra">
              <p>We understand the importance of reliability
                when it comes to power tools. That's why we handpick each product in our inventory to ensure it meets our rigorous standards for performance and durability.
              </p>
            </div>
          </div>

          <div className="card">
            <i className="fas fa-bars"></i>
            <h5>Expert Guidance</h5>
            <div className="pra">
              <p>Not sure which tool is right for your project? Our knowledgeable staff
                is here to help! Whether you need advice on tool selection, maintenance tips, or
                troubleshooting assistance, we're always just a phone call or email away.</p>
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

export default Home;
