import './BottomBar.css';
import Bottom_Logo from './images/Bottom_Logo.png'
import GooglePlay from './images/GooglePlay.png'
import AppStore from './images/AppStore.png'
import Facebook from './images/Facebook.jpg'
import Twitter from './images/Twitter.jpg'
import IG from './images/INS.jpg'

function Bottom() {
  return (
    <div>
      <div className='bottom'>
        <div>

          <div>
            <div className='Logo'>
              <img src={Bottom_Logo} alt='Logo'></img>
              <h5 className='Text_under_Logo'>Striving to Create a Smarter World</h5>
            </div>

            <div>
              <h3 className='Bottom_icon'>Download our app here</h3>
                <img src={GooglePlay} className='icon_design1' alt='GooglePlay Download icon'></img>             
            </div>

            <div>
              <img src={AppStore} className='icon_design2' alt='GooglePlay Download icon'></img>
              <h3 className='position2'>Find us on</h3>
              <div className='rectangle'>
                <img src={Facebook} className='Three_icon' alt='Facebook icon'></img>
                <img src={Twitter} className='Three_icon' alt='Twitter icon'></img>
                <img src={IG} className='Three_icon' alt='INS icon'></img>
              </div>
            </div>

            <div className='position1'>
                <h1 className='temp_position'>Contact Us</h1>
                <h3 className='temp_position'>Tel: 03 5975 6586</h3>
                <h3 className='temp_position'>Email: customer.service@chameleon.com.au</h3>

                  <div className='text'>
                    <h3 className='text_space1'>Privacy Notice</h3> <h3 className='text_space2'>About Us</h3>
                  </div>  
                <h3 className='position3'>©2013 Copyright reserved by Chameleon</h3> 
              </div>
          </div>


        </div>
                         
      </div>
    </div>
  );
}

export default Bottom;