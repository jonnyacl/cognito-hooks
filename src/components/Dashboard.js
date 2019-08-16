import React from 'react';
import './Dashboard.css';
import { Link } from "react-router-dom";

function Dashboard(props, user) {
  return (
    <div className="Dashboard">
        <Link to="/login">Login</Link>
    </div>
  );
}

export default Dashboard;
