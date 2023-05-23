import React, { Component } from "react";
import '../src/index.css';
import logo1 from "./images/icsLogoNewMark2.png";
import lo from "./images/EV_AdoptionTools_Evoleon_logo.png";
import mop from "../../assets/MOP - White.png";
import m from "../../assets/download (5).png";
import logo1 from "../../assets/icsLogoNewMark2.png";
import { GrPlayFill } from "react-icons/gr";
import '../../App.css';

class About extends Component {
  render() {
    return (
      <><div>
           <h3 className="h">Project Progress Report: Trimester 1,2023</h3>
      </div>
      <div className="wrapper">
        <div className="m columns">
          <div class="container horizontal flat column">
            <div className="f">
              {" "}
              <div className="b">
                <p>70%</p>{" "}
              </div>
              <progress className="f1" value="70" max="100"></progress>
            </div>
            <div className="f">
              <div className="b ">
                <p>65%</p>{" "}
              </div>
              <progress
                className="f1 progress1"
                value="65"
                max="100"
              ></progress>
            </div>
            <div className="f fl">
              <div className="b">
                <p>55%</p>{" "}
              </div>
              <progress
                className="f1 progress2"
                value="55"
                max="100"
              ></progress>
            </div>
          </div>

          <div class="container1 horizontal flat column1">
            <div className="f">
              {" "}
              <div className="b1">
                <img className="img12" src={lo} alt="logo" />
              </div>
              <div className="k">
                <h2>EV Charger</h2>
              </div>
            </div>
            <div className="f">
              {" "}
              <div className="b1">
                <img className="img1" src={logo1} alt="logo" />
              </div>
              <div className="k">
                <h2>Chameleon Website</h2>
              </div>
            </div>
            <div className="f">
              {" "}
              <div className="b1">
                <img className="img1" src={mop} alt="logo" />
              </div>
              <div className="k">
                <h2>Melbourne Open Data</h2>
              </div>
            </div>
          </div>

          
        </div>
      </div>
      </>
    );
  }
}

export default About;
