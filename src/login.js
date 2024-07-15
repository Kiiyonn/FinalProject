import React from 'react';
import './login.css';

const LoginForm = () => {
  return (
    <div className="login-form">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" required />
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
  );
};

export default LoginForm;
