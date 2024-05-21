// import { Container, Row, Col } from "react-bootstrap";
// import React, { Component } from "react";
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/css/bootstrap.min.css";

// const content1 =
//   "The advancement of 6G wireless technology: 6G is the following generation of wireless technology and is anticipated to provide significantly higher speeds and lower latency than 5G. IoT applications will have more options as a result of the ability for devices to communicate data more quickly and dependably.";
// const content2 =
//   "Edge computing is becoming more popular because it moves storage and computation closer to the network's edge. In addition to making IoT applications more resilient to network failures, this can increase performance and decrease latency for such applications.";
// const content3 =
//   "Artificial intelligence (AI) is becoming more prevalent in the Internet of Things (IoT). AI is being utilised to power a variety of IoT applications, from smart home gadgets to industrial automation systems. IoT devices' efficiency, precision, and ability to make decisions can all be improved by AI. The IoT is increasingly using distributed ledger technology called blockchain, which may be used to track and record transactions between IoT devices. This could aid in enhancing the security and openness of IoT applications.";
// const content4 =
//   "The creation of new IoT standards: To solve the issues of scalability, interoperability, and security, new IoT standards are being created. These standards will aid in ensuring the security and dependability of IoT devices as well as their ability to connect with one another and other systems.";

// class IotUpdates extends Component {
//   render() {
//     return (
//       <>
//         <Container>
//           <h1 class="text-center pt-3 pb-3">LATEST IOT UPDATES</h1>
//         </Container>

//         <Container style={{ backgroundColor: "#D1E2C4", maxWidth: 1000 }}>
//           <h2 class="text-center text-black fw-bold pt-3">
//             6G Wireless Technology
//           </h2>
//           <Row>
//             <Col>
//               <p class="text-black text-start pb-3 pt-3 fw-normal fs-4">
//                 {content1}
//               </p>
//             </Col>
//           </Row>
//         </Container>

//         <br></br>

//         <Container style={{ backgroundColor: "#D1E2C4", maxWidth: 1000 }}>
//           <h2 class="text-center text-black fw-bold pt-3">Edge Computing</h2>
//           <Row>
//             <Col>
//               <p class="text-black text-start pb-3 pt-3 fw-normal fs-4">
//                 {content2}
//               </p>
//             </Col>
//           </Row>
//         </Container>

//         <br></br>

//         <Container style={{ backgroundColor: "#D1E2C4", maxWidth: 1000 }}>
//           <h2 class="text-center text-black fw-bold pt-3">
//             Artificial intelligence
//           </h2>
//           <Row>
//             <Col>
//               <p class="text-black text-start pb-3 pt-3 fw-normal fs-4">
//                 {content3}
//               </p>
//             </Col>
//           </Row>
//         </Container>

//         <br></br>

//         <Container
//           style={{
//             backgroundColor: "#D1E2C4",
//             maxWidth: 1000,
//             marginBottom: "80px",
//           }}
//         >
//           <h2 class="text-center text-black fw-bold pt-3">New IoT Standards</h2>
//           <Row>
//             <Col>
//               <p class="text-black text-start pb-3 pt-3 fw-normal fs-4">
//                 {content4}
//               </p>
//             </Col>
//           </Row>
//         </Container>

//         <br></br>
//       </>
//     );
//   }
// }

// export const iotUpdatesSearchableContents = [
//   content1,
//   content2,
//   content3,
//   content4,
// ];

// export default IotUpdates;


import React, { Component, useState } from "react";

const content1 =
  "The advancement of 6G wireless technology: 6G is the following generation of wireless technology and is anticipated to provide significantly higher speeds and lower latency than 5G. IoT applications will have more options as a result of the ability for devices to communicate data more quickly and dependably.";
const content2 =
  "Edge computing is becoming more popular because it moves storage and computation closer to the network's edge. In addition to making IoT applications more resilient to network failures, this can increase performance and decrease latency for such applications.";
const content3 =
  "Artificial intelligence (AI) is becoming more prevalent in the Internet of Things (IoT). AI is being utilised to power a variety of IoT applications, from smart home gadgets to industrial automation systems. IoT devices' efficiency, precision, and ability to make decisions can all be improved by AI. The IoT is increasingly using distributed ledger technology called blockchain, which may be used to track and record transactions between IoT devices. This could aid in enhancing the security and openness of IoT applications.";
const content4 =
  "The creation of new IoT standards: To solve the issues of scalability, interoperability, and security, new IoT standards are being created. These standards will aid in ensuring the security and dependability of IoT devices as well as their ability to connect with one another and other systems.";

