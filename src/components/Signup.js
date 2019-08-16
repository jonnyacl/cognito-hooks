import React, { useState, useContext } from 'react';
import LoaderButton from './LoaderButton';
import { Link } from "react-router-dom";
import { FractalLogoSvg } from "../assets/svgrenderer";
import { UserContext } from '../context/UserContext';
import { FractalFooter } from './FractalFooter';
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import './Login.css';
import { Auth } from 'aws-amplify';

function Signup({ routeProps }) {

  const [state, dispatch] = useContext(UserContext);

  if (state.user) {
    routeProps.history.push("/");
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [codeResent, setCodeResent] = useState("");
  const [confirmationCode, setConfirmationCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    return true;
  }

  const validateConfirmationForm = () => {
    return true;
  }

  const signup = (email, password) => {
    console.log("Signup")
    dispatch({ type: "SIGNUP_REQUEST", email, password })
  };

  const sendConfirmation = () => {
    console.log("confirm code")
    dispatch({ type: "SIGNUP_CONFIRM_REQUEST", email, confirmationCode })
  }

  const resendCode = () => {
    Auth.resendSignUp(email).then(() => {
        setCodeResent(`Code resent to ${email}`)
    });
  }

  const renderForm = () => {
    return (
      <div>
        <div className="Login header">
          <div className="Login header--info">
            <div className="portal-logo">{FractalLogoSvg(null, 100)}</div>
            <div className="portal-title">Dev Portal</div>
          </div>
          <form onSubmit={signup}>
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
            <FormGroup controlId="confirmPassword" bsSize="large">
              {confirmPassword ? <ControlLabel>Confirm password</ControlLabel> : null}
              <FormControl
                value={confirmPassword}
                onChange={(event) => { setConfirmPassword(event.target.value) }}
                type="password"
                placeholder="Confirm password"
              />
            </FormGroup>
            <div className="form-submit">
              <div>
                <div className="signup">Already have an account?</div>
                <Link to={{ pathname: "/login" }}>
                  <div className="signup here">Login here</div>
                </Link>
              </div>
              <LoaderButton
                block
                bsSize="large"
                disabled={!validateForm()}
                type="submit"
                isLoading={isLoading}
                text="Signup"
                loadingText="Signing up…"
                className={!validateForm() ? "signin-button-disabled" : null}
              />
            </div>
          </form>
        </div>
        <div className="Login footer">
          <FractalFooter />
        </div>
      </div>
    );
  }

  const renderConfirmationForm = () => {
    return (
      <div>
        <div className="Login header signup">
          <div className="Login header--info">
            <div className="portal-logo">{FractalLogoSvg(null, 100)}</div>
            <div className="portal-title">Dev Portal</div>
          </div>
          <form onSubmit={sendConfirmation}>
            <FormGroup controlId="confirmationCode" bsSize="large">
            {confirmationCode ? <ControlLabel>Confirmation Code</ControlLabel> : <ControlLabel />}
              <FormControl
                autoFocus
                type="tel"
                value={confirmationCode}
                onChange={(event) => { setConfirmationCode(event.target.value) }}
                placeholder="Confirmation Code"
              />
            </FormGroup>
            <div className="form-submit verify">
              {codeResent ? codeResent:
              <span onClick={resendCode}>Click here to resend the confirmation code</span>}
            </div>
            <div className="form-submit verify">
              <div>
                <div className="code-confirm">Please check your email for the code</div>
              </div>
              <LoaderButton
                block
                bsSize="large"
                disabled={!validateConfirmationForm()}
                type="submit"
                isLoading={isLoading}
                text="Verify"
                loadingText="Verifying…"
                className={!validateConfirmationForm() ? "signin-button-disabled" : null}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div>
      {state.showConfirmCode
        ? renderConfirmationForm()
        : renderForm()}
    </div>
  );

  
}

export default Signup;
