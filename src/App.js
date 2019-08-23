import React, { useReducer, useState } from 'react'; 
import Login from './components/Login';
import Signup from './components/Signup';
import { Auth } from 'aws-amplify';
import { UserContext } from './context/UserContext';
import { UserReducer } from './reducers/UserReducer';
import { Link, withRouter, Route, Switch } from "react-router-dom";
import './styles/app.css';

function App() {

  const initialUserState = {
    user: null,
    appKey: null,
    fetchNewUser: false,
    newUser: null
  };

  const [userChecked, setUserChecked] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);

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
      }
      const appKey = idToken.payload.appkey;
      userDispatch({ type: 'CHECK_LOGIN_SUCCESS', user, appKey });
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
            id: u.username
          }
        });
        console.log(u)
      }).catch(e => {
        console.log(e);
        userDispatch({ type: 'LOGIN_FAIL', e })
      });
  }

  const logout = (evt) => {
    setLoggingOut(true);
    evt.preventDefault();
    Auth.signOut().then(() => {
      userDispatch({ type: "LOGOUT_SUCCESS" });
      setLoggingOut(false);
    }).catch(() => {
      userDispatch({ type: "LOGOUT_FAIL" });
      setLoggingOut(false);
    })
  }

  return (
    <UserContext.Provider value={[userState, userDispatch]}>
      <Switch>
        {/* Delete this route for your own root page component */}
        <Route path="/" exact render={() => (
          userState.user ? loggingOut ? <button>Logging out...</button> : <button onClick={logout}>Logout</button> : <div><div><Link to="/login">Login</Link></div><div><Link to="/signup">Signup</Link></div></div>
        )} />
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
