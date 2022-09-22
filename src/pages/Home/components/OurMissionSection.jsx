import React from 'react'
import './OurMissionSection_styling.css'


function OurMissionSection()
{

    const pngwing1 = require("../../../assets/images/pngwing-1.png");

    return(
        <div className='OurMissionSection'>
            <div class="main">
                <div class="left">
                    <div>
                        <p>Given the complexity of energy application</p>
                        <p>needs today, IoT systems are being designed</p>
                        <p>to address a wide variety of existing problems.</p>
                    </div>
                    <div>
                        <p>In Chameleon, our mission is to research,</p>
                        <p>create, test, document and deploy IoT-based</p>
                        <p>solutions to enhance life through the</p>
                        <p>application of smart city technologies</p>
                        <p>including: the building of smarter cities,</p>
                        <p>homes, transportation, and energy</p>
                        <p>management systems.</p>
                    </div>
                </div>
                <div class="right_img">
                    <img src="pngwing1" alt="" />
                </div>
            </div>
        </div>
    );
}

export default OurMissionSection;