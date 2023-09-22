import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import React, { Component } from 'react';
import './login.css'

class Login extends Component {
  
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleLogin = async () => {
    const { email, password } = this.state;

    try {
      const response = await fetch('http://localhost:3001/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();

        // Assuming the backend sends a user object in the response
        const user = data.user;
        console.log(user);
        this.props.onLogin(user);
        // Save the user data in your React state or context
        // You can also set up user authentication here

        window.alert('User logged in:', user);
      } else {
        window.alert('Login failed:', response.status, response.statusText);
        // Handle login failure, show an error message, etc.
      }
    } catch (error) {
      window.alert('Login failed:', error);
      // Handle login failure, show an error message, etc.
    }
  };
  render() {
    return (

      <Container>
        <Row>
          <h1>Login</h1>
          <Col xs={12}>
            <div className='loginBox' >
              <div className='loginContainer'>
                <div className="login-part">
                  <img className="loginImg" src={require('../../pages/login/brandLogo.png')} />
                  <h1 className="wel">Welcome back,</h1>

                  <h1 className="loginDetails">Email</h1>
                  <input className="cred"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleInputChange} />

                  <h1 className="loginDetails">Password</h1>
                  <input className="cred" type="password"
                    name="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleInputChange} />

                  <button className='rounded-button-01' onClick={this.handleLogin}>Login</button>
                  <Nav.Link href="/signup">
                    <button className='rounded-button-02'>Sign Up</button>
                  </Nav.Link>

                  <Nav.Link href="/forgot">
                    <button className='rounded-button-02'>Forgot password</button>
                  </Nav.Link>
                  ``
                  <div>
                    <button className='mediaButton'>

                      <img src={require('../../pages/login/linkedin.png')} />
                    </button>
                    <button className='mediaButton'>
                      <img src={require('../../pages/login/google.png')} />
                    </button>
                    <button className='mediaButton'>
                      <img src={require('../../pages/login/microsoft.png')} />
                    </button>
                  </div>
                </div>
                <div className='image-part'>
                  <picture className='imgMax'>
                    <img className src={require('../../pages/login/forest.jpg')} />

                  </picture>
                </div>
              </div>

            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;


// --------------------------------------------
// LOGIN CODE BRIEF START / EXAMPLE FOR BACKEND
// ---------------------------------------------

// import React, { Component } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import { Outlet, Link } from 'react-router-dom'
// import { signInWithGooglePopup, createUserDocFromAuth, signinAuthUserWithEmailAndPassword } from './utils/firebase'
// import { useNavigate } from 'react-router-dom';
// import './login.css'

// const Login = (props) => {

//   const nanvigate = useNavigate();

//   const logGoogleUser = async () => {
//     const { user } = await signInWithGooglePopup();
//     const userDocRef = await createUserDocFromAuth(user)
//   }

//   const [contact, setContact] = useState({
//     email: '',
//     password: '',
//   })

//   const { email, password } = contact

//   const handleChange = (event) => {

//     const { name, value } = event.target
//     setContact((preValue) => {
//       return {
//         ...preValue,
//         [name]: value
//       }
//     })
//   }

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const { user } = await signinAuthUserWithEmailAndPassword(username, password);
//       await createUserDocFromAuth(user, { email });
//       // navigate("/logout")
//     }
//     catch (error) {
//       console.log('error', error.message)
//     }
//   }


// }

// // class Login extends Component\
// // function Login() {
//   // render() {
//   return (

//     <Container>
//       <Row>
//         <h1>Login </h1>
//         <Col xs={12}>
//           <div className="loginBox">
//             <div className="loginContainer">
//               <form className="loginForm">


//                 <img className="loginImg" src={require('./brandLogo.png')} />

//                 <h1 className="loginDetails">
//                   Email
//                 </h1>

//                 <input className="cred"
//                   type="email"
//                   placeHolder="Deakin Email"
//                   onChange={handleChange}
//                   value={contact.email} />

//                 <h1 className="loginDetails">Password</h1>
//                 <input className="cred"
//                   type="Password"
//                   placeHolder="Password"
//                   id="pwd"
//                   minlength="16"
//                   onChange={handleChange}
//                   value={contact.password}
//                 />

//                 <div className="logBtn">
//                   <button onClick={handleSubmit}>
//                     Login
//                   </button>
//                 </div>

//                 <div className="linkAlign">
//                   <a className="userPass" href="#"> Reset Username / Password?</a>
//                   <button onClick={logGoogleUser}>Log in with Google</button>
//                 </div>

//               </form>

//             </div>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
//   // }
// // }

// export default Login