import React, { useEffect } from "react";
import styles from "./contact.module.css";
import { notifyWelcome } from "../../components/notificationComp/NotificationComponent";
import Screen from '../../components/app/Screen';
import { contact } from "../../content/contact";
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";


function Contact() {
  useEffect(() => {
    // Display a welcome message when the component mounts
    notifyWelcome(
      "Make sure to contact us only on working days 9:00 AM onwards!",
    );
  }, []);

  const page = {
    header: 'Contact Us',
    content: {
      phone: { title: 'Phone', description: 'Monday - Friday 9am to 5pm', contact: '0359756586' },
      email: { title: 'Email', description: 'We will get back to you soon', contact: 'info@chameleon.com.au' },
      chat:  { title: 'Chat', description: 'Chat with our friendly Chameleon Bot', contact: 'Start Live Chat' }
    }
  }

  return (
    <Screen>
      <div className="bg-[#deece3] mt-auto mb-auto">

        {/* Header Text */}
        <div className={`${styles.contact_title} bg-[#4fa373]  md:text-5xl text-4xl font-medium text-center text-white`}>
          <text>{page.header}</text>
        </div>

        {/* Main Content */}
        <div className={`${styles.contact_body} grid md:grid-cols-3 grid-cols-1 max-w-6xl mx-auto justify-between items-start gap-3 align-items-stretch flex-wrap`}>

          {/* Phone */}
          <div className="contact_item text-center p-2">
            <div className="flex justify-start items-center gap-3 p-3 border-bottom border-success">

              <div className="contact_item_img">
                <FaPhoneVolume size={23} />
              </div>

              <div className="contact_item_title lg:text-3xl md:text-2xl font-semibold ">
                {page.content.phone.title}
              </div>

              <span class="badge bg-success ml-auto align-self-center p-2">{page.content.phone.contact}</span>
            </div>

            <div className="contact_item_context w-[100%] p-2 text-center font-semibold text-black mt-3">
              {page.content.phone.description}
            </div>
            <div className="contact_item text-center">
              {/* These Classes combination creates a flex container with items aligned at the start of the main axis (justify-start) and centered along the cross-axis (items-center). It also specifies a gap of 3 units between the flex items (gap-3). */}
              <div className="flex justify-start items-center gap-3">
                <div className="contact_item_img">
                  {/* These Classes combination sets the width of the element to 50 pixels by default (w-[50px]), 60 pixels on medium screens (md:w-[60px]), and 70 pixels on large screens (lg:w-[70px]). */}
                  <img alt="email" src={Email} className="lg:w-[70px] md:w-[60px] w-[50px]"></img>
                </div>
                {/* These Classes combination sets the text size to 3xl on large screens (lg:text-3xl), 2xl on medium screens (md:text-2xl), and 22 pixels by default (text-[22px]). It also applies a semi-bold font weight (font-semibold). Note that there's a missing hyphen in "lgtext-3xl," it should be lg:text-3xl. */}
                <div className="contact_item_title lgtext-3xl md:text-2xl text-[22px] font-semibold ">
                  {contact.email_title}
                </div>
              </div>
              {/* These Classes combination adds a 2-pixel border with the color #7a7e7c (border-2 and border-[#7a7e7c]), sets the width to 100% (w-[100%]), adds padding of 2 units (p-2), centers the text (text-center), applies a semi-bold font weight (font-semibold), sets the text color to black (text-black), and adds a top margin of 3 units (mt-3). Additionally, it adjusts the text size to 18 pixels on large screens (lg:text-[18px]) and 17 pixels by default (text-[17px]). */}
              <div className="contact_item_context border-2 border-[#7a7e7c] w-[100%] p-2 text-center font-semibold text-black lg:text-[18px] text-[17px] mt-3">
                {contact.email_message}
              </div>
              <a href="mailto:info@chameleon.com.au">
                {/* These Classes combination styles a paragraph element with centered text, a green background (#00b165), padding, rounded corners, a semi-bold font, varying text sizes for different screen sizes, and a drop shadow. It is designed for use within a paragraph of text. */}
                <button className={`${styles.contact_item_btn} text-center bg-[#00b165] py-2 px-10 text-white mt-2 rounded-[15px] font-semibold text-lg m-0 leading-[1] shadow-md md:text-[18px] text-[17px] `}>
                  {contact.email_cta}
                </button>
              </a>
            </div>
            <div className="contact_item text-center">
              {/* These Classes combination creates a flex container with items aligned at the start of the main axis (justify-start) and centered along the cross-axis (items-center). It also specifies a gap of 3 units between the flex items (gap-3). */}
              <div className="flex justify-start items-center gap-3">
                <div className="contact_item_img">
                  {/* These Classes combination sets the width of the element to 50 pixels by default (w-[50px]), 60 pixels on medium screens (md:w-[60px]), and 70 pixels on large screens (lg:w-[70px]). */}
                  <img alt="chat" src={Chat} className="lg:w-[70px] md:w-[60px] w-[50px]"></img>
                </div>
                {/* These Classes combination sets the text size to 3xl on large screens (lg:text-3xl), 2xl on medium screens (md:text-2xl), and 22 pixels by default (text-[22px]). It also applies a semi-bold font weight (font-semibold). Note that there's a missing hyphen in "lgtext-3xl," it should be lg:text-3xl. */}
                <div className="contact_item_title lg:text-3xl md:text-2xl text-[22px] font-semibold ">
                  {contact.chat_title}
                </div>
              </div>
              {/* These Classes combination adds a 2-pixel border with the color #7a7e7c (border-2 and border-[#7a7e7c]), sets the width to 100% (w-[100%]), adds padding of 2 units (p-2), centers the text (text-center), applies a semi-bold font weight (font-semibold), sets the text color to black (text-black), and adds a top margin of 3 units (mt-3). Additionally, it adjusts the text size to 18 pixels on large screens (lg:text-[18px]) and 17 pixels by default (text-[17px]). */}
              <div className="contact_item_context border-2 border-[#7a7e7c] w-[100%] p-2 text-center font-semibold text-black lg:text-[18px] text-[17px] mt-3">
                {contact.chat_message}&nbsp;
                {/* These Classes combination sets the element to be visible on large screens (lg:block) and hidden on smaller screens (hidden). */}
                <br className="lg:block hidden" />
                bot.
              </div>
              {/* These Classes combination styles a paragraph element with centered text, a green background (#00b165), padding, rounded corners, a semi-bold font, varying text sizes for different screen sizes, and a drop shadow. It is designed for use within a paragraph of text. */}
              <button className={`${styles.contact_item_btn} text-center bg-[#00b165] py-2 px-10 text-white mt-2 rounded-[15px] font-semibold text-lg m-0 leading-[1] shadow-md md:text-[18px] text-[17px] `}>
                {contact.chat_cta}
              </button>
          </div>

          {/* Email */}
          <div className="contact_item text-center p-2">
            <div className="flex justify-start items-center gap-3 p-3 border-bottom border-success">

              <div className="contact_item_img">
                <MdEmail size={25} />
              </div>

              <div className="contact_item_title lg:text-3xl md:text-2xl font-semibold ">
                {page.content.email.title}
              </div>

              <span class="badge bg-success ml-auto align-self-center p-2">{page.content.email.contact}</span>
            </div>
            
            <div className="contact_item_context w-[100%] p-2 text-center font-semibold text-black mt-3">
              {page.content.email.description}
            </div>
          </div>

          {/* Chat */}
          <div className="contact_item text-center p-2">
            <div className="flex justify-start items-center gap-3 p-3 border-bottom border-success">
              
              <div className="contact_item_img">
                <IoChatbubbleEllipsesSharp size={25} />
              </div>
              
              <div className="contact_item_title lg:text-3xl md:text-2xl font-semibold ">
                {page.content.chat.title}
              </div>
              
              <span class="badge bg-success ml-auto align-self-center p-2">{page.content.chat.contact}</span>
            </div>
            
            <div className="contact_item_context w-[100%] p-2 text-center font-semibold text-black mt-3">
              {page.content.chat.description}
            </div>
          </div>
        </div>
      </div>
    </Screen>
  );
}

export const contactSearchableContents = [
  "Contact Us",
  "Phone Us",
  "Send a Email",
  "Live Chat",
];

export default Contact;
