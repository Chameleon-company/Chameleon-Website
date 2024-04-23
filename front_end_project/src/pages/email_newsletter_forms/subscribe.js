import React, { Component } from 'react';
import './subscribe.css';
import Chameleon_Logo from "./images/Chameleon_Logo.png";

class NewsSignupForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			showToast: false,
			toastMessage: '',
		};
	}

	setEmail = (event) => {
		this.setState({ email: event.target.value });
	}

	subscribe = (event) => {
		event.preventDefault();
		// Placeholder for the fetch request code
		// Simulate API call response
		this.setState({
			showToast: true,
			toastMessage: 'Subscription to the Chameleon newsletter successful!'
		});
	}

	render() {
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
							value={this.state.email}
							onChange={this.setEmail}
						/>
						<button
							className="submit-button"
							onClick={this.subscribe}
						>
							Subscribe
						</button>
						{this.state.showToast && <p>{this.state.toastMessage}</p>}
					</div>
				</div>
			</div>
		);
	}
}

export default NewsSignupForm;