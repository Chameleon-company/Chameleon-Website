import React from 'react'
import Heading from '../../../components/heading/Heading'
import './OurMissionSection.css'


function OurMissionSection()
{
    return(
        <div className="ourMissionSection">
            <Heading name="Our Mission"/>
            <div className='OurMissionContainer'>
                        
                        <p className="missionStatement">Given the complexity of energy application
                            needs today, IoT systems are being designed
                            to address a wide variety of existing problems.
                            In Chameleon, our mission is to research,
                            create, test, document and deploy IoT-based
                            solutions to enhance life through the
                            application of smart city technologies
                            including: the building of smarter cities,
                            homes, transportation, and energy
                            management systems.</p>    
            </div>
        </div>
    );
}

export default OurMissionSection;