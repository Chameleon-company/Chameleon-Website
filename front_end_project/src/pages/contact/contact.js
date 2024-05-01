import React, { useEffect } from "react";
import styles from "./contact.module.css";
import Phone from "./image/phone.png";
import Chat from "./image/chat.png";
import Email from "./image/email.png";
import { notifyWelcome } from "../../components/notificationComp/NotificationComponent";
import Screen from '../../components/app/Screen';

function Contact() {
  useEffect(() => {
    // Display a welcome message when the component mounts
    notifyWelcome(
      "Make sure to contact us only on working days 9:00 AM onwards!",
    );
  }, []);

  return (
    <Screen>
      <div className="bg-[#deece3] mt-auto mb-auto">
        <div className={`${styles.contact_title} bg-[#4fa373]  md:text-5xl text-4xl font-medium text-center text-black`}>
          Contact Us
        </div>
        <div className={`${styles.contact_body} grid md:grid-cols-3 grid-cols-1 max-w-6xl mx-auto justify-between items-start gap-3`}>
          <div className="contact_item">
            <div className="flex justify-start items-center gap-3">
              <div className="contact_item_img">
                <img alt="phone" src={Phone} className="lg:w-[70px] md:w-[60px] w-[50px]"></img>
              </div>
              <div className="contact_item_title lg:text-3xl md:text-2xl text-[22px] font-semibold ">
                Phone Us
              </div>
              <button className={`${styles.contact_item_btn} hover:border-[2px] text-center bg-[#00b165] py-2 px-10 text-white mt-2 rounded-[15px] font-semibold text-lg m-0 leading-[1] shadow-md md:text-[18px] text-[17px] `}>
                  Call Us
                </button>
            </div>

            <div className="contact_item_context border-2 border-[#7a7e7c] w-[100%] p-2 text-center font-semibold text-black lg:text-[18px] text-[17px] mt-3">
              Mon-Fri 9-pm(AEST)
              <br />
              PH:03 5975 6586
            </div>
          </div>
          <div className="contact_item text-center">
            <div className="flex justify-start items-center gap-3">
              <div className="contact_item_img">
                <img alt="email" src={Email} className="lg:w-[70px] md:w-[60px] w-[50px]"></img>
              </div>
              <div className="contact_item_title lg:text-3xl md:text-2xl text-[22px] font-semibold ">
                Send a Email
              </div>

            </div>
            <div className="contact_item_context border-2 border-[#7a7e7c] w-[100%] p-2 text-center font-semibold text-black lg:text-[18px] text-[17px] mt-3">
              Send us your question via email info@chameleon.com.au and we will get back to you
            </div>
            <a href="mailto:info@chameleon.com.au">
              <button className={`${styles.contact_item_btn} text-center bg-[#00b165] py-2 px-10 text-white mt-2 rounded-[15px] font-semibold text-lg m-0 leading-[1] shadow-md md:text-[18px] text-[17px] `}>
                Email Us
              </button>
            </a>
          </div>
          <div className="contact_item text-center">
            <div className="flex justify-start items-center gap-3">
              <div className="contact_item_img">
                <img alt="chat" src={Chat} className="lg:w-[70px] md:w-[60px] w-[50px]"></img>
              </div>
              <div className="contact_item_title lg:text-3xl md:text-2xl text-[22px] font-semibold ">
                Live Chat
              </div>
            </div>
            <div className="contact_item_context border-2 border-[#7a7e7c] w-[100%] p-2 text-center font-semibold text-black lg:text-[18px] text-[17px] mt-3">
              Chat with our friendly Chameleon&nbsp;
              <br className="lg:block hidden" />
              bot.
            </div>
            <button className={`${styles.contact_item_btn} text-center bg-[#00b165] py-2 px-10 text-white mt-2 rounded-[15px] font-semibold text-lg m-0 leading-[1] shadow-md md:text-[18px] text-[17px] `}>
              Start Chat
            </button>
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
