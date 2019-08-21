import React, { useState, useContext } from 'react';
import LoaderButton from './LoaderButton';
import { Link } from "react-router-dom";
import { Auth } from 'aws-amplify';
import { UserContext } from '../context/UserContext';
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import './Auth.css';

const Login = ({ routeProps }) => {

  const [state, dispatch] = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPwReset, setShowPwReset] = useState(false);
  const [pwResetCode, setPwResetCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirm, setNewPasswordConfirm] = useState("");
  const [resetLinkSent, setResetLinkSent] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  if (state.user) {
    routeProps.history.push("/");
  }

  const signin = (evt) => {
    console.log(`Login ${email}`)
    evt.preventDefault();
    setIsLoading(true);
    Auth.signIn(email, password)
      .then(u => {
        dispatch({
          type: "LOGIN_SUCCESS",
          user: {
            email: u.attributes.email,
            id: u.username,
          }
        });
        setIsLoading(false);
      }).catch(e => {
        console.log(e);
        dispatch({ type: 'LOGIN_FAIL', e })
        setLoginError(`Failed to login: ${e}`);
        setIsLoading(false);
      }
    );
  };

  const resetPw = (evt) => {
    console.log(`Reset PW for ${email}`)
    evt.preventDefault();
    setIsLoading(true);
    Auth.forgotPassword(email)
      .then(() => {
        dispatch({
          type: "RESET_PW_SUCCESS"
        });
        setResetLinkSent(true);
        setIsLoading(false);
      }).catch(e => {
        console.log(e);
        dispatch({ type: 'RESET_PW_FAIL', e })
        setLoginError(`Failed to reset password: ${e.message}`);
        setIsLoading(false);
      });
  };

  const resetPwConfirm = (evt) => {
    console.log(`Reset Confirm PW for ${email}`)
    evt.preventDefault();
    setIsLoading(true);
    Auth.forgotPasswordSubmit(email, pwResetCode, newPassword)
      .then(u => {
        dispatch({
          type: "RESET_PW_CONFIRM_SUCCESS",
          user: {
            email: u.attributes.email,
            id: u.username,
          }
        });
        console.log(u)
        setIsLoading(false);
      }).catch(e => {
        console.log(e);
        dispatch({ type: 'RESET_PW_CONFIRM_FAIL', e })
        setLoginError(`Failed to reset password: ${e.message}`);
        setIsLoading(false);
      });
  };
  
  const validateForm = () => {
    return email && email.length > 0 && password && password.length > 0;
  }

  const validateFormResetConfirm = () => {
    return newPassword === newPasswordConfirm;
  }

  const validateFormReset = () => {
    return email && email.length;
  }

  const renderErrors = () => {
    if (loginError && loginError.length > 0) {
      return(
        <div className="Auth-Error">
          {loginError}
        </div>
      );
    }
    return null;
  }

  const renderReset = () => {
    return(
      <div>
        <h4>Reset Password</h4>
        {resetLinkSent ?
          <form onSubmit={resetPwConfirm}>
            <div>Check your emails for the reset code</div>
            <FormGroup controlId="pwResetCode" bsSize="large">
              {pwResetCode ? <ControlLabel>Code</ControlLabel> : null}
              <FormControl
                autoFocus
                value={pwResetCode}
                onChange={e => { setPwResetCode(e.target.value) }}
                placeholder="Reset Password Code"
              />
            </FormGroup>
            <FormGroup controlId="newPassword" bsSize="large">
              {newPassword ? <ControlLabel>New Password</ControlLabel> : null}
              <FormControl
                value={newPassword}
                onChange={e => { setNewPassword(e.target.value) }}
                type="password"
                placeholder="Your new password"
              />
            </FormGroup>
            <FormGroup controlId="newPasswordConfirm" bsSize="large">
              {newPasswordConfirm ? <ControlLabel>Confirm New Password</ControlLabel> : null}
              <FormControl
                value={newPasswordConfirm}
                onChange={e => { setNewPasswordConfirm(e.target.value) }}
                type="password"
                placeholder="Your new password"
              />
            </FormGroup>
            <div className="form-submit">
              <LoaderButton
                block
                bsSize="large"
                disabled={!validateFormResetConfirm()}
                type="submit"
                isLoading={isLoading}
                text="Reset password >"
                loadingText="Sending reset link…"
                className={!validateFormResetConfirm() ? "signin-button-disabled" : null}
              />
            </div>
          </form>
          : <form onSubmit={resetPw}>
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
          <div className="form-submit">
            <LoaderButton
              block
              bsSize="large"
              disabled={!validateFormReset()}
              type="submit"
              isLoading={isLoading}
              text="Reset password >"
              loadingText="Sending reset link…"
              className={!validateFormReset() ? "signin-button-disabled" : null}
            />
          </div>
        </form>
        }
        <div className="Auth--forgot-password"><span onClick={() => { 
          setShowPwReset(false);
          setResetLinkSent(false);
        }}>Back to Login</span></div>
      </div>
    );
  };

  return (
    <div className="Auth">
      <div className="Auth--header">
        <div className="Auth--header--info">
          <h3>Login</h3>
        </div>
      </div>
      {showPwReset ?
        renderReset() :
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
          <div className="Auth--forgot-password">
            Forgotten your password? <span onClick={() => { 
              setShowPwReset(true);
              setResetLinkSent(false);
            }}>Click here to reset</span>
          </div>
        </form>
      }
      {renderErrors()}
    </div>
  );
}

export default Login;
