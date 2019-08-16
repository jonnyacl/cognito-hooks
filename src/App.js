import React, { useReducer } from 'react';
import Dashboard from "./components/Dashboard";
import Login from './components/Login';
import Signup from './components/Signup';
import { UserContext } from './context/UserContext';
import { Auth } from 'aws-amplify';
import { withRouter, Route, Switch } from "react-router-dom";
import './styles/app.css';

function App() {

  const initialState = {
    title: 'RM Dashboard',
    user: null
  }

  const reducer = (state, action) => {
    switch(action.type) {
      case 'SIGNUP_REQUEST':
        Auth.signUp(action.email, action.password).then(
          () => {
            dispatch({ type: 'SIGNUP_REQUEST_SUCCESS' })
          }
        );
        return { ...state }
      case 'SIGNUP_REQUEST_SUCCESS':
        return {
          ...state,
          showConfirmCode: true
        }
      case 'SIGNUP_CONFIRM_REQUEST':
        Auth.confirmSignUp(action.email, action.code).then(u => {
          dispatch({
            type: "SIGNUP_CONFIRM_SUCCESS",
            user: {
              email: u.idToken.payload.email,
              id: u.idToken.payload["cognito:username"],
              key: u.idToken.payload.devkey
            }
          });
        });
        return { ...state }
      case 'LOGIN_SUCCESS':
      case 'CHECK_LOGIN_SUCCESS':
      case 'SIGNUP_CONFIRM_SUCCESS':
        return {
          ...state,
          user: action.user
        }
      case 'CHECK_LOGIN_FAIL':
        return {
          ...state
        }
      case 'LOGOUT_REQUEST':
          Auth.signOut()
            .then(() => {
              dispatch({
                type: "LOGOUT_SUCCESS"
              });
            });
          return {
            ...state
          }
      case 'LOGOUT_SUCCESS':
        return {
          ...state,
          user: null
        }
      default:
        return state
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  
  console.log("%cFractal - A curve or geometrical figure.","font-weight:bold; color:#ECB345");
  console.log("%cWe're hiring!","font-weight:bold; font-size: 1rem; color:#111");
  console.log("See our current openings: http://bit.ly/2FycQS2");
  return (
    <UserContext.Provider value={[state, dispatch]}>
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
