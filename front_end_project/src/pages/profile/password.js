import React, { useState } from 'react';
import { changePassword } from '../../routes/user';

function Password(props) {
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (error) return; // Prevent submission if there are errors

        const result = await changePassword(passwords.currentPassword, passwords.newPassword);

        if (result.success) {
            setSuccessMessage('Password changed successfully!');
            setPasswords({
                currentPassword: '',
                newPassword: '',
                confirmNewPassword: ''
            });
        } else {
            setError(result.message || 'An unknown error occurred.');
        }
    };

    return (
        <>
            <form className='p-5' onSubmit={handleSubmit}>
                <h1>Change Password</h1>
                <div className="form-group mt-3">
                    <label htmlFor="currentPassword">Current Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="currentPassword"
                        name="currentPassword"
                        value={passwords.currentPassword}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="newPassword">New Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="newPassword"
                        name="newPassword"
                        value={passwords.newPassword}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="confirmNewPassword">Confirm New Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="confirmNewPassword"
                        name="confirmNewPassword"
                        value={passwords.confirmNewPassword}
                        onChange={handleChange}
                    />
                    {error && <small id="passwordHelp" className="form-text text-danger">{error}</small>}
                </div>
                {successMessage && <div className="mt-3 alert alert-success">{successMessage}</div>}
                <button type="submit" className="btn btn-success mt-3">Submit</button>
            </form>
        </>
    );
}

export default Password;
