import React, { useState } from "react";
import './faq.css';
import './darkMode.css';

function Faq() {
  /* toggle function to set function for choosing 
  or not choosing the + button to expand query */
  const [choose, setChoose] = useState(null);

  // toggle function for + or - for query minimise or expand
  const toggle = (i) => {

    // if + is chosen, + = i
    if (choose === i) {
      return setChoose(null);
    }
    setChoose(i);
  };

  return (
    <div className="row">
      <div className="faqheading">
        Frequently Asked Questions
      </div>
      <div className="col-xs-12">
        <div className="wrapper">

          <div className="queries">
            {/* mapping data to the FAQ questions */}
            {data.map((point, i) => (
              <div className="point" key={i}>
                {/* toggle function for choosing either + or - */}
                <div className="title" onClick={() => toggle(i)} >
                  <h2>{point.question}</h2>
                  <span>{choose === i ? '-' : '+'}</span>
                </div>
                <div className={choose === i ? 'faq show' : 'faq'}>{point.answer}</div>
              </div>
            ))}
            <div className="email">
              <p>More questions? Send us a quick message below:</p>
            </div>

            <div className="box">
              <form>
                <label>
                  <input placeholder="" />
                </label>
              </form>
            </div>

            <div className="send">
              <button>Send</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

// questions to put in FAQ page
const data = [
  {
    question: 'What is Chameleon?',
    answer:
      '"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto iusto veniam eveniet labore impedit nam"'
  },
  {
    question: 'What projects does Chameleon have?',
    answer:
      '"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto iusto veniam eveniet labore impedit nam"'
  },
  {
    question: 'Membership',
    answer:
      '"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto iusto veniam eveniet labore impedit nam"'
  },
  {
    question: 'How do I contact Chameleon?',
    answer:
      '"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto iusto veniam eveniet labore impedit nam"'
  }
];

export default Faq;
