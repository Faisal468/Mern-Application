import React from "react";
import Loggo from "../../assets/images/loggo.jpg";
import "./Footer.css";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    alert("Data has been saved!"); // Show the pop-up
  };

  return (
    <>
      <section className="foot">
        <div className="footer-top">
          <div className="footer-logo">
            <img src={Loggo} alt="Logo" />
          </div>
          <div className="footer-links">
            <NavLink to="/Get a Quote">Get a Quote</NavLink>
            <NavLink to="/View our Fleet">View our Fleet</NavLink>
            <NavLink to="/Get a Quote">Back to the Top</NavLink>
          </div>
        </div>

        <div className="footer-container">
          <div className="footer-section">
            <h3>TWEETS</h3>
            <p>
              Eyes on you
              <br />
              If you are looking for a pursuit replacement remote start or
              security transmitter click here to access our online store.
            </p>
          </div>

          <div className="footer-section">
            <h3>OUR SERVICES</h3>
            <ul>
              <li>Self Drive Hire</li>
              <li>Chauffeur Service</li>
              <li>Helicopter Charter</li>
              <li>Jet Charter</li>
              <li>Weddings</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>REQUEST A CALL BACK</h3>
            <form onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Name" required />
              <input type="email" name="email" placeholder="Email" required />
              <textarea name="message" placeholder="Message" required />
              <button className="submit">Send</button>
            </form>
          </div>

          <div className="footer-section">
            <h3>CONTACTS</h3>
            <p>
              Advents Private Hire
              <br />
              8 Armistead Street, London, SE17 2AP
              <br />
              Phone: <span className="contact-info">020 7703 9225</span>
              <br />
              Mobile: <span className="contact-info">020 7750 5616</span>
              <br />
              Email:{" "}
              <a href="mailto:booking@adventsprivatehire.co.uk">
                booking@adventsprivatehire.co.uk
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
