import './BottomBar.css';
import Bottom_Logo from './images/Bottom_Logo.png'
import GooglePlay from './images/GET_IT_ON.png'

import Facebook from './images/Facebook.jpg'
import Twitter from './images/Twitter.jpg'
import IG from './images/INS.jpg'

function Bottom() {
  return (
    

    <div className="wrapper1">
    <div className="m columns">
      <div class="container horizontal flat column2">
        <img className="img123" src={Bottom_Logo} alt="logo" />
      </div>

      <div class="container1 horizontal flat column2">
        <center>
          <h4 className="w">Contact us</h4>
          <p></p>
          <div className="w">
            <BsFillTelephoneFill /> 03 5975 6586
          </div>
          <br />
          <div className="w">
            <FaRegEnvelope size={27} /> customer.service@chameieon.com.au
          </div>
          <div className="flx w">
            <p>Privacy Notice</p>
            <p className="sp">About Us</p>
          </div>
          <div className="o w">2023 Copyrighty reserved by Chameleon</div>
        </center>
      </div>
      <div class="container1 horizontal flat column2">
        <div className="w j"> download our app here</div>
        <img className="img1234" src={GooglePlay} alt="logo" />
        <br />
        <div className="w j"> find us on</div>
        <div className="flx1">
          <img className="img12345" src={Facebook} alt="logo" />
          <img className="img12345" src={Twitter} alt="logo" />
          <img className="img12345" src={IG} alt="logo" />
        </div>
      </div>

      
      
    </div>
  </div>
  );
}

export default Bottom;