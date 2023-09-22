import React, { useState } from "react";
import "./Intro.css";
import "./Our_Project.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import White_Logo from "./Image_homepage/White_Logo.png";
import City from "./Image_homepage/City.png";
import EV from "./Image_homepage/EV.jpeg";
import Website from "./Image_homepage/Website.png";

function Homepage() {

  const [showEVPopup, setShowEVPopup] = useState(false);
  const [showCityPopup, setShowCityPopup] = useState(false);
  const [showWebsitePopup, setShowWebsitePopup] = useState(false);

  return (
    <div>
      <div>
        <div className="Introduction">
          <img
            src={White_Logo}
            alt="Chameleon logo white"
            className="img-fluid"
            style={{ marginLeft: "30px" }}
          />
          <div className="Text2">
            <p>
              &nbsp; &nbsp; &nbsp; &nbsp; At Chameleon, our mission is to
              research, create, test, document, and deploy IoT-based solutions to
              enhance life through the application of smart city technologies
              including: the building of smarter cities, homes, transportation,
              and energy management systems.
            </p>
            <p style={{ marginLeft: "30px" }}>---Chameleon CEO </p>
          </div>
        </div>
      </div>

      <div>
        <div className="Our_projects">
          <div className="d-flex justify-content-center">
            <h1 style={{ marginTop: "40px" }}>OUR PROJECTS</h1>
          </div>

          <div className="d-flex justify-content-center">
            <div
              className="Small_rectangle"
              onMouseEnter={() => setShowEVPopup(true)}
              onMouseLeave={() => setShowEVPopup(false)}
            >
              <a href="#">
                <img src={EV} alt="EV Adoption Tools" className="project_picture" />
              </a>
              <p className="project_description">EV Adoption Tools</p>
              {showEVPopup && (
                <div className="popup" onMouseEnter={() => setShowEVPopup(true)} onMouseLeave={() => setShowEVPopup(false)}>
                  <img src={EV} alt="Evoleon Project" className="popup_img" />
                  <p className="popup_content">Our Electric Vehicle (EV) Adoption Tools division is at the forefront of promoting higher utilization of electric vehicles (EVs) in Australia. This endeavor seeks to diminish our reliance on fossil fuels, decrease greenhouse gas emissions, and make a positive contribution to environmental well-being and global climate patterns.

                  </p>
                </div>
              )}
            </div>
            <div
              className="Small_rectangle"
              onMouseEnter={() => setShowCityPopup(true)}
              onMouseLeave={() => setShowCityPopup(false)}
            >
              <a href="#">
                <img src={City} alt="City of Melbourne Open Data" className="project_picture" />
              </a>
              <p className="project_description">City of Melbourne Open Data</p>
              {showCityPopup && (
                <div className="popup" onMouseEnter={() => setShowCityPopup(true)} onMouseLeave={() => setShowCityPopup(false)}>
                  <img src={City} alt="MOP" className="popup_img" />
                  <p className="popup_content">The City of Melbourne Open Data division is committed to harnessing the power of open data. Our goal is to create a robust toolset that empowers non-technical users to grasp the potential of open data within the City of Melbourne. We aim to address urban challenges and provide step-by-step examples of how open data can be harnessed to make our city smarter and more efficient.</p>
                </div>
              )}
            </div>
            <div
              className="Small_rectangle"
              onMouseEnter={() => setShowWebsitePopup(true)}
              onMouseLeave={() => setShowWebsitePopup(false)}
            >
              <a href="#">
                <img src={Website} alt="Website Uplift" className="project_picture" />
              </a>
              <p className="project_description">Website Uplift</p>
              {showWebsitePopup && (
                <div className="popup" onMouseEnter={() => setShowWebsitePopup(true)} onMouseLeave={() => setShowWebsitePopup(false)}>
                  <img src={Website} alt="Chameleon Website" className="popup_img" />
                  <p className="popup_content">The primary objective of the Chameleon Website is to compile comprehensive information about our entire company in a visually appealing format. This platform is thoughtfully designed for ease of use, featuring an intuitive layout and navigation. Essentially, the Chameleon Website acts as a unified portal, providing quick access to various links and sub-projects within our organization.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
