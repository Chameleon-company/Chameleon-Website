import React from 'react'
import { Progress } from 'rsuite' //import progress module from rsuite

//css stylesheets
import './ProgressBar.css' //flex box formatting for progress circle
import '../../../index.css' //website template

//Define function({specify props}) and export for use and updating of props in OurServices.jsx
export default function ProgressBar_function({ progressPercent, progressTitle }) {
  return (
    // use div and progressBar_group to apply padding around progress bar and title
    <div className='progressBar_group'>

        {/* apply progress bar css formatting (background circle and flex alignment for title) */}
        <div className='progressBar_circleBar'>
                
            {/* Progres.Circle module called from rsuit for progress bar
            full guide: https://www.geeksforgeeks.org/react-suite-progress-circle/ */}

            <Progress.Circle 
                percent={progressPercent} //bar size
                showInfo={0} //0 to hide percentage number (couldn't get it to format properly)

                strokeColor="#40a722" //complete bar colour
                strokeWidth={10} //complete bar width
                strokeLinecap="cap" //complete bar end bits (options: butt, round, cap)

                trailColor='#6aa15b' //incomplete bar colour
                trailWidth={10} //incomplete bar width
            />

            {/* replacement for Progress.Circle percentage value, css defines layout */}
            <a className='progressBar_percentage'>{progressPercent}%</a>
        </div>

    <h3>
        {progressTitle}
    </h3>

    </div>
  );
}