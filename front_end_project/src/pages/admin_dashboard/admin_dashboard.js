<<<<<<< HEAD
import React, { Component } from "react";
// import './login.css'; // Make sure the path is correct
import Screen from "../../components/app/Screen";
import { Redirect } from "react-router-dom";
import { auth } from "../utils/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Card from "../../components/card/card";
import "./admin_dashboard.css";

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
      <>
        <Screen>
          {/*This part is for the cards components*/}
          <div className="dashboard-container">
            <div className="top-cards">
              <Card
                title={<h3 className="card-title">Users</h3>}
                value={<span className="card-value">338</span>}
                description={<p className="card-description">Description</p>}
              />

              <Card
                title={<h3 className="card-title">Teams</h3>}
                value={<span className="card-value">12</span>}
                description={<p className="card-description">Description</p>}
              />

              <Card
                title={<h3 className="card-title">Projects</h3>}
                value={<span className="card-value">4</span>}
                description={<p className="card-description">2 completed</p>}
              />

              <Card
                title={<h3 className="card-title">Posts</h3>}
                value={<span className="card-value">214</span>}
                description={<p className="card-description">2 new posts</p>}
              />
            </div>
=======
import React, { Component, useEffect } from 'react';
import './admin_dashboard.css'; // Make sure the path is correct
import Screen from '../../components/app/Screen';
import { Redirect } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import './App.css';

// class Login extends Component {

//     state = {
//         name: '',
//         email: '',
//         password: '',
//         confirmPassword: '',
//         showToast: false,
//         toastMessage: '',
//         isSignUp: false,
//         isAuthenticated: false,
//         rememberMe: false
//     };

//     displayToast = (message) => {
//         this.setState({ showToast: true, toastMessage: message });

//         setTimeout(() => {
//             this.setState({ showToast: false });
//         }, 5000);
//     };

//     handleExternalSignIn = (service) => {
//         console.log(`Signing in with ${service}`);  // Implement sign-in logic here 
//     };

//     handleExternalSignUp = (service) => {
//         console.log(`Signing up with ${service}`);  // Implement sign-up logic here 
//     };

//     handleGoogleLogin = async () => {
//         const provider = new GoogleAuthProvider();
//         const { rememberMe } = this.state;
//         signInWithPopup(auth, provider).then(() => {
//             this.displayToast('Sign in successful!');
//             this.setState({ isAuthenticated: true });
//             sessionStorage.setItem('status', 'logged in');
//         }).catch((err) => alert(err));
//         if (rememberMe) {
//             localStorage.setItem("rememberMe", "true");
//         } else {
//             localStorage.removeItem("rememberMe");
//         }
//     };
//     handleSubmitSignIn = async (event) => {
//         event.preventDefault();
//         if (this.state.isSignUp) {
//             this.handleSubmitSignUp(event);
//             return;
//         }
//         const { email, password, rememberMe } = this.state;
//         if (!email || !password) {
//             this.displayToast('Please enter both email and password');
//             return;
//         }
//         try {
//             const response = await fetch('http://localhost:3002/auth/signin', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ email, password })
//             });
//             const data = await response.json();
//             this.setState({ showToast: true, toastMessage: 'Sign in successful!' });
//             if (!response.ok) {
//                 const errorMessage = data.error === "Authentication failed"
//                     ? "Authentication failed. Please check your username and password and try again."
//                     : data.error || 'An unknown error occurred.';
//                 throw new Error(errorMessage);
//             }

//             this.displayToast('Sign in successful!');
//             this.setState({ isAuthenticated: true });

//             sessionStorage.setItem('status', 'logged in');
//             if (rememberMe) {
//                 localStorage.setItem("rememberMe", "true");
//             } else {
//                 localStorage.removeItem("rememberMe");

//             }
//             // Redirect or perform other actions
//         } catch (error) {
//             this.displayToast(error.message);
//         }
//     };
>>>>>>> 078b383426292b2fdffbd907f9f9dfca91fdc0ad

            <div className="bottom-cards">
              <Card>
                <h5>Top contributors of the week</h5>
                <ol type="1">
                  <li>@username</li>
                  <li>@username</li>
                  <li>@username</li>
                </ol>
              </Card>
              <Card>
                <h5>Top author of the week</h5>
                <ol type="1">
                  <li>@username</li>
                  <li>@username</li>
                  <li>@username</li>
                </ol>
              </Card>
              <Card>
                <h5>Top post of the week</h5>
                <ol type="1">
                  <li>Post title</li>
                  <li>Post title</li>
                  <li>Post title</li>
                </ol>
              </Card>
            </div>
          </div>

