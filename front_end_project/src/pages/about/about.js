import React, { Component } from "react";
import '../src/index.css';
import logo1 from "../../assets/icsLogoNewMark2.png";
import tit from "../../assets/jigsaw-sideimage.jpg";
import { BsBuilding } from "react-icons/bs";
import { FaGlobeAmericas } from "react-icons/fa";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { BsFillPeopleFill } from "react-icons/bs";

import { GrPlayFill } from "react-icons/gr";
import '../../App.css';

class About extends Component {
  render() {
    return (
      <>
        <div id="grad1">
        
        <center>
          <div className="ou1">
          <h1>About Us</h1>
          </div>
          <div className="ou">
        <p>Chameleon aims to utilise the Internet of Things (IoT), which is an ecosystem consisting of web-enabled smart devices such as phones, suburban traffic systems and domestic appliances, that all use embedded systems, such as processors, sensors, and communication hardware, to colect, send and act on data they acquire from their environments.</p>
        
          </div>
          <button className="but">JOIN</button></center>
          
      </div>
   
      








       

      <div className="wrapper12">
        <div className=" columns">
          <div class="container horizontal flat column21 ">
            <img className="img111" src={tit} alt="logo" />
          </div>

          <div className="ou2">
          <div class="column21 flat ">
            <div className="ou3"> Our Mission</div>
            <div className="ou4">
        <p>Chameleon aims to utilise the Internet of Things (IoT), which is an ecosystem consisting of web-enabled smart devices such as phones, suburban traffic systems and domestic appliances, that all use embedded systems, such as processors, sensors, and communication hardware, to colect, send and act on data they acquire from their environments.</p>
        
          </div>
           
            
          </div>
</div>
          {/* <div className="c2">
aaa
</div> */}
          
        </div>
      </div>

     
      <center>
      <section class="main-section">
          <div class="cardn1"><div className="divsno">
          
                <BsBuilding size={47} color="black" />
              

  </div><div class="cardn"></div></div>
          <div class="cardn1"><div className="divsno">
          <FaGlobeAmericas size={47} color="black" />
  </div><div class="cardn"></div></div>
          <div class="cardn1"><div className="divsno">
          <BsFillBoxSeamFill size={47} color="black" />
  </div><div class="cardn"></div></div>
          <div class="cardn1"><div className="divsno">
          <BsFillPeopleFill size={47} color="black" />
  </div><div class="cardn"></div></div>
  
  
</section> 
</center>

      
<div class="card14 toggleable">
	
        <center><div className="divss">
          
          <GrPlayFill size={37} color="white"/>
      </div></center>
		
</div>

      </>
    );
  }
}

export default About;
