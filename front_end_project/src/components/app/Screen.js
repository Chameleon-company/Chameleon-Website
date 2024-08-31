import React, { Children } from 'react';
import Header from '../../layouts/header/header';
import Footer from '../../layouts/footer/footer';


export default function Screen ({ children }) {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Header />
        <div className='my-auto'>
          <div className='container mt-xl-auto my-auto p-5 bg-light text-dark' style={{ borderRadius: 25 }}>
            {children}
          </div>
        </div>
        <Footer />
      </div>

    </>
  );
}