<<<<<<< HEAD
          {/* {isAuthenticated && <Redirect to='/home' />} */}
          {/* <div className='login-centered-container'>
                        <div className='container_2'>
                            <div className={`dowebok ${isSignUp ? 's--signup' : ''}`}>
                                {showToast && (
                                    <div className="login-toast-message">
                                        {toastMessage}
                                    </div>
                                )}
                                <div className="form sign-in">
                                    <h2>Welcome Back</h2>
                                    <form onSubmit={this.handleSubmitSignIn}>
                                        <label>
                                            <span>Email</span>
                                            <input type="email" name="email" value={email} onChange={this.handleInputChange} />
                                        </label>
                                        <label>
                                            <span>Password</span>
                                            <input type="password" name="password" value={password} onChange={this.handleInputChange} />
                                        </label>
                                        <div>
                                            <label className='text-sm'>
                                                <input
                                                    type="checkbox"
                                                    checked={rememberMe}
                                                    onChange={this.toggleRememberMe}
                                                />
                                                Remember Me
                                            </label>
                                            <div className='w-px'></div>
                                            <p className="forgot-pass"><a href="/reset">Forgot your password?</a></p>
                                        </div>
                                        <button type="submit" className="submit signin-up-button">Log In</button>
                                        <div className='bottom-box'>
                                            <svg t="1712763892469" type="button" onClick={() => this.handleExternalSignUp('Facebook')} class="icon" viewBox="0 0 1026 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2490" width="40" height="40"><path d="M512.034307 0C229.72222 0 0.002375 229.655981 0.002375 512S229.72222 1024 512.034307 1024 1024.066239 794.344019 1024.066239 512 794.346394 0 512.034307 0z m0 989.89647C248.530253 989.89647 34.169769 775.504054 34.169769 512S248.530253 34.10353 512.034307 34.10353 989.898845 248.495946 989.898845 512 775.538361 989.89647 512.034307 989.89647z" fill="#828282" p-id="2491"></path><path d="M623.796812 224.610702h-85.194961C430.096425 223.525009 416.237875 290.678309 416.237875 363.355869V416.203567h-47.898217a14.209804 14.209804 0 0 0-15.966072 15.966073v95.796432a14.209804 14.209804 0 0 0 15.966072 15.966072H416.237875v239.491082a14.337533 14.337533 0 0 0 16.061868 15.966072h97.552701c9.419983 1.085693 17.051765-6.54609 14.050143-15.966072L543.966451 543.932144h79.830361a14.209804 14.209804 0 0 0 15.966072-15.966072v-95.796432a14.209804 14.209804 0 0 0-15.966072-15.966073h-79.926157L543.966451 368.305351c3.097418-20.40464 3.097418-17.083697 22.03318-15.966072h57.126606c4.438568-0.989896 9.164525-0.44705 12.485468-3.672197 3.320943-3.225147 5.236872-7.631782 4.119247-12.293875v-95.796433A14.177872 14.177872 0 0 0 623.796812 224.610702z m-17.083697 94.008233l-40.042909-1.532743c-49.59062 0-53.741799 26.918798-53.741799 54.476238l-0.127728 60.543345a17.051765 17.051765 0 0 0 17.051765 17.083697H607.83074v61.692903h-77.914432a17.083697 17.083697 0 0 0-17.083697 17.051765L512.800679 767.457154H448.170019v-239.491082c0-9.419983-6.418361-17.051765-15.870276-17.051765H384.30573v-61.692902h47.994013a17.051765 17.051765 0 0 0 12.070351-4.981415c3.193214-3.225147 3.767993-7.567918 3.767993-12.102283v-68.81377c0-71.591867 14.465261-105.695397 90.431832-105.695398h68.111263v60.990396z" fill="#828282" p-id="2492"></path></svg>
                                            <div className='width5'></div>
                                            <svg t="1712763916510" type="button" onClick={this.handleGoogleLogin} class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3513" width="40" height="40"><path d="M512 1017q-103 0-197-40-90-38-160-108T47 709Q7 615 7 512t40-197q38-90 108-160T315 47Q409 7 512 7t197 40q90 38 160 108t108 160q40 94 40 196.5T977 709q-38 90-108 160T709 977q-94 40-197 40z m0-999q-100 0-192 39-89 37-157.5 105.5T57 320q-39 92-39 192t39 192q37 89 105.5 157.5T320 967q92 39 192 39t192-39q89-37 157.5-105.5T967 704q39-92 39-192t-39-192q-37-89-105.5-157.5T704 57q-92-39-192-39z m0 1006q-104 0-199-40-92-39-163-110T40 711Q0 616 0 512t40-199q39-92 110-163T313 40Q408 0 512 0t199 40q92 39 163 110t110 163q40 95 40 199t-40 199q-39 92-110 163T711 984q-95 40-199 40z m0-1000q-99 0-190 39-87 37-154.5 104.5T63 322q-38 91-38.5 190T63 702q37 87 104.5 154.5T322 961q91 38 190 38t189-38q88-37 155.5-104.5T961 702q38-91 38-190t-38-190q-37-87-104.5-154.5T702 63q-91-39-190-39z m297 432H519v119h166q-6 29-21.5 53T623 668q-44 29-103.5 29t-107-35.5Q365 626 347 571q-10-30-10-59.5t10-58.5q18-55 65.5-90.5T519 327q70 0 118 46l88-89q-41-38-92-59-53-21-114-21-89 0-163 47-73 46-112 123-32 65-32 138t32 138q39 77 112 123 74 47 163 47 62 0 113.5-19.5T723 745q44-40 68-98t24-128q0-32-6-63z m0 0z" fill="#666666" p-id="3514"></path></svg>
                                            <div className='width5'></div>
                                            <svg t="1712763968675" type="button" onClick={() => this.handleExternalSignUp('LinkedIn')} class="icon" viewBox="0 0 1026 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6170" width="40" height="40"><path d="M624.243794 382.73868c-21.649994 0-37.67993 5.460397-50.229263 12.35774-2.011725-7.1528-8.621679-12.389672-16.413122-10.824997h-95.285518c-9.419983-1.564675-17.051765 6.067107-14.14594 15.966072v351.253586c-2.905825 8.941 4.725957 16.604715 14.14594 15.966073h95.285518c9.419983 0.638643 17.051765-7.025072 17.051765-16.445055l-0.031932-212.284894c-0.031932-0.095796-0.383186-10.250218 6.035175-17.243358 5.141075-5.556193 13.986279-8.398154 26.21629-8.398154 20.372708 0 29.441437 8.33429 32.826245 26.982662v210.943744c-3.352875 9.419983 4.278907 17.083697 13.69889 16.445055h100.426593c9.419983 0.638643 17.051765-7.025072 13.666958-16.445055v-218.03268c3.352875-110.868405-75.615317-150.240738-143.247599-150.240739zM736.740738 735.525009h-66.291131v-195.456654c0-37.711862-24.364226-61.086192-63.544967-61.086192-22.160908 0-39.404266 6.514157-51.283024 19.350879-16.508919 17.882001-15.231633 40.553823-11.687165 45.599102v191.592865h-64.566795v-318.682799h61.181988v10.729201a16.987901 16.987901 0 0 0 27.461644 13.507297l4.4705-3.448672c12.932518-10.186354 26.312087-20.755894 51.793938-20.755894 26.375951 0 112.496944 8.398154 112.496944 116.137209V735.525009zM352.341586 223.525009c-35.827866 0-64.949981 29.122116-64.949981 64.949982s29.122116 64.949981 64.949981 64.949981 64.949981-29.122116 64.949981-64.949981S388.169452 223.525009 352.341586 223.525009z m0 95.796433c-16.987901 0-30.846451-13.858551-30.846451-30.846451s13.858551-30.846451 30.846451-30.846452 30.846451 13.858551 30.846451 30.846452-13.858551 30.846451-30.846451 30.846451zM397.940688 382.706748H303.166084c-9.419983 0-17.051765 7.631782-14.688786 17.530747v351.253586c-2.362979 8.941 5.268804 16.604715 14.688786 15.966073h94.774604c9.419983 0.638643 17.051765-7.025072 17.051765-16.445055v-351.253586a17.051765 17.051765 0 0 0-17.051765-17.051765zM384.27373 735.525009H320.217849v-318.682799H384.27373V735.525009z" fill="#828282" p-id="6171"></path><path d="M512.002307 0C229.658288 0 0.002307 229.655981 0.002307 512S229.658288 1024 512.002307 1024 1024.002307 794.344019 1024.002307 512 794.346326 0 512.002307 0z m0 989.89647C248.498253 989.89647 34.105837 775.504054 34.105837 512S248.498253 34.10353 512.002307 34.10353 989.898777 248.495946 989.898777 512 775.506361 989.89647 512.002307 989.89647z" fill="#828282" p-id="6172"></path></svg>
                                        </div>
                                    </form>
                                    <p className="signup">Don't have an account? <a href="signup" onClick={this.toggleSignUp}>Sign up</a></p>
                                </div>
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
                            {!this.state.isSignUp ? <span class="m--up">Sign Up</span> :
                                <span class="m--up">Log In</span>}
                        </div>
                    </div> */}
        </Screen>
      </>
    );
  }
}

