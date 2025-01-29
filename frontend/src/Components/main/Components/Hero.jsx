import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./hero.css";

export const Hero = () => {
  const [formData, setFormData] = useState({
    pickupPoint: "",
    via: "",
    dropOffPoint: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Quote saved successfully!");
        setFormData({ pickupPoint: "", via: "", dropOffPoint: "" }); // Reset the form
      } else {
        const errorData = await response.json();
        toast.error("Error: " + errorData.message);
      }
    } catch (error) {
      console.error("Error submitting quote:", error);
      toast.error("Failed to submit quote. Please try again.");
    }
  };

  return (
    <>
      <section className="fuck">
        <div className="hero">
          <div className="hero-text">
            <h2>Airport Transfer</h2>
            <p>
              Offers a solution for a stress-free journey, ensuring guests'
              transfer to any location of their stay. Reliable, timely and
              comfortable, the transportation service extends to all areas.
            </p>
          </div>
          <form
            className="quote-form"
            onSubmit={handleSubmit}
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="00"
            data-aos-offset="0"
          >
            <h3>Quote Now!</h3>
            <input
              type="text"
              name="pickupPoint"
              placeholder="Pick Up Point"
              value={formData.pickupPoint}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="via"
              placeholder="Via (optional)"
              value={formData.via}
              onChange={handleChange}
            />
            <input
              type="text"
              name="dropOffPoint"
              placeholder="Drop off Point"
              value={formData.dropOffPoint}
              onChange={handleChange}
              required
            />
            <div>
              <button type="submit" className="butt">
                Quote Now
              </button>
            </div>
          </form>
        </div>
      </section>
      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </>
  );
};

export default Hero;
