import axios from 'axios';

export const getUser = (id) => {
    axios.get('/user/:id', id).then().catch();
};

export const signOut = async () => {
    try {
        await axios.post('http://localhost:3002/auth/signout');
        console.log('Signed out successfully');
    } catch (error) {
        console.error('Error signing out:', error);
    }
};

export const changePassword = async (currentPassword, newPassword) => {
    try {
        const response = await axios.post('http://localhost:3002/auth/change-password', { // change API endpoint once implemented in backend
            currentPassword,
            newPassword
        });

        if (response.data.success) {
            console.log('Password has changed successfully');
            return { success: true };
        } else {
            return { success: false, message: response.data.message || 'Password change failed.' };
        }
    } catch (error) {
        console.error('Error changing password:', error);
        return { success: false, message: error.message || 'An unknown error occurred.' };
    }
};

