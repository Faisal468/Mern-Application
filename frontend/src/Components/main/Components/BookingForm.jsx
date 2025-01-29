import React, { useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./BookingForm.css";

const BookingForm = () => {
  const [searchParams] = useSearchParams();
  const car = searchParams.get("car");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    additionalRequests: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!car) {
      toast.error("Car information is missing in the URL!");
      return;
    }

    const bookingData = { car, ...formData };

    try {
      const response = await fetch("http://localhost:3000/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success(`Your booking for the ${car} has been submitted!`);
        setFormData({
          name: "",
          email: "",
          date: "",
          time: "",
          additionalRequests: "",
        }); // Reset form fields
      } else {
        toast.error(`Failed to submit booking: ${result.message}`);
      }
    } catch (error) {
      console.error("Error submitting booking:", error);
      toast.error("An error occurred while submitting your booking.");
    }
  };

  return (
    <div className="booking-form-container">
      <h1>Book Your Car</h1>
      <p>
        You are booking a <strong>{car || "car"}</strong>. Please fill in the details below.
      </p>
      <form className="booking-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <label htmlFor="time">Time</label>
        <input
          type="time"
          id="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />

        <label htmlFor="additionalRequests">Additional Requests</label>
        <textarea
          id="additionalRequests"
          name="additionalRequests"
          value={formData.additionalRequests}
          onChange={handleChange}
          placeholder="Enter any special requests or requirements..."
        />

        <button type="submit">Submit Booking</button>
      </form>
      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  );
};

export default BookingForm;
