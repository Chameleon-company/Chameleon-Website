// --------------------------------------------
// SIGNUP CODE BRIEF START / EXAMPLE FOR BACKEND
// ---------------------------------------------

// import { Container, Row } from 'react-bootstrap';
// import React, { useState, Component } from 'react';
// import { Outlet, Link } from 'react-router-dom'
// import { createAuthUserWithEmailAndPassword, createUserDocFromAuth } from './utils/firebase';
// import { useNavigate } from 'react-router-dom';
// import heading from './images/bg.jpg'
// import logo from './images/logo.png'
// import goo from './images/goo.png'
// import mic from './images/mic.png'
// import './signup.css'

// function Signup() {

//     const Signup = (props) => {
//         const navigate = useNavigate();

//         const [contact, setContact] = useState({
//             fullname: '',
//             email: '',
//             password: '',
//             login: ''
//         })

//         const { fullname, email, password, login } = contact;

//         const handleChange = (event) => {
//             const { name, value } = event.target
//             setContact((preValue) => {
//                 return {
//                     ...preValue,
//                     [name]: value
//                 }
//             })
//         }

//         const handleSubmit = async (event) => {
//             event.preventDefault();

//             if (password !== login) {
//                 alert('passwords not matching!')
//                 return;
//             }

//             try {
//                 const { user } = await createAuthUserWithEmailAndPassword(email, password);
//                 await createUserDocFromAuth(user, { fullname });
//                 navigate("/login")
//             }
//             catch (error) {
//                 console.log('error in creating user', error)
//             }
//         }

//         return (
//             <Container>
//                 <Row>
//                     {/* <div className = "greeenBg"> */}
//                     <div className='chamHeading'>
//                         <img src={logo} width="100" height="100" />
//                         <h>CHAMELEON</h>
//                     </div>
//                     <div className='getStarted'>
//                         Get Started
//                     </div>
//                     {/* <img src ={heading} width="auto" height="auto"></img> */}

//                     {/* </div> */}

//                     <div className='google'>
//                         Log in with Google
//                         <img src={goo} width="34" height="34" />
//                     </div>

//                     <div className='microsoft'>
//                         Log in with Microsoft
//                         <img src={mic} width="34" height="34" />
//                     </div>

//                     <div className="fullname">
//                         <label>Name:*</label>
//                         <input name="Name"
//                             onChange={handleChange}
//                             value={contact.fullname} />
//                     </div>

//                     <div className="emailAdd">
//                         <label>Email:*</label>
//                         <input name="email"
//                             onChange={handleChange}
//                             value={contact.email} />
//                     </div>

//                     <div className="password">
//                         <label>Password:*</label>
//                         <input
//                             type="password"
//                             name="password"
//                             onChange={handleChange}
//                             value={contact.password} />
//                     </div>

//                     <div className="create">
//                         <button onClick={handleSubmit}>
//                             Login
//                         </button>
//                     </div>
//                     <button className="make" hred="#home">Create Account</button>

//                     {/* <div className='inputSign'>
//                     <p className="name">NAME</p>

//                     <p className="email">EMAIL ADDRESS</p>

//                     <p className="pass">PASSWORD</p>

//                     <p className="log">LOGIN</p>
//                 </div> */}

//                     <div className='accSign'>
//                         <p className="ac">Have an account? Sign in</p>
//                     </div>

//                 </Row>
//             </Container>
//         )
//     }
// }


//     export default Signup;

import React, { Component } from 'react';
import './signup.css';
import Screen from '../../components/app/Screen';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

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
        this.setState({ [event.target.name]: event.target.value, showToast: false});
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

        const { email, password, isSignUp, showToast, toastMessage, isAuthenticated, rememberMe } = this.state;
        return (
            <Screen>
                {isAuthenticated && <Redirect to='/home' />}
                <div className='centered-container'>
                    <div className='container_2'>
                        <div className={`dowebok ${isSignUp ? 's--signup' : ''}`}>
                            <div class="form sign-in">
                                <h2>Welcome Back</h2>
                                <form onSubmit={this.handleSubmitSignIn}>
                                    <label>Email<input type="email" 
                                    name="email" 
                                    value={email} 
                                    onChange={this.handleInputChange} />
                                    </label>
                                    <label>Password<input 
                                    type="password" 
                                    name="password" 
                                    value={password} 
                                    onChange={this.handleInputChange} />
                                    </label>
                                    {showToast && (<div className="toast-message">{toastMessage} </div>)}   {/* Show toast message */}
                                    <button type="button submit" class="submit signin-up-button">Log In</button>
                                    <div className='bottom-box'>
                                        <div>
                                            <label className='text-sm'> <input type="checkbox" checked={rememberMe} onChange={this.toggleRememberMe}/>Remember Me</label>
                                            <p className="forgot-pass"><a href="/reset">Forgot your password?</a></p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="sub-cont">
                                <div class="img">
                                    <div class="img__text m--up">
                                        <h2>Not registered yet?</h2>
                                        <p>Register now and explore abundant opportunities!</p>
                                    </div>
                                    <div class="img__text m--in">
                                        <h2>Already have an account?</h2>
                                        <p>Log in with your account, long time no see!</p>
                                    </div>
                                    <div class="img__btn" onClick={this.toggleSignUp}>
                                        <span class="m--up">Sign Up</span>
                                        <span class="m--in">Log In</span>
                                    </div>
                                </div>
                                <div class="form sign-up">
                                    <h2>Sign Up Now</h2>
                                    <form onSubmit={this.handleSubmitSignUp}>
                                        <label>Email<input 
                                        type="email" 
                                        name="email" 
                                        value={email} 
                                        onChange={this.handleInputChange} /></label>       
                                        <label>Password<input 
                                        type="password" 
                                        name="password" 
                                        value={password} 
                                        onChange={this.handleInputChange} /></label>
                                        <p className='password-requirement' onChange={this.handleInputChange}>(Requires at least 6 characters, including an uppercase letter, a lowercase letter, numbers, and special characters [!, @, $, etc.].)</p>
                                        <label>Confirm Password<input 
                                        type="password" 
                                        name="confirmPassword" 
                                        value={this.state.confirmPassword} 
                                        onChange={this.handleInputChange} required /></label>
                                        {showToast && (<div className="toast-message">{toastMessage} </div>)}
                                        <button type="submit" class="submit signin-up-button" href="/signup">Sign Up</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        </div>
                </div>
            </Screen>
        );
    }
}


export default SignUp;