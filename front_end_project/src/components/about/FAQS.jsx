import React, { useState } from 'react';
import './faqs.css';

function FAQS() {
  // This is the FAQS component
  const [choose, setChoose] = useState(null);

  // This is the toggle function that handles the expansion of the FAQ sections
  const toggle = (i) => {
    // If the current chosen FAQ is the same as the one being clicked, set it to null
    if (choose == i) {
      return setChoose(null);
    }
    // Otherwise, set the chosen FAQ to the one being clicked
    setChoose(i);
  };

  return (
    // This is the main container for the FAQS component
    <div className="bg-green lg:px-0 px-4 mt-6 lg:mt-8 faqs-container">
      {/* This is the wrapper for the FAQ sections */}
      <div className="faq-wrapper">
        {/* This is the container for the FAQ sections */}
        <div className="wrappermode">
          {/* This is the container for the FAQ points */}
          <div className="queriesmode">
            {/* This is the map of FAQ points */}
            {data.map((point, i) => (
              // This is a single FAQ point
              <div className="pointmode bg-grey" key={i}>
                {/* This is the title of the FAQ point */}
                <div className="titlemode bg-grey" onClick={() => toggle(i)}>
                  <h2 className="text-black text-xl">{point.question}</h2>
                  {/* This is the toggle button to expand/collapse the FAQ point */}
                  <span className="text-black text-3xl">
                    {choose === i ? '-' : '+'}
                  </span>
                </div>
                {/* This is the answer to the FAQ point */}
                <div className={choose === i ? 'faq show' : 'faq'}>
                  {point.answer}
                </div>
              </div>
            ))}
            {/* This is the section for sending a question */}
            <div className="flex gap-3">
              <div className="grid">
                <label htmlFor="question" className="text-lg text-white">
                  More questions? Send us a message!
                </label>
                <textarea id="question" name="question" rows="4" cols="50" />
              </div>
              <div className="items-end flex">
                {/* This is the send button */}
                <button className="bg-yellow px-4 py-2 font-bold rounded-lg text-xl">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// This is the data for the FAQ points
const data = [
  {
    question: 'What is Chameleon?',
    answer:
      '"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto iusto veniam eveniet labore impedit nam"',
  },
  {
    question: 'What projects does Chameleon have?',
    answer:
      '"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto iusto veniam eveniet labore impedit nam"',
  },
  {
    question: 'Membership',
    answer:
      '"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto iusto veniam eveniet labore impedit nam"',
  },
  {
    question: 'How do I contact Chameleon?',
    answer:
      '"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto iusto veniam eveniet labore impedit nam"',
  },
];

export default FAQS;