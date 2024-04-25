import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import "./LoginSignup.css";

export function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleEmail= (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

      // check whether username and password are empty
    if (!username || !password || !email) {
    setError('Username, password, and email are required.');
    return;
    }

    try {
      const response = await axios.post('http://localhost:8000/api/signup', {
        username,
        password,
        email,
      });
      console.log('Signup successful:', response.data);
      // logic handle success, go to login page
      navigate('/Login');
    } catch (error) {
      console.error('Signup error:', error);
      // logic handle error, show error msg
      if (error.response && error.response.data && error.response.data.res) {
        setError(error.response.data.res);
      } else {
        setError('Signup failed. Please try again.');
      }
    }
  };

  return (
    <div className="loginsignup-container">
      <h1 className="title">Signup</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={handleUsername}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handlePassword}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmail}
          required
        />

        <br/>

        <button type="submit">Signup</button>
      </form>
      {error && <p>{error}</p>}
      <p>Already have an account? <Link to="/login">Login here</Link>.</p>
    </div>
  );
}
