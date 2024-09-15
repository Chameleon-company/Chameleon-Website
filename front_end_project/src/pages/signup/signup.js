import React, { Component } from 'react';
import './signup.css';
import Screen from '../../components/app/Screen';
import { Redirect } from 'react-router-dom';
import { MdOutlineEmail, MdOutlinePassword } from 'react-icons/md'; // Importing the icons

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    confirmPassword: '',
    showToast: false,
    toastMessage: '',
    isSignUp: true,
    isAuthenticated: false,
    rememberMe: false,
  };

  displayToast = (message) => {
    this.setState({ showToast: true, toastMessage: message });
  };

  handleSubmitSignIn = async (event) => {
    event.preventDefault();
    const { email, password, rememberMe } = this.state;

    if (!email || !password) {
      this.displayToast('Please enter both email and password');
      return;
    }

    try {
      const response = await fetch('http://localhost:3002/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      if (!response.ok) {
        const errorMessage = data.error === "Authentication failed"
          ? "Incorrect email or password. Please check your details and try again."
          : data.error || 'An unknown error occurred.';
        throw new Error(errorMessage);
      }

      this.displayToast('Sign in successful!');
      this.setState({ showToast: true, toastMessage: 'Sign in successful!', isAuthenticated: true });
      sessionStorage.setItem('status', 'logged in');
      if (rememberMe) {
        localStorage.setItem("rememberMe", "true");
      } else {
        localStorage.removeItem("rememberMe");
      }
    } catch (error) {
      this.displayToast(error.message);
    }
  };

  handleSubmitSignUp = async (event) => {
    event.preventDefault();
    const { email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      this.setState({ showToast: true, toastMessage: 'Passwords do not match!' });
      return;
    }

    try {
      const response = await fetch('http://localhost:3002/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        const errorMessage = data.error === "Email already exists"
          ? "An account with this email already exists. Please use a different email."
          : data.error || 'An unknown error occurred during sign up.';
        throw new Error(errorMessage);
      }
      this.setState({
        showToast: true,
        toastMessage: 'Sign up successful! Please check your email for verification.',
        email: '',
        password: '',
        confirmPassword: '',
        isSignUp: false
      });
    } catch (error) {
      this.setState({ showToast: true, toastMessage: error.message });
    }
  };

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value, showToast: false });
  };

  handleSignUp = (event) => {
    event.preventDefault();
    // Implement sign-up logic here
  };

  toggleSignUp = () => {
    this.setState(prevState => ({ isSignUp: !prevState.isSignUp }));
  };

  toggleRememberMe = () => {
    this.setState(prevState => ({ rememberMe: !prevState.rememberMe }));
  };

  render() {
    const { email, password, isSignUp, showToast, toastMessage, isAuthenticated, rememberMe } = this.state;
    return (
      <Screen>
        {isAuthenticated && <Redirect to='/home' />}
        <div className='centered-container'>
          <div className='container_2'>
            <div className={`dowebok ${isSignUp ? 's--signup' : ''}`}>
              <div className="form sign-in">
                <h2>Welcome Back</h2>
                <form onSubmit={this.handleSubmitSignIn}>
                  <label>
                    <MdOutlineEmail className="icon" /> Email
                    <input type="email"
                      name="email"
                      value={email}
                      onChange={this.handleInputChange} />
                  </label>
                  <label>
                    <MdOutlinePassword className="icon" /> Password
                    <input
                      type="password"
                      name="password"
                      value={password}
                      onChange={this.handleInputChange} />
                  </label>
                  {showToast && (<div className="toast-message">{toastMessage}</div>)}
                  <button type="submit" className="submit signin-up-button">Log In</button>
                  <div className='bottom-box'>
                    <div>
                      <label className='text-sm'>
                        <input type="checkbox" checked={rememberMe} onChange={this.toggleRememberMe} />
                        Remember Me
                      </label>
                      <p className="forgot-pass"><a href="/reset">Forgot your password?</a></p>
                    </div>
                  </div>
                </form>
              </div>
              <div className="sub-cont">
                <div className="img">
                  <div className="img__text m--up">
                    <h2>Not registered yet?</h2>
                    <p>Register now and explore abundant opportunities!</p>
                  </div>
                  <div className="img__text m--in">
                    <h2>Already have an account?</h2>
                    <p>Log in with your account, long time no see!</p>
                  </div>
                  <div className="img__btn" onClick={this.toggleSignUp}>
                    <span className="m--up">Sign Up</span>
                    <span className="m--in">Log In</span>
                  </div>
                </div>
                <div className="form sign-up">
                  <h2>Sign Up Now</h2>
                  <form onSubmit={this.handleSubmitSignUp}>
                    <label>
                      <MdOutlineEmail className="icon" /> Email
                      <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.handleInputChange} />
                    </label>
                    <label>
                      <MdOutlinePassword className="icon" /> Password
                      <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleInputChange} />
                    </label>
                    <p className='password-requirement' onChange={this.handleInputChange}>
                      (Requires at least 6 characters, including an uppercase letter, a lowercase letter, numbers, and special characters [!, @, $, etc.].)
                    </p>
                    <label>
                      <MdOutlinePassword className="icon" /> Confirm Password
                      <input
                        type="password"
                        name="confirmPassword"
                        value={this.state.confirmPassword}
                        onChange={this.handleInputChange} required />
                    </label>
                    {showToast && (<div className="toast-message">{toastMessage}</div>)}
                    <button type="submit" className="submit signin-up-button">Sign Up</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="form sign-up">
          <h2>Sign Up Now</h2>
          <form onSubmit={this.handleSubmitSignUp}>
            <label>
              <MdOutlineEmail className="icon" /> Email
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.handleInputChange}
              />
            </label>
            <label>
              <MdOutlinePassword className="icon" /> Password
              <input
                type="password"
                name="password"
                value={password}
                onChange={this.handleInputChange}
              />
            </label>
            <label>
              <MdOutlinePassword className="icon" /> Confirm Password
              <input
                type="password"
                name="confirmPassword"
                value={this.state.confirmPassword}
                onChange={this.handleInputChange}
                required
              />
            </label>
            <button
              type="submit"
              className="submit signin-up-button"
            >
              Sign Up
            </button>
          </form>
          <div className="bottom-box">
            {/* External Sign-Up Buttons */}
            <svg
              t="1712763892469"
              type="button"
              onClick={() => this.handleExternalSignUp('Facebook')}
              className="icon"
              viewBox="0 0 1026 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2490"
              width="40"
              height="40"
            >
              <path
                d="M512.034 0.019c-282.952 0-512.019 229.095-512.019 511.819 0 231.356 148.615 426.304 350.739 495.59v-400.189h-105.01v-95.5h105.01v-72.688c0-103.873 62.7-160.118 154.992-160.118 44.911 0 83.747 3.345 95.082 4.85v110.265h-65.133c-51.09 0-61.11 24.335-61.11 59.95v78.602h107.493l-13.934 95.5h-93.559v400.16c202.161-69.281 350.818-264.195 350.818-495.541 0-282.758-229.097-511.85-512.038-511.85z"
                fill="#3B5998"
                p-id="2491"
              />
            </svg>
          </div>
        </div>
      </Screen>
    );
  }
}

export default SignUp;

