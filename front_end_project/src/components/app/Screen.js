import React from 'react';
import Header from '../../layouts/header/header';
import Footer from '../../layouts/footer/footer';
import { Row } from 'react-bootstrap';


export default function Screen ({ title, subtitle, children }) {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Header />
        <div className='my-5'>
          <div className='container mt-xl-auto my-auto p-5 bg-light text-dark' style={{ borderRadius: 25 }}>
            {title && <Row className='p-3 text-center'><h1>{title}</h1></Row>}
            {subtitle && <Row className='p-1 text-center text-dark'><h3>{subtitle}</h3></Row>}
            <>
              {children}
            </>
          </div>
        </div>
        <Footer />
      </div>

    </>
  );
}