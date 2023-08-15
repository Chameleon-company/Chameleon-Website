import './Comments.css'
import Avatar1 from './images/avatar1.png'
import Avatar2 from './images/avatar2.png'
import Avatar3 from './images/avatar3.png'

function Comments() {
    return(
    <div>
        <div className='Comment_rectangle'>
            <p className='text_Comment'>Testimony</p>
            <div className='Temp'>
                <img src={Avatar1} className='Photo_size' alt='avatar1'></img>
                <p>I like it.</p>
            </div>

            <div className='Temp'>
                <img src={Avatar2} className='Photo_size' alt='avatar2'></img>
                <p>It is very good.</p>
            </div>

            <div className='Temp'>
                <img src={Avatar3} className='Photo_size' alt='avatar3'></img>
                <p>This is useful.</p>
            </div>
            
        </div>

    </div>
    );
}

export default Comments;