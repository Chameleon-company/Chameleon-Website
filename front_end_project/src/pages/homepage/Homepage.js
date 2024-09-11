// import React from "react";//newly add
// import Screen from '../../components/app/Screen';

// import chameleonLogo from "./assets/Header-Chameleon.png";
// import cityOfMelProject from './assets/Thumbnail-CoM.png';
// import evProject from './assets/Thumbnail-EV.jpeg';
// import websiteProject from './assets/Thumbnail-Website.png';
// import './home.css';

// import Chatbox from '../Chatbot/Chatbox';//newly add

// import chatOpenImg from "../Chatbot/images/chat-open.png";
// import chatCloseImg from "../Chatbot/images/chat-close.png";
// import dotMenuImg from "../Chatbot/images/dot-menu.png";
// import chatIcon from "../Chatbot/images/chat-icon.png";
// import fileSelectIcon from "../Chatbot/images/file-select.png";
// import sendMessageImg from "../Chatbot/images/send-message.png";


// import '../Chatbot/Chatbot.css';


// const content1 =
//   'At Chameleon, our mission is to research, create, test, document and deploy IoT-based solutions to enhance life through the application of smart city technologies including: the building of smarter cities, homes, transportation, and energy management systems.';
// const content2 = 'Further advancing sustainable mobility solutions ';
// const content3 = 'City of Melbourne Open Data';
// const content4 =
//   "Melbourne Open Data refers to the City of Melbourne's initiative to make a wide range of public data sets available to the public for free";
// const content5 = 'Website Uplift';
// const content6 =
//   'Research, create, test, document and deploy loT-based solutions to enhance life through the application of smart city technologies.';

// const Homepage = () => {
//   return (
//     <>
//       <Screen>
//         <section className="bg-green-emrld mt-auto mb-auto section-height">
//           {/* <div className=""> */}
//           <h1 className="text-center pt-3 font-bold">Our Projects</h1>
//           <div className="flex flex-col items-center justify-center lg:flex-row text-center lg:justify-around gap-4 p-5 container">
//             <div className="max-w-sm rounded hover:border-[5px] overflow-hidden shadow-lg bg-green-sage">
//               <img
//                 className="w-full h-40 max-w-full object-cover"
//                 src={evProject}
//                 alt="Electric vehicle charging station"
//               />
//               <div className="px-6 py-4">
//                 <div className="font-bold text-xl mb-2">EV Adoption</div>
//                 <p className="text-gray-700 text-base">{content2}</p>
//               </div>
//             </div>
//             <div className="max-w-sm rounded hover:border-[5px] overflow-hidden shadow-lg bg-green-sage">
//               <img
//                 className="w-full h-40 max-w-full object-cover"
//                 src={cityOfMelProject}
//                 alt="Melbourne street"
//               />
//               <div className="px-6 py-4">
//                 <div className="font-bold text-xl mb-2">{content3}</div>
//                 <p className="text-gray-700 text-base">{content4}</p>
//               </div>
//             </div>
//             <div className="max-w-sm rounded hover:border-[5px] overflow-hidden shadow-lg bg-green-sage">
//               <img
//                 className="w-full h-40 max-w-full object-cover"
//                 src={websiteProject}
//                 alt="Chameleon"
//               />
//               <div className="px-6 py-4">
//                 <div className="font-bold text-xl mb-2">{content5}</div>
//                 <p className="text-gray-700 text-base">{content6}</p>
//               </div>
//             </div>
//           </div>
//           {/* </div> */}
//         </section>

//         {/* Add the Chatbox component */}
//         <Chatbox
//           chameleonLogo={chameleonLogo}
//           chatOpenImg={chatOpenImg}
//           chatCloseImg={chatCloseImg}
//           dotMenuImg={dotMenuImg}
//           chatIcon={chatIcon}
//           fileSelectIcon={fileSelectIcon}
//           sendMessageImg={sendMessageImg}
//         />
//       </Screen>
//     </>
//   );
// };

// export const homeSearchableContents = [
//   content1,
//   content2,
//   content3,
//   content4,
//   content5,
//   content6,
// ];

// export default Homepage;


