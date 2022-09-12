import React from 'react'
import Heading from '../../components/heading/Heading';
import Card from '../../components/card/Card';
import Contacts from '../../data/servicesData';

function createCard(contact){
  return <Card
    key = {contact.id}
    link = {contact.imgURL}
    name = {contact.name}
  />
}

function Portfolio() {
  return (
    <div>
      <Heading name ="Portfolio"/>
      {Contacts.map(createCard)}
    </div>
  )
}

export default Portfolio