const Accordion = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div id="accordion-example">
      <h2 id="accordion-example-heading-1" className="bg-[#D1E1C4]">
        <button
          type="button"
          className="accordion-button flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200"
          aria-expanded={expandedIndex === 1}
          aria-controls="accordion-example-body-1"
          onClick={() => toggleAccordion(1)}
        >
          <span><h2 className="fw-bold pt-3 text-center text-black">
          Latest IoT Updates
          </h2></span>
          <svg
            data-accordion-icon
            className={`w-6 h-6 ${expandedIndex === 1 ? 'rotate-180' : ''} shrink-0`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </h2>
      <div
        id="accordion-example-body-1"
        className={`accordion-content ${expandedIndex === 1 ? '' : 'hidden'}`}
        aria-labelledby="accordion-example-heading-1"
      >
        <div className="ml-3 mr-3 mt-0 flex flex-wrap">
            <div className="flex-[1_0]">
              <p className="fw-normal fs-4 pb-3 pt-3 text-start text-black">
                {content1}
              </p>
            </div>
          </div>
      </div>
      <h2 id="accordion-example-heading-2" className="bg-[#D1E1C4]">
        <button
          type="button"
          className="accordion-button flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 hover:bg-gray-100"
          aria-expanded={expandedIndex === 2}
          aria-controls="accordion-example-body-2"
          onClick={() => toggleAccordion(2)}
        >
          <span><h2 className="fw-bold pt-3 text-center text-black">
          Edge Computing
          </h2></span>
          <svg
            data-accordion-icon
            className={`w-6 h-6 ${expandedIndex === 2 ? 'rotate-180' : ''} shrink-0`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </h2>
      <div
        id="accordion-example-body-2"
        className={`accordion-content ${expandedIndex === 2 ? '' : 'hidden'}`}
        aria-labelledby="accordion-example-heading-2"
      >
        <div className="ml-3 mr-3 mt-0 flex flex-wrap">
            <div className="flex-[1_0]">
              <p className="fw-normal fs-4 pb-3 pt-3 text-start text-black">
                {content2}
              </p>
            </div>
          </div>
      </div>
      <h2 id="accordion-example-heading-3" className="bg-[#D1E1C4]">
        <button
          type="button"
          className="accordion-button flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 hover:bg-gray-100"
          aria-expanded={expandedIndex === 3}
          aria-controls="accordion-example-body-3"
          onClick={() => toggleAccordion(3)}
        >
          <span><h2 className="fw-bold pt-3 text-center text-black">
          New IoT Standards
          </h2></span>
          <svg
            data-accordion-icon
            className={`w-6 h-6 ${expandedIndex === 3 ? 'rotate-180' : ''} shrink-0`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </h2>
      <div
        id="accordion-example-body-3"
        className={`accordion-content ${expandedIndex === 3 ? '' : 'hidden'}`}
        aria-labelledby="accordion-example-heading-3"
      >
        <div className="ml-3 mr-3 mt-0 flex flex-wrap">
            <div className="flex-[1_0]">
              <p className="fw-normal fs-4 pb-3 pt-3 text-start text-black">
                {content1}
              </p>
            </div>
          </div>
      </div>
      <h2 id="accordion-example-heading-3" className="bg-[#D1E1C4]">
        <button
          type="button"
          className="accordion-button flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 hover:bg-gray-100"
          aria-expanded={expandedIndex === 3}
          aria-controls="accordion-example-body-3"
          onClick={() => toggleAccordion(3)}
        >
          <span><h2 className="fw-bold pt-3 text-center text-black">
          Artificial intelligence
          </h2></span>
          <svg
            data-accordion-icon
            className={`w-6 h-6 ${expandedIndex === 4 ? 'rotate-180' : ''} shrink-0`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </h2>
      <div
        id="accordion-example-body-3"
        className={`accordion-content ${expandedIndex === 4 ? '' : 'hidden'}`}
        aria-labelledby="accordion-example-heading-3"
      >
        <div className="ml-3 mr-3 mt-0 flex flex-wrap">
            <div className="flex-[1_0]">
              <p className="fw-normal fs-4 pb-3 pt-3 text-start text-black">
                {content4}
              </p>
            </div>
          </div>
      </div>
    </div>
  );
};

class IotTechnologies extends Component {
  render() {
    return (
      <>
        <div className="ml-auto mr-auto w-full max-w-[1000px]">
          <Accordion />
        </div>
      </>
    );
  }
}

export const iotUpdatesSearchableContents = [
  content1,
  content2,
  content3,
  content4,
];

export default IotTechnologies;
