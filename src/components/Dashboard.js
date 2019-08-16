import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { Button } from 'react-bootstrap';
import './Dashboard.css';
import { Link } from "react-router-dom";

function Dashboard() {

  const [state, dispatch] = useContext(UserContext);

  if (state.user) {
    return (
      <div className="Dashboard">
          <div>{state.user.email}</div>
          <div>{state.user.id}</div>
          <Button onClick={() => {dispatch({
            type: "LOGOUT_REQUEST"
          })}}>Logout</Button>
      </div>
    );
  }
  return (
    <div className="Dashboard">
        <Link to="/login">Login</Link>
    </div>
  );
}

export default Dashboard;
