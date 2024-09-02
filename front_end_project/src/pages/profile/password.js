import React, { useState, useEffect } from 'react';
import { changePassword } from '../../routes/user';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Password(props) {
    const [passwords, setPasswords] = useState({
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: ''
    });
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const validatePassword = (password) => {
        
        if (password.length < 8 ||     // Password must be at least 8 characters long.
            !/[A-Z]/.test(password) || // Password must contain at least one uppercase letter.
            !/[a-z]/.test(password) || // Password must contain at least one lowercase letter.
            !/[0-9]/.test(password) || // Password must contain at least one number.
            !/[!@#$%^&*]/.test(password)//Password must contain at least one special character.
        ) {
          setError('Password must contain uppercase, lowercase, number and special character and at least 8 character long.');
        }
      };

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
        validatePassword(passwords.newPassword);
        
        error && toast.error(error);
        if (error) return; // Prevent submission if there are errors

        const result = await changePassword(passwords.currentPassword, passwords.newPassword);

        if (result.success) {
            setSuccessMessage('Password changed successfully!');
            setPasswords({
                currentPassword: '',
                newPassword: '',
                confirmNewPassword: ''
            });
            toast.success(successMessage);
        } else {
            setError(result.message || 'An unknown error occurred.');
           error && toast.error(error); 
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
                </div>
                {successMessage && <div className="mt-3 alert alert-success">{successMessage}</div>}
                <button type="submit" className="btn btn-success mt-3">Submit</button>
            </form>
        </>
    );
}

export default Password;
