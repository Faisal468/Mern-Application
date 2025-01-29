import Hexagon1 from "../../../assets/images/hexagon 1.png";
import Hexagon2 from "../../../assets/images/hexagon 2.png";
import Hexagon3 from "../../../assets/images/hexagon 3.png";
import Hexagon4 from "../../../assets/images/hexagon 4.png";

import { NavLink } from "react-router";

import "./WeOffer.css";

export const WeOffer = () => {
  return (
    <>
      <section className="we-offer">
        <h2>We Offer</h2>
        <div className="offer-container">
          <div
            className="offer-item"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="00"
            data-aos-offset="0"
          >
            <div className="pentagon">
              <img src={Hexagon1} alt="Top Brands Luxury Vehicles" />
            </div>
            <h3>Top Brands Luxury Vehicles</h3>
            <p>
              We offer a variety of luxury vehicles to fit your every need.
              Choose from our categories for the best options.
            </p>
          </div>
          <div
            className="offer-item"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="00"
            data-aos-offset="0"
          >
            <div className="pentagon">
              <img src={Hexagon2} alt="Professionals & Reliable Chauffeurs" />
            </div>
            <h3>Professionals & Reliable Chauffeurs</h3>
            <p>
              Experience our professional and reliable chauffeur services,
              offering comfort and safety on every journey.
            </p>
          </div>
          <div
            className="offer-item"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="00"
            data-aos-offset="0"
          >
            <div className="pentagon">
              <img src={Hexagon3} alt="Best & Competitive Price Solutions" />
            </div>
            <h3>Best & Competitive Price Solutions</h3>
            <p>
              We provide competitive pricing solutions to give you the best
              luxury vehicle experience within your budget.
            </p>
          </div>
          <div
            className="offer-item"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="00"
            data-aos-offset="0"
          >
            <div className="pentagon">
              <img src={Hexagon4} alt="Customer Loyalty Programs" />
            </div>
            <h3>Customer Loyalty Programs</h3>
            <p>
              Join our customer loyalty programs and enjoy exclusive benefits
              and discounts on luxury vehicle rentals.
            </p>
          </div>
        </div>
        <div className="read-more">
            <NavLink to={'/Blogs'}>Read More</NavLink>
          
        </div>
      </section>
    </>
  );
};
