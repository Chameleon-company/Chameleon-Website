import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectLinksMoP.css'; 
import Screen from '../../components/app/Screen';
import Header from '../../layouts/header/header';
import Footer from '../../layouts/footer/footer';

const ProjectLinksMoP = () => {
    return (
        <>
        <Header />
        <div className="page-container-mop">
            <h1 className="title">More Project Details</h1>
            <div className="button-container">
                <Link to="/MoPWebDev" className="project-button web-dev">MOP Web Development Project</Link>
                <Link to="/MoPDS" className="project-button data-sci">MOP Data Science Project</Link>
            </div>
        </div>
        <Footer />
        </>
        
    );
}

export default ProjectLinksMoP;
