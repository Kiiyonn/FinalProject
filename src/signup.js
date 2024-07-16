import React from 'react';
import './signup.css';
import bg from './img/bg.jpg';

const SignupForm = () => {
  return (
    <div className="signup-page">
      <div className="background">
        <img src={bg} alt="background" />
      </div>
      <div className="form-container">
        <div className="signup-form">
          <a href="/login" className="login-link">Back to Login</a>
          <h2>Sign Up</h2>
          <form>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" required />
            </div>
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
