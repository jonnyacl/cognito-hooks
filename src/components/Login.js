import React, { useState, useContext } from 'react';
import LoaderButton from './LoaderButton';
import { Link } from "react-router-dom";
import { Auth } from 'aws-amplify';
import { UserContext } from '../context/UserContext';
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import './Login.css';

function Login({ routeProps, user }) {

  if (user) {
    routeProps.history.push("/");
  }

  const dispatch = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPwReset, setShowPwReset] = useState(false);
  const [resetLinkSent, setResetLinkSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
      return true;
  }

  const signin = (email, password) => {
    console.log("Signin")
    Auth.signIn(email, password)
      .then(u => {
        dispatch({
          type: "LOGIN_SUCCESS",
          user: {
            email: u.idToken.payload.email,
            id: u.idToken.payload["cognito:username"],
            key: u.idToken.payload.devkey
          }
        });
      });
  };

  const signup = (email, password) => {
    Auth.signup(email, password).then(() =>
      {
        dispatch({
          type: "SIGNUP_PENDING"
        });
      }
    )
  };

  const confirmSignup = (email, code) => {
    Auth.confirmSignUp(email, code).then(u => {
      dispatch({
        type: "SIGNUP_SUCCESS",
        user: {
          email: u.idToken.payload.email,
          id: u.idToken.payload["cognito:username"],
          key: u.idToken.payload.devkey
        }
      });
    });
  };
  
  const sendPasswordResetEmail = email => {
    return Auth.forgotPassword(email)
      .then(() => {
      });
  };
  
  const confirmPasswordReset = (code, password) => {
    return Auth.forgotPasswordSubmit(code, password)
      .then(() => {
      });
  };

  return (
    <div className="Login">
        <form onSubmit={() => signin(email, password)}>
          <FormGroup controlId="email" bsSize="large">
            {email ? <ControlLabel>Email address</ControlLabel> : null}
            <FormControl
              autoFocus
              type="email"
              value={email}
              onChange={(event) => { setEmail(event.target.value) }}
              placeholder="Email address"
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            {password ? <ControlLabel>Password</ControlLabel> : null}
            <FormControl
              value={password}
              onChange={(event) => { setPassword(event.target.value) }}
              type="password"
              placeholder="Your password"
            />
          </FormGroup>
          <div className="form-submit">
            <LoaderButton
              block
              bsSize="large"
              disabled={!validateForm()}
              type="submit"
              isLoading={isLoading}
              text="Sign in >"
              loadingText="Signing in…"
              className={!validateForm() ? "signin-button-disabled" : null}
            />
          </div>
          <div>
            <div className="signup">Haven't signed up yet?</div>
            <Link to={{ pathname: "/signup", state: { reset: true } }}>
            <div className="signup here">Sign up here</div>
            </Link>
          </div>
          <div className="forgot-password">
            <span onClick={() => { setShowPwReset(true); setResetLinkSent(false) }}>Forgotten your password? Click here to reset</span>
          </div>
        </form>
    </div>
  );
}

export default Login;
