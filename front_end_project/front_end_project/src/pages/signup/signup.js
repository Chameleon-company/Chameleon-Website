// --------------------------------------------
// SIGNUP CODE BRIEF START / EXAMPLE FOR BACKEND
// ---------------------------------------------

// import { Container, Row } from 'react-bootstrap';
// import React, { useState, Component } from 'react';
// import { Outlet, Link } from 'react-router-dom'
// import { createAuthUserWithEmailAndPassword, createUserDocFromAuth } from './utils/firebase';
// import { useNavigate } from 'react-router-dom';
// import heading from './images/bg.jpg'
// import logo from './images/logo.png'
// import goo from './images/goo.png'
// import mic from './images/mic.png'
// import './signup.css'

// function Signup() {

//     const Signup = (props) => {
//         const navigate = useNavigate();

//         const [contact, setContact] = useState({
//             fullname: '',
//             email: '',
//             password: '',
//             login: ''
//         })

//         const { fullname, email, password, login } = contact;

//         const handleChange = (event) => {
//             const { name, value } = event.target
//             setContact((preValue) => {
//                 return {
//                     ...preValue,
//                     [name]: value
//                 }
//             })
//         }

//         const handleSubmit = async (event) => {
//             event.preventDefault();

//             if (password !== login) {
//                 alert('passwords not matching!')
//                 return;
//             }

//             try {
//                 const { user } = await createAuthUserWithEmailAndPassword(email, password);
//                 await createUserDocFromAuth(user, { fullname });
//                 navigate("/login")
//             }
//             catch (error) {
//                 console.log('error in creating user', error)
//             }
//         }

//         return (
//             <Container>
//                 <Row>
//                     {/* <div className = "greeenBg"> */}
//                     <div className='chamHeading'>
//                         <img src={logo} width="100" height="100" />
//                         <h>CHAMELEON</h>
//                     </div>
//                     <div className='getStarted'>
//                         Get Started
//                     </div>
//                     {/* <img src ={heading} width="auto" height="auto"></img> */}

//                     {/* </div> */}

//                     <div className='google'>
//                         Log in with Google
//                         <img src={goo} width="34" height="34" />
//                     </div>

//                     <div className='microsoft'>
//                         Log in with Microsoft
//                         <img src={mic} width="34" height="34" />
//                     </div>

//                     <div class="fullname">
//                         <label>Name:*</label>
//                         <input name="Name"
//                             onChange={handleChange}
//                             value={contact.fullname} />
//                     </div>

//                     <div class="emailAdd">
//                         <label>Email:*</label>
//                         <input name="email"
//                             onChange={handleChange}
//                             value={contact.email} />
//                     </div>

//                     <div class="password">
//                         <label>Password:*</label>
//                         <input
//                             type="password"
//                             name="password"
//                             onChange={handleChange}
//                             value={contact.password} />
//                     </div>

//                     <div class="create">
//                         <button onClick={handleSubmit}>
//                             Login
//                         </button>
//                     </div>
//                     <button class="make" hred="#home">Create Account</button>

//                     {/* <div className='inputSign'>
//                     <p class="name">NAME</p>

//                     <p class="email">EMAIL ADDRESS</p>

//                     <p class="pass">PASSWORD</p>

//                     <p class="log">LOGIN</p>
//                 </div> */}

//                     <div className='accSign'>
//                         <p class="ac">Have an account? Sign in</p>
//                     </div>

//                 </Row>
//             </Container>
//         )
//     }
// }


//     export default Signup;

import { Container, Row } from 'react-bootstrap';
import React, { useState, Component } from 'react';
import {NavLink} from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom'
import heading from './images/bg.jpg'
import logo from './images/logo.png'
import goo from './images/goo.png'
import mic from './images/mic.png'
import './signup.css'

function Signup() {

    return (
        <Container>
            <Row>
                {/* <div className = "greeenBg"> */}
                <div className='chamHeading'>
                    <img src={logo} width="100" height="100" />
                    <h>CHAMELEON</h>
                </div>
                <div className='getStarted'>
                    Get Started
                </div>
                {/* <img src ={heading} width="auto" height="auto"></img> */}

                {/* </div> */}

                <div className='google'>
                    Log in with Google
                    <img src={goo} width="34" height="34" />
                </div>

                <div className='microsoft'>
                    Log in with Microsoft
                    <img src={mic} width="34" height="34" />
                </div>

                <div className='inputSign'>
                   
                    <p class="name" >NAME</p>

                    <p class="email">EMAIL ADDRESS</p>

                    <p class="pass">PASSWORD</p>

                    <p class="log">LOGIN</p>
                </div>

                <Nav.Link href="/login">
                    <button className='accSign'>
                        <p class="ac">Have an account? Sign in</p>
                    </button>
                </Nav.Link>

            </Row>
        </Container>
    )
}


export default Signup;