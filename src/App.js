import React, { useReducer, useState } from 'react';
import Dashboard from "./components/Dashboard";
import Login from './components/Login';
import Signup from './components/Signup';
import { Auth } from 'aws-amplify';
import { UserContext } from './context/UserContext';
import { UserReducer } from './reducers/UserReducer';
import { withRouter, Route, Switch } from "react-router-dom";
import './styles/app.css';

function App() {

  const initialUserState = {
    user: null,
    fetchNewUser: false,
    newUser: null
  };

  const [userChecked, setUserChecked] = useState(false);

  const userReducer = (state, action) => UserReducer(state, action);
  const [userState, userDispatch] = useReducer(userReducer, initialUserState);

  // only check user is logged in once on component load (and we have no logged-in user in global state)
  if (!userState.user && !userChecked) {
    Auth.currentSession().then(res => {
      const idToken = res.getIdToken();
      const name = idToken.payload["cognito:username"];
      const user = {
        id: name,
        email: idToken.payload.email,
        key: idToken.payload.devkey,
      }
      userDispatch({ type: 'CHECK_LOGIN_SUCCESS', user });
      setUserChecked(true);
    }).catch((e) => {
      if (e !== 'No current user') {
        console.log(e);
      }
      setUserChecked(true);
      userDispatch({ type: 'CHECK_LOGIN_FAIL' });
    });
  }

  if (userState.fetchNewUser) {
    Auth.signIn(userState.newUser.email, userState.newUser.pw)
      .then(u => {
        userDispatch({
          type: "LOGIN_SUCCESS",
          user: {
            email: u.attributes.email,
            id: u.username,
            key: u.signInUserSession.idToken.payload.devkey
          }
        });
        console.log(u)
      }).catch(e => {
        console.log(e);
        userDispatch({ type: 'LOGIN_FAIL', e })
      });
  }

  
  console.log("%cFractal - A curve or geometrical figure.","font-weight:bold; color:#ECB345");
  console.log("%cWe're hiring!","font-weight:bold; font-size: 1rem; color:#111");
  console.log("See our current openings: http://bit.ly/2FycQS2");
  return (
    <UserContext.Provider value={[userState, userDispatch]}>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/login" exact render={(routeProps) => (
          <Login routeProps={routeProps} />
        )} />
        <Route path="/signup" exact render={(routeProps) => (
          <Signup routeProps={routeProps} />
        )} />
      </Switch>
    </UserContext.Provider>
  );
}

export default withRouter(App);
