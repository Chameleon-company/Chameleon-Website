import React, { useState, useRef, useEffect } from 'react';
import './Chatbot.css';
import ChameleonLogo from './images/ChameleonLogo.png';
import ChameleonLogo2 from './images/chameleon (2).png';
import userImg from './images/user.png';
import sendImg from './images/sendImg.png';

const Chatbot = () => {
  const [userMessage, setUserMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const chatboxRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom of the chatbox when chatMessages change
    if (chatboxRef.current) {
      chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
    }
  }, [chatMessages]);

  const handleSendMessage = async () => {
    if (!userMessage.trim()) return;

    const newUserMessage = { content: userMessage, role: 'user' };
    setChatMessages((prevMessages) => [...prevMessages, newUserMessage]);
    setUserMessage('');

    try {
      const thinkingMessage = { content: 'Hi, my name is Chamebeon, I\'m here to assist you. Feel free to ask anything related to Chameleon Company...', role: 'incoming' };
      setChatMessages((prevMessages) => [...prevMessages, thinkingMessage]);

      const response = await fetch('http://localhost:3001/api/chatbot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userMessage }),
      });

      const data = await response.json();

      const newChatMessage = { content: data.content, role: 'incoming' };
      setChatMessages((prevMessages) => [...prevMessages, newChatMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const handleOption1 = () => {
    const response = 'I want to learn more about IoT-based projects';
    sendMessage(response);
  };

  const handleOption2 = () => {
    const response = 'I am willing to support your team!';
    sendMessage(response);
  };

  const handleOption3 = () => {
    const response = 'I have another Question';
    sendMessage(response);
  };

  const sendMessage = async (message) => {
    setChatMessages((prevMessages) => [...prevMessages, { content: message, role: 'user' }]);

    try {
      const thinkingMessage = { content: 'On it\'s way...', role: 'incoming' };
      setChatMessages((prevMessages) => [...prevMessages, thinkingMessage]);

      const response = await fetch('http://localhost:3001/api/chatbot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userMessage: message }),
      });

      const data = await response.json();

      const newChatMessage = { content: data.content, role: 'incoming' };
      setChatMessages((prevMessages) => [...prevMessages, newChatMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="chatbot">
      <header>
        <img src={ChameleonLogo} alt="Chatbot Image" className="chatbot-image" />
        <h2>CHAMELEON CHAT BOT</h2>
        <div className="options-container">
          <ul>
            <li>Website Project</li>
            <li>MOP project</li>
            <li>Evoleon Project</li>
          </ul>
        </div>
      </header>
      <ul className="chatbox" ref={chatboxRef}>
        {chatMessages.map((message, index) => (
          <li
            key={index}
            className={message.role === 'user' ? 'outgoing' : 'incoming'}
            style={{ justifyContent: message.role === 'user' ? 'flex-end' : 'flex-start' }}
          >
            {message.role === 'incoming' && (
              <img src={ChameleonLogo2} alt="Incoming Message Icon" />
            )}
            <p className={message.role === 'user' ? 'user-message' : 'chatbot-message'}>
              {message.content}
            </p>
            {message.role === 'user' && (
              <img src={userImg} alt="User Message Icon" />
            )}
          </li>
        ))}
      </ul>

      <div className='bottomChatBot'>
        <div className="quick-options">
          <button id="option1" onClick={handleOption1}>
            Learn About our Projects
          </button>
          <button id="option2" onClick={handleOption2}>
            Support Us
          </button>
          <button id="option3" onClick={handleOption3}>
            I have another Question
          </button>
        </div>
        <div className="chat-input">
          <textarea
            placeholder="Enter your message here.."
            spellCheck="false"
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
          ></textarea>
          <span
            id="send-btn"
            className="material-symbols-rounded"
            onClick={handleSendMessage}
          >
            <img id='sendImg' src={sendImg} alt="User Message Icon" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;