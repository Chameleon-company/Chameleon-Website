import React, { useState } from 'react';
import './unsubscribe.css';
import Chameleon_Logo from "./images/Chameleon_Logo.png";

function NewsUnsubForm() {
    const [email, setEmail] = useState('');
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

    const unsubscribe = (event) => {
        event.preventDefault();
        // Simulating API call response
        setShowToast(true);
        setToastMessage('You have unsubscribed successfully, we hope to see you again!');
    };

    return (
        <div className="news-unsub-container">
            <div className="form-container">
                <div className="text-center">
                    <img src={Chameleon_Logo} className='w-[225px] h-[225px] block m-auto' alt="Logo" />
                </div>
                <div className="form-section">
                    <p className='text-xl font-bold'>Unsubscribing?</p>
                    <p>Enter your email address in the field below to stop receiving Chameleon newsletters. You'll still be part of the mailing list, but you won't receive any more emails.</p>
                    <input
                        className="input-email"
                        type="email"
                        required
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <button
                        className="unsubscribe-button"
                        onClick={unsubscribe}
                    >
                        Unsubscribe
                    </button>
                    {showToast && <p>{toastMessage}</p>}
                </div>
            </div>
        </div>
    );
}

export default NewsUnsubForm;