export default Login;
=======
//     handleSubmitSignUp = async (event) => {
//         event.preventDefault();
//         const { email, password, confirmPassword } = this.state;
//         if (password !== confirmPassword) {
//             this.setState({ showToast: true, toastMessage: 'Passwords do not match!' });
//             return; // Stop the form submission if passwords do not match
//         }
//         try {
//             const response = await fetch('http://localhost:3002/auth/signup', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ email, password })
//             });
//             const data = await response.json();
//             this.setState({ showToast: true, toastMessage: 'Sign up successful!', email: '', password: '', confirmPassword: '' });
//             if (!response.ok) {
//                 const errorMessage = data.error === "Email already exists"
//                     ? "An account with this email already exists. Please use a different email or log in."
//                     : data.error || 'An unknown error occurred during sign up.';
//                 throw new Error(errorMessage);
//             }
//             this.displayToast('One Step! Please verify your email now!');
//             this.setState({ email: '', password: '', confirmPassword: '', isSignUp: false });
//             // Redirect or perform other actions
//         } catch (error) {
//             this.displayToast(error.message);
//         }
//     };

//     handleInputChange = (event) => {
//         this.setState({ [event.target.name]: event.target.value });
//     };

//     // Placeholder for sign-up logic
//     handleSignUp = (event) => {
//         event.preventDefault();
//         // Implement sign-up logic here
//     };

