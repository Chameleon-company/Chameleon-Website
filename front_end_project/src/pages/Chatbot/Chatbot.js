import React, { useState, useEffect, useRef } from 'react';
import './Chatbot.css';
import ChatbotLogo from './images/Logo_2.png';
import UserAvatar from './images/user1.jpg';
import BotAvatar from './images/chabot.png';
import Screen from '../../components/app/Screen';

const Chatbot = () => {
    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState(() => {
        // Load chat history from local storage if available
        const savedHistory = localStorage.getItem('chatHistory');
        return savedHistory ? JSON.parse(savedHistory) : [];
    });
 
    const sendMessage = (msg, fromUser = true) => {
        setChatHistory(prevChatHistory => {
            const updatedHistory = [...prevChatHistory, { message: msg, fromUser: fromUser }];
            localStorage.setItem('chatHistory', JSON.stringify(updatedHistory)); // Save to local storage
            return updatedHistory;
        });
    };

    useEffect(() => {
        // Check if chatHistory is empty or if it does not already contain the welcome message
        if (!chatHistory.some(msg => msg.message.includes("Here is the Chameleon Website Chatbot"))) {
            sendMessage("Here is the Chameleon Website Chatbot powered by OpenAI, do you have any questions?", false);
        }
    }, []); // Ensure this effect runs only once

    // OpenAi with backend
    const fetchChatbotResponse = async (userInput) => {
        try {
            const response = await fetch('http://localhost:3002/api/chatbot', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ "prompt": userInput })
            });
            const data = await response.json();
            // console.log(data);

            // Assuming data.choices[0].message.content is the correct path based on your backend response structure
            if (data && data.choices && data.choices.length > 0 && data.choices[0].message && data.choices[0].message.content) {
                const gptResponse = "Chameleon-GPT: " + data.choices[0].message.content;
                sendMessage(gptResponse, false); // Display bot's response in chat
            } else {
                console.log('No message received:', data);  // Log for debugging
                sendMessage("No response message was received.", false);
            }
        } catch (error) {
            console.error('Error fetching chatbot response:', error);
            sendMessage("Sorry, I couldn't fetch a response.", false);
        }
    };

    const chatContainerRef = useRef(null);

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [chatHistory]);
    
    useEffect(() => {
        const lastMessage = chatHistory[chatHistory.length - 1];

        if (lastMessage) {
            let autoReply = '';
            switch (lastMessage.message) {
                case 'Website Project':
                    autoReply = 'Autorely: At Chameleon, our mission is to research, create, test, document and deploy loT-based solutions to enhance life through the application of smart city technologies including: the building of smarter cities, homes, transportation, and energy management systems.';
                    break;
                case 'MOP Project':
                    autoReply = "Autorely: Melbourne Open Data refers to the City of Melbourne's initiative to make a wide range of public data sets available to the public for free";
                    break;
                case 'Evoleon Project':
                    autoReply = 'Autorely: The EV Adoption Tools company announces a groundbreaking partnership with major electric vehicle manufacturers to further advance sustainable mobility solution.';
                    break;
                default:
                    autoReply = '';
                    break;
            }

            if (autoReply) {
                // console.log('Auto replying with:', autoReply);
                sendMessage(autoReply, false);
            }
        }
    }, [chatHistory]);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (message.trim() !== '') {
            sendMessage(message, true);
            fetchChatbotResponse(message);
            setMessage('');
        }
    };

    const handleProjectClick = (project) => {
        console.log(`Project clicked: ${project}`);
        sendMessage(project, true);
    };

    return (
        <Screen>
            <div className='chatbot-page-container'>
                <div className='chatbot-container'>
                    <div className='chat-header'>
                        <div className='chatbot-info'>
                            <div className='chatbot-info-container'>
                                <img className="chatbog-logo" src={ChatbotLogo} alt='Chatbot Logo' />
                                <span>Chameleon Website Chatbot</span>
                            </div>
                        </div>
                    </div>
                    <div className='chat-content' ref={chatContainerRef}>
                        {chatHistory.map((item, index) => (
                            <div key={index} className={`message-container ${item.fromUser ? 'from-user' : 'from-bot'}`}>
                                {item.fromUser ? (
                                    <>
                                        <div className='message from-user'>{item.message}</div>
                                        <img className="avatar" src={UserAvatar} alt='User Avatar' />
                                    </>
                                ) : (
                                    <>
                                        <img className="avatar" src={BotAvatar} alt='Bot Avatar' />
                                        <div className='message from-bot'>{item.message}</div>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className='chat-footer'>
                        <form onSubmit={handleSendMessage}>
                            <input
                                type="text"
                                placeholder="Type a message..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                            <button type="submit">Send</button>
                        </form>
                    </div>
                </div>
                <div className='faq-container'>
                    <h5>Frequently Asked Questions</h5>
                    <div className="options-container">
                        <ul>
                            <li onClick={() => handleProjectClick("Website Project")}>Website Project</li>
                            <li onClick={() => handleProjectClick("MOP Project")}>MOP Project</li>
                            <li onClick={() => handleProjectClick("Evoleon Project")}>Evoleon Project</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Screen>
    );
};

export default Chatbot;
