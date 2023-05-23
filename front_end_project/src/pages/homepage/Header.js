import './Header.css';
import Temp_Logo from './images/Temp_Logo.png'
import {NavLink} from 'react-router-dom';

function App() {
  return (
    <div>
      <div className='Header'>
        <img src={Temp_Logo} className='img_to_circle'></img>

            <div class="font">
            <ul>
        <li>
          <img className="img" src={logo1} alt="logo" />
        </li>
        <li className="a">
          <a href="#contact">Login</a>
        </li>
        <li className="a">
          <a class="active" href="#about">
            About Us
          </a>
        </li>
        <li className="a">
          <a href="#contact">Portfolio</a>
        </li>
        <li className="a">
          <a href="#home">Oue Services</a>
        </li>
        <li className="a">
          <a href="#news">Blog</a>
        </li>
        <li className="a">
          <a href="#news">Resources</a>
        </li>
        <li className="a">
          <a href="#news">Home</a>
        </li>
      </ul>
            </div>
      </div>

    </div>
  );
}

export default App;
