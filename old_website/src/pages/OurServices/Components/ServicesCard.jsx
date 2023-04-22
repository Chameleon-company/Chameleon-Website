import React from 'react'
import Card from '../../../components/card/Card'
import services from '../../../data/servicesData.js'
import './ProgressBar.css'

function createCard(service){
  return(<Card
    key={service.id}
    link ={service.imgURL}
    name ={service.name}
    />
  );
}

function ServicesCard() {
  return (
    <div className = "servicesCard">
        {services.map(createCard)}
    </div>
  )
}

export default ServicesCard
