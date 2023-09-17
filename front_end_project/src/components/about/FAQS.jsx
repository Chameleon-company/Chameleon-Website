import { Row, Col } from 'react-bootstrap';
import React, { useState } from 'react';
import './faqs.css';

function FAQS() {
  /* toggle function to set function for choosing 
  or not choosing the + button to expand query */
  const [choose, setChoose] = useState(null);

  // toggle function for + or - for query minimise or expand
  const toggle = (i) => {
    // if + is chosen, + = i
    if (choose == i) {
      return setChoose(null);
    }
    setChoose(i);
  };

  return (
    <div className="bg-green lg:px-0 px-4 mt-6 lg:mt-8">
      <Col xs={12}>
        <div className="wrappermode">
          <div className="queriesmode ">
            {/* mapping data to the FAQ questions */}
            {data.map((point, i) => (
              <div className="pointmode bg-grey" key={i}>
                {/* toggle function for choosing either + or - */}
                <div className="titlemode bg-grey" onClick={() => toggle(i)}>
                  <h2 className="text-black text-xl">{point.question}</h2>
                  <span className="text-black text-3xl">
                    {choose === i ? '-' : '+'}
                  </span>
                </div>
                <div className={choose === i ? 'faq show' : 'faq'}>
                  {point.answer}
                </div>
              </div>
            ))}
            <div className="flex gap-3">
              <div className="grid">
                <label for="question" className="text-lg text-white">
                  More questions?Send us a message!
                </label>
                <textarea id="question" name="question" rows="4" cols="50" />
              </div>
              <div className="items-end flex">
                <button className="bg-yellow px-4 py-2 font-bold rounded-lg text-xl">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </div>
  );
}

// questions to put in FAQ page
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
