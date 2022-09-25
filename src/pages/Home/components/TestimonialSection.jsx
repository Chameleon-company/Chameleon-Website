import React from 'react'
import TestimonialCard from './TestimonialCard';
import Heading from '../../../components/heading/Heading'
import './TestimonialSection.css'


function TestimonialSection() {

     return(
        <div className="testimonialSection">
            <Heading name ="Testimony"/>
            <div className="displayTestimony">
                <TestimonialCard
                    testimony="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut"
                    userImg={require('../../../assets/images/user1.png')}
                    userName= "John Doe"
                />
                <TestimonialCard
                    testimony="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut"
                    userImg={require('../../../assets/images/user2.png')}
                    userName= "Jane Fibbs"
                />
            </div>
        </div>

    );
}


export default TestimonialSection;











// unuseable Code. 
//     <div className='TestimonialSection'>
    //     <div className="main">
    //         <div class="li">
    //             <div class="top">
    //                 <div class="text">
    //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //                 eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    //                 enim ad minim veniam, quis nostrud exercitation ullamco laboris
    //                 nisi ut
    //                 </div>
    //                 <div class="img">
    //                 <img src="leftquotessign1" alt="" />
    //                 </div>
    //             </div>
    //         </div>
    //         <div class="li liRight">
    //             <div class="top">
    //                 <div class="text">
    //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //                 eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    //                 enim ad minim veniam, quis nostrud exercitation ullamco laboris
    //                 nisi ut
    //                 </div>
    //                 <div class="imgRight">
    //                 <img src="leftquotessign1" alt="" />
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    //     </div>
// function TestimonialSection_User_function() {

//     const Ellipse1 = require("../../../assets/images/Ellipse1.png");
//     const Ellipse2 = require("../../../assets/images/Ellipse2.png");

//     return (
//         <div className='TestimonialSection'>
//         <div className='user'>
//             <div class="li">
//                 <div class="bottom">
//                     <div>
//                     <img src="Ellipse1" alt="" />
//                     </div>
//                     <div>Robert Smith</div>
//                 </div>
//             </div>
//             <div class="li liRight">
//                 <div class="bottom">
//                     <div>
//                     <img src="Ellipse2" alt="" />
//                     </div>
//                     <div>Jane Fibbs</div>
//                 </div>
//             </div>
//         </div>
//         </div>
//     );
// }