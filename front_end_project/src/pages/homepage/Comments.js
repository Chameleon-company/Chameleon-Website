import './Comments.css'
import Avatar1 from './images/avatar1.png'
import Avatar2 from './images/avatar2.png'
import Avatar3 from './images/avatar3.png'

function Comments() {
    return(
        <div class="wrapper22">
        <div class="carddd">
          <h5>Testimoniols</h5>
          <div className="ff">
            <div className="ce">
            <img className="user" src={Avatar1} alt="logo" />
              <p className="c">Introduction to Chameleon lorem <br />lorem ipsum dolor sit amet </p>
              
            </div>
            <div className="ce">
            <img className="user" src={Avatar2} alt="logo" />
          <p className="c">Introduction to Chameleon lorem <br />lorem ipsum dolor sit amet </p>
            </div>
            <div className="ce">
            <img className="user" src={Avatar3} alt="logo" />
          <p className="c">Introduction to Chameleon lorem <br />lorem ipsum dolor sit amet </p>
    </div>
          </div>
		
          
          </div></div>
    );
}

export default Comments;