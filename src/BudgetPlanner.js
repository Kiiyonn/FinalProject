import React from 'react';
import './BudgetPlanner.css';
import logo from './img/logo.png';
import logout from './img/logout.png';
import edit from './img/edit.svg';

const BudgetPlanner = () => {
  return (
    <div className="budget-planner">
      <div className="sidebar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <button class="logout-btn">Log out <img src={logout} alt="Logout icon"/></button>      
        </div>
      <main className="main-content">
        <header className="header">
          <h1>Budget Planner</h1>
          <div class="search-container">  <svg class="search-icon" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
          <input
            type="text"
            className="search-bar"
            placeholder="Type to search for expenses"
          />
          </div>
        </header>
        <div className="summary">
          <div className="summary-item budget">
            <img src={edit} alt="edit budget"/>
            <h2>Budget</h2>
          </div>
          <div className="summary-item remaining">
            <h2>Remaining</h2>
          </div>
          <div className="summary-item total-spent">
            <h2>Total Spent</h2>
          </div>
        </div>
        <section className="add-expense">
          <h2>Add Expense</h2>
          <div className="expense-fields">
          <input type="text" placeholder="Name" className="expense-input" />
          </div>
          <div className="expense-fields">
          <input type="number" placeholder="Cost" className="expense-input" />
          </div>
          <button className="add-btn">ADD</button>
        </section>
        <section className="expense-list">
          <h2>Expense</h2>
          <div className="expense-item">
            <button className="remove-btn">-</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BudgetPlanner;
