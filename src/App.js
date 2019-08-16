import React, { useReducer } from 'react';
import Dashboard from "./components/Dashboard";
import Login from './components/Login';
import { UserContext } from './context/UserContext';
import { Auth } from 'aws-amplify';
import { withRouter, Route, Switch } from "react-router-dom";
import './styles/app.css';

function App() {

  const initialState = {
    title: 'RM Dashboard',
    user: null,
    userFetched: false
  }

  const reducer = (state, action) => {
    switch(action.type) {
      case 'LOGIN_SUCCESS':
      case 'CHECK_LOGIN_SUCCESS':
      case 'SIGNUP_SUCCESS':
        return {
          ...state,
          user: action.user,
          userFetched: true
        }
      case 'CHECK_LOGIN_FAIL':
        return {
          ...state,
          userFetched: true
        }
      case 'LOGOUT_REQUEST':
          Auth
            .signOut()
            .then(() => {
              dispatch({
                type: "LOGOUT_SUCCESS"
              });
            });
          break;
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

  if (!state.userFetched) {
    Auth.currentSession().then(u => {
      if (u) {
        dispatch({
          type: "CHECK_LOGIN_SUCCESS",
          user: {
            email: u.idToken.payload.email,
            id: u.idToken.payload["cognito:username"],
            key: u.idToken.payload.devkey
          }
        });
      } else {
        dispatch({ type: "CHECK_LOGIN_FAIL" });
      }
    }).catch(e => {
      console.log(e);
      dispatch({ type: "CHECK_LOGIN_FAIL" });
    });
  }
  
  console.log("%cFractal - A curve or geometrical figure.","font-weight:bold; color:#ECB345");
  console.log("%cWe're hiring!","font-weight:bold; font-size: 1rem; color:#111");
  console.log("See our current openings: http://bit.ly/2FycQS2");
  return (
    <UserContext.Provider value={dispatch}>
      {/* <UserContext.Consumer> */}
        <Switch>
          <Route path="/" exact component={Dashboard} props={ state.user } />
          <Route path="/dashboard" exact component={Dashboard} props={ state.user } />
          <Route path="/login" exact render={(routeProps) => (
            <Login routeProps={routeProps} user={state.user} />
          )} />
        </Switch>
      {/* </UserContext.Consumer> */}
    </UserContext.Provider>
  );
}

export default withRouter(App);
