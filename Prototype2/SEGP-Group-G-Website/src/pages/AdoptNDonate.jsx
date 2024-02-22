import React from 'react'
import { useState } from 'react';
import axios from 'axios';

export const AdoptNDonate = () => {
  const [formData, setFormData] = useState({
    Username: '',
    Password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        // Send form data to Laravel API endpoint
        const response = await axios.post('http://localhost:8000/api/storeUserLogin', formData);
        console.log(response.data); // Log the response from the API
        // Optionally, you can reset the form after successful submission
        setFormData({
          Username: '',
          Password: ''
        });
      } catch (error) {
        console.error('Error submitting form:', error.response.data);
      }
    };

    return (
      <form onSubmit={handleSubmit} method='POST'>
    {/* Use a hidden input field to specify the method as PUT */}
    <input type="hidden" name="_method" value="PUT" />
    <h1>Adopt or Donate</h1>
    <p>Adopt a turtle or donate to help save the turtles!</p>
    <p>Adopt a turtle</p>
    <input type="text" placeholder="Username" value={formData.Username} onChange={(e) => setFormData({ ...formData, Username: e.target.value })} />
    {/* <input type="email" placeholder="Email" value={formData.email}/> */}
    <input type="password" placeholder="Enter Password" value={formData.Password} onChange={(e) => setFormData({ ...formData, Password: e.target.value })} />
    <button type='submit'>Enter</button>
  </form>
  )
}
