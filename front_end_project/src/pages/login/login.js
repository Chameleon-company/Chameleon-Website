import React, { Component } from 'react';
import './login.css'; // Make sure the path is correct
import Screen from '../../components/app/Screen';

class Login extends Component {
  
    state = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        showToast: false,
        toastMessage: '',
        isSignUp: false,
    };

    displayToast = (message) => {
        this.setState({ showToast: true, toastMessage: message });
        
        setTimeout(() => {
            this.setState({ showToast: false });
        }, 5000);  
    };

    handleExternalSignIn = (service) => {
        console.log(`Signing in with ${service}`);  // Implement sign-in logic here 
    };

    handleExternalSignUp = (service) => {
        console.log(`Signing up with ${service}`);  // Implement sign-up logic here 
    };

    handleSubmitSignIn = async (event) => {
        event.preventDefault();
        const { email, password } = this.state;

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
            if (!response.ok){
                const errorMessage = data.error === "Authentication failed"
                    ? "Authentication failed. Please check your username and password and try again."
                    : data.error || 'An unknown error occurred.';
                throw new Error(errorMessage);
            } 
            
            this.displayToast( 'Sign in successful!');
            // Redirect or perform other actions
        } catch (error) {
            this.displayToast( error.message);
        }
    };

    
    handleSubmitSignUp = async (event) => {
        event.preventDefault();
        const { email, password, confirmPassword  } = this.state;
        if (password !== confirmPassword) {
            this.setState({ showToast: true, toastMessage: 'Passwords do not match!' });
            return; // Stop the form submission if passwords do not match
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
                    ? "An account with this email already exists. Please use a different email or log in."
                    : data.error || 'An unknown error occurred during sign up.';
                throw new Error(errorMessage);
            }
            this.displayToast('One Step! Please verify your email now!');             
            this.setState({ email: '', password: '', confirmPassword: '' });
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

    toggleSignUp = () => {
        this.setState(prevState => ({ isSignUp: !prevState.isSignUp }));
    };

    render() {
        
        const { email, password, isSignUp, showToast, toastMessage } = this.state;
        return (
            <Screen>
                <div className='login-centered-container'>
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
                                    <p className="forgot-pass"><a href="/reset">Forgot your password?</a></p>
                                    <button type="submit" className="submit signin-up-button">Log In</button>
                                    <div className='bottom-box'>
                                        <svg t="1712763892469" type="button" onClick={() => this.handleExternalSignUp('Facebook')} className="icon" viewBox="0 0 1026 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
                                            <g id="SVGRepo_bgCarrier" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                <g id="SVGRepo_tracerCarrier"></g>
                                                <g id="SVGRepo_iconCarrier">
                                                    <path d="M486.5,0 C755.719,0 972.442,216.724 972.442,486.5 C972.442,666.955 878.653,831.097 686.791,929.426 L686.791,593.469 L540.1,593.469 L540.1,486.5 L686.791,486.5 L686.791,372.29 C686.791,186.744 790.309,85.792 918.097,85.792 C957.088,85.792 992.77,86.555 1026.666,87.54 L1026.666,244.612 L928.836,244.612 C843.378,244.612 825.5,275.375 825.5,327.121 L825.5,486.5 L1031.319,486.5 L994.417,593.469 L825.5,593.469 L825.5,929.426 C635.34,840.76 486.5,679.378 486.5,486.5" id="Shape" fill="#1877F2"></path>
                                                    <polygon id="Shape" fill="#FFFFFF" points="825.5 486.5 825.5 327.121 686.791 327.121 686.791 244.612 1026.666 244.612 1026.666 87.54 918.097 85.792 918.097 0 825.5 0"></polygon>
                                                </g>
                                            </g>
                                        </svg>
                                        <svg t="1712763976440" type="button" onClick={() => this.handleExternalSignUp('Google')} className="icon" viewBox="0 0 1026 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
                                            <g id="SVGRepo_bgCarrier" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                <g id="SVGRepo_tracerCarrier"></g>
                                                <g id="SVGRepo_iconCarrier">
                                                    <path d="M486.5,0 C755.719,0 972.442,216.724 972.442,486.5 C972.442,666.955 878.653,831.097 686.791,929.426 L686.791,593.469 L540.1,593.469 L540.1,486.5 L686.791,486.5 L686.791,372.29 C686.791,186.744 790.309,85.792 918.097,85.792 C957.088,85.792 992.77,86.555 1026.666,87.54 L1026.666,244.612 L928.836,244.612 C843.378,244.612 825.5,275.375 825.5,327.121 L825.5,486.5 L1031.319,486.5 L994.417,593.469 L825.5,593.469 L825.5,929.426 C635.34,840.76 486.5,679.378 486.5,486.5" id="Shape" fill="#4285F4"></path>
                                                    <polygon id="Shape" fill="#FFFFFF" points="825.5 486.5 825.5 327.121 686.791 327.121 686.791 244.612 1026.666 244.612 1026.666 87.54 918.097 85.792 918.097 0 825.5 0"></polygon>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                </form>
                                <p className="signup">Don't have an account? <a href="#0" onClick={this.toggleSignUp}>Sign up</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </Screen>
        );
    }
}

export default Login;
