import './Intro.css';
import './Our_Project.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import White_Logo from './Image_homepage/White_Logo.png';
import City from './Image_homepage/City.png';
import EV from './Image_homepage/EV.jpeg';
import Website from './Image_homepage/Website.png';
import { useState } from 'react';

const PopUp = ({ x, y, data }) => {
  return (
    <div
      className={`shadow-md shadow-black p-4 absolute top-${x}px right-${y}px w-[20rem] h-[20rem] flex justify-center items-center bg-white rounded-lg`}>
      {/* Display the data associated with the hovered div */}
      <h1 className='text-3xl font-bold'>{data}</h1>
    </div>
  );
};

function Homepage() {
  const [isHovered, setIsHovered] = useState(false);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [hoveredData, setHoveredData] = useState('');

  const handleMouseEnter = (data) => {
    setIsHovered(true);
    setHoveredData(data);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setHoveredData('');
  };
  console.log(isHovered);
  console.log(hoveredData);

  const handleMouseMove = (e) => {
    setMouseX(e.clientX);
    setMouseY(e.clientY);
  };
  console.log(mouseX);
  console.log(mouseY);
  return (
    <div>
      <div>
        <div class='Introduction'>
          <img
            src={White_Logo}
            alt='Chameleon logo white'
            className='img-fluid'
            style={{ marginLeft: '30px' }}
          />
          <div class='Text2'>
            <p>
              &nbsp; &nbsp; &nbsp; &nbsp; At Chameleon, out mission is to
              research, create, test, document and deploy IoT-based solutions to
              enhance life through the application of smart city technologies
              including: the building of smarter cities, homes, transportation
              and energy management systems.
            </p>
            <p style={{ marginLeft: '30px' }}>---Chameleon CEO </p>
          </div>
        </div>
      </div>

      <div>
        <div class='Our_projects'>
          <div class='d-flex justify-content-center'>
            <h1 style={{ marginTop: '40px' }}>OUR PROJECTS</h1>
          </div>

          <div
            className='d-flex justify-content-center !relative'
            onMouseMove={handleMouseMove}>
            <div
              class='Small_rectangle'
              onMouseEnter={() => handleMouseEnter('EV Adoption Tools')}
              onMouseLeave={handleMouseLeave}>
              <a href='#'>
                <img src={EV} alt='EV Adoption Tools' class='project_picture' />
              </a>
              <p class='project_description'>EV Adoption Tools</p>
            </div>
            <div
              className='Small_rectangle'
              onMouseEnter={() => handleMouseEnter('City of Melbourne Open Data')}
              onMouseLeave={handleMouseLeave}>
              <a href='#'>
                <img
                  src={City}
                  alt='City of Melbourne Open Data'
                  class='project_picture'
                />
              </a>
              <p class='project_description'>City of Melbourne Open Data</p>
            </div>
            <div
              className='Small_rectangle'
              onMouseEnter={() => handleMouseEnter('Website Uplift')}
              onMouseLeave={handleMouseLeave}>
              <a href='#'>
                <img
                  src={Website}
                  alt='Website Uplift'
                  class='project_picture'
                />
              </a>
              <p class='project_description'>Website Uplift</p>
            </div>
            {isHovered && <PopUp x={mouseX} y={mouseY} data={hoveredData} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
