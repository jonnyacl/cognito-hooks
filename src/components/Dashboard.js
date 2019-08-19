import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { Button } from 'react-bootstrap';
import './Dashboard.css';
import { Link } from "react-router-dom";
import { Auth } from 'aws-amplify';

function Dashboard() {

  const [state, dispatch] = useContext(UserContext);

  const logout = (evt) => {
    console.log("Logout called")
    evt.preventDefault();
    Auth.signOut().then(() => {
      console.log("Logout done")
      dispatch({
        type: "LOGOUT_SUCCESS"
      })
    });
  }

  if (state.user) {
    return (
      <div className="Dashboard">
        <div>{state.user.email}</div>
        <div>{state.user.id}</div>
        <Button onClick={logout}>Logout</Button>
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
