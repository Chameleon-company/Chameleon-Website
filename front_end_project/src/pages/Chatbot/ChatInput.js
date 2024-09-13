import React from 'react';
import './Chatbot.css';
import { FaPaperPlane } from 'react-icons/fa'; // Import icon from react-icons

function ChatInput() {
    return (
        <div className="chat-input">
            <textarea
                placeholder="Enter your message here.."
                spellCheck="false"
                required
            ></textarea>
            <FaPaperPlane id="send-btn" size={24} style={{ cursor: 'pointer' }} />
        </div>
    );
}

export default ChatInput;
