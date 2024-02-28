import { useState } from "react";
import axios from "axios";

const initialState = {
  name: "",
  email: "",
  message: "",
};

export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState(null);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await axios.post("/api/contact", { name, email, message });
      console.log("Response:", response.data);
      setSubmitting(false);
      setSubmissionSuccess(true);
      setState(initialState); // Reset form fields
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitting(false);
      setSubmissionError("An error occurred while submitting the form. Please try again later.");
    }
  };

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                        value={name}
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        value={email}
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                    value={message}
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg" disabled={submitting}>
                  {submitting ? "Sending..." : "Send Message"}
                </button>
                {submissionError && <p style={{ color: "red" }}>{submissionError}</p>}
                {submissionSuccess && <p style={{ color: "green" }}>Message sent successfully!</p>}
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3 style={{fontSize:'35px',fontWeight:'bold'}}>Contact Info</h3>
              <p style={{fontSize:'20px'}}>
                <span style={{fontSize:'25px'}}>
                  <i class="fa-solid fa-location-crosshairs" style={{fontSize:'25px'}}></i>   Address
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p style={{fontSize:'20px'}}>
                <span style={{fontSize:'25px'}}>
                  <i className="fa fa-phone" style={{fontSize:'25px'}}></i>Phone
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p style={{fontSize:'20px'}}>
                <span style={{fontSize:'25px'}}>
                <i class="fa-regular fa-envelope"style={{fontSize:'25px'}}></i>
                   &nbsp;&nbsp;Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <h4 style={{fontSize:'20px',color:'#fff'}}>OR</h4>
                <h2 style={{ marginTop:'-30px'}}>___</h2>
                <h3 style={{fontSize:'30px',color:'#fff', marginTop:'10px',fontWeight:'bold'}}>Connect with</h3>
                <ul>
                  <li>
                    <a href={'https://www.instagram.com'}>
                    <i class="fa-brands fa-instagram" style={{fontSize:'30px', color:'#fff'}}></i> </a>
                  </li>
                  <li>
                    <a href={'https://www.twitter.com'}>
                    <i class="fa-brands fa-square-x-twitter" style={{fontSize:'30px', color:'#fff'}} ></i>                    
                    </a>
                  </li>
                  <li>
                    <a href={'https://www.facebook.com'}>
                    <i class="fa-brands fa-facebook" style={{fontSize:'30px', color:'#fff'}}></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
