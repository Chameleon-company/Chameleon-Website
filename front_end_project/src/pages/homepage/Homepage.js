import "./Intro.css";
import "./Our_Project.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import White_Logo from "./Image_homepage/White_Logo.png";
import City from "./Image_homepage/City.png";
import EV from "./Image_homepage/EV.jpeg";
import Website from "./Image_homepage/Website.png";
import Button from 'react-bootstrap/Button';

function Homepage() {
  return (
    <div>
      {/* HERO SECTION*/}
      <div className="hero-section">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Welcome to Chameleon</h1>
          <h2>
            Revolutionizing Urban Living Through IoT-Based Solutions.
          </h2>
          <p>
            In a rapidly evolving world, Chameleon leads the way in creating innovative solutions that transform cities into smarter, more livable, and environmentally friendly communities.
          </p>
          <Button color="primary" size="lg">Explore Our Mission</Button>
        </div>
      </div>

      {/* INTRODUCTION SECTION */}
      <div>
        <div class="Introduction">
          <img
            src={White_Logo}
            alt="Chameleon logo white"
            className="img-fluid"
            style={{ marginLeft: "100px" }}
          />
          <div class="Text2">
            <p>
              At Chameleon, out mission is to
              research, create, test, document and deploy IoT-based solutions to
              enhance life through the application of smart city technologies
              including: the building of smarter cities, homes, transportation
              and energy management systems.
            </p>
            <p style={{ marginLeft: "10px" }}><strong>-Chameleon CEO</strong> </p>
          </div>
        </div>
      </div>

      {/* OUR PROJECTS*/}
      <div>
        <div class="Our_projects">
          <div class="d-flex justify-content-center project-heading">
            <h3 style={{ marginTop: "40px" }}>OUR PROJECTS</h3>
          </div>

          <div className="project-container">
            <div className="project-card">
              <a href="#"><img src={EV} alt="EV Adoption Tools" className="project-desc" /></a>
              <p>EV Adoption Tools</p>
            </div>
            <div className="project-card">
              <a href="#"><img src={City} alt="City of Melboune Open Data Project" className="project-desc" /></a>
              <p>City Of Melbourne Open Data</p>
            </div>
            <div className="project-card">
              <a href="#"><img src={Website} alt="Website Project" className="project-desc" /></a>
              <p>Website Uplift</p>
            </div>
          </div>


          {/* <div class="d-flex justify-content-center">
            <div class="Small_rectangle">
              <a href="#">
                <img src={EV} alt="EV Adoption Tools" class="project_picture" />
              </a>
              <p class="project_description">EV Adoption Tools</p>
            </div>
            <div class="Small_rectangle">
              <a href="#">
                <img
                  src={City}
                  alt="City of Melbourne Open Data"
                  class="project_picture"
                />
              </a>
              <p class="project_description">City of Melbourne Open Data</p>
            </div>
            <div class="Small_rectangle">
              <a href="#">
                <img
                  src={Website}
                  alt="Website Uplift"
                  class="project_picture"
                />
              </a>
              <p class="project_description">Website Uplift</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
