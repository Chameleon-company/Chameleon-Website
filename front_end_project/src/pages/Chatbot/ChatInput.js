import React from 'react';
import './Chatbot.css';

function ChatInput() {
    return (
        <div className="chat-input">
            <textarea
                placeholder="Enter your message here.."
                spellCheck="false"
                required
            ></textarea>
            <span id="send-btn" className="material-symbols-rounded">send</span>
        </div>
    );
}

export default ChatInput;
