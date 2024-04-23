import React, { Component } from 'react';
import './unsubscribe.css';
import Chameleon_Logo from "./images/Chameleon_Logo.png";

class NewsUnsubForm extends Component {
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

	unsubscribe = (event) => {
		event.preventDefault();
		// Simulating API call response
		this.setState({
			showToast: true,
			toastMessage: 'You have unsubscribed successfully, we hope to see you again!'
		});
	}

	render() {
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
							value={this.state.email}
							onChange={this.setEmail}
						/>
						<button
							className="unsubscribe-button"
							onClick={this.unsubscribe}
						>
							Unsubscribe
						</button>
						{this.state.showToast && <p>{this.state.toastMessage}</p>}
					</div>
				</div>
			</div>
		);
	}
}

export default NewsUnsubForm;