//     //handle checkbox change of Remember Me prop
//     toggleRememberMe = () => {
//         this.setState(prevState => ({ rememberMe: !prevState.rememberMe }));
//     };

//     toggleSignUp = () => {
//         this.setState(prevState => ({ isSignUp: !prevState.isSignUp }));
//     };

//     render () {
//         const { email, password, isSignUp, showToast, toastMessage, isAuthenticated, rememberMe } = this.state;
//         return (
//             <>
//                 <Screen>
                
                
                
//                     {/* {isAuthenticated && <Redirect to='/home' />} */}
//                     {/* <div className='login-centered-container'>
//                         <div className='container_2'>
//                             <div className={`dowebok ${isSignUp ? 's--signup' : ''}`}>
//                                 {showToast && (
//                                     <div className="login-toast-message">
//                                         {toastMessage}
//                                     </div>
//                                 )}
//                                 <div className="form sign-in">
//                                     <h2>Welcome Back</h2>
//                                     <form onSubmit={this.handleSubmitSignIn}>
//                                         <label>
//                                             <span>Email</span>
//                                             <input type="email" name="email" value={email} onChange={this.handleInputChange} />
//                                         </label>
//                                         <label>
//                                             <span>Password</span>
//                                             <input type="password" name="password" value={password} onChange={this.handleInputChange} />
//                                         </label>
//                                         <div>
//                                             <label className='text-sm'>
//                                                 <input
//                                                     type="checkbox"
//                                                     checked={rememberMe}
//                                                     onChange={this.toggleRememberMe}
//                                                 />
//                                                 Remember Me
//                                             </label>
//                                             <div className='w-px'></div>
//                                             <p className="forgot-pass"><a href="/reset">Forgot your password?</a></p>
//                                         </div>
//                                         <button type="submit" className="submit signin-up-button">Log In</button>
//                                         <div className='bottom-box'>
//                                             <svg t="1712763892469" type="button" onClick={() => this.handleExternalSignUp('Facebook')} class="icon" viewBox="0 0 1026 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2490" width="40" height="40"><path d="M512.034307 0C229.72222 0 0.002375 229.655981 0.002375 512S229.72222 1024 512.034307 1024 1024.066239 794.344019 1024.066239 512 794.346394 0 512.034307 0z m0 989.89647C248.530253 989.89647 34.169769 775.504054 34.169769 512S248.530253 34.10353 512.034307 34.10353 989.898845 248.495946 989.898845 512 775.538361 989.89647 512.034307 989.89647z" fill="#828282" p-id="2491"></path><path d="M623.796812 224.610702h-85.194961C430.096425 223.525009 416.237875 290.678309 416.237875 363.355869V416.203567h-47.898217a14.209804 14.209804 0 0 0-15.966072 15.966073v95.796432a14.209804 14.209804 0 0 0 15.966072 15.966072H416.237875v239.491082a14.337533 14.337533 0 0 0 16.061868 15.966072h97.552701c9.419983 1.085693 17.051765-6.54609 14.050143-15.966072L543.966451 543.932144h79.830361a14.209804 14.209804 0 0 0 15.966072-15.966072v-95.796432a14.209804 14.209804 0 0 0-15.966072-15.966073h-79.926157L543.966451 368.305351c3.097418-20.40464 3.097418-17.083697 22.03318-15.966072h57.126606c4.438568-0.989896 9.164525-0.44705 12.485468-3.672197 3.320943-3.225147 5.236872-7.631782 4.119247-12.293875v-95.796433A14.177872 14.177872 0 0 0 623.796812 224.610702z m-17.083697 94.008233l-40.042909-1.532743c-49.59062 0-53.741799 26.918798-53.741799 54.476238l-0.127728 60.543345a17.051765 17.051765 0 0 0 17.051765 17.083697H607.83074v61.692903h-77.914432a17.083697 17.083697 0 0 0-17.083697 17.051765L512.800679 767.457154H448.170019v-239.491082c0-9.419983-6.418361-17.051765-15.870276-17.051765H384.30573v-61.692902h47.994013a17.051765 17.051765 0 0 0 12.070351-4.981415c3.193214-3.225147 3.767993-7.567918 3.767993-12.102283v-68.81377c0-71.591867 14.465261-105.695397 90.431832-105.695398h68.111263v60.990396z" fill="#828282" p-id="2492"></path></svg>
//                                             <div className='width5'></div>
//                                             <svg t="1712763916510" type="button" onClick={this.handleGoogleLogin} class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3513" width="40" height="40"><path d="M512 1017q-103 0-197-40-90-38-160-108T47 709Q7 615 7 512t40-197q38-90 108-160T315 47Q409 7 512 7t197 40q90 38 160 108t108 160q40 94 40 196.5T977 709q-38 90-108 160T709 977q-94 40-197 40z m0-999q-100 0-192 39-89 37-157.5 105.5T57 320q-39 92-39 192t39 192q37 89 105.5 157.5T320 967q92 39 192 39t192-39q89-37 157.5-105.5T967 704q39-92 39-192t-39-192q-37-89-105.5-157.5T704 57q-92-39-192-39z m0 1006q-104 0-199-40-92-39-163-110T40 711Q0 616 0 512t40-199q39-92 110-163T313 40Q408 0 512 0t199 40q92 39 163 110t110 163q40 95 40 199t-40 199q-39 92-110 163T711 984q-95 40-199 40z m0-1000q-99 0-190 39-87 37-154.5 104.5T63 322q-38 91-38.5 190T63 702q37 87 104.5 154.5T322 961q91 38 190 38t189-38q88-37 155.5-104.5T961 702q38-91 38-190t-38-190q-37-87-104.5-154.5T702 63q-91-39-190-39z m297 432H519v119h166q-6 29-21.5 53T623 668q-44 29-103.5 29t-107-35.5Q365 626 347 571q-10-30-10-59.5t10-58.5q18-55 65.5-90.5T519 327q70 0 118 46l88-89q-41-38-92-59-53-21-114-21-89 0-163 47-73 46-112 123-32 65-32 138t32 138q39 77 112 123 74 47 163 47 62 0 113.5-19.5T723 745q44-40 68-98t24-128q0-32-6-63z m0 0z" fill="#666666" p-id="3514"></path></svg>
//                                             <div className='width5'></div>
//                                             <svg t="1712763968675" type="button" onClick={() => this.handleExternalSignUp('LinkedIn')} class="icon" viewBox="0 0 1026 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6170" width="40" height="40"><path d="M624.243794 382.73868c-21.649994 0-37.67993 5.460397-50.229263 12.35774-2.011725-7.1528-8.621679-12.389672-16.413122-10.824997h-95.285518c-9.419983-1.564675-17.051765 6.067107-14.14594 15.966072v351.253586c-2.905825 8.941 4.725957 16.604715 14.14594 15.966073h95.285518c9.419983 0.638643 17.051765-7.025072 17.051765-16.445055l-0.031932-212.284894c-0.031932-0.095796-0.383186-10.250218 6.035175-17.243358 5.141075-5.556193 13.986279-8.398154 26.21629-8.398154 20.372708 0 29.441437 8.33429 32.826245 26.982662v210.943744c-3.352875 9.419983 4.278907 17.083697 13.69889 16.445055h100.426593c9.419983 0.638643 17.051765-7.025072 13.666958-16.445055v-218.03268c3.352875-110.868405-75.615317-150.240738-143.247599-150.240739zM736.740738 735.525009h-66.291131v-195.456654c0-37.711862-24.364226-61.086192-63.544967-61.086192-22.160908 0-39.404266 6.514157-51.283024 19.350879-16.508919 17.882001-15.231633 40.553823-11.687165 45.599102v191.592865h-64.566795v-318.682799h61.181988v10.729201a16.987901 16.987901 0 0 0 27.461644 13.507297l4.4705-3.448672c12.932518-10.186354 26.312087-20.755894 51.793938-20.755894 26.375951 0 112.496944 8.398154 112.496944 116.137209V735.525009zM352.341586 223.525009c-35.827866 0-64.949981 29.122116-64.949981 64.949982s29.122116 64.949981 64.949981 64.949981 64.949981-29.122116 64.949981-64.949981S388.169452 223.525009 352.341586 223.525009z m0 95.796433c-16.987901 0-30.846451-13.858551-30.846451-30.846451s13.858551-30.846451 30.846451-30.846452 30.846451 13.858551 30.846451 30.846452-13.858551 30.846451-30.846451 30.846451zM397.940688 382.706748H303.166084c-9.419983 0-17.051765 7.631782-14.688786 17.530747v351.253586c-2.362979 8.941 5.268804 16.604715 14.688786 15.966073h94.774604c9.419983 0.638643 17.051765-7.025072 17.051765-16.445055v-351.253586a17.051765 17.051765 0 0 0-17.051765-17.051765zM384.27373 735.525009H320.217849v-318.682799H384.27373V735.525009z" fill="#828282" p-id="6171"></path><path d="M512.002307 0C229.658288 0 0.002307 229.655981 0.002307 512S229.658288 1024 512.002307 1024 1024.002307 794.344019 1024.002307 512 794.346326 0 512.002307 0z m0 989.89647C248.498253 989.89647 34.105837 775.504054 34.105837 512S248.498253 34.10353 512.002307 34.10353 989.898777 248.495946 989.898777 512 775.506361 989.89647 512.002307 989.89647z" fill="#828282" p-id="6172"></path></svg>

