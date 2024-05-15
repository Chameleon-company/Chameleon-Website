
import React from 'react';

import Header from '../../layouts/header/header';
import Footer from '../../layouts/footer/footer';


export default function Screen ({ children }) {
    const rememberMe = localStorage.getItem('rememberMe') === 'true';
    const session = rememberMe ? true : sessionStorage.getItem('session') === 'logged in';
    return (
        <>
            <div className="flex flex-col h-screen">
                <Header/>
                <>
                    {children}
                </>
                <Footer />
            </div>
        </>
    );
}
