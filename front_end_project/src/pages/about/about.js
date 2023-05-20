import React from 'react';
import ReactDOM from 'react-dom';
import './page.css';

    const About = () => {
    return (
      <div className="about">
        <h2>About Us</h2>
        <p>
          Chameleon aims to utilize the Internet of Things (IoT), which is an ecosystem consisting of web-enabled smart
          devices such as phones, suburban traffic systems, and domestic appliances, that all use embedded systems, such
          as processors, sensors, and communication hardware, to collect, send, and act on data they acquire from their
          environments.
        </p>
        {/* Additional content specific to the About section */}
      </div>
    );
    };

   // Create the logo element 
   const Logo = () => {
    return (
        <div className="logo">
        <img src={require('../../assets/logo.png').default} alt="logo" id="logo_child" />
        </div>
    );
    };

    // Create the navigation bar
    const Navbar = () => {
    const navItems = ['Home', 'Portfolio', 'Blog', 'Newsletter', 'Contact Us', 'About Us'];

    return (
        <ul className="navbar">
        {navItems.map((item, index) => (
            <li key={index}>
            <a href="#home">{item}</a>
            </li>
        ))}
        <li>
            <button className="loginbutton" onClick={() => window.location.href = '8.8.8.8'}>
            LOGIN
            </button>
        </li>
        </ul>
    );
    };

    // Create the green section
    const GreenSection = () => {
    return (
        <div className="green">
        <div className="abouthead">
            <h1>ABOUT US</h1>
        </div>
        <div className="aboutpara">
            <p>
            Chameleon aims to utilise the Internet of Things (IoT), which is an ecosystem consisting of web-enabled smart
            devices such as phones, suburban traffic systems and domestic appliances, that all use embedded systems, such
            as processors, sensors, and communication hardware, to collect, send and act on data they acquire from their
            environments.
            </p>
        </div>
        </div>
    );
    };

    // Create the mission section
    const MissionSection = () => {
    return (
        <div style={{ paddingTop: '10%' }}>
        <div className="missionhead">
            <h1>OUR MISSION</h1>
        </div>
        <div className="parent">
            <div className="missionpara">
            <p>
                Given the complexity of energy application needs today, IoT systems are being designed to address a wide
                variety of existing problems. In Chameleon, our mission is to research, create, test, document and deploy
                IoT-based solutions to enhance life through the application of smart city technologies including: the
                building of smarter cities, homes, transportation, and energy management systems.
            </p>
            </div>
            <div className="illustration">
            <img src={require('../../assets/MicrosoftTeams-image (2).png')} alt="illustration" />
            </div>
            <div className="ellipse"></div>
        </div>
        </div>
    );
    };

    // Create the card section
    /*const CardSection = () => {
    const cardItems = [
        { iconSrc: '../../assets/MicrosoftTeams-image (5).png', value: '50,000+' },
        { iconSrc: '../../assets/MicrosoftTeams-image (6).png', value: '43,850+' },
        { iconSrc: '../../assets/MicrosoftTeams-image (3).png', value: '10,000+' },
        { iconSrc: '../../assets/MicrosoftTeams-image (4).png', value: '12' },
    ];
    
    return (
        <div className="parentcard" style={{ paddingTop: '10%', paddingLeft: '7%', paddingRight: '5%' }}>
        {cardItems.map((item, index) => (
            <div className="card" key={index}>
            <span>
                <img className="icon_image" src={require(item.iconSrc)} alt="Earth Icon" />
            </span>
            <h2 style={{ paddingTop: '80px' }}>{item.value}</h2>
            </div>
        ))}
        </div>
    );
    };*/

    // Create the video section
    const VideoSection = () => {
    return (
        <div style={{ padding: '10%' }}>
        <iframe className="video" width="1000" height="400" src="" title="Video" />
        </div>
    );
    };

    // Create the footer
    const Footer = () => {
    return (
        <footer className="footer">
        <h2>CONTACT US</h2>
        <p>+611 111 111</p>
        <p>chameleon@gmail.com</p>
        <div className="newsletter">
            <h2 style={{ textAlign: 'right' }}>JOIN OUR NEWSLETTER</h2>
        </div>
        <h2>CHAMELEON 2023</h2>
        <i className="fa-solid fa-phone"></i>
        <i className="fa-solid fa-envelope"></i>
        <div className="footer_image">
            <img src={require('../../assets/brandLogo.png')} alt="footer image" />
        </div>
        <h1 className="footer_heading">CHAMELEON</h1>
        <h2 className="footer_heading2">STRIVING TO CREATE A SMARTER WORLD</h2>
        <form id="email-form">
            <input type="email" id="email-input" name="email" placeholder="Enter your email address" required />
            <button type="submit">SUBMIT</button>
        </form>
        <lord-icon
            src="https://cdn.lordicon.com/tftaqjwp.json"
            trigger="hover"
            colors="primary:white"
            style={{ position: 'relative', bottom: '515px', right: '70px' }}
        />
        <lord-icon
            src="https://cdn.lordicon.com/ausvvtws.json"
            trigger="hover"
            colors="primary:#ffffff"
            style={{ position: 'relative', bottom: '480px', right: '120px' }}
        />
        </footer>
    );
    };

    ReactDOM.render(
    <React.StrictMode>
        <Logo />
        <Navbar />
        <GreenSection />
        <MissionSection />
        {/* <CardSection /> */}
        <VideoSection />
        <Footer />
    </React.StrictMode>,
    document.getElementById('root')
    );
    export default About;