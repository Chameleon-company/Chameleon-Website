import React, { useState } from "react";
import styles from "./projects.module.css";
import chameleonLogo from "../../assets/ChameleonLogo.png";
import chatCloseImg from "./image/chat-close.png";
import dotMenuImg from "./image/dot-menu.png";
import chatIcon from "./image/chat-icon.png";
import fileSelectIcon from "./image/file-select.png";
import sendMessageImg from "./image/send-message.png";
import projectList from "./data";
import Screen from '../../components/app/Screen';
import './project.css';
import '../Chatbot/chatbox.css';

const content1 =
  "At Chameleon, our mission is to research, create, test, document and deploy loT-based solutions to enhance life through the application of smart city technologies including: the building of smarter cities, homes, transportation, and energy management systems.";

const Projects = () => {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <Screen>
      {/* // Sets the background color to a specific shade of light blue with the hex code #deece3 (bg-[#deece3]). */}
      <div className="bg-[#deece3]">
        {/* Creates a flex container with column orientation, centered items, a maximum width of 4xl, some spacing, and padding */}
        <div className=" flex flex-col items-center max-w-4xl mx-auto gap-3 py-6 px-3">
          {/* Sets the width to 150 pixels on large screens, 120 pixels on medium screens, and 100 pixels by default, with an automatic height and centered text. */}
          <img
            alt=""
            src={chameleonLogo}
            className="lg:w-[150px] md:w-[120px] w-[100px] h-auto text-center"
          />
          {/* Applies a combination of styles, including a specified text color, text size for different screen sizes, margin, font thickness, and alignment. */}
          <p
            className={`${styles.p} text-black text-center lg:text-[18px] md:text-[17px] text-[16px] m-0 font-thin`}
          >
            {content1}
          </p>
          {/* this class combination sets a maximum width of 5xl (max-w-5xl), right padding of 5 units (pr-5), zero top and bottom margins (my-0), zero right margin (mr-0), positions the element to the far right within its container (ml-auto), sets the text color to black (text-black), and applies a semi-bold font weight (font-semibold). */}
          <p className="max-w-5xl pr-5 my-0 mr-0 ml-auto text-black font-semibold">
            -Chameleon CEO
          </p>
        </div>
        {/* Applies a combination of styles, including a background color, text color, and relative positioning, likely for a project section . */}
        <div
          className={` ${styles.projectSection} bg-[#4fa373] text-black relative section-height`}
        >
          {/* Styles the text to be centered, semi-bold, with a font size of 4xl on large screens, 3xl on small screens, 26px by default, and in uppercase. */}
          <h3 className="text-center font-semibold lg:text-4xl sm:text-3xl text-[26px] uppercase">
            Our Projects
          </h3>
          {/* Sets up a grid layout with varying numbers of columns based on screen size, maximum width of 6xl, some spacing, and padding */}
          <div className="grid lg:grid-cols-3 grid-cols-2 max-[520px]:grid-cols-1 gap-3 max-w-6xl mx-auto mt-3 px-3">
            {projectList.map((item) => (
              <a href={`/project/${item.id}`} className="no-underline">
                {/* Styles a container with a specific background color, padding for different screen sizes, some spacing, and centered text */}
                <div className="bg-[#deece3] hover:border-[5px] hover:bg-slate-400 lg:p-8 md:p-6 p-[15px] lg:pb-4 pb-3 text-center ">
                  <img
                    alt=""
                    src={item.image}
                    // Sets the width to 100% and a fixed height of 250 pixels with the object cover property for an image
                    className="w-100 h-[250px] object-cover "
                  />
                  {/* Styles text with a specific color, top margin, and bottom margin, and a font size of 20px */}
                  <h4 className="text-black mt-3 mb-0 text-[20px]">
                    {item.title}
                  </h4>
                </div>
              </a>
            ))}
          </div>
          {/* Applies a combination of styles, including a background color, text color, and relative positioning, likely for a project section . */}
          <div
            className={` ${styles.projectSection} bg-[#4fa373] text-black relative`}
          >
            {/* CHATBOT STARTS */}

            {/* Positions a chat bot element absolutely at the bottom with a flex column layout  */}
            <div className="chatBot absolute bottom-5 flex flex-col">
              {/* TO-DO' SPRINT 2 */}
              {/* {!chatOpen && (
              <img
                alt=""
                src={chatOpenImg}
                // Sets the width to 60px on medium screens and 50px by default
                className="md:w-[60px] w-[50px]"
                onClick={() => setChatOpen(true)}
              />
            )} */}

              {chatOpen && (
                <>
                  {/* Styles a chameleon bot element with varying widths based on screen size */}
                  <div className="chameleonBot sm:w-[350px] w-[90%]">
                    {/* Styles a chat bot header with flex layout, centered items, a background color, and padding */}
                    <div className="chatBotHeader flex items-center justify-between gap-3 bg-[#069f89] p-2">
                      <img
                        alt=""
                        src={chameleonLogo}
                        // Sets the width to 70px on large and medium screens and 60px by default
                        className="lg:w-[70px] md:w-[70px] w-[60px]"
                      />
                      {/* Sets Margin 0 */}
                      <h5 className="m-0"> Chameleon Bot </h5>
                      {/* Sets the width to 15px */}
                      <img alt="" src={dotMenuImg} className="w-[15px]" />
                    </div>
                    {/* Styles a chat bot message with a specific background color and padding  */}
                    <div className="chatBotMessage bg-[#deece3] p-2">
                      {/* Styles a green message with a flex layout, spacing, and alignment */}
                      <div className="greenMessage flex gap-3 items-end justify-between mb-3">
                        <img
                          alt=""
                          src={chatIcon}
                          // Sets the width to 40px on large and medium screens and 30px by default
                          className="lg:w-[40px] md:w-[40px] w-[30px]"
                        />
                        {/* Adds padding and a specific background color with rounded corners to a container */}
                        <div className="p-2 bg-[#069f89] rounded-[5px]">
                          {/* Sets the margin to zero and applies a medium font weight */}
                          <p className="m-0 font-medium">
                            Hi, I'm Chameleon and I'm here to help you. <br />
                            To get started, choose from one of the below.
                          </p>
                        </div>
                      </div>
                      {/* Adds padding, sets the text center, adjusts width to fit content, adds margin, removes right margin, adds a border with a specific color and thickness, and applies rounded corners, medium font weight, and a background color */}
                      <p className="p-2 text-center w-fit my-2 ml-auto mr-0 border-[#069f89] border-2 rounded-[10px] font-medium bg-[#d9d9d9]">
                        Learn About Our Project
                      </p>
                      <p className="p-2 text-center w-fit my-2 ml-auto mr-0 border-[#069f89] border-2 rounded-[10px] font-medium bg-[#d9d9d9]">
                        Support Us
                      </p>
                      <p className="p-2 text-center w-fit my-2 ml-auto mr-0 border-[#069f89] border-2 rounded-[10px] font-medium bg-[#d9d9d9]">
                        I have another question
                      </p>
                      {/* Styles a send message container with a flex layout, spacing, and top margin  */}
                      <div className="sendMessage flex justify-between gap-3 mt-3">
                        <div>
                          <label htmlFor="file">
                            {/* Sets the Width to 30px */}
                            <img alt="" src={fileSelectIcon} className="w-[30px]" />
                          </label>
                          <input type="file" id="file" />
                        </div>
                        <input
                          type="text"
                          placeholder="Type a message"
                          // Sets the width to 100%, adds padding, and styles a container with a specific background color, border color, border thickness, and rounded corners
                          className="w-100 p-2 bg-[#d9d9d9] border-2 border-[#000000] rounded-[10px]"
                        />
                        <input
                          alt=""
                          type="image"
                          src={sendMessageImg}
                          // Sets the width to 30 pixels and automatically adjusts the height
                          className="w-[30px] h-auto"
                        />
                      </div>
                    </div>
                  </div>
                  <img
                    alt=""
                    src={chatCloseImg}
                    // Sets the width to 60 pixels on medium screens and 50 pixels by default
                    className="md:w-[60px] w-[50px]"
                    onClick={() => setChatOpen(false)}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </Screen>
  );
};

export const projectsSearchableContents = [content1];

export default Projects;
