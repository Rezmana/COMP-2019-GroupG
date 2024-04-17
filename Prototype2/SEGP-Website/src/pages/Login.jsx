import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import "./LoginSignup.css";

export function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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

      // Store username in sessionStorage
      sessionStorage.setItem('username', username);

      setIsLoggedIn(true);

      const role = response.data.role;
      if (role === 'admin') {
        navigate('/admin');
      } else if (role === 'user') {
        navigate('/user');
      } else {
        setError('Invalid account');
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

  const handleLogout = () => {
    // 清除sessionStorage中的用户名
    sessionStorage.removeItem('username');
    // 设置登录状态为 false
    setIsLoggedIn(false);
    // 导航回登录页面
    navigate('/login')
  }

  return (
 <div className="loginsignup-container">
      {/* 如果用户已登录，则显示欢迎信息和登出按钮 */}
      {isLoggedIn && (
        <>
          <p>Welcome, {username}</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
      {/* 如果用户未登录，则显示登录表单 */}
      {!isLoggedIn && (
        <>
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
        </>
      )}
    </div>
  );
}

