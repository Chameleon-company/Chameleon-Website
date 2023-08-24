import React from 'react';
import ChameleonLogo from "./images/Chameleon_Figma.png"
import './Home.css'
import ProjectLogo1 from '../../assets/middle_card_img.jpeg'
import ProjectItem from './ProjectItem';
import 'react-chat-widget/lib/styles.css';

export default function Home() {
  return (
    <div className='home-container'>
      <div className='row-container'>
        <img className='chameleon-logo' src={ChameleonLogo} alt='Image' />
        <div>
          <div className='row-item'>
            <p>
              At Chameleon, our mission is to research, create, test, document and deploy IoT-based solutions to enchance life through the application of smart city technologies including: the building of smarter cities, homes, transportation, and energy management systems.
            </p>
          </div>
          <h3>
            -Chameleon CEO
          </h3>
        </div>
      </div>
      <div className='our-projects-container'>
        <h3 className='our-projects-title'>
          OUR PROJECTS
        </h3>
        <div className='projects-container'>
          <ProjectItem projectDescription={"EV Adoption Tools"} projectImage={ProjectLogo1} />
          <ProjectItem projectDescription={"City of Melbourne Open Data"} projectImage={ProjectLogo1} />
          <ProjectItem projectDescription={"Website Uplift"} projectImage={ProjectLogo1} />
        </div>
      </div>
    </div>
  );
}