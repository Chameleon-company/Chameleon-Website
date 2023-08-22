import React, { useState } from 'react';
import './ChatWidget.css';
import Avatar from './images/avatar1.png'
import { AiOutlinePaperClip, AiOutlineMessage } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';
import { VscSend } from 'react-icons/vsc';

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className={`chat-widget ${isOpen ? 'open' : ''}`}>
            <div className="widget-header" onClick={toggleChat}>
                {!isOpen && <AiOutlineMessage className='chat-icon' />}
            </div>
            {isOpen && (
                <div className="chat-container">
                    <div className="chat-header">
                        <div className='widget-row-container'>
                            <div className="avatar">
                                <img src={Avatar} alt="Bot Avatar" />
                            </div>
                            <span>Chameleon</span>
                        </div>
                        <button className="close-button" onClick={toggleChat}>
                            <GrClose />
                        </button>
                    </div>
                    <div className="chat-content">
                        <div className="message">
                            <div className="avatar">
                                <img src={Avatar} alt="Bot Avatar" />
                            </div>
                            <div className="message-content bot-message">
                                <p>Hi, I'm Chameleon and I'm here to help you.
                                    To get started, choose from one of the below.</p>
                            </div>
                        </div>
                        <div className="options">
                            <button>Learn about our project</button>
                            <button>Support us</button>
                            <button>I have another question</button>
                        </div>
                        <form className="input-form" onSubmit={handleSubmit}>
                            <input type="text" placeholder="Type a message" />
                            <button className="attach-button">
                                <AiOutlinePaperClip />
                            </button>
                            <button type="submit"><VscSend /></button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ChatWidget;