import React from "react";
import SwiperNews from "./Swiper";
import articleList from "./articles";
import "./styles.css";
import SearchButton from "./images/SearchButton.png";
import Screen from '../../components/app/Screen';
import Chatbox from '../Chatbot/Chatbox';
import '../Chatbot/chatbox.css';
import chameleonLogo from "../../assets/ChameleonLogo.png";
import chatOpenImg from "../Chatbot/images/chat-open.png";
import chatCloseImg from "../Chatbot/images/chat-close.png";
import dotMenuImg from "../Chatbot/images/dot-menu.png";
import chatIcon from "../Chatbot/images/chat-icon.png";
import fileSelectIcon from "../Chatbot/images/file-select.png";
import sendMessageImg from "../Chatbot/images/send-message.png";

function News () {
  return (
    <Screen>
      <main className="bg-[#4fa373] py-3">
        <h1 className="text-[27px] font-bold text-center text-gray-800 pt-2"> Latest News </h1>

        <div className=" grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start justify-center mt-10 gap-3 gap-y-5 overflow-hidden md:grid hidden p-2 m-3">
          {articleList.map((item, index) => (
            <div className="flex flex-col justify-center items-center bg-gray-100 rounded-md p-2" key={index}>
              <h2 className="text-[20px] font-bold text-center text-gray-800 uppercase whitespace-nowrap mt-1"> {item.title} </h2>
              <img alt={item.title} src={item.image} className="mt-1 w-[360px] h-[225px] border-gray-200 border-4 rounded-md" />
              <p className="text-gray-800 font-medium text-[15px] max-w-[360px] p-2 mt-2 text-left"> {item.preview} </p>
              <h3 className="text-[14px] text-gray-800 font-bold text-left max-w-[360px] w-full"> {item.date} </h3>
            </div>
          ))}
        </div>
        <div className="px-[10px] md:hidden block">
          <SwiperNews/>
        </div>
      </main>
      {/* Add the Chatbox component */}
      <Chatbox chameleonLogo={chameleonLogo} chatOpenImg={chatOpenImg} chatCloseImg={chatCloseImg} dotMenuImg={dotMenuImg} chatIcon={chatIcon} fileSelectIcon={fileSelectIcon} sendMessageImg={sendMessageImg} />
    </Screen>
  );
}

export const newsSearchableContents = articleList.reduce((acc, article) => {
  return [...acc, article.title, article.preview, article.author];
}, []);

export default News;
