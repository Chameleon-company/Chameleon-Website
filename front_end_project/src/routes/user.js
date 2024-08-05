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

