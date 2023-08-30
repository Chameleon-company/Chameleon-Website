import './Homepage.css';
import './Intro.css';
import './Our_Project.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import White_Logo from './Image_homepage/White_Logo.png'
import City from './Image_homepage/City.png'
import EV from './Image_homepage/EV.jpeg'
import Website from './Image_homepage/Website.png'

function Homepage() {
  return (
    <div>
      <div>
        <div class="Introduction">
        <img src={White_Logo} alt="Chameleon logo white" className="img-fluid" style={{ marginLeft: '30px' }} />
          <div class="Text2">
            <p>&nbsp; &nbsp; &nbsp; &nbsp; At Chameleon, out mission is to research, create, test, document and deploy
              IoT-based solutions to enhance life through the application of smart city technologies including: the
              building of smarter cities, homes, transportation and energy management systems.</p>
            <p style={{ marginLeft: '30px' }}>---Chameleon CEO </p>
          </div>
        </div>
      </div>

      <div>
        <div class="Our_projects">
          <div class="d-flex justify-content-center">
              <h1 style={{marginTop: '40px'}}>OUR PROJECTS</h1>
          </div>

          <div class="d-flex justify-content-center">
            <div class="Small_rectangle">
              <a href="#"><img src={EV} alt="EV Adoption Tools" class="project_picture"/></a>
              <p class="project_description">EV Adoption Tools</p>
            </div>
            <div class="Small_rectangle">
              <a href="#"><img src={City} alt="City of Melbourne Open Data" class="project_picture"/></a>
              <p class="project_description">City of Melbourne Open Data</p>
            </div>
            <div class="Small_rectangle">
              <a href="#"><img src={Website} alt="Website Uplift" class="project_picture"/></a>
              <p class="project_description">Website Uplift</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
