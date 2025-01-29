import React from "react";
import { useEffect } from "react";
import Car1 from "../../../assets/images/bmw-removebg-preview.png";
import Car2 from "../../../assets/images/range-removebg-preview.png";
import Car3 from "../../../assets/images/mercedes-removebg-preview.png";
import Right from "../../../assets/images/right.jpg";
import Left from "../../../assets/images/left.jpg";
import "./ChauffeurCars.css";
import { NavLink } from "react-router";

import AOS from "aos";
import "aos/dist/aos.css";

export const ChauffeurCars = () => {
  useEffect(() => {
    AOS.init({
      duration: 0, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);
  return (
    <>
      <section className="container">
        <div className="title">Chauffeur Cars</div>
        <div className="subtitle">
          The definitive collection of chauffeur-driven cars
        </div>
        <p className="description">
          With luxury chauffeur-driven Mercedes-Benz S-Class & Viano, Range
          Rover, Rolls-Royce Phantom, and Bentley Flying Spur, you have your
          chauffeur executive cars alongside Mercedes Luxury Mini Bus to choose
          from. We ensure you have the right chauffeur car, whatever the
          occasion.
        </p>

        <div className="cars-wrapper">
          <div
            className="car-box"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="100"
            data-aos-offset="0"
          >
            <div className="car-item">
              <div className="car-image">
                <img src={Car1} alt="BMW 7 Series" />
              </div>
              <div className="car-content">
                <div className="car-title">BMW 7 Series</div>
                <div className="car-description">
                  Iconic and versatile enough for your <br />
                  greatest adventures.
                </div>
                
                <NavLink to={'/BookingForm?car=${car.name}'} className="btn">
                  Book Now
                </NavLink>
              </div>
            </div>

            <a href="#" className="image-button">
              <img src={Left} alt="Previous" />
            </a>
          </div>

          <div
            className="car-box"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="100"
            data-aos-offset="0"
          >
            <div className="car-item">
              <div className="car-image">
                <img src={Car2} alt="Range Rover" />
              </div>
              <div className="car-content">
                <div className="car-title">Range Rover</div>
                <div className="car-description">
                  Iconic and versatile enough for your <br />
                  greatest adventures.
                </div>
                <NavLink to={'/BookingForm?car=${car.name}'} className="btn">
                  Book Now
                </NavLink>
              </div>
            </div>

            <a href="#" className="image-button">
              <img src={Right} alt="Next" />
            </a>
          </div>

          <div
            className="car-box"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="100"
            data-aos-offset="0"
          >
            <div className="car-item">
              <div className="car-image">
                <img src={Car3} alt="Mercedes S-Class" />
              </div>
              <div className="car-content">
                <div className="car-title">Mercedes S-Class</div>
                <div className="car-description">
                  Iconic and versatile enough for your <br />
                  greatest adventures.
                </div>
                <NavLink to={'/BookingForm?car=${car.name}'} className="btn">
                  Book Now
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
