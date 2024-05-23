import React from 'react';
import Wrapper from '../shared/Wrapper';
import Heading from '../shared/Heading';
// import Mission from './Mission';
import FAQS from './FAQS';
import './about.css';

import AboutJSON from '../../constants/About.json';

const About = () => {
  // This is the About component, which displays information about the company
  return (
    // This is the main wrapper component that contains all the content
    <Wrapper Style="w-full h-full mt-6 !font-poppins">
      {/* This is the top navigation bar */}
      <div className="w-full h-full flex flex-col gap-6 max-w-[1080px] mx-auto">
        <h1 className="font-bold text-xl uppercase pl-4 flex gap-2 items-center">
          {/* This is the top navigation bar with links to Home and About Us */}
          <a href="/" className="home-link">Home</a>
          <span className="text-2xl">&gt;</span>
          <div>About Us</div>
        </h1>
        {/* This is the main heading of the page */}
        <h1 className="w-full h-full font-bold uppercase text-3xl grid place-items-center md:block">
          About us
        </h1>
        {/* This is the main content section */}
        <div className="w-full h-full grid gap-4 md:gap-0 md:grid-cols-2 py-4 place-items-center">
          {/* This is a video element */}
          <video className="lg:min-w-[80%] lg:min-h-[70%]" controls>
            <source src={''} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* This is a paragraph of text */}
          <div className="w-full h-full grid place-items-center md:block">
            <h1 className="font-medium">
              Chameleon is a Deakin University, student-led company...
            </h1>
          </div>
        </div>
      </div>
      {/* This is the mission section */}
      <div className="w-full h-full bg-green-emerald p-4">
        <Heading text="Our Mission" Style="text-white text-3xl" />
        <div className="w-full h-full flex flex-col md:flex-row">
          {/* This is the mission statement */}
          <div className="w-full h-full md:flex-1 md:min-w-[40%] flex items-center justify-center py-4">
            <div className="w-[15rem] h-[60%] flex justify-center items-center">
              <img
                src="/AboutUs/Mission.png"
                alt="Earth"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="md:flex-2 flex justify-center items-center">
            <p className="w-full h-full text-white text-lg flex items-center justify-center">
              At Chameleon mission is to research, create test, document, and
              deploy IoT-based solutions to enhance life through the application
              of smart city technologies including: the building of smarter
              cities, homes, transportation, and energy management systems.
            </p>
          </div>
        </div>
      </div>
      {/* This is the goals section */}
      <div className="w-full h-full pt-8 p-4">
        <Heading text="Our Goals" />
        <div className="w-full h-full grid place-items-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8">
          {/* This is a list of goals */}
          {/* {AboutJSON.goals.map((item, idx) => {
            return <Mission key={idx} item={item} />;
          })} */}
        </div>
      </div>
      {/* This is the FAQs section */}
      <div className="w-full h-full bg-green-emerald py-8">
        <Heading text="Frequently asked questions" />
        <FAQS />
      </div>
      {/* This is the footer section */}
      <div className="w-full h-full bg-blue py-2 px-4">
        <div className="grid md:grid-cols-2">
          {/* This is the logo section */}
          <div className="w-full h-full flex items-center">
            <div className="w-[100px] h-[100px]">
              <img
                src="/AboutUs/logo.png"
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-full h-full flex flex-col justify-start items-start">
              {/* This is the social media section */}
              <div className="flex md:justify-start justify-center">
                <img
                  src="/AboutUs/insta.png"
                  alt=""
                  className="w-[40px] h-[40px] object-contain rounded-md"
                />
                <img
                  src="/AboutUs/facebook.png"
                  alt=""
                  className="w-[40px] h-[40px] object-contain rounded-md"
                />
                <img
                  src="/AboutUs/twitter.png"
                  alt=""
                  className="w-[40px] h-[40px] object-contain rounded-md"
                />
                <img
                  src="/AboutUs/Mail.png"
                  alt=""
                  className="w-[40px] h-[40px] object-contain rounded-md"
                />
              </div>
              <div>
                <h1 className="text-white flex md:justify-start justify-center">
                  &copy;2023 Copyright reserved by Chameleon
                </h1>
              </div>
            </div>
          </div>
          <div className="w-full h-full flex justify-between items-center">
            <div className="w-full h-full pt-3 flex flex-col justify-start items-start font-semibold text-white">
              <div>
                <h1 className="text-xl text-center mb-2">Contact Us</h1>
                <p className="text-lg text-center">PH: 03 59756586</p>
                <p className="text-lg text-center">E:info@chameleon.com</p>
              </div>
            </div>
            <div className="w-[100px] h-[100px]">
              <img
                src="/AboutUs/deakin.png"
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default About;