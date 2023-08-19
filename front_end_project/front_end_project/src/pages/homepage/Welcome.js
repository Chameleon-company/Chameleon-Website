import './Welcome.css'
import tree1 from './images/tree1.png'
import tree2 from './images/tree2.png'
import tree3 from './images/tree3.png'
import Chameleon from './images/Chameleon_Figma.png'

function Welcome() {
    return(
    <div className='background'>
        <p className='wel'>Welcome to Chameleon</p>
            <div className='introduction'>  
                <div className='article'>
                    <h3 className='title'>Who is Chameleon?</h3>
                    <p>
                        Chameleon is a sophisticated no-code platform for product success, 
                        empowering SaaS teams to build self-service user onboarding, feature adoption, 
                        and feedback collection.
                    </p>     
                    <p>
                            Using Chameleon you can show new users key functionalities, 
                        highlight product changes, improve feature discoverability, 
                        and reduce confusion and support requests. 
                        Deploy NPS, CSAT, CES and custom surveys to users, 
                        triggered at the right time and to the right audience. 
                        Add self-serve help and user onboarding launchers to guide users without interrupting their workflow.
                    </p>

                </div>
            </div>
        



        <img src={tree2} className='img_tree2' alt='tree2'></img>
        <img src={tree2} className='img_tree2_inverse' alt='tree2'></img>

        <div>
            <p className='text2'>
                Discover exciting information about how to save our planet
            </p> 
            <input className='input_for' type='text' id='email' placeholder='Email:_______________'></input>
            <button className='button' type='submit'>I'm in</button>       
        </div>

        <div className='intro_right'>
            <img src={tree3} className='img_tree3'></img>
            <img src={Chameleon} className='Chameleon' alt='tree1'></img>
            <p className='right_text'>Striving to Create a Smarter World</p>
            <img src={tree1} className='img_tree1' alt='tree1'></img>
            
        </div>

    </div>
    );
}

export default Welcome;