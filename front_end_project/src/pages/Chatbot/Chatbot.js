import React, { useState, useEffect, useRef } from "react";
import "./Chatbot.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Screen from "../../components/app/Screen";

const Chatbot = () => {
  const [userMessage, setUserMessage] = useState("");
  const chatInputRef = useRef(null);
  const chatboxRef = useRef(null);
  const sendButtonRef = useRef(null);
  const onclickHandler = (func) => {
    if (func) func();
  };

  const initialMessages = [
    { id: "0", message: "This is Chameleon Chatbot! To get started choose from one of the below", trigger: "1", },
    { id: "1", message: "Learn about our projects", trigger: "2", onclick: () => window.location.replace("/projects"), },
    { id: "2", message: "Support us", trigger: "3", onclick: () => window.location.replace("/projects"), },
    { id: "3", message: " I have another question", trigger: 4, onclick: () => window.location.replace("/projects"), },
  ];

  useEffect(() => {
    const handleChat = () => {
      const userMsg = userMessage.trim();
      if (!userMsg) return;

      const chatLi = document.createElement("li");
      chatLi.classList.add("chat", "outgoing");
      chatLi.innerHTML = `<p>${userMsg}</p>`;

      chatboxRef.current.appendChild(chatLi);
      chatInputRef.current.value = "";
      setUserMessage("");

      setTimeout(() => {
        const incomingChatLi = document.createElement("li");
        incomingChatLi.classList.add("chat", "incoming");
        incomingChatLi.innerHTML = `<img src="images/chameleon (2).png" alt="Incoming Message Icon"><p>Thinking...</p>`;

        chatboxRef.current.appendChild(incomingChatLi);
        // Simulate response
      }, 600);
    };

    const sendButton = sendButtonRef.current;
    sendButton.addEventListener("click", handleChat);

    return () => { sendButton.removeEventListener("click", handleChat); };
  }, [userMessage]);

  return (
    <Screen>
      <div className="chatbot-container">
        <div className="chatbot">
          <header>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={require("./images/ChameleonLogo.png")}
                alt="Chatbot"
                className="chatbot-image"
              />
              <h2>Chameleon</h2>
            </div>

            <button className="options-button">
             <MoreHorizIcon style={{ color: 'white' }} />
            </button>
          </header>
          <ul className="chatbox" ref={chatboxRef}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div>
                <img src={require("./images/chameleonbot.png")} alt="Chatbot" height={50} width={50} />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontFamily: "'Caveat', cursive", }} >
                {initialMessages.map((item, index) => (
                  <div
                    style={{ maxWidth: "70%", backgroundColor: "#a8bcba", borderRadius: "15px", padding: "10px", marginLeft: "10px", marginBottom: "5px", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", fontFamily: "'Pacifico', cursive", fontSize: "16px", lineHeight: "1.5", transition: index >= 1 ? "transform 0.2s ease-in-out" : "none", cursor: "pointer", }}
                    onMouseOver={
                      index >= 1
                        ? (e) => {
                          e.currentTarget.style.transform = "scale(1.05)";
                          e.currentTarget.style.backgroundColor = "#768b8a"; // Change background color on hover
                        }
                        : null
                    }
                    onMouseOut={
                      index >= 1
                        ? (e) => {
                          e.currentTarget.style.transform = "scale(1)";
                          e.currentTarget.style.backgroundColor = "#8fa5a4"; // Revert to original background color
                        }
                        : null
                    }
                    onClick={() => onclickHandler(item.onclick)}
                  >
                    {item.message}
                  </div>
                ))}
              </div>
            </div>
          </ul>
          <div className="chat-input" >
            <textarea placeholder="Enter your message here.." spellCheck="false" ref={chatInputRef} onChange={(e) => setUserMessage(e.target.value)} />
            <span id="send-btn" className="material-symbols-rounded" ref={sendButtonRef} > Send </span>
          </div>
        </div>
      </div>
    </Screen>
  );
};

export default Chatbot;
