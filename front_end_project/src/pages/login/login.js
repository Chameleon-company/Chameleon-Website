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
      <div className="login-centered-container w-full h-full overflow-y-auto">
        <Screen>
          {isAuthenticated && <Redirect to="/home" />}
          <div className="max-w-5xl mx-auto my-4 flex rounded-lg overflow-hidden">
            <div className="container_2">
              <div className={`dowebok ${isSignUp ? "s--signup" : ""}`}>
                {showToast && (
                  <div className="login-toast-message">{toastMessage}</div>
                )}

                <div className="form sign-in rounded-md">
                  <h2>Welcome Back</h2>
                  <form
                    action="#"
                    method="POST"
                    className="space-y-6 flex flex-col items-center"
                    onSubmit={this.handleSubmitSignIn}
                  >
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={this.handleInputChange}
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-1.5 mt-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />

                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      value={password}
                      onChange={this.handleInputChange}
                      autoComplete="current-password"
                      className="block w-full rounded-md border-0 py-1.5 mt-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />

                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={this.toggleRememberMe}
                        id="remember"
                        className="mt-0"
                      />
                      <label htmlFor="remember">Remember Me</label>
                    </div>

                    <p className="forgot-pass">
                      <a href="/reset">Forgot your password?</a>
                    </p>

                    <button
                      type="submit"
                      className="submit flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Log In
                    </button>
                  </form>
                  <p className="signup text-center pt-4">
                    Don't have an account?{" "}
                    <a href="signup" onClick={this.toggleSignUp}>
                      Sign up
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="auth-form-switch">
              {!this.state.isSignUp ? (
                <div className="img__text">
                  <h2>Not registered yet?</h2>
                  <p>Register now and explore abundant opportunities!</p>
                </div>
              ) : (
                <div className="img__text">
                  <h2>Already have an account?</h2>
                  <p>Log in with your account, long time no see!</p>
                </div>
              )}
              <div class="img__btn" onClick={this.toggleSignUp}>
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
    );
  }
}

export default Login;
