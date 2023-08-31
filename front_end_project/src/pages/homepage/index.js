import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Header from './layouts/header/header.js';
import Footer from './layouts/footer/footer.js';
import Homepage from './Homepage.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>

    <Homepage />
    
    <Footer/>
  </React.StrictMode>
);
