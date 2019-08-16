import React, { useState, useContext } from 'react';
import LoaderButton from './LoaderButton';
import { Link } from "react-router-dom";
import { Auth } from 'aws-amplify';
import { FractalLogoSvg } from '../assets/svgrenderer';
import { FractalFooter } from './FractalFooter';
import { UserContext } from '../context/UserContext';
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import './Login.css';

const Login = ({ routeProps }) => {

  const [state, dispatch] = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPwReset, setShowPwReset] = useState(false);
  const [resetLinkSent, setResetLinkSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  if (state.user) {
    routeProps.history.push("/");
  }

  const signin = (evt) => {
    console.log(`Login ${email}`)
    evt.preventDefault();
    Auth.signIn(email, password)
      .then(u => {
        dispatch({
          type: "LOGIN_SUCCESS",
          user: {
            email: u.attributes.email,
            id: u.username,
            key: u.signInUserSession.idToken.payload.devkey
          }
        });
        console.log(u)
      }).catch(e => { 
        console.log(e) 
      });
  };
  
  const validateForm = () => {
    return true;
  }

  return (
    <div className="Login">
        <div className="Login header--info">
          <div className="portal-logo">{FractalLogoSvg(null, 100)}</div>
          <div className="portal-title">Dev Portal</div>
        </div>
        <form onSubmit={signin}>
          <FormGroup controlId="email" bsSize="large">
            {email ? <ControlLabel>Email address</ControlLabel> : null}
            <FormControl
              autoFocus
              type="email"
              value={email}
              onChange={e => { setEmail(e.target.value) }}
              placeholder="Email address"
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            {password ? <ControlLabel>Password</ControlLabel> : null}
            <FormControl
              value={password}
              onChange={e => { setPassword(e.target.value) }}
              type="password"
              placeholder="Your password"
            />
          </FormGroup>
          <div className="form-submit">
            <LoaderButton
              block
              bsSize="large"
              disabled={!validateForm}
              type="submit"
              isLoading={isLoading}
              text="Sign in >"
              loadingText="Signing in…"
              className={!validateForm ? "signin-button-disabled" : null}
            />
          </div>
          <div>
            <div className="signup">Haven't signed up yet?</div>
            <Link to={{ pathname: "/signup", state: { reset: true } }}>
            <div className="signup here">Sign up here</div>
            </Link>
          </div>
          <div className="forgot-password">
            <span onClick={() => { 
              setShowPwReset(true);
              setResetLinkSent(false);
            }}>Forgotten your password? Click here to reset</span>
          </div>
        </form>
        <div className="Login footer">
          <FractalFooter />
        </div>
    </div>
  );
}

export default Login;
