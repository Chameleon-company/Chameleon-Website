import React from 'react';
import './Chatbot.css';

function Chatbox() {
    return (
        <ul className="chatbox">
            <li className="chat incoming">
                <img
                    src="images/chameleon (2).png"
                    alt="Incoming Message Icon"
                    className="incoming-image"
                />
                <p>
                    Hi, I'm Chameleon and I'm here to help you.<br />How can I help you
                    today?
                </p>
            </li>
        </ul>
    );
}

export default Chatbox;
