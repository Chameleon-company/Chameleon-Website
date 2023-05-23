import './Welcome.css'
import tree1 from './images/tree1.png'
import tree2 from './images/tree2.png'
import tree3 from './images/tree3.png'
import Chameleon from './images/Chameleon_Figma.png'

function Welcome() {
    return(
        <div id="grad1">
        <h1>Welcome to Chameleon</h1>
        <div className="f">
        <div className="ajy1">
          <div className="abso">
            <h5>Who is Chameleon?</h5>
            <p className="pa">lorem ipsum dolor sit amet consectetssumenda doloremque </p>
            
            <ol>
              
              <li>lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua obcaecati ipsa assumenda doloremque </li>
              <li>lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua obcaecati ipsa assumenda doloremque </li>
              <li>lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua obcaecati ipsa assumenda doloremque </li>
            
            </ol>
          </div>
          <div className="abso1">
            <p className="bo">
              Discover existing information about how to save our planet.</p>
            <di className='fla'>
              <div className="email">email ____________</div>
              <div className="im">I m in</div>
          </di>
          </div>
            <img className="ajy2" src={tree1} alt="logo" />
            <img className="ajy3" src={tree1} alt="logo" />
            
        </div>
        <div className="le">
            <div >
            <img className="ajy11" src={Chameleon} alt="logo" />
          
          <div >
              <di className='fla'>
                <img className="tree2" src={tree3} alt="logo" /> 
              <h3>Striving to Creat a Smarter World</h3>
              <img className="tree3" src={tree2} alt="logo" />
          </di>
          </div>
           
            
        </div>
          
        </div>
        </div>
      </div>
    );
}

export default Welcome;