import React, { useState } from "react";
import Screen from '../../components/app/Screen';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faTimes, faEllipsisV, faPaperclip, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { projects, chatboxAssets } from "./data"; 
import './home.css';
import Chatbox from '../Chatbot/Chatbox';
import '../Chatbot/Chatbot.css';

const content1 =
  'At Chameleon, our mission is to research, create, test, document and deploy IoT-based solutions to enhance life through the application of smart city technologies including: the building of smarter cities, homes, transportation, and energy management systems.';
const content2 = 'Further advancing sustainable mobility solutions ';
const content3 = 'City of Melbourne Open Data';
const content4 =
  "Melbourne Open Data refers to the City of Melbourne's initiative to make a wide range of public data sets available to the public for free";
const content5 = 'Website Uplift';
const content6 =
  'Research, create, test, document and deploy IoT-based solutions to enhance life through the application of smart city technologies.';

const Homepage = () => {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <Screen>
      <section className="bg-green-emrld mt-auto mb-auto section-height">
        <h1 className="text-center pt-3 font-bold">Our Projects</h1>
        <div className="container">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <img src={project.image} alt={project.title} />
              <div className="title">{project.title}</div>
              <p className="details">{project.details}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Chatbot Starts */}
      <div className="chatBot absolute bottom-5 flex flex-col">
        {chatOpen && (
          <>
            <div className="chameleonBot sm:w-[350px] w-[90%]">
              <div className="chatBotHeader flex items-center justify-between gap-3 bg-[#069f89] p-2">
                <FontAwesomeIcon icon={faCommentDots} size="2x" />
                <h5 className="m-0"> Chameleon Bot </h5>
                <FontAwesomeIcon icon={faEllipsisV} size="1x" />
              </div>

              <div className="chatBotMessage bg-[#deece3] p-2">
                <div className="greenMessage flex gap-3 items-end justify-between mb-3">
                  <FontAwesomeIcon icon={faCommentDots} size="2x" />
                  <div className="p-2 bg-[#069f89] rounded-[5px]">
                    <p className="m-0 font-medium">
                      Hi, I'm Chameleon and I'm here to help you. <br />
                      To get started, choose from one of the below.
                    </p>
                  </div>
                </div>
                <p className="p-2 text-center w-fit my-2 ml-auto mr-0 border-[#069f89] border-2 rounded-[10px] font-medium bg-[#d9d9d9]">
                  Learn About Our Project
                </p>
                <p className="p-2 text-center w-fit my-2 ml-auto mr-0 border-[#069f89] border-2 rounded-[10px] font-medium bg-[#d9d9d9]">
                  Support Us
                </p>
                <p className="p-2 text-center w-fit my-2 ml-auto mr-0 border-[#069f89] border-2 rounded-[10px] font-medium bg-[#d9d9d9]">
                  I have another question
                </p>

                <div className="sendMessage flex justify-between gap-3 mt-3">
                  <label htmlFor="file">
                    <FontAwesomeIcon icon={faPaperclip} size="2x" />
                  </label>
                  <input type="file" id="file" className="hidden" />
                  <input
                    type="text"
                    placeholder="Type a message"
                    className="w-100 p-2 bg-[#d9d9d9] border-2 border-[#000000] rounded-[10px]"
                  />
                  <button type="submit">
                    <FontAwesomeIcon icon={faPaperPlane} size="2x" />
                  </button>
                </div>
              </div>
            </div>
            <FontAwesomeIcon
              icon={faTimes}
              size="2x"
              onClick={() => setChatOpen(false)}
              className="md:w-[60px] w-[50px] cursor-pointer"
            />
          </>
        )}
      </div>

      <Chatbox
        chameleonLogo={chatboxAssets.chameleonLogo}
        chatOpenImg={chatboxAssets.chatOpenImg}
        chatCloseImg={chatboxAssets.chatCloseImg}
        dotMenuImg={chatboxAssets.dotMenuImg}
        chatIcon={chatboxAssets.chatIcon}
        fileSelectIcon={chatboxAssets.fileSelectIcon}
        sendMessageImg={chatboxAssets.sendMessageImg}
      />
    </Screen>
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
