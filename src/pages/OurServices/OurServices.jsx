import React from 'react'

//imported but not used
//import Card from '../../components/card/Card';
//import Contacts from '../../data/servicesData';

//Importing progress bar function component & CSS Stylesheet
import ProgressBar from './ourServicesComponents/progressBar_component';
import './ourServicesComponents/progressBar_styling.css'

function createCard(contact){
  
}

function OurServices() {
  return (
    <div>
      <h1>Our Services</h1>

      {/* applying page alignment css to all progress bars within the div */}
      <div className='progressBar_pageAlignment'>

      {/* calling progressBar function & updating values percent and title values */}
      <ProgressBar progressPercent={84} progressTitle="Deadlines Met"/>
      <ProgressBar progressPercent={90} progressTitle="Within Budget"/>
      <ProgressBar progressPercent={96} progressTitle="Client Satisfaction"/>
      <ProgressBar progressPercent={100} progressTitle="Carbon Neutral"/>     
      </div>

    </div>
  )
}


export default OurServices