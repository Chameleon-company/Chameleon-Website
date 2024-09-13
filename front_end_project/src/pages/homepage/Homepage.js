import React from "react"; //newly add
import Screen from "../../components/app/Screen";

import chameleonLogo from "./assets/Header-Chameleon.png";
import cityOfMelProject from "./assets/Thumbnail-CoM.png";
import evProject from "./assets/Thumbnail-EV.jpeg";
import websiteProject from "./assets/Thumbnail-Website.png";
import "./home.css";

import Chatbox from "../Chatbot/Chatbox"; //newly add

import chatOpenImg from "../Chatbot/images/chat-open.png";
import chatCloseImg from "../Chatbot/images/chat-close.png";
import dotMenuImg from "../Chatbot/images/dot-menu.png";
import chatIcon from "../Chatbot/images/chat-icon.png";
import fileSelectIcon from "../Chatbot/images/file-select.png";
import sendMessageImg from "../Chatbot/images/send-message.png";

import "../Chatbot/Chatbot.css";

const content1 =
  "At Chameleon, our mission is to research, create, test, document and deploy IoT-based solutions to enhance life through the application of smart city technologies including: the building of smarter cities, homes, transportation, and energy management systems.";
const content2 = "Further advancing sustainable mobility solutions ";
const content3 = "City of Melbourne Open Data";
const content4 =
  "Melbourne Open Data refers to the City of Melbourne's initiative to make a wide range of public data sets available to the public for free";
const content5 = "Website Uplift";
const content6 =
  "Research, create, test, document and deploy loT-based solutions to enhance life through the application of smart city technologies.";

const Homepage = () => {
  return (
    <>
      <Screen>
        <section className="bg-green-emrld mt-auto mb-auto section-height relative">
          {/* <div className=""> */}
          <div className="absolute inset-0 bg-green-emrld z-negative"></div>
          <div className="relative z-10 px-4">
            <h1 className="text-center pt-3 font-bold">Our Projects</h1>
            <div className="flex flex-col items-center justify-center gap-4 p-5">
              {/* First item */}
              <div className="flex flex-col md:flex-row items-center md:items-start justify-center w-full max-w-3xl bg-green-sage p-4 rounded-lg shadow-lg h-auto lg:h-64">
                <img
                  className="w-full md:w-1/3 h-40 lg:h-full object-cover rounded-lg"
                  src={evProject}
                  alt="Electric vehicle charging station"
                />
                <div className="md:w-2/3 text-left flex flex-col justify-center p-4 h-full">
                  <div className="font-bold text-xl mb-2">EV Adoption</div>
                  <p className="text-gray-700 text-base">{content2}</p>
                </div>
              </div>

              {/* Second item */}
              <div className="flex flex-col md:flex-row items-center md:items-start justify-center w-full max-w-3xl bg-green-sage p-4 rounded-lg shadow-lg h-auto lg:h-64">
                <img
                  className="w-full md:w-1/3 h-40 lg:h-full object-cover rounded-lg"
                  src={cityOfMelProject}
                  alt="Melbourne street"
                />
                <div className="md:w-2/3 text-left flex flex-col justify-center p-4 h-full">
                  <div className="font-bold text-xl mb-2">{content3}</div>
                  <p className="text-gray-700 text-base">{content4}</p>
                </div>
              </div>

              {/* Third item */}
              <div className="flex flex-col md:flex-row items-center md:items-start justify-center w-full max-w-3xl bg-green-sage p-4 rounded-lg shadow-lg h-auto lg:h-64">
                <img
                  className="w-full md:w-1/3 h-40 lg:h-full object-cover rounded-lg"
                  src={websiteProject}
                  alt="Chameleon"
                />
                <div className="md:w-2/3 text-left flex flex-col justify-center p-4 h-full">
                  <div className="font-bold text-xl mb-2">{content5}</div>
                  <p className="text-gray-700 text-base">{content6}</p>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </section>

        {/* Add the Chatbox component */}
        <Chatbox
          chameleonLogo={chameleonLogo}
          chatOpenImg={chatOpenImg}
          chatCloseImg={chatCloseImg}
          dotMenuImg={dotMenuImg}
          chatIcon={chatIcon}
          fileSelectIcon={fileSelectIcon}
          sendMessageImg={sendMessageImg}
        />
      </Screen>
    </>
  );
};

export const homeSearchableContents = [
  content1,
  content2,
  content3,
  content4,
  content5,
  content6,
];

export default Homepage;
