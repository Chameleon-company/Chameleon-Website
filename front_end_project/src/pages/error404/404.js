import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black text-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-2">Page Not Found</h2>
        <p className="text-lg">
          Oops! The page you're looking for doesn't exist.
        </p>
        <p className="mt-4">
          You may have mistyped the URL or the page has been moved.
        </p>
        <a href="/" className="mt-6 text-blue-500 hover:underline">Go back to home</a>
      </div>
    </div>
  );
};

export default NotFoundPage;


