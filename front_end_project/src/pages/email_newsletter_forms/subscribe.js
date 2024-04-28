import React, { useState } from 'react';
import './subscribe.css';
import Chameleon_Logo from "./images/Chameleon_Logo.png";

function NewsSignupForm() {
    const [email, setEmail] = useState('');
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

    const subscribe = (event) => {
        event.preventDefault();
        // Placeholder for the fetch request code
        // Simulate API call response
        setShowToast(true);
        setToastMessage('Subscription to the Chameleon newsletter successful!');
    };

    return (
        <div className="news-signup-container">
            <div className="form-box">
                <div className="text-center">
                    <img src={Chameleon_Logo} className='w-[225px] h-[225px] block my-0 mx-auto' alt="Logo" />
                </div>
                <div className="form-section">
                    <p className='text-xl font-bold'>Sign up to the Chameleon newsletter!</p>
                    <p>Enter your email address in the field below to hear about our latest innovations.</p>
                    <input
                        className="input-email"
                        type="email"
                        required
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <button
                        className="submit-button"
                        onClick={subscribe}
                    >
                        Subscribe
                    </button>
                    {showToast && <p>{toastMessage}</p>}
                </div>
            </div>
        </div>
    );
}

export default NewsSignupForm;