//                                         </div>
//                                     </form>
//                                     <p className="signup">Don't have an account? <a href="signup" onClick={this.toggleSignUp}>Sign up</a></p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="auth-form-switch">
//                         {!this.state.isSignUp ? (
//                             <div className="img__text">
//                                 <h2>Not registered yet?</h2>
//                                 <p>Register now and explore abundant opportunities!</p>
//                             </div>
//                         ) : (
//                             <div className="img__text">
//                                 <h2>Already have an account?</h2>
//                                 <p>Log in with your account, long time no see!</p>
//                             </div>
//                         )}
//                         <div class="img__btn" onClick={this.toggleSignUp}>
//                             {!this.state.isSignUp ? <span class="m--up">Sign Up</span> :
//                                 <span class="m--up">Log In</span>}
//                         </div>
//                     </div> */}
//                 </Screen >
                
//             </>
//         );
//     }
// }

// //table


// function ActiveProjectsTable() {
//   return (
//     <div>
//       <h2>Active projects</h2>
//       <table style={{ width: '100%', borderCollapse: 'collapse' }}>
//         <thead>
//           <tr>
//             <th style={{ border: '1px solid #ddd', padding: '8px' }}>Project name</th>
//             <th style={{ border: '1px solid #ddd', padding: '8px' }}>Priority</th>
//             <th style={{ border: '1px solid #ddd', padding: '8px' }}>Members</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style={{ border: '1px solid #ddd', padding: '8px' }}>Chameleon Website</td>
//             <td style={{ border: '1px solid #ddd', padding: '8px', color: 'red' }}>High</td>
//             <td style={{ border: '1px solid #ddd', padding: '8px' }}>member list</td>
//           </tr>
//           <tr>
//             <td style={{ border: '1px solid #ddd', padding: '8px' }}>Project name</td>
//             <td style={{ border: '1px solid #ddd', padding: '8px' }}>Priority</td>
//             <td style={{ border: '1px solid #ddd', padding: '8px' }}>Members</td>
//           </tr>
//           <tr>
//             <td style={{ border: '1px solid #ddd', padding: '8px' }}>Project name</td>
//             <td style={{ border: '1px solid #ddd', padding: '8px' }}>Priority</td>
//             <td style={{ border: '1px solid #ddd', padding: '8px' }}>Members</td>
//           </tr>
//           <tr>
//             <td style={{ border: '1px solid #ddd', padding: '8px' }}>Project name</td>
//             <td style={{ border: '1px solid #ddd', padding: '8px' }}>Priority</td>
//             <td style={{ border: '1px solid #ddd', padding: '8px' }}>Members</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default ActiveProjectsTable;
// //export default Login;





