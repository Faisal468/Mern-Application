import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signin.css';

function Signin() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage('User signed in successfully!');
        setFormData({ email: '', password: '' }); // Clear the form
        navigate('/'); // Redirect to the home page
      } else {
        const errorData = await response.json();
        setMessage(errorData.message);
      }
    } catch (error) {
      setMessage('An error occurred: ' + error.message);
    }
  };

  return (
    <div className="signin-container">
      <form className="signin-form" onSubmit={handleSubmit}>
        <h2>Welcome Back</h2>
        <p>Please sign in to your account</p>

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Sign In</button>

        {message && <p className='line'>{message}</p>}

        <div className='footer'>
          Don't have an account? <a href="/signup">Sign Up</a>
        </div>
      </form>
    </div>
  );
}

export default Signin;
