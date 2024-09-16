<<<<<<< Updated upstream
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

import React, { Component, useState } from 'react';
import './signup.css';
import Screen from '../../components/app/Screen';
import { Redirect, useHistory } from 'react-router-dom/cjs/react-router-dom.min';

class SignUp extends Component {
    state = {
        name: '',
        fname: '', //
        lname: '',
        role: '',
        project: '', 
        phone: '',
        github: '', // added for future backend implementations
=======
import React, { Component } from 'react';
import './signup.css';
import Screen from '../../components/app/Screen';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { auth } from '../utils/firebase';
import { GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider, signInWithPopup } from 'firebase/auth';

class SignUp extends Component {
    state = {
>>>>>>> Stashed changes
        email: '',
        password: '',
        confirmPassword: '',
        showToast: false,
        toastMessage: '',
        isSignUp: true,
<<<<<<< Updated upstream
        isAuthenticated:false,
        rememberMe: false,
        errorMessage: '',  // password validation
        lowerValidated: false,
        upperValidated: false,
        numberValidated: false,
        specialValidated: false,
        lengthValidated: false,
        passwordValidated: false //
=======
        isAuthenticated: false,
        rememberMe: false
>>>>>>> Stashed changes
    };

    displayToast = (message) => {
        this.setState({ showToast: true, toastMessage: message });

        setTimeout(() => {
            this.setState({ showToast: false });
        }, 5000);
    };

    handleExternalSignUp = (service) => {
        let provider;

        switch (service) {
            case 'Google':
                provider = new GoogleAuthProvider();
                break;
            case 'Facebook':
                provider = new FacebookAuthProvider();
                break;
            case 'GitHub':
                provider = new GithubAuthProvider();
                break;
            default:
                return;
        }

        signInWithPopup(auth, provider)
            .then((result) => {
                this.displayToast(`Sign up with ${service} successful!`);
                this.setState({ isAuthenticated: true });
                sessionStorage.setItem('status', 'logged in');
                if (this.state.rememberMe) {
                    localStorage.setItem("rememberMe", "true");
                } else {
                    localStorage.removeItem("rememberMe");
                }
            })
            .catch((error) => {
                console.error(`Error during ${service} sign-up:`, error);
                this.displayToast(`Sign up with ${service} failed. Please try again.`);
            });
    };

    handleSubmitSignUp = async (event) => {
        event.preventDefault();
        const { email, password, confirmPassword } = this.state;
<<<<<<< Updated upstream
        // implement password validation here
        if (password !== confirmPassword) {
            this.setState({ showToast: true, toastMessage: 'Passwords do not match!' });
            alert('Passwords do not match!');
            console.log("Passwords do not match!"); // <-- alert bug -- fixed
            return; // Stop the form submission if passwords do not match
        }
        // implement other validations here
        if (!this.state.passwordValidated) {
            this.setState({ showToast: true, toastMessage: 'Password doesn\'t meet the requirements' });
            return; // Stop the form submission if passwords do not match
        }
        else {
            try {
                const response = await fetch('http://localhost:3002/auth/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email, password })
                });
                const data = await response.json();
                this.setState({ showToast: true, toastMessage: 'Sign up successful!', email: '', password: '', confirmPassword: '' });
=======

        // Front-end validation before making a request to the backend
        if (password !== confirmPassword) {
            this.displayToast('Passwords do not match!');
            return;
        }

        if (password.length < 8) {
            this.displayToast('Password must be at least 8 characters long');
            return;
        }

        if (!/[A-Z]/.test(password)) {
            this.displayToast('Password must contain at least one uppercase letter');
            return;
        }

        if (!/[0-9]/.test(password)) {
            this.displayToast('Password must contain at least one number');
            return;
        }

        if (!/[@$!%*?&#]/.test(password)) {
            this.displayToast('Password must contain at least one special character');
            return;
        }

        try {
            const response = await fetch('http://localhost:3002/auth/signup', {  // Ensure to match the backend port
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password })
            });
            const data = await response.json();
>>>>>>> Stashed changes

                if (!response.ok) {
                    const errorMessage = data.error === "Email already exists"
                        ? "An account with this email already exists. Please use a different email or log in."
                        : data.error || 'An unknown error occurred during sign up.';
                    alert('An account with this email already exists. Please use a different email or log in.');
                    console.log("An account with this email already exists. Please use a different email or log in."); // <-- alert bug
                    throw new Error(errorMessage);
                }
                this.displayToast('One Step! Please verify your email now!');
                this.setState({ email: '', password: '', confirmPassword: '', isSignUp:false });
                // Redirect or perform other actions
            } catch (error) {
                this.displayToast(error.message);
            }
<<<<<<< Updated upstream
=======

            this.displayToast('Sign up successful! Please verify your email.');
            this.setState({ email: '', password: '', confirmPassword: '', isSignUp: false });
        } catch (error) {
            this.displayToast(error.message);
>>>>>>> Stashed changes
        }
    };

    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    toggleSignUp = () => {
        this.setState(prevState => ({ isSignUp: !prevState.isSignUp }));
    };

    toggleRememberMe = () => {
        this.setState(prevState => ({ rememberMe: !prevState.rememberMe }));
    };

<<<<<<< Updated upstream
    // Dynamic password validation
    handleErrorMessage = (message) => {
        this.setState({ errorMessage: message});
    }

    setLowerValidated = (bool) => {
        this.setState({lowerValidated : bool});
    }

    setUpperValidated = (bool) => {
        this.setState({ upperValidated: bool});
    }

    setNumberValidated = (bool) => {
        this.setState({ numberValidated: bool});
    }

    setSpecialValidated = (bool) => {
        this.setState({ specialValidated: bool});
    }

    setLengthValidated = (bool) => {
        this.setState({ lengthValidated: bool});
    }

    setPasswordValidated = (bool) => {
        this.setState({ passwordValidated: bool});
    }

    handlePassword = (value) => {
        let new_pass = value;
        const lower = new RegExp('(?=.*[a-z])');
        const upper = new RegExp('(?=.*[A-Z])');
        const number = new RegExp('(?=.*[0-9])');
        const special = new RegExp('(?=.*[!@#\$%\^&\*])');
        const length = new RegExp('(?=.{8,})')
        if(lower.test(value)){
            this.setLowerValidated(true);
        }
        else{
            this.setLowerValidated(false);
        }
        if(upper.test(value)){
            this.setUpperValidated(true);
        }
        else{
            this.setUpperValidated(false);
        }
        if(number.test(value)){
            this.setNumberValidated(true);
        }
        else{
            this.setNumberValidated(false);
        }
        if(special.test(value)){
            this.setSpecialValidated(true);
        }
        else{
            this.setSpecialValidated(false);
        }
        if(length.test(value)){
            this.setLengthValidated(true);
        }
        else{
            this.setLengthValidated(false);
        }

        if (this.state.lowerValidated && 
            this.state.upperValidated &&
            this.state.numberValidated &&
            this.state.specialValidated &&
            this.state.lengthValidated
        ) 
        {
            this.state.passwordValidated = true;
        }
        
        this.state.password = new_pass;
    }

    render () {

        const { 
            fname,
            lname,
            role,
            project,
            phone,
            github,
            email, 
            password, 
            isSignUp, 
            showToast, 
            toastMessage, 
            isAuthenticated, 
            rememberMe,
            errorMessage,
            lowerValidated,
            upperValidated,
            numberValidated,
            specialValidated,
            lengthValidated,
            passwordValidated
        } = this.state;
=======
    render() {
        const { email, password, confirmPassword, showToast, toastMessage, isAuthenticated } = this.state;

>>>>>>> Stashed changes
        return (
            <Screen>
                {isAuthenticated && <Redirect to='/home' />}
                <div className='centered-container'>
                    <div className='container_2'>
                        <div className={`dowebok ${this.state.isSignUp ? 's--signup' : ''}`}>
                            {showToast && (
                                <div className="toast-message">
                                    {toastMessage}
                                </div>
                            )}
                            <div className="form sign-in">
                                <h2>Welcome Back</h2>
                                <form onSubmit={this.handleSubmitSignUp}>
                                    <label>
                                        <span>Email</span>
                                        <input
                                            type="email"
                                            name="email"
                                            value={email}
                                            onChange={this.handleInputChange}
                                            required
                                        />
                                    </label>
                                    <label>
                                        <span>Password</span>
                                        <input
                                            type="password"
                                            name="password"
                                            value={password}
                                            onChange={this.handleInputChange}
                                            required
                                        />
                                    </label>
                                    <label>
                                        <span>Confirm Password</span>
                                        <input
                                            type="password"
                                            name="confirmPassword"
                                            value={confirmPassword}
                                            onChange={this.handleInputChange}
                                            required
                                        />
                                    </label>
                                    <button type="submit" className="submit signin-up-button">Sign Up</button>
                                </form>
                                <div className='bottom-box'>
                                    <svg
                                        type="button"
                                        onClick={() => this.handleExternalSignUp('Facebook')}
                                        className="icon"
                                        viewBox="0 0 1026 1024"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="40"
                                        height="40">
                                        {/* SVG Path for Facebook */}
                                    </svg>
                                    <div className='width5'></div>
                                    <svg
                                        type="button"
                                        onClick={() => this.handleExternalSignUp('Google')}
                                        className="icon"
                                        viewBox="0 0 1024 1024"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="40"
                                        height="40">
                                        {/* SVG Path for Google */}
                                    </svg>
                                </div>
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
<<<<<<< Updated upstream
                                    <div class="img__btn" onClick={this.toggleSignUp}>
                                        <span class="m--up">Sign Up</span>
                                        <span class="m--in">Log In</span>
                                    </div>
                                </div>
                                <div class="form sign-up">
                                    <h2>Sign Up Now</h2>
                                    <form onSubmit={this.handleSubmitSignUp}>
                                        <label>
                                            <span>First Name</span>
                                            <input type="text" name="fname" value={fname} onChange={this.handleInputChange} required/>
                                        </label>
                                        <label>
                                            <span>Last Name</span>
                                            <input type="text" name="lname" value={lname} onChange={this.handleInputChange} required/>
                                        </label>
                                        <label>
                                            <span>Role</span>
                                            <input type="text" name="role" value={role} onChange={this.handleInputChange} required/>
                                        </label>
                                        <label>
                                            <span>Project</span>
                                            <input type="text" name="project" value={project} onChange={this.handleInputChange} required/>
                                        </label>
                                        <label>
                                            <span>Phone</span>
                                            <input type="tel" name="phone" value={phone} 
                                                placeholder="04-1234-5678" 
                                                pattern="[0-9]{2}-[0-9]{4}-[0-9]{4}" 
                                                onChange={this.handleInputChange} required/>
                                        </label>
                                        <label>
                                            <span>GitHub Link</span>
                                            <input type="text" name="github" value={github} onChange={this.handleInputChange} required/>
                                        </label>
                                        <label>
                                            <span>Email</span>
                                            <input type="email" name="email" value={email} onChange={this.handleInputChange} required/>
                                        </label>
                                        <label>
                                            <span>Password</span>
                                            {/* <input type="password" name="password" value={password} onChange={this.handleInputChange} required/> */}
                                            <input type="password" name="password" onChange={(e) => this.handlePassword(e.target.value)} required/>
                                        </label>
                                        {/* style = {{ color: "red" }} */}
                                        <label>
                                            <span>Confirm Password</span>
                                            <input type="password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleInputChange} required />
                                        </label>
                                        <div class="centered-container-2">
                                            <div class="password-checklist">
                                                {lowerValidated ? 
                                                    <label style = {{ color: "green" }}> Lower case letter included </label> :
                                                    <label style = {{ color: "rgb(242, 72, 72)" }}> Lower case letter not included </label>
                                                } 
                                                {upperValidated ? 
                                                    <label style = {{ color: "green" }}> Upper case letter included </label> :
                                                    <label style = {{ color: "rgb(242, 72, 72)" }}> Upper case letter not included </label>
                                                } 
                                                {numberValidated ? 
                                                    <label style = {{ color: "green" }}> Number included </label> :
                                                    <label style = {{ color: "rgb(242, 72, 72)" }}> Number not included </label>
                                                }
                                                {specialValidated ? 
                                                    <label style = {{ color: "green" }}> Special character included </label> :
                                                    <label style = {{ color: "rgb(242, 72, 72)" }}> Special character not included </label>
                                                } 
                                                {lengthValidated ? 
                                                    <label style = {{ color: "green" }}> Password length is 8 characters or more </label> :
                                                    <label style = {{ color: "rgb(242, 72, 72)" }}> Password length is not 8 characters </label>
                                                } 
                                            </div>
                                        </div>
                                        <button type="submit" class="submit signin-up-button" href="/signup">Sign Up</button>
                                    </form>
=======
                                    <div className="img__btn" onClick={this.toggleSignUp}>
                                        <span className="m--up">Sign Up</span>
                                        <span className="m--in">Log In</span>
                                    </div>
>>>>>>> Stashed changes
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
