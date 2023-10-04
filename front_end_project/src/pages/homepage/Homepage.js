import "./Intro.css";
import "./Our_Project.css";
import "./waves.css"
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useRef, useEffect } from "react";
import White_Logo from "./Image_homepage/White_Logo.png";
import City from "./Image_homepage/City.png";
import EV from "./Image_homepage/EV.jpeg";
import Website from "./Image_homepage/Website.png";

function Homepage() {
  const images = [EV, City, Website];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Reference to the spinner element
  const spinnerRef = useRef(null);

  // Function to rotate the spinner
  const rotateSpinner = () => {
    if (spinnerRef.current) {
      const angle = currentIndex * (-120); // 120 degrees for each image
      spinnerRef.current.style.transform = `rotateY(${angle}deg)`;
    }
  };

  // Update the spinner rotation whenever currentIndex changes
  useEffect(() => {
    rotateSpinner();
  }, [currentIndex]);

  return (
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
            enhance life through the application of smart city technologies,
            including the building of smarter cities, homes, transportation, and
            energy management systems.
          </p>
          <p style={{ marginLeft: "30px" }}>---Chameleon CEO</p>
        </div>
      </div>

      <div>
        <div class="content">
          <svg class="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#559166" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,229.3C384,235,480,277,576,282.7C672,288,768,256,864,234.7C960,213,1056,203,1152,208C1248,213,1344,235,1392,245.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
          <div className="d-flex justify-content-center ">
            <h2 style={{ marginTop: "30px" }}>OUR PROJECTS</h2>
            <h2 style={{ marginTop: "30px" }}>OUR PROJECTS</h2>
          </div>
        </div>
        <div className="Our_projects">

          <div id="carousel">
            <figure id="spinner" ref={spinnerRef}>
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Project ${index + 1}`}
                />
              ))}
            </figure>
          </div>
          <span
            style={{ float: "left" }}
            className="ss-icon"
            onClick={handlePrevClick}
          >
            &lt;
          </span>
          <span
            style={{ float: "right" }}
            className="ss-icon"
            onClick={handleNextClick}
          >
            &gt;
          </span>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
