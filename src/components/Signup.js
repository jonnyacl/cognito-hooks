import React, { useState, useContext } from 'react';
import LoaderButton from './LoaderButton';
import { Link } from "react-router-dom";
import { UserContext } from '../context/UserContext';
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import './Auth.css';
import { Auth } from 'aws-amplify';

function Signup({ routeProps }) {

  const [state, dispatch] = useContext(UserContext);
  const [showConfirmation, setShowConfirmation] = useState(false);

  if (state.user) {
    routeProps.history.push("/");
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [codeResent, setCodeResent] = useState("");
  const [confirmationCode, setConfirmationCode] = useState("");
  const [signUpError, setSignUpError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    return true;
  }

  const validateConfirmationForm = () => {
    return true;
  }

  const signup = (evt) => {
    console.log(`Signing up ${email}...`);
    evt.preventDefault();
    setIsLoading(true);
    Auth.signUp({
        username: email,
        password: password,
        email
      })
      .then(u => {
        setShowConfirmation(true);
        setIsLoading(false);
        dispatch({ type: "SIGNUP_SUCCESS", newUser: {
          email: u.user.username,
          id: u.userSub,
          pw: password
        }});
      }).catch(e => {
        console.log(e);
        setIsLoading(false);
        dispatch({ type: 'SIGNUP_FAIL', e });
        setSignUpError(`Failed to signup: ${e.message}`);
      });
  };

  const sendConfirmation = (evt) => {
    console.log("confirm code");
    setIsLoading(true);
    evt.preventDefault();
    Auth.confirmSignUp(state.newUser.email, confirmationCode).then(c => {
      console.log(`Sign up confirmed ${c}`)
      setIsLoading(false);
      dispatch({ type: 'SIGNUP_CONFIRM_SUCCESS' });
    }).catch((e) => {
      console.log(`Failed to confirm code: ${confirmationCode}`);
      setIsLoading(false);
      dispatch({ type: "SIGNUP_CONFIRM_FAIL" });
      setSignUpError(`Failed to confirm code: ${e.message}`);
    });
  }

  const resendCode = () => {
    setIsLoading(true);
    Auth.resendSignUp(email).then(() => {
      setCodeResent(`Code resent to ${email}`);
      setIsLoading(false);
    }).catch(e => {
      console.log(`Failed to resend code to email ${email}`);
      setSignUpError(`Failed to resend code: ${e.message}`);
    });
  }

  const renderErrors = () => {
    if (signUpError && signUpError.length > 0) {
      return(
        <div className="Auth-Error">
          {signUpError}
        </div>
      );
    }
    return null;
  }

  const renderForm = () => {
    return (
      <div className="Auth">
        <div className="Auth header">
          <div className="Auth header--info">
            <h3>Signup</h3>
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
              <LoaderButton
                block
                bsSize="large"
                disabled={!validateForm()}
                type="submit"
                isLoading={isLoading}
                text="Signup >"
                loadingText="Signing up…"
                className={!validateForm() ? "signin-button-disabled" : null}
              />
              <div>
                <div className="signup">Already have an account?</div>
                <Link to={{ pathname: "/login" }}>
                  <div className="signup here">Login here</div>
                </Link>
              </div>
              <div>
                <div className="signup">Already received a code?</div>
                <div onClick={() => {
                  setShowConfirmation(true);
                  setSignUpError("");
                }} className="Auth--signup-here">Enter Code</div>
              </div>
            </div>
          </form>
        </div>
        {renderErrors()}
      </div>
    );
  }

  const renderConfirmationForm = () => {
    return (
      <div>
        <div className="Auth header signup">
          <div>
            <div className="code-confirm">Please check your email for the code</div>
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
              <div className="form-submit verify">
                {codeResent.length > 0 ? codeResent:
                <button onClick={resendCode}>Resend code</button>}
              </div>
            </div>
            <div>
              <div onClick={() => { 
                setShowConfirmation(false);
                setSignUpError("");
                }} className="Auth--signup-here">Back to signup</div>
            </div>
          </form>
        </div>
        {renderErrors()}
      </div>
    );
  }

  if (showConfirmation) {
    return renderConfirmationForm();
  }
  return renderForm();

  
}

export default Signup;
