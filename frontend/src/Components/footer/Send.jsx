import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  // Update form data on change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form from reloading the page

    try {
      const response = await axios.post("http://localhost:5000/api/contacts", formData);

      if (response.status === 201) {
        setStatus("Data has been saved successfully!"); // Updated message
        setFormData({ name: "", email: "", message: "" }); // Clear form
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
};

export default ContactForm;
