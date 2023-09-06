import React, { Component } from 'react';
import './contact.css';
import Phone from './image/phone.png';
import Chat from './image/chat.png';
import Email from './image/email.png';

class Contact extends Component {
  render() {
    return (
            <div class='contact_container'>
              <div class='contact_title'>Contact Us</div>
              <div class='contact_body'>
                <div class='contact_item'>
                  <div class='contact_item_img'>
                    <img src={Phone}></img>
                  </div>
                  <div class='contact_item_title'>
                    Phone Us
                  </div>
                  <div class='contact_item_context'>
                    Mon-Fri 9-pm(AEST)
                    <br/>
                    PH:03 5975 6586
                  </div>
                </div>
                <div class='contact_item'>
                  <div class='contact_item_img'>
                    <img src={Email}></img>
                  </div>
                  <div class='contact_item_title'>
                    Send a Email
                  </div>
                  <div class='contact_item_context'>
                    Send us your question via email and we will get back to you
                  </div>
                  <button class='contact_item_btn'>Email Us</button>
                </div>
                <div class='contact_item'>
                  <div class='contact_item_img'>
                    <img src={Chat}></img>
                  </div>
                  <div class='contact_item_title'>
                    Live Chat
                  </div>
                  <div class='contact_item_context'>
                    Chat with our friendly Chameleon
                    <br/>
                    bot.
                  </div>
                  <button class='contact_item_btn'>Email Us</button>
                </div>
              </div>
            </div>
    );
  }
}

export default Contact;