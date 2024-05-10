import React, { useState } from 'react';
import './remove.css';
import Chameleon_Logo from "./images/Chameleon_Logo.png";

function NewsRemoveForm() {
    const [email, setEmail] = useState('');
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

    const remove = (event) => {
        event.preventDefault();
        // Simulating API call response
        setShowToast(true);
        setToastMessage('You have removed your details successfully, we hope to see you again!');
    };

    return (
        <div className="news-remove-container">
            <div className="form-box">
                <div className="text-center">
                    <img src={Chameleon_Logo} style={{ width: 225, height: 225, display: 'block', margin: 'auto' }} alt="Logo" />
                </div>
                <div className="form-section">
                    <p style={{ fontSize: '20px', fontWeight: 'bold' }}>Completely remove your details</p>
                    <p>Enter your email address in the field below to completely remove your email address details from Chameleon mailing list. Your information will be removed from our servers.</p>
                    <input
                        className="input-email"
                        type="email"
                        required
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <button
                        className="remove-button"
                        onClick={remove}
                    >
                        Remove My Details
                    </button>
                    {showToast && <p>{toastMessage}</p>}
                </div>
            </div>
        </div>
    );
}

export default NewsRemoveForm;
