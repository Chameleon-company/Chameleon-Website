import * as React from 'react';
import Chameleon_Logo from "./images/Chameleon_Logo.png";
class resetPassword extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showToast: false,
            toastMessage: '',
            email:''
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
        const {email} = this.state;
        if(!email) {
            this.displayToast('Please enter your recovery email!');
            return;
        }
        if(email !== null){
            try {
                const response = await fetch('http://localhost:3002/auth/send-password-reset-email', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email })
                });
                const data = await response.json();
                if (!response.ok){
                    const errorMessage = data.error === "Email sent failed!"
                        ? "Failure. Please check your email and try again."
                        : data.error || 'An unknown error occurred.';
                    throw new Error(errorMessage);
                } 

                alert( 'Password reset email sent successful!');
                // Redirect or perform other actions
            } catch (error) {
                this.displayToast( error.message);
            }
        }
    };

    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render(){
        const {email} = this.state
        return (
            <div className="flex w-full h-screen bg-gradient-to-l from-slate-50 to-teal-200 " >
                <div className="w-full flex items-center justify-center lg:w-1/2">
                <div className='w-11/12 max-w-[700px] px-10 py-20 rounded-3xl bg-white border-2 border-emerald-300'>
                    <h1 className='text-4xl font-semibold'>Reset Password</h1>
                    <p className='font-medium text-lg text-gray-500 mt-4'>Please enter your email below!</p>
                    <div className='mt-8'>
                        <div className='flex flex-col'>
                            <label className='text-lg font-medium'>Email</label>
                            <input type="email" name="email" value={email} onChange={this.handleInputChange} placeholder='Enter your email here' className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'/>
                        </div>
    
                        <div className='mt-8 flex flex-col gap-y-4'>
                            <button 
                                onClick={this.handleSubmit}
                                className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-violet-500 rounded-xl text-white font-bold text-lg'>
                                Reset Password
                            </button>
                        </div>
                        <div className='mt-8 flex justify-center items-center'>
                            <p className='ml-2 font-medium text-base text-violet-500'>Already have an account? <a href="login">Sign in</a></p>
                        </div>
                    </div>
                </div>
                </div>
                <div className="hidden relative w-1/2 h-full lg:flex items-center justify-center ">
                    <img src={Chameleon_Logo} alt="Chameleon Logo" ></img>
                </div>
            </div>
        )
    };

}

export default resetPassword;