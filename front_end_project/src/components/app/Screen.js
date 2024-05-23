import React from 'react';
import Header from '../../layouts/header/header';
import Footer from '../../layouts/footer/footer';

function Screen ({ children }) {
  return (
    <div className="">
      <Header />
      <div className=''>
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Screen;