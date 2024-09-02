import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Chatbot.css';
import './chatbox.css';

import { IoIosChatbubbles } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { IoMdAttach } from "react-icons/io";
import { IoIosSend } from "react-icons/io";

const Chatbox = ({ chatIcon }) => {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div className="chatBot absolute bottom-5 flex flex-col">
      {!chatOpen && (
        <IoIosChatbubbles className='text-white' size={60} onClick={() => setChatOpen(true)} />
      )}

      {chatOpen && (
        <>
          <div className="chameleonBot sm:w-[350px] w-[90%]">
            <div className="chatBotHeader flex items-center justify-between bg-[#069f89] p-2">
              {/* <img alt="" src={chameleonLogo} className="lg:w-[70px] md:w-[70px] w-[60px]" /> */}
              <h5 className="text-white"> Chameleon Bot </h5>
              <IoMdClose className='text-white' size={30} onClick={() => setChatOpen(false)} />
            </div>
            <div className="chatBotMessage bg-[#deece3] p-2">
              <div className="greenMessage flex gap-3 items-end justify-between mb-3">
                <img alt="" src={chatIcon} className="lg:w-[40px] md:w-[40px] w-[30px]" />

                <div className="p-2 bg-[#069f89] rounded-[5px]">
                  <p className="m-0 font-medium"> Hi, I'm Chameleon and I'm here to help you. <br /> To get started, choose from one of the below. </p>
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
                <div>
                  <label htmlFor="file">
                    <IoMdAttach size={30} />
                  </label>
                  <input type="file" id="file" />
                </div>
                <input type="text" placeholder="Type a message" className="w-100 p-2 bg-[#d9d9d9] border-2 border-[#000000] rounded-[10px]" />
                <IoIosSend size={50} />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

Chatbox.propTypes = {
  chameleonLogo: PropTypes.string.isRequired,
  chatOpenImg: PropTypes.string.isRequired,
  chatCloseImg: PropTypes.string.isRequired,
  dotMenuImg: PropTypes.string.isRequired,
  chatIcon: PropTypes.string.isRequired,
  fileSelectIcon: PropTypes.string.isRequired,
  sendMessageImg: PropTypes.string.isRequired,
};

export default Chatbox;
