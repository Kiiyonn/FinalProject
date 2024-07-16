import React from 'react';
import './login.css';
import bg from './img/bg.jpg';

const LoginForm = () => {
  return (
    <div className="login-page">
      <div className="background">
        <img src={bg} alt="background" />
      </div>
      <div className="form-container">
        <div className="login-form">
          <h2>Login</h2>
          <form>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" required />
            </div>
            <button type="submit">Login</button>
          </form>
          <div className="signup-link">
            <span>Don't have an account?</span> <a href="/signup">Create an account</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
