import React from 'react';
import './blog_styles.css';
import Screen from '../../components/app/Screen';
import aiImage from "./image/ai-image.jpg"

const MopAIPage = () => (
    <Screen>
        <div className="blog-container">
            <h1 className="blog-title">Chameleon City of Melbourne (CoM) Artificial Intelligence</h1>
            <img src={aiImage} alt="Descriptive Alt Text" className="featured-image" />
            <p className="blog-description">
                The City of Melbourne Open Data collaborates with The City of Melbourne to enhance knowledge and develop applications for businesses, researchers, and software developers. Through the educational platform 'The Melbourne Open Playground' (MOP), they investigate the potential uses of Open Data, aligning their efforts with Melbourne’s Smart City strategies.
            </p>

            <div className="blog-products">
                <h2>Meet the team:</h2>
                <ul>
                    <li><strong>Senior Leaders:</strong> Lucas Kocon, Sahana Gollapalli.</li>
                    <li><strong>Junior Leaders:</strong> Khoi Nguyen Bui, Logan Guilding, Mobasshar Nomani, Nihar Jalela, Anh (Alex) Tuan Truong.</li>
                </ul>
            </div>

            <div className="blog-products">
                <h2>Goals and operations:</h2>
                <ul>
                    <li>
                        This trimester the City of Melbourne Project seeks to develop its new Artificial Intelligence team to utilize Machine Learning and AI techniques to forecast trends, optimize resource allocation, and improve urban living conditions through intelligent data analysis. In addition, the team will focus on creating new use cases, performing API repointing of old use cases and implementing existing ones to get the site up and running.
                    </li>
                </ul>
            </div>

            <div className="blog-links">
                <h2>Useful Links:</h2>
                <ul>
                    <li>
                        <a href="https://deakin365.sharepoint.com/:v:/r/sites/SchoolofITInnovationHub/Shared%20Documents/Capstone%20Program/Showcase/2024T1/Chameleon/MOP%20DS%20Team%20Showcase%20(T1%202024).mp4?csf=1&web=1&e=PP9TsP">CoM AI Showcase</a>
                        <p className="link-description">The showcase video provided by the Chameleon CoM AI team about their project.</p>
                    </li>
                </ul>
            </div>
        </div>
    </Screen>
);

export default MopAIPage;