import React from 'react';
import './Chatbot.css';
import Chatbox from './Chatbox';
import Options from './options';
import ChatInput from './ChatInput';

function Chatbot() {
    return (
        <div className="chatbot">
            <button className="chatbot-toggler">
                <span className="material-symbols-outlined">more_horiz</span>
                <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <header>
                <img
                    src="images/ChameleonLogo.png"
                    alt="Chatbot Image"
                    className="chatbot-image"
                />
                <h2>Chameleon</h2>
                <button className="options-button material-symbols-outlined">
                    more_vert
                </button>
                <div className="options-container">
                    <ul>
                        <li>Website Project</li>
                        <li>MOP project</li>
                        <li>Evoleon Project</li>
                    </ul>
                </div>
                <span className="close-btn material-symbols-outlined">arrow_back</span>
            </header>

            <Chatbox />

            <Options />

            <ChatInput />
        </div>
    );
}

export default Chatbot;
