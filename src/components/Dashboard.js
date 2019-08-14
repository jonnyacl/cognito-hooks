import React from 'react';
import logo from '../logo.svg';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="Dashboard">
        <header className="Dashboard__header">
        <img src={logo} className="Dashboard-logo" alt="logo" />
        <p>
          Edit <code>src/components/Dashboard.js</code> and save to reload.
        </p>
        <a
          className="Dashboard__link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Dashboard;
