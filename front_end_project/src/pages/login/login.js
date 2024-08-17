import React, { Component } from 'react';
import './login.css';
import Screen from '../../components/app/Screen';
import { Redirect, withRouter } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

class Login extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    showToast: false,
    toastMessage: '',
    isSignUp: false,
    isAuthenticated: false,
    rememberMe: false,
  };

  displayToast = (message) => {
    this.setState({ showToast: true, toastMessage: message });

    setTimeout(() => {
      this.setState({ showToast: false });
    }, 5000);
  };

  handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    const { rememberMe } = this.state;

    try {
      await signInWithPopup(auth, provider);
      this.displayToast('Sign in successful!');
      this.setState({ isAuthenticated: true });
      sessionStorage.setItem('status', 'logged in');

      if (rememberMe) {
        localStorage.setItem('rememberMe', 'true');
      } else {
        localStorage.removeItem('rememberMe');
      }
    } catch (err) {
      this.displayToast(err.message);
    }
  };

  handleSubmitSignIn = async (event) => {
    event.preventDefault();

    if (this.state.isSignUp) {
      this.handleSubmitSignUp(event);
      return;
    }

    const { email, password, rememberMe } = this.state;
    if (!email || !password) {
      this.displayToast('Please enter both email and password');
      return;
    }

    try {
      const response = await fetch('http://localhost:3002/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      if (!response.ok) {
        const errorMessage = data.error || 'An unknown error occurred.';
        throw new Error(errorMessage);
      }

      this.displayToast('Sign in successful!');
      this.setState({ isAuthenticated: true });
      sessionStorage.setItem('status', 'loggedIn');
      this.props.history.push('/profile', { profileData: data });

      if (rememberMe) {
        localStorage.setItem('rememberMe', 'true');
      } else {
        localStorage.removeItem('rememberMe');
      }
    } catch (error) {
      this.displayToast(error.message);
    }
  };

  handleSubmitSignUp = async (event) => {
    event.preventDefault();

    const { email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      this.displayToast('Passwords do not match!');
      return;
    }

    try {
      const response = await fetch('http://localhost:3002/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      if (!response.ok) {
        const errorMessage = data.error || 'An unknown error occurred.';
        throw new Error(errorMessage);
      }

      this.displayToast('Sign up successful! Please verify your email.');
      this.setState({
        email: '',
        password: '',
        confirmPassword: '',
        isSignUp: false,
      });
    } catch (error) {
      this.displayToast(error.message);
    }
  };

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  toggleRememberMe = () => {
    this.setState((prevState) => ({ rememberMe: !prevState.rememberMe }));
  };

  toggleSignUp = () => {
    this.setState((prevState) => ({ isSignUp: !prevState.isSignUp }));
  };

  render() {
    const {
      email,
      password,
      isSignUp,
      showToast,
      toastMessage,
      isAuthenticated,
      rememberMe,
    } = this.state;

    return (
      <>
        <Screen>
          {isAuthenticated && <Redirect to="/home" />}
          <div className="login-centered-container">
            <div className="container_2">
              <div className={`dowebok ${isSignUp ? 's--signup' : ''}`}>
                {showToast && (
                  <div className="login-toast-message">{toastMessage}</div>
                )}
                <div className="form sign-in">
                  <h2>Welcome Back</h2>
                  <form onSubmit={this.handleSubmitSignIn}>
                    <label>
                      <span>Email</span>
                      <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.handleInputChange}
                      />
                    </label>
                    <label>
                      <span>Password</span>
                      <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleInputChange}
                      />
                    </label>
                    <div>
                      <label className="text-sm">
                        <input
                          type="checkbox"
                          checked={rememberMe}
                          onChange={this.toggleRememberMe}
                        />
                        Remember Me
                      </label>
                      <p className="forgot-pass">
                        <a href="/reset">Forgot your password?</a>
                      </p>
                    </div>
                    <button type="submit" className="submit signin-up-button">
                      Log In
                    </button>
                    <div className="bottom-box">
                      <svg
                        type="button"
                        onClick={() => this.handleExternalAuth('Facebook')}
                        className="icon"
                        viewBox="0 0 1026 1024"
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                      >
                        {/* SVG Path Data */}
                      </svg>
                      <div className="width5"></div>
                      <svg
                        type="button"
                        onClick={this.handleGoogleLogin}
                        className="icon"
                        viewBox="0 0 1024 1024"
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                      >
                        {/* SVG Path Data */}
                      </svg>
                    </div>
                  </form>
                </div>
                {/* Add the sign-up form and logic here */}
              </div>
            </div>
          </div>
        </Screen>
      </>
    );
  }
}

export default withRouter(Login);
