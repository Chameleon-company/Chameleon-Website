
import React, { Component } from "react";
import "./login.css"; // Make sure the path is correct
import Logo from "./image/Chameleon_Logo.png";
import Google from "./image/google.png";
import Linkedin from "./image/linkedin.png";
import Microsoft from "./image/microsoft.png";
import Screen from "../../components/app/Screen";
import { Redirect } from "react-router-dom";
import { auth } from "../utils/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// init branch

import Chatbox from '../Chatbot/Chatbox';
import '../Chatbot/chatbox.css';
import chameleonLogo from "../../assets/ChameleonLogo.png";
import chatOpenImg from "../Chatbot/images/chat-open.png";
import chatCloseImg from "../Chatbot/images/chat-close.png";
import dotMenuImg from "../Chatbot/images/dot-menu.png";
import chatIcon from "../Chatbot/images/chat-icon.png";
import fileSelectIcon from "../Chatbot/images/file-select.png";
import sendMessageImg from "../Chatbot/images/send-message.png";

class Login extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    showToast: false,
    toastMessage: "",
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

  handleExternalSignIn = (service) => {
    console.log(`Signing in with ${service}`); // Implement sign-in logic here
  };

  handleExternalSignUp = (service) => {
    console.log(`Signing up with ${service}`); // Implement sign-up logic here
  };

  handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    const { rememberMe } = this.state;
    signInWithPopup(auth, provider)
      .then(() => {
        this.displayToast("Sign in successful!");
        this.setState({ isAuthenticated: true });
        sessionStorage.setItem("status", "logged in");
      })
      .catch((err) => alert(err));
    if (rememberMe) {
      localStorage.setItem("rememberMe", "true");
    } else {
      localStorage.removeItem("rememberMe");
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
      this.displayToast("Please enter both email and password");
      return;
    }
    try {
      const response = await fetch("http://localhost:3002/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      this.setState({ showToast: true, toastMessage: "Sign in successful!" });
      if (!response.ok) {
        const errorMessage =
          data.error === "Authentication failed"
            ? "Authentication failed. Please check your username and password and try again."
            : data.error || "An unknown error occurred.";
        throw new Error(errorMessage);
      }

      this.displayToast("Sign in successful!");
      this.setState({ isAuthenticated: true });

      sessionStorage.setItem("status", "logged in");
      if (rememberMe) {
        localStorage.setItem("rememberMe", "true");
      } else {
        localStorage.removeItem("rememberMe");
      }
      // Redirect or perform other actions
    } catch (error) {
      this.displayToast(error.message);
    }
  };

  handleSubmitSignUp = async (event) => {
    event.preventDefault();
    const { email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      this.setState({
        showToast: true,
        toastMessage: "Passwords do not match!",
      });
      return; // Stop the form submission if passwords do not match
    }
    try {
      const response = await fetch("http://localhost:3002/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      this.setState({
        showToast: true,
        toastMessage: "Sign up successful!",
        email: "",
        password: "",
        confirmPassword: "",
      });
      if (!response.ok) {
        const errorMessage =
          data.error === "Email already exists"
            ? "An account with this email already exists. Please use a different email or log in."
            : data.error || "An unknown error occurred during sign up.";
        throw new Error(errorMessage);
      }
      this.displayToast("One Step! Please verify your email now!");
      this.setState({
        email: "",
        password: "",
        confirmPassword: "",
        isSignUp: false,
      });
      // Redirect or perform other actions

    } catch (error) {
      this.displayToast(error.message);
    }
  };

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };


  // Placeholder for sign-up logic
  handleSignUp = (event) => {
    event.preventDefault();
    // Implement sign-up logic here
  };

  //handle checkbox change of Remember Me prop

  toggleRememberMe = () => {
    this.setState((prevState) => ({ rememberMe: !prevState.rememberMe }));
  };

  toggleSignUp = () => {
    this.setState((prevState) => ({ isSignUp: !prevState.isSignUp }));
  };

  render () {
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
        {isAuthenticated ? <Redirect to="/home" /> :
          <div className="bg-gray-100 w-full h-full overflow-y-auto font-poppins">
            <Screen>
              <div className="max-w-5xl mx-auto my-14 flex flex-col lg:flex-row rounded-lg overflow-hidden drop-shadow-lg">
                <div className="container_2 w-[540px] lg:w-[640px]">
                  <div className={`dowebok ${isSignUp ? "s--signup" : ""}`}>
                    {showToast && (
                      <div className="login-toast-message">{toastMessage}</div>
                    )}

                    <div className="form sign-in rounded-md">
                      <h2 className="text-gray-600 font-semibold">Login to Chameleon</h2>
                      <form
                        action="#"
                        method="POST"
                        className="space-y-6 flex flex-col items-center mt-5"
                        onSubmit={this.handleSubmitSignIn}
                      >
                        <label
                          htmlFor="email"
                          className="text-sm text-gray-700 text-start"
                        >
                          Email address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={email}
                          onChange={this.handleInputChange}
                          autoComplete="email"
                          className="w-full rounded-2xl border-3 py-1.5 mt-2 text-gray-700 sm:text-sm sm:leading-6"
                        />

                        <label
                          htmlFor="password"
                          className="text-sm text-gray-700"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          value={password}
                          onChange={this.handleInputChange}
                          autoComplete="current-password"
                          className="w-full rounded-2xl border-3 py-1.5 mt-2 text-gray-700 sm:text-sm sm:leading-6"
                        />

                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={rememberMe}
                            onChange={this.toggleRememberMe}
                            id="remember"
                            className="mt-0"
                          />
                          <label htmlFor="remember" className="text-gray-700">Remember Me</label>
                        </div>

                        <p>
                          <a href="/reset" className="text-gray-500 text-sm">Forgot your password?</a>
                        </p>

                        <button
                          type="submit"
                          className="submit bg-[#559166] flex justify-center rounded-3xl py-2 px-5 font-semibold shadow-sm text-gray-50 hover:text-[#559166] hover:bg-green-sage focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          Login
                        </button>
                      </form>
                      <p className="text-center mt-3">-- or login with --</p>
                      <div className="flex justify-center items-center space-x-4">
                        <a href=""><img className="inline h-9 w-9" src={Google}></img></a>
                        <a href=""><img className="inline h-12 w-12" src={Linkedin}></img></a>
                        <a href=""><img className="inline h-7 w-7" src={Microsoft}></img></a>
                      </div>
                      <p className="text-center pt-4">
                        Don't have an account?{" "}
                        <a className="text-[#559166] no-underline font-semibold" href="signup" onClick={this.toggleSignUp}>
                          Sign Up
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="auth-form-switch">
                  {!this.state.isSignUp ? (
                    <div className="img__text drop-shadow-xl">
                      <h2>Not registered yet?</h2>
                      <p>Register now and explore abundant opportunities!</p>
                    </div>
                  ) : (
                    <div className="img__text">
                      <h2>Already have an account?</h2>
                      <p>Log in with your account, long time no see!</p>
                    </div>
                  )}
                  <div class="img__btn  hover:text-base" onClick={this.toggleSignUp}>
                    {!this.state.isSignUp ? (
                      <span class="m--up">Sign Up</span>
                    ) : (
                      <span class="m--up">Log In</span>
                    )}
                  </div>
                </div>
              </div>
            </Screen>
          </div>
        }
      </>
    );
  }
}

export default Login;

