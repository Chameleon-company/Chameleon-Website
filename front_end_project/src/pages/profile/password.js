import React, { useState } from 'react';

function Password (props) {

    const [passwords, setPasswords] = useState({
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: ''
    });
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPasswords(prevPasswords => ({ ...prevPasswords, [name]: value }));

        // Check if new password and confirm new password match
        if (name === 'confirmNewPassword') {
            if (passwords.newPassword && value !== passwords.newPassword) {
                setError('New password and confirm new password do not match.');
            } else {
                setError('');
            }
        }
    };

    return (
        <>
            <form className='p-5'>
                <h1>Change Password</h1>
                <div className="form-group mt-3">
                    <label htmlFor="current-password">Current Password</label>
                    <input type="password" className="form-control" id="current-password" onChange={handleChange} />
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="newPassword">New Password</label>
                    <input type="text" className="form-control" id="newPassword" name="newPassword" aria-describedby="passwordHelp" onChange={handleChange} />
                    {error && <small id="passwordHelp" className="form-text text-danger">{error}</small>}
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="confirmNewPassword">Confirm New Password</label>
                    <input type="text" className="form-control" id="confirmNewPassword" name="confirmNewPassword" aria-describedby="passwordHelp" onChange={handleChange} />
                    {error && <small id="passwordHelp" className="form-text text-danger">{error}</small>}
                </div>

                <button type="submit" className="btn btn-success mt-3">Submit</button>
            </form>
        </>
    );
}

export default Password;