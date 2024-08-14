import React from 'react';
import Screen from '../../components/app/Screen';
import './404.css';

const NotFoundPage = () => {
  return (
    <Screen>
      <div className="flex justify-center min-h-screen bg-black relative">
        <div className="four_zero_four_bg absolute inset-0 z-0"></div>
        <div className="relative text-center z-10">
          <h1 className="txt404 text-5xl md:text-7xl lg:text-9xl mb-4  font:sans-serif">404 Error</h1>
          <h2 className="text-3xl font-semibold mb-2">Page Not Found</h2>
          <button className='button1'><a href="/" className="mt-6 text-blue-500 text-black no-underline text-san-serif">HOME</a></button>
        </div>
      </div>
    </Screen>
  );
};

export default NotFoundPage;
