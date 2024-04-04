import React from 'react'

export const Signup= () => {
  return (
    <div>
      <h2>Signup</h2>
      <form action="Signup.php" method="post">
        <label htmlFor="new-username">Username:</label>
        <input type="text" id="new-username" name="new-username" required />
        <label htmlFor="new-password">Password:</label>
        <input type="password" id="new-password" name="new-password" required />
        <button type="submit">Sign Up!</button>
        <script src="Admin-Signup-Redirect.js"></script>
      </form>
    </div>
  )
}