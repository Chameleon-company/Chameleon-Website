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
      <main className="bg-[#4fa373] section-height">
        <h1 className="text-[27px] font-bold text-center text-black"> Latest News </h1>

        <div className=" grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start justify-center mt-10 gap-3 gap-y-5 overflow-hidden md:grid hidden px-[20px]">
          {articleList.map((item, index) => (
            <div className="flex flex-col justify-center items-center" key={index}>
              <h2 className="text-[24px] font-bold text-center text-black uppercase"> {item.title} </h2>
              <img alt={item.title} src={item.image} className="mt-2 w-[360px] h-[180px] border-white border-y-[16px] border-x-[20px]" />
              <p className="text-black font-medium text-[15px] max-w-[360px] pt-2 text-left hidetext"> {item.preview} </p>
              <h3 className="text-[14px] text-black font-bold text-left max-w-[360px] w-full"> {item.date} </h3>
            </div>
          ))}
        </div>
        <div className="px-[10px] md:hidden block">
          <SwiperNews />
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
