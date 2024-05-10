import React from 'react';

function Footer() {
  return (
    <footer className="footer mt-5">
      <div className="container text-center">
        <div className="row">
          <div className="col col-6">
            <img
              alt="Company Logo"
              src={require('../../assets/logo.png')}
              className="img-fluid"
            />
            <h1>CHAMELEON</h1>
            <p>Striving to create a smarter world</p>
          </div>
          <div className="col col-3">
            <h5>Contact Us</h5>
            <p>Phone Number: +611111111</p>
            <p>Email: chameleon@gmail.com</p>
          </div>
          <div className="col col-3">
            <h5>JOIN OUR NEWSLETTER</h5>
            <div className="form-group">
              <div className="input-container">
                <input type="email" placeholder="Enter your email" className="form-control" />
                <p></p>
                <button
                  type="submit"
                  style={{ backgroundColor: 'orange', color: 'white' }}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        <p>&copy; CHAMELEON 2023</p>
      </div>
    </footer>
  );
}

export default Footer;
