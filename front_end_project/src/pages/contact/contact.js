import React, { Component, useState, useEffect } from "react";
import styles from "./contact.module.css";
import Phone from "./image/phone.png";
import Chat from "./image/chat.png";
import Email from "./image/email.png";
import { notifyWelcome } from "../../components/notificationComp/NotificationComponent";

import chameleonLogo from "../../assets/ChameleonLogo.png";
import chatOpenImg from "../projects/image/chat-open.png";
import chatCloseImg from "../projects/image/chat-close.png";
import dotMenuImg from "../projects/image/dot-menu.png";
import chatIcon from "../projects/image/chat-icon.png";
import fileSelectIcon from "../projects/image/file-select.png";
import sendMessageImg from "../projects/image/send-message.png";

// class Contact extends Component {
//   componentDidMount() {
//     // Display a welcome message when the component mounts
//     notifyWelcome(
//       "Make sure to contact us only on working days 9:00 AM onwards!",
//     );
//   }

const Contact = () => {
  const [chatOpen, setChatOpen] = useState(false);

  useEffect(() => {
    // Display a welcome message when the component mounts
    notifyWelcome(
      "Make sure to contact us only on working days 9:00 AM onwards!",
    );
  }, []);

  // render() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600&display=swap"
      />
      {/* // These Classes sets the background color to a specific shade of light */}
      {/* blue with the hex code #deece3 (bg-[#deece3]). */}
      <div className="bg-[#DEECE3]">
        {/* These classes combination sets the background color to a specific shade of green with the hex code #4fa373 (bg-[#4fa373]). It also adjusts the text size to 5xl on medium screens (md:text-5xl), 4xl by default (text-4xl), applies a medium font weight (font-medium), centers the text (text-center), and sets the text color to black (text-black). */}
        <div
          className={`${styles.contact_title} bg-[#4fa373]  md:text-5xl text-4xl font-medium text-center text-white`}
          style={{ fontFamily: "Roboto, sans-serif" }}
        >
          CONTACT US
        </div>
        {/* These class combination sets up a grid layout with one column by default and three columns on medium screens (grid-cols-1 and md:grid-cols-3). It restricts the maximum width to 6xl and horizontally centers the grid (max-w-6xl and mx-auto). Additionally, it evenly distributes the grid items along the main axis and aligns them at the start of the cross axis (justify-between and items-start), while specifying a gap of 3 units between the grid items (gap-3). */}
        <div
          className={`${styles.contact_body} grid md:grid-cols-3 grid-cols-1   max-w-6xl mx-auto   justify-between items-start gap-3 `}
        >
          <div className="contact_item">
            {/* These Classes combination creates a flex container with items aligned at the start of the main axis (justify-start) and centered along the cross-axis (items-center). It also specifies a gap of 3 units between the flex items (gap-3). */}
            <div className="flex justify-start items-center gap-3">
              <div className="contact_item_img">
                {/* These Classes combination sets the width of the element to 50 pixels by default (w-[50px]), 60 pixels on medium screens (md:w-[60px]), and 70 pixels on large screens (lg:w-[70px]). */}
                <img
                  alt="phone"
                  src={Phone}
                  className="lg:w-[70px] md:w-[60px] w-[50px]"
                ></img>
              </div>
              {/* These Classes combination sets the text size to 3xl on large screens (lg:text-3xl), 2xl on medium screens (md:text-2xl), and 22 pixels by default (text-[22px]). It also applies a semi-bold font weight (font-semibold). Note that there's a missing hyphen in "lgtext-3xl," it should be lg:text-3xl. */}
              <div
                className="contact_item_title lgtext-3xl md:text-2xl text-[22px] font-semibold "
                style={{ fontFamily: "Roboto, sans-serif" }}
              >
                Phone Us
              </div>
            </div>
            {/* These Classes combination adds a 2-pixel border with the color #7a7e7c (border-2 and border-[#7a7e7c]), sets the width to 100% (w-[100%]), adds padding of 2 units (p-2), centers the text (text-center), applies a semi-bold font weight (font-semibold), sets the text color to black (text-black), and adds a top margin of 3 units (mt-3). Additionally, it adjusts the text size to 18 pixels on large screens (lg:text-[18px]) and 17 pixels by default (text-[17px]). */}
            <div
              className="contact_item_context border-2 border-[#7a7e7c] w-[100%] p-2 text-center font-semibold text-black lg:text-[18px] text-[17px] mt-3"
              style={{ fontFamily: "Roboto, sans-serif" }}
            >
              Mon-Fri 9-pm(AEST)
              <br />
              <p
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontStyle: "normal",
                }}
              >
                PH:03 5975 6586
              </p>
            </div>
            <div className="text-center">
              <a href="tel:+1234567890">
                <button
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    fontStyle: "normal",
                  }}
                  className={`${styles.contact_item_btn} text-center bg-[#00b165] py-2 px-10 text-white mt-2 rounded-[15px] font-semibold text-lg m-0 leading-[1] shadow-md md:text-[18px] text-[17px] `}
                >
                  Call Us
                </button>
              </a>
            </div>
          </div>
          <div className="contact_item text-center">
            {/* These Classes combination creates a flex container with items aligned at the start of the main axis (justify-start) and centered along the cross-axis (items-center). It also specifies a gap of 3 units between the flex items (gap-3). */}
            <div className="flex justify-start items-center gap-3">
              <div className="contact_item_img">
                {/* These Classes combination sets the width of the element to 50 pixels by default (w-[50px]), 60 pixels on medium screens (md:w-[60px]), and 70 pixels on large screens (lg:w-[70px]). */}
                <img
                  alt="email"
                  src={Email}
                  className="lg:w-[70px] md:w-[60px] w-[50px]"
                ></img>
              </div>
              {/* These Classes combination sets the text size to 3xl on large screens (lg:text-3xl), 2xl on medium screens (md:text-2xl), and 22 pixels by default (text-[22px]). It also applies a semi-bold font weight (font-semibold). Note that there's a missing hyphen in "lgtext-3xl," it should be lg:text-3xl. */}
              <div
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontStyle: "normal",
                }}
                className="contact_item_title lgtext-3xl md:text-2xl text-[22px] font-semibold "
              >
                Send a Email
              </div>
            </div>
            {/* These Classes combination adds a 2-pixel border with the color #7a7e7c (border-2 and border-[#7a7e7c]), sets the width to 100% (w-[100%]), adds padding of 2 units (p-2), centers the text (text-center), applies a semi-bold font weight (font-semibold), sets the text color to black (text-black), and adds a top margin of 3 units (mt-3). Additionally, it adjusts the text size to 18 pixels on large screens (lg:text-[18px]) and 17 pixels by default (text-[17px]). */}
            <div
              style={{
                fontFamily: "Roboto, sans-serif",
                fontStyle: "normal",
              }}
              className="contact_item_context border-2 border-[#7a7e7c] w-[100%] p-2 text-center font-semibold text-black lg:text-[18px] text-[17px] mt-3"
            >
              Send us your question via email info@chameleon.com.au and we will
              get back to you
            </div>
            <a href="mailto:info@chameleon.com.au">
              {/* These Classes combination styles a paragraph element with centered text, a green background (#00b165), padding, rounded corners, a semi-bold font, varying text sizes for different screen sizes, and a drop shadow. It is designed for use within a paragraph of text. */}
              <button
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontStyle: "normal",
                }}
                className={`${styles.contact_item_btn} text-center bg-[#00b165] py-2 px-10 text-white mt-2 rounded-[15px] font-semibold text-lg m-0 leading-[1] shadow-md md:text-[18px] text-[17px] `}
              >
                Email Us
              </button>
            </a>
          </div>
          <div className="contact_item text-center">
            {/* These Classes combination creates a flex container with items aligned at the start of the main axis (justify-start) and centered along the cross-axis (items-center). It also specifies a gap of 3 units between the flex items (gap-3). */}
            <div className="flex justify-start items-center gap-3">
              <div className="contact_item_img">
                {/* These Classes combination sets the width of the element to 50 pixels by default (w-[50px]), 60 pixels on medium screens (md:w-[60px]), and 70 pixels on large screens (lg:w-[70px]). */}
                <img
                  alt="chat"
                  src={Chat}
                  className="lg:w-[70px] md:w-[60px] w-[50px]"
                ></img>
              </div>
              {/* These Classes combination sets the text size to 3xl on large screens (lg:text-3xl), 2xl on medium screens (md:text-2xl), and 22 pixels by default (text-[22px]). It also applies a semi-bold font weight (font-semibold). Note that there's a missing hyphen in "lgtext-3xl," it should be lg:text-3xl. */}
              <div
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontStyle: "normal",
                }}
                className="contact_item_title lg:text-3xl md:text-2xl text-[22px] font-semibold "
              >
                Live Chat
              </div>
            </div>
            {/* These Classes combination adds a 2-pixel border with the color #7a7e7c (border-2 and border-[#7a7e7c]), sets the width to 100% (w-[100%]), adds padding of 2 units (p-2), centers the text (text-center), applies a semi-bold font weight (font-semibold), sets the text color to black (text-black), and adds a top margin of 3 units (mt-3). Additionally, it adjusts the text size to 18 pixels on large screens (lg:text-[18px]) and 17 pixels by default (text-[17px]). */}
            <div
              style={{
                fontFamily: "Roboto, sans-serif",
                fontStyle: "normal",
              }}
              className="contact_item_context border-2 border-[#7a7e7c] w-[100%] p-2 text-center font-semibold text-black lg:text-[18px] text-[17px] mt-3"
            >
              Chat with our friendly Chameleon&nbsp;
              {/* These Classes combination sets the element to be visible on large screens (lg:block) and hidden on smaller screens (hidden). */}
              <br className="lg:block hidden" />
              bot.
            </div>
            {/* These Classes combination styles a paragraph element with centered text, a green background (#00b165), padding, rounded corners, a semi-bold font, varying text sizes for different screen sizes, and a drop shadow. It is designed for use within a paragraph of text. */}
            <button
              style={{
                fontFamily: "Roboto, sans-serif",
                fontStyle: "normal",
              }}
              onClick={() => setChatOpen(true)}
              className={`${styles.contact_item_btn} text-center bg-[#00b165] py-2 px-10 text-white mt-2 rounded-[15px] font-semibold text-lg m-0 leading-[1] shadow-md md:text-[18px] text-[17px] `}
            >
              Start Chat
            </button>
          </div>
        </div>
        {/* CHATBOT STARTS */}

        {/* Positions a chat bot element absolutely at the bottom with a flex column layout  */}
        <div
          id="chatbot"
          className="chatBot absolute right-4 bottom-40 flex flex-col"
        >
          {!chatOpen && (
            <img
              alt=""
              // src={chatOpenImg}
              src={chatIcon}
              // Sets the width to 60px on medium screens and 50px by default
              className="md:w-[60px] w-[50px]"
              onClick={() => setChatOpen(true)}
            />
          )}

          {chatOpen && (
            <>
              {/* Styles a chameleon bot element with varying widths based on screen size */}
              {/* <div className="chameleonBot sm:w-[350px] w-[90%]"> */}
              <div className="chameleonBot">
                {/* Styles a chat bot header with flex layout, centered items, a background color, and padding */}
                {/* <div className="chatBotHeader flex items-center justify-between gap-3 bg-[#069f89] p-2"> */}
                <div className="chatBotHeader flex items-center justify-between gap-3 bg-[#036141] p-2">
                  <img
                    alt=""
                    src={chameleonLogo}
                    // Sets the width to 70px on large and medium screens and 60px by default
                    className="lg:w-[70px] md:w-[70px] w-[60px]"
                  />
                  {/* Sets Margin 0 */}
                  <h5 className="m-0 text-white"> Chameleon Bot </h5>
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
                    <div className="p-2 bg-[#036141] rounded-[5px]">
                      {/* Sets the margin to zero and applies a medium font weight */}
                      <p className="m-0 font-medium text-white">
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
                      className="w-[40px] h-auto"
                    />
                  </div>
                </div>
              </div>
              <img
                alt=""
                src={chatCloseImg}
                // Sets the width to 60 pixels on medium screens and 50 pixels by default
                // className="md:w-[60px] w-[50px]"
                className="chatBot absolute right-1 -bottom-14 flex flex-col md:w-[60px] w-[50px]"
                onClick={() => setChatOpen(false)}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
  // }
};

export const contactSearchableContents = [
  "Contact Us",
  "Phone Us",
  "Send a Email",
  "Live Chat",
];

export default Contact;
