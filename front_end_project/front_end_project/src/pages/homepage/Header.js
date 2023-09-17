import './Header.css';
import Temp_Logo from './images/Temp_Logo.png'
import {NavLink} from 'react-router-dom';

function App() {
  return (
    <div>
      <div className='Header'>
        <img src={Temp_Logo} className='img_to_circle'></img>

            <div class="font">
              <a href="/Home">Home</a>
              <a href="/Resources">Resources</a>
              <a href="/Blog">Blog</a>
              <a href="/Our_Services">Our Services</a>
              <a href="/Portfolio">Portfolio</a>
              <a href="/About Us">About Us</a>
              <a href="/Login">Login</a>
            </div>
      </div>

    </div>
  );
}

export default App;
