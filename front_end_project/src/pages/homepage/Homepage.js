import React, { useState } from 'react';
import Screen from '../../components/app/Screen';
import './home.css';
import { Col, Container, Row, Button } from 'react-bootstrap';
import Header from '../../layouts/header/header';
import Footer from '../../layouts/footer/footer';



const Homepage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const content = {
    welcome: {
      title: "Chameleon",
      content: "At Chameleon, we thrive on innovation and diversity. With multiple projects like Melbourne Open Data and EV Tools, we explore various subsets of computer science. From software design and development to data science, AI, computer security, and project management, our team is dedicated to advancing technology and delivering exceptional results. Join us as we shape the future with cutting-edge solutions and unparalleled expertise.",
    },

    projects: {
      title: 'Our Projects',
      content: 'At Chameleon, we are advancing technology through diverse projects. Chameleon Website showcases our innovative solutions, while Chameleon Security focuses on safeguarding digital assets. MOP Data Science harnesses data for actionable insights, and MOP Website provides a user-friendly interface for accessing data. MOP AI drives intelligent solutions for complex problems, and EV Tools supports the electric vehicle industry with cutting-edge technology. Each project reflects our commitment to excellence and innovation across various fields.'
    }
  };


  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
    if (isDarkMode) {
      document.body.classList.remove('dark-mode');
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
      document.body.classList.add('dark-mode');
    }
  };

  return (
    <div className="homepage-background">
      <div className="content-layer">
        {/* Header */}
        <Header />

        <Container fluid className="d-flex flex-column justify-content-center align-items-center min-vh-100">
          <section className="w-100 text-center my-5">
            <div className="bg-transparent">
              <h1 className="display-2 gradient-heading">{content.welcome.title}</h1>
              <p className="fw-bold fs-5">{content.welcome.content}</p>
            </div>
          </section>
        </Container>


        {/* Footer */}
        <Footer />
      </div>
    </div>

  );
};

export default Homepage;