function App() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="/Footer/Logoo.png" alt="Chameleon Logo" className="logo" />
          <nav className="navbar">
            <a href="/">HOME</a>
            <a href="/projects">PROJECTS</a>
            <a href="/news">NEWS AND INSIGHT</a>
            <a href="/about">ABOUT</a>
            <a href="/contact">CONTACT</a>
            <a href="/support">SUPPORT</a>
            <a href="/resources">RESOURCES</a>
            <a href="/login">LOGIN</a>
          </nav>
        </header>
  
        <main className="App-main">
          <div className="projects-table">
            <h2>Active projects</h2>
            <table>
              <thead>
                <tr>
                  <th>Project name</th>
                  <th>Priority</th>
                  <th>Members</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Chameleon Website</td>
                  <td style={{ color: 'red', fontWeight: 'bold' }}>High</td>
                  <td>member list</td>
                </tr>
                <tr>
                  <td>Project name</td>
                  <td>Priority</td>
                  <td>Members</td>
                </tr>
                <tr>
                  <td>Project name</td>
                  <td>Priority</td>
                  <td>Members</td>
                </tr>
                <tr>
                  <td>Project name</td>
                  <td>Priority</td>
                  <td>Members</td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
  
        <footer className="App-footer">
          <div className="footer-content">
          <img src="/Footer/deakin.png" alt="Chameleon Logo" className="footer-logo" />
            <p>
              © 2023 Chameleon Website by Chameleon | All Rights Reserved | Powered by Deakin University
            </p>
            <div className="social-icons">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/Footer/insta.png" alt="Instagram" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/Footer/facebook.png" alt="Facebook" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="/Footer/twitter.png" alt="Twitter" />
              </a>
              <a href="mailto:support@example.com">
              <img src="/Footer/Mail.png" alt="Email" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
  
  export default App;

>>>>>>> 078b383426292b2fdffbd907f9f9dfca91fdc0ad