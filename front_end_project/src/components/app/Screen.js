import React from 'react';
import Header from '../../layouts/header/header';
import Footer from '../../layouts/footer/footer';
import HeaderAuth from '../../layouts/header/headerAuth';


export default function Screen ({ children }) {
    const rememberMe = localStorage.getItem('rememberMe') === 'true';
    const session = rememberMe ? true : sessionStorage.getItem('status') === 'logged in';
    return (
        <>
            <div className="flex flex-col h-screen">
                {session ? (<HeaderAuth/>):(<Header/>)}
                <>
                    {children}
                </>
                <Footer />
            </div>
        </>
    );
}
