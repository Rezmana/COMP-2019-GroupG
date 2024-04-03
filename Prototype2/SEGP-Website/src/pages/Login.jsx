import React from 'react'
import {NavLink} from "react-router-dom"

export const Login = () => {
  return (
    <div>
      <h2>Login</h2>
      <form action="login.php" method="post">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
        <button type="submit">Login</button>
      </form>
      <div>
       <li><NavLink to ="/Signup">Click here to Signup for your first account!</NavLink></li>
      </div>
    </div>
  )
}
