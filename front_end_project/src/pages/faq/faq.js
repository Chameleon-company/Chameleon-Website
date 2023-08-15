import React, { useState } from "react";
import './faq.css';

function Faq() {
  // Initial data for frequently asked questions
  const [data, setData] = useState([
    // Initial question data, can add more questions as needed
    {
      question: 'What is Chameleon?',
      answer:
        'Chameleon is a versatile platform that provides innovative solutions for personalization and user engagement, helping businesses adapt and enhance their user experiences. We offer a range of tools and technologies to enable dynamic content, A/B testing, user segmentation, and more, making it easier for companies to optimize their digital interactions with customers.'
    },
    {
      question: 'What projects does Chameleon have?',
      answer:
        'Chameleon has been involved in a variety of exciting projects across different industries. Some of our recent projects include developing a personalized recommendation system for an e-commerce platform, creating a mobile app for a fitness startup to track workout progress, and assisting a travel agency with optimizing their booking process by implementing real-time pricing updates.'
    },
    {
      question: 'Membership',
      answer:
        'At Chameleon, we offer a membership program that provides exclusive benefits to our loyal customers. Our membership includes access to premium features, early access to new updates and features, priority customer support, and special discounts on our services. We value our members and strive to provide them with the best experience and value.'
    },
    {
      question: 'How do I contact Chameleon?',
      answer:
        'You can easily get in touch with us through various channels. For general inquiries, you can send an email to info@chameleon.com. If you need technical support, our support team is available 24/7 via our dedicated support portal. Additionally, you can follow us on social media to stay updated on our latest news and announcements.'
    },
    {
      question: 'What is Chameleon\'s Privacy Approach?',
      answer:
      'At Chameleon, we prioritize data privacy. Our robust security measures, encryption, and strict adherence to industry best practices ensure your data is safe and confidential. You can learn more in our privacy policy.'
    },
    {
      question: 'Customizing Chameleon Solutions?',
      answer:
        'Absolutely! Chameleon offers extensive customization. Tailor appearance, behavior, and content to match your brand and engage users effectively. Our user-friendly customization tools make it easy.'
    },
    {
      question: 'Integrating Chameleon with Existing Software?',
      answer:
        'Yes, Chameleon is integration-friendly. We provide APIs and integrations with popular platforms, making it seamless to incorporate Chameleon\'s features into your existing software.'
    },
    {
      question: 'Chameleon\'s Success Stories?',
      answer:
        'We have numerous success stories! One example is a media streaming company that used Chameleon to boost user engagement through personalized content recommendations. Discover more inspiring case studies showcasing our impact.'
    }
  ]);

  // State to track the selected question index
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  // State to store the question input text
  const [questionText, setQuestionText] = useState('');

  // Function to toggle question visibility
  const toggleQuestion = (index) => {
    if(selectedQuestion == index){
      setSelectedQuestion(null);
    }else {
      setSelectedQuestion(index);
    }
  };

  // Handle form submission for sending a new question
  const handleQuestionSubmit = (e) => {
    e.preventDefault();
    if (questionText.trim() === '') return;
    setQuestionText('');
    // Display an alert to confirm the question submission
    window.alert("\u2705\nWe will respond to your question soon.");
  };

  return (
    <div className="faq-container">
      <h1 className="faq-heading">Frequently Asked Questions</h1>
      <div className="faq-wrapper">
      {data.map((point, index) => (
        <React.Fragment key={index}>
          <div
            className={`faq-box ${selectedQuestion === index ? 'selected' : ''}`}
            onClick={() => toggleQuestion(index)}
          >
            <div className="question">{point.question}</div>
          </div>
          {/* Add a divider after every 4th question */}
          {(index + 1) % 4 === 0 && index !== data.length - 1 && (
            <div className="faq-row-divider" />
          )}
        </React.Fragment>
      ))}
      </div>
      {/* Display the answer box when a question is selected */}
      <div className={`answer-box ${selectedQuestion !== null ? 'visible' : ''}`}>
        <div className="answer-content">
          {/* Display the answer of the selected question */}
          {selectedQuestion !== null && data[selectedQuestion].answer}
        </div>
      </div>
      <div className="send-question">
        <form onSubmit={handleQuestionSubmit}>
          <textarea
            value={questionText}
            placeholder="More questions? Send us a quick message"
            onChange={(e) => setQuestionText(e.target.value)}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Faq;
