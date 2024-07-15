import React from 'react';
import './signup.css';

const SignupForm = () => {
  return (
    <div className="signup-form">
       <a href="/login" className="login-link">Back to Login</a>
      <h2>Sign Up</h2>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" required />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupForm;
