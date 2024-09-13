import React, { Component } from 'react';
import './signup.css';
import Screen from '../../components/app/Screen';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import Backgroud from './image/bg_2.jpg';

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
        body: JSON.stringify({ email, password })
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
        body: JSON.stringify({ email, password })
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

  // Placeholder for sign-up logic
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

    const { email, password, showToast, toastMessage, isAuthenticated, rememberMe } = this.state;
    return (
      <Screen>
        <div className='bg-light h-full w-full'>
          {isAuthenticated && <Redirect to='/home' />}
          <div className='grid md:grid-cols-2 h-full'>
            <img src={Backgroud} alt='backgroud' className='h-full object-cover hidden md:block' />
            <div class="flex flex-col items-center justify-center py-6">
              <form onSubmit={this.handleSubmitSignUp} className='max-w-96 mx-auto flex flex-col gap-2'>
                <h2>Sign Up Now</h2>
                <label htmlFor='email'>Email</label>
                <input
                  id='email'
                  type="email"
                  name="email"
                  value={email}
                  className='border-b bg-transparent outline-none w-full'
                  onChange={this.handleInputChange}
                  required />
                <label htmlFor='password'>Password</label>
                <input
                  id='password'
                  type="password"
                  name="password"
                  value={password}
                  className='border-b bg-transparent outline-none w-full'
                  onChange={this.handleInputChange}
                  required />
                <p className='text-xs text-gray-500' onChange={this.handleInputChange}>(Requires at least 6 characters, including an uppercase letter, a lowercase letter, numbers, and special characters [!, @, $, etc.].)</p>
                <label htmlFor='confirm'>Confirm Password</label>
                <input
                  id='confirm'
                  type="password"
                  name="confirmPassword"
                  className='border-b bg-transparent outline-none w-full'
                  value={this.state.confirmPassword}
                  onChange={this.handleInputChange}
                  required />
                <div className='flex items-center gap-2'>
                  <input id='remember' type="checkbox" checked={rememberMe} onChange={this.toggleRememberMe} />
                  <label htmlFor='remember'>Remember Me</label>
                </div>
                {showToast && (<div className="toast-message">{toastMessage} </div>)}
                <button type="submit" className="bg-[#2D6039] text-white w-full rounded-md py-2 my-2" href="/signup">Sign Up</button>
                <a href="/reset" className='text-center no-underline text-gray-500'>Forgot your password?</a>
              </form>
            </div>
          </div>
        </div>
      </Screen>
    );
  }
}

export default SignUp;
