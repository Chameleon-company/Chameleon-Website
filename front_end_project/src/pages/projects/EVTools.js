import React from 'react';
import './blog_styles.css';
import Screen from '../../components/app/Screen';
import image from "./image/ev-image.jpg"

const EVToolsPage = () => (
    <Screen>
        <div className="blog-container">
            <h1 className="blog-title">Electric Vehicle Adaptation Tools (EVAT)</h1>
            <img src={image} alt="Descriptive Alt Text" className="featured-image" />
            <p className="blog-description">
            The EV Adaptation Tools project is dedicated to promoting the increased adoption of Electric Vehicles (EVs) in Australia. This initiative supports the reduction of fossil fuel dependence, decreases greenhouse gas emissions, and positively impacts the environment. The primary adoption tool is a mobile app that allows users to perform EV charger identification and route navigation according to user vehicle and personal preferences. The EVAT Website also provides EV related information and data science related applications.
            </p>

            <div className="blog-products">
                <h2>Meet the team:</h2>
                <ul>
                    <li><strong>Senior Leaders:</strong> James Davies, Mukul Kamalkant Singh.</li>
                    <li><strong>Junior Leaders:</strong> Goutham Krishna Bala Murali Krishna, Shut Keung Chan, John Collins, Nirmal Antony Mariadoss, Hue Minh Nguyen, Barani Shanmugasundaram, Sonam Chewang Dorji, Thenusan Santhirakumar, Eswar Sivan Sethu.</li>
                </ul>
            </div>

            <div className="blog-products">
                <h2>Goals and operations:</h2>
                <ul>
                    <li>
                        The EVAT team will be restructured into an App/Web team and a data science team. The focus for the App/Web team is to rebuild a new Mobile App after unsuccessful attempts in Trimester 1 to debug the existing Mobile app. The Mobile App will focus on providing user specific location data for current EV chargers and provide route navigation services throughout Australia.
                    </li>
                </ul>
            </div>

            <div className="blog-links">
                <h2>Useful Links:</h2>
                <ul>
                    <li>
                        <a href="https://deakin365.sharepoint.com/:v:/r/sites/SchoolofITInnovationHub/Shared%20Documents/Capstone%20Program/Showcase/2024T1/Chameleon/EV%20Adoption%20Tools%20Showcase%20(T1%202024).mp4?csf=1&web=1&e=DC7Jst">Chameleon EVAT Showcase</a>
                        <p className="link-description">The showcase video provided by the Chameleon EVAT team about their project.</p>
                    </li>
                </ul>
            </div>
        </div>
    </Screen>
);

export default EVToolsPage;