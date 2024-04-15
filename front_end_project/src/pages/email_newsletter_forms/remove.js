import React, { Component } from 'react';
import './remove.css';
import Chameleon_Logo from "./images/Chameleon_Logo.png";

class NewsRemoveForm extends Component {
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

	remove = (event) => {
		event.preventDefault();
		// Simulating API call response
		this.setState({
			showToast: true,
			toastMessage: 'You have removed your details successfully, we hope to see you again!'
		});
	}

	render() {
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
							value={this.state.email}
							onChange={this.setEmail}
						/>
						<button
							className="remove-button"
							onClick={this.remove}
						>
							Remove My Details
						</button>
						{this.state.showToast && <p>{this.state.toastMessage}</p>}
					</div>
				</div>
			</div>
		);
	}
}

export default NewsRemoveForm;