import * as React from 'react';
import Chameleon_Logo from "./images/Chameleon_Logo.png";
import {Redirect} from 'react-router-dom'
import Screen from '../../components/app/Screen';
class logOut extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            redirect: false,
            logout:false,
            showToast: false,
            toastMessage: '',
        };
    };

    displayToast = (message) => {
        this.setState({ showToast: true, toastMessage: message });
        
        setTimeout(() => {
            this.setState({ showToast: false });
        }, 5000);  
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:3002/auth/signout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({})
            });

            const data = await response.json();
            if (!response.ok) {
            const errorMessage = data.error || 'An unknown error occurred during sign up.';
            throw new Error(errorMessage);
            }
            this.displayToast( 'Sign out successful!');
            alert('Log out successfull!')
            this.setState({redirect:true});
            localStorage.removeItem("rememberMe"); 
            sessionStorage.removeItem('status');
    
        } catch (error) {
            this.displayToast(error.message);
        }
    };


    render(){
        const {redirect} = this.state
        return (
            <Screen>
                {redirect && <Redirect to='/login'/>}
                <div className="flex w-full h-screen bg-gradient-to-l from-slate-50 to-teal-200 " >
                    <div className="w-full flex items-center justify-center lg:w-1/2">
                    <div className='w-11/12 max-w-[700px] px-10 py-20 rounded-3xl bg-white border-2 border-emerald-300'>
                        <h1 className='text-4xl font-semibold'>Sign Out</h1>
                        <p className='font-medium text-lg text-gray-500 mt-4'>See you later!</p>
                        <div className='mt-8'>
                            <div className='mt-8 flex flex-col gap-y-4'>
                                <button 
                                    onClick={this.handleSubmit}
                                    className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-violet-500 rounded-xl text-white font-bold text-lg'>
                                    Sign Out Here!
                                </button>
                            </div>
                            <div className='mt-8 flex justify-center items-center'>
                                <p className='ml-2 font-medium text-base text-violet-500'>Return to <a href="/home">Home</a></p>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="hidden relative w-1/2 h-full lg:flex items-center justify-center ">
                        <img src={Chameleon_Logo} alt="Chameleon Logo" ></img>
                    </div>
                </div>
            </Screen>
        )
    };

}

export default logOut;