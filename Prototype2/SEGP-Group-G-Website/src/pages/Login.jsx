import React, { useState , useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import "./LoginSignup.css";

export function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

      // check whether username and password are empty
  if (!username || !password) {
    setError('Username and password are required.');
    return;
  }

    try {
      const response = await axios.post('http://localhost:8000/api/login', {
        username,
        password
      });
      console.log('Login successful:', response.data);
      const role = response.data.role; //ADDED .role HERE AS IT PREVIOUSLY WASN'T WORKING CORRECTLY LB
      if (role === 'admin') {
        navigate('/admin');
      } else if (role === 'user') {
        window.location.href = "http://localhost:8000/user-management";
        navigate('/user');
      } else {
        setError('Invalid role');
      }
    } catch (error) {
      console.error('Login error:', error);
      if (error.response && error.response.data && error.response.data.res) {
        // show error msg from backend
        setError(error.response.data.res);
      } else {
        // show normal error msg
        setError('Login failed. Please try again.');
      }
    }
  };

  return (
    <div className="loginsignup-container">
      <h2>Login</h2>
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
        <button type="submit">Login</button>
      </form>
      {error && <p>{error}</p>}
      <p>Don't have an account? <Link to="/signup">Signup here</Link>.</p>
    </div>
  );
}
