import React, { Component } from 'react';
import ChameleonLogo from "./images/Chameleon_Figma.png"
import './Home.css'
import ProjectLogo1 from '../../assets/middle_card_img.jpeg'
import ProjectItem from './ProjectItem';

class Home extends Component {
  render() {
    return (
      <div>
        <div className='row-container'>
          <img className='chameleon-logo' src={ChameleonLogo} alt='Image' />
          <div>
            <p className='row-item'>
              At Chameleon, our mission is to research, create, test, document and deploy IoT-based solutions to enchance life through the application of smart city technologies including: the building of smarter cities, homes, transportation, and energy management systems.
            </p>
            <h3>
              -Chameleon CEO
            </h3>
          </div>
        </div>
        <div className='our-projects-container'>
          <h5>
            OUR PROJECTS
          </h5>
          <div className='projects-container'>
            <ProjectItem projectDescription={"EV Adoption Tools"} projectImage={ProjectLogo1}/>
            <ProjectItem projectDescription={"City of Melbourne Open Data"} projectImage={ProjectLogo1}/>
            <ProjectItem projectDescription={"Website Uplift"} projectImage={ProjectLogo1}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;