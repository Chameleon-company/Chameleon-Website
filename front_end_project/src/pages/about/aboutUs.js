import React from "react";
import chameleonImg from "./assets/needToAdd.jpeg";
import achievmentIcon1 from "./assets/achievmentIcon1.png";
import achievmentIcon2 from "./assets/achievmentIcon2.png";
import achievmentIcon3 from "./assets/achievmentIcon3.png";
import achievmentIcon4 from "./assets/achievmentIcon4.png";

import styles from "./aboutUs.module.css";
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

function AboutUs () {
  return (
    <Screen>
      <div className="bg-[#deece3]">
        {/* About Us Section */}
        <div className={styles.aboutSection}>
          <h3 className="text-center font-semibold lg:text-4xl text-3xl">
            About Us
          </h3>
          <p className={`${styles.aboutP} lg:text-2xl text-xl leading-tight text-center m-0 md:mt-3`}>
            Chameleon aims to utilize the Internet of Things (IoT), which is
            an ecosystem consisting of web-enabled smart devices such as phones,
            suburban traffic systems, and domestic appliances, that all use
            embedded systems, such as processors, sensors, and communication
            hardware, to collect, send and act on data they acquire from their environments.
          </p>
        </div>

        {/* Mission Section */}
        <div className={styles.missionSection}>
          <h3 className="text-center font-semibold lg:text-4xl text-3xl">
            Our Mission
          </h3>
          <div className="flex mx-auto flex-col md:gap-5 gap-3 justify-between items-center max-w-6xl">
            <img
              alt="chameleon-logo"
              src={chameleonImg}
              className="lg:w-[300px] md:w-[250px] mt-3 w-[200px]"
            />
            <p className="lg:text-xl text-lg m-0 text-center">
              Chameleon aims to utilize the Internet of Things (IoT), which is
              an ecosystem consisting of web-enabled smart devices such as
              phones, suburban traffic systems, and domestic appliances, that
              all use embedded systems, such as processors, sensors, and
              communication hardware, to collect, send and act on data they
              acquire from their environments.
            </p>
          </div>
        </div>
        {/* Achievements Section */}
        <div className={styles.achievementsSection}>
          <h3 className="text-center font-semibold lg:text-4xl text-3xl">
            Achievements
          </h3>
          <div className="flex gap-3 flex-col md:flex-row lg:gap-5 justify-center items-center md:mt-4 mt-4 max-[1199px]:flex-wrap max-w-6xl mx-auto">
            {/* Achievements Boxes */}
            {/* Box 1 */}
            <div className="achievementsBox flex items-center">
              <div className="boxIcon bg-[#d9d9d9] p-2 rounded-full z-2 relative z-[1px] border-black border-[1px]">
                <img alt="achievement-icon-1" src={achievmentIcon1} className="w-[40px]" />
              </div>
              <div className="boxText text-black py-[15px] w-[300px] md:w-[250px] text-center border-black ml-[-45px] border-[2px] z-1 border-l-0 rounded-full">
                <h5 className="m-0 font-bold">50,000</h5>
              </div>
            </div>
            {/* Box 2 */}
            <div className="achievementsBox flex items-center">
              <div className="boxIcon bg-[#d9d9d9] p-2 rounded-full z-2 relative z-[1px] border-black border-[1px]">
                <img alt="achievement-icon-2" src={achievmentIcon2} className="w-[40px]" />
              </div>
              <div className="boxText text-black py-[15px] w-[300px] md:w-[250px] text-center border-black ml-[-45px] border-[2px] z-1 border-l-0 rounded-full">
                <h5 className="m-0 font-bold">43,850 +</h5>
              </div>
            </div>
            {/* Box 3 */}
            <div className="achievementsBox flex items-center">
              <div className="boxIcon bg-[#d9d9d9] p-2 rounded-full z-2 relative z-[1px] border-black border-[1px]">
                <img alt="achievement-icon-3" src={achievmentIcon3} className="w-[40px]" />
              </div>
              <div className="boxText text-black py-[15px] w-[300px] md:w-[250px] text-center border-black ml-[-45px] border-[2px] z-1 border-l-0 rounded-full">
                <h5 className="m-0 font-bold">10,000 +</h5>
              </div>
            </div>
            {/* Box 4 */}
            <div className="achievementsBox flex items-center">
              <div className="boxIcon bg-[#d9d9d9] p-2 rounded-full z-2 relative z-[1px] border-black border-[1px]">
                <img alt="achievement-icon-4" src={achievmentIcon4} className="w-[40px]" />
              </div>
              <div className="boxText text-black py-[15px] w-[300px] md:w-[250px] text-center border-black ml-[-45px] border-[2px] z-1 border-l-0 rounded-full">
                <h5 className="m-0 font-bold">12</h5>
              </div>
            </div>
          </div>
        </div>

        {/* Add the Chatbox component */}
        <Chatbox chameleonLogo={chameleonLogo} chatOpenImg={chatOpenImg} chatCloseImg={chatCloseImg} dotMenuImg={dotMenuImg} chatIcon={chatIcon} fileSelectIcon={fileSelectIcon} sendMessageImg={sendMessageImg} />

      </div>
    </Screen>
  );
}

export default AboutUs;
