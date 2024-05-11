import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Header from './layouts/header/header.js';
import Footer from './layouts/footer/footer.js';
import User_account from './user_account.js';
import Profile from './Profile+Bio.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>

   <Profile /> 
   {/* <br /> */}
   <User_account />
    
    <Footer/>
  </React.StrictMode>
);
