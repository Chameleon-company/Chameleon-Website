import React, { useEffect } from "react";
import styles from "./contact.module.css";
import { notifyWelcome } from "../../components/notificationComp/NotificationComponent";
import Screen from '../../components/app/Screen';
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
function Contact() {
  useEffect(() => {
    notifyWelcome(
      "Make sure to contact us only on working days 9:00 AM onwards!",
    );
  }, []);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        alert("COPIED");
      })
      .catch((err) => {
        alert("Failed to copy Please try again.");
        console.error("Error copying text: ", err);
      });
  }

  const page = {
    header: 'Contact Us',
    content: {
      phone: { title: 'Phone', description: 'Monday - Friday 9am to 5pm', contact: '0359756586' },
      email: { title: 'Email', description: 'We will get back to you soon', contact: 'info@chameleon.com.au' },
      chat: { title: 'Chat', description: 'Chat with our friendly Chameleon Bot', contact: 'Start Live Chat' }
    }
  }

  return (
    <Screen>
      <div className="bg-[#deece3] mt-auto mb-auto flex flex-col items-center">

        {/* Header Text */}
        <div className={`${styles.contact_title} bg-[#4fa373] md:text-5xl text-4xl font-medium text-center text-white`}>
          <span>{page.header}</span>
        </div>

        {/* Main Content */}
        <div className={`${styles.contact_body}`}>


          {/* Phone */}
          <div className={`${styles.contact_item} p-2`}>
            <div className="flex justify-start items-center gap-3 p-3">
              <div className="contact_item_img">
                <FaPhoneVolume size={23} />
              </div>
              <div className="contact_item_title lg:text-3xl md:text-2xl font-semibold">
                {page.content.phone.title}
              </div>
              <button
                onClick={() => copyToClipboard(page.content.phone.contact)}
                className="badge bg-success ml-auto align-self-center p-2">
                {page.content.phone.contact}
              </button>
            </div>
            <div className="contact_item_context w-[100%] p-2 text-center font-semibold text-black mt-3">
              {page.content.phone.description}
            </div>
          </div>

          {/* Email */}
          <div className={`${styles.contact_item} p-2`}>
            <div className="flex justify-start items-center gap-3 p-3">
              <div className="contact_item_img">
                <MdEmail size={25} />
              </div>
              <div className="contact_item_title lg:text-3xl md:text-2xl font-semibold">
                {page.content.email.title}
              </div>
              <button
                onClick={() => copyToClipboard(page.content.email.contact)}
                className="badge bg-success ml-auto align-self-center p-2">
                {page.content.email.contact}
              </button>
            </div>
            <div className="contact_item_context w-[100%] p-2 text-center font-semibold text-black mt-3">
              {page.content.email.description}
              <button className="badge bg-success ml-auto align-self-center p-2"><a href="mailto:info@chameleon.com.au?subject=Hello%20there&body=Add%20your%20Query%20here%20for chameleon." className="text-black no-underline">Send Email</a></button>
             
            </div>
          </div>

          {/* Chat */}
          <div className={`${styles.contact_item} p-2`}>
            <div className="flex justify-start items-center gap-3 p-3">
              <div className="contact_item_img">
                <IoChatbubbleEllipsesSharp size={25} />
              </div>
              <div className="contact_item_title lg:text-3xl md:text-2xl font-semibold">
                {page.content.chat.title}
              </div>
              <span className="badge bg-success ml-auto align-self-center p-2">{page.content.chat.contact}</span>
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
