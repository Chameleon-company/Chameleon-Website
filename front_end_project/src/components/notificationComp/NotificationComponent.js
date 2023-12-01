import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NotificationComponent = () => {
  return (
    <ToastContainer
      limit={1}
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      style={{
        marginTop: '100px'
      }}
    />
  );
};

const notify = (message, type) => {
  toast[type](message, {
    toastId: '1',
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const notifySuccess = (message) => {
  notify(message, 'success');
};

export const notifyError = (message) => {
  notify(message, 'error');
};

export const notifyWelcome = (message) => {
  notify(message, 'info');
};

export default NotificationComponent;
