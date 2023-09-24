import React, { Component } from 'react';
import './Chatbot.css';
//import ChatBot from 'react-simple-chatbot';
// import { ThemeProvider } from 'styled-components';

class Chatbot extends Component {
    constructor() {
        super();
        this.state = {
            userMessage: '',
        };
    }

    componentDidMount() {
        // Your Chatbot JavaScript code goes here
        const incomingMessageImage = "images/chameleon (2).png";
        const chatInput = document.querySelector(".chat-input textarea");
        const sendButton = document.getElementById('send-btn');
        const optionsButton = document.querySelector('.options-button');
        const optionsContainer = document.querySelector('.options-container');
        const quickOptionsContainer = document.querySelector('.quick-options');

        const option1Button = document.getElementById('option1');
        const option2Button = document.getElementById('option2');
        const option3Button = document.getElementById('option3');

        const closeBtn = document.querySelector(".close-btn");
        const chatbotToggler = document.querySelector(".chatbot-toggler");


        const simulateTyping = (message) => {
            chatInput.value = message;
            const inputEvent = new Event('input', {
                bubbles: true,
                cancelable: true,
            });
            chatInput.dispatchEvent(inputEvent);
        }

        option1Button.addEventListener('click', () => {
            const response = "Learn About our Projects";
            simulateTyping(response);
            sendButton.click();
            quickOptionsContainer.style.display = 'none';
        });

        option2Button.addEventListener('click', () => {
            const response = "Support Us";
            simulateTyping(response);
            sendButton.click();
            quickOptionsContainer.style.display = 'none';
        });

        option3Button.addEventListener('click', () => {
            const response = "I have another Question";
            simulateTyping(response);
            sendButton.click();
            quickOptionsContainer.style.display = 'none';
        });

        optionsButton.addEventListener('click', () => {
            optionsContainer.style.display = optionsContainer.style.display === 'block' ? 'none' : 'block';
        });

        // Close options when clicking outside of it
        document.addEventListener('click', (event) => {
            if (!optionsButton.contains(event.target) && !optionsContainer.contains(event.target)) {
                optionsContainer.style.display = 'none';
            }
        });

        const chatbox = document.querySelector(".chatbox");
        const inputInitHeight = chatInput.scrollHeight;

        const createChatLi = (message, className) => {
            const chatLi = document.createElement("li");
            chatLi.classList.add("chat", `${className}`);

            let chatContent;

            if (className === "outgoing") {
                chatContent = `<p></p>`;
            } else if (className === "incoming") {
                chatContent = `<img src="${incomingMessageImage}" alt="Incoming Message Icon"><p></p>`;
            }

            chatLi.innerHTML = chatContent;
            chatLi.querySelector("p").textContent = message;
            return chatLi;
        }

        const generateResponse = (chatElement) => {
            const API_URL = "https://api.openai.com/v1/chat/completions";
            const messageElement = chatElement.querySelector("p");
            const API_KEY = "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"; // API key

            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${API_KEY}`
                },
                body: JSON.stringify({
                    model: "gpt-3.5-turbo",
                    messages: [{ role: "user", content: this.state.userMessage }],
                })
            }

            fetch(API_URL, requestOptions)
                .then(res => res.json())
                .then(data => {
                    messageElement.textContent = data.choices[0].message.content.trim();
                })
                .catch(() => {
                    messageElement.classList.add("error");
                    messageElement.textContent = "Oops! Something went wrong. Please try again.";
                })
                .finally(() => chatbox.scrollTo(0, chatbox.scrollHeight));

            const imageElement = document.createElement("img");
            imageElement.src = incomingMessageImage;
            imageElement.alt = "Incoming Message Image";
            imageElement.classList.add("incoming-image");
            chatElement.insertBefore(imageElement, messageElement);

            const existingImage = chatElement.querySelector(".incoming-image");

            if (existingImage) {
                chatElement.replaceChild(imageElement, existingImage);
            } else {
                chatElement.insertBefore(imageElement, messageElement);
            }
        }

        const handleChat = () => {
            this.state.userMessage = chatInput.value.trim();
            if (!this.state.userMessage) return;

            chatInput.value = "";
            chatInput.style.height = `${inputInitHeight}px`;

            chatbox.appendChild(createChatLi(this.state.userMessage, "outgoing"));
            chatbox.scrollTo(0, chatbox.scrollHeight);

            setTimeout(() => {
                const incomingChatLi = createChatLi("Thinking...", "incoming");
                chatbox.appendChild(incomingChatLi);
                chatbox.scrollTo(0, chatbox.scrollHeight);
                generateResponse(incomingChatLi);
            }, 600);
        }

        chatInput.addEventListener("input", () => {
            chatInput.style.height = `${inputInitHeight}px`;
            chatInput.style.height = `${chatInput.scrollHeight}px`;
        });

        chatInput.addEventListener("keydown", (e) => {
            if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
                e.preventDefault();
                handleChat();
            }
        });

        sendButton.addEventListener("click", handleChat);
        closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
        chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));
    }

    render() {
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
                <ul className="chatbox">
                    {/* Chat messages will be displayed here */}
                </ul>
                <div className="quick-options">
                    <button id="option1">Learn About our Projects</button>
                    <button id="option2">Support Us</button>
                    <button id="option3">I have another Question</button>
                </div>
                <div className="chat-input">
                    <textarea
                        placeholder="Enter your message here.."
                        spellCheck="false"
                        required
                    ></textarea>
                    <span id="send-btn" className="material-symbols-rounded">send</span>
                </div>
            </div>
        );
    }
}

/*
// This is the code for changing the bot's responses, integrate it with the rest of the code once the UI is fixed.
const steps = [
    {
        id: '0',
        message: 'This is Chameleon Chatbot!',
 
        // This calls the next id
        // i.e. id 1 in this case
        trigger: '1',
    }, {
        id: '1',
 
        // This message appears in
        // the bot chat bubble
        message: 'Please write your username',
        trigger: '2'
    }, {
        id: '2',
 
        // Here we want the user
        // to enter input
        user: true,
        trigger: '3',
    }, {
        id: '3',
        message: " hi {previousValue}, how can I help you?",
        trigger: 4
    }, {
        id: '4',
        options: [
             
            { value: 1, label: 'Resources Link' },
            { value: 2, label: 'Projects Link' },
 
        ],
        end: true
    }
];
 
// Set some properties of the bot
const config = {
    botAvatar: "img.png",
    floating: true,
};
 
function Chatbot() {
    return (
        <div className="App">
            <ChatBot
 
                // This appears as the header text for the chat bot
                headerTitle="Chameleon Bot"
                steps={steps}
                {...config}
 
            />
        </div>
    );
}
*/
export default Chatbot;
