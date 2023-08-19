import './Video.css'
import TV from './images/TV.png'

function Video() {
    return(
    <div>
        <div className='Video_rectangle'>
            <a href='#' className='TEXT_CHANGE'>
                <img src={TV} className='TV' alt='TV logo'></img>   
                <p className='Text'>Introcuction to Chameleon</p>
            </a>
        </div>

        <div className='Video_rectangle'>
            <a href='#' className='TEXT_CHANGE'>
                <img src={TV} className='TV' alt='TV logo'></img>
                <p className='Text'>What we do</p>
            </a>
        </div>

        <div className='Video_rectangle'>
            <a href='#' className='TEXT_CHANGE'>
                <img src={TV} className='TV' alt='TV logo'></img>
                <p className='Text'>What next for us</p>
            </a>
        </div>
    </div>
    );
}

export default Video;