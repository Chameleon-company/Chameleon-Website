import React, { Component } from "react";
import Screen from '../../components/app/Screen';

const content1 = 
  "The advancement of 6G wireless technology: 6G is the next generation of wireless technology, anticipated to offer significantly higher speeds and lower latency compared to 5G. This progress will enhance IoT applications by enabling faster and more reliable data communication between devices.";

const content2 = 
  "Edge computing is gaining traction by bringing storage and computation closer to the network's edge. This approach improves performance, reduces latency, and increases the resilience of IoT applications to network failures.";

const content3 = 
  "Artificial intelligence (AI) is increasingly integrated into the Internet of Things (IoT). AI enhances various IoT applications, from smart home devices to industrial automation systems, improving efficiency, precision, and decision-making capabilities. Additionally, blockchain technology is being adopted to track and record transactions between IoT devices, enhancing security and transparency.";

const content4 = 
  "The development of new IoT standards aims to address challenges related to scalability, interoperability, and security. These standards will help ensure the security and reliability of IoT devices, facilitating better integration and communication between devices and systems.";

class IotUpdates extends Component {
  render() {
    const titleStyle = {
      color: 'white'
    };

    return (
      <Screen>
        <div>
          <h1 className="text-center pt-3 pb-3" style={titleStyle}>Latest IoT Updates</h1>
        </div>

        <div className="bg-[#D1E2C4] max-w-[1000px] mx-auto py-5">
          <h2 className="text-center font-bold">6G Wireless Technology</h2>
          <div className="flex justify-center">
            <p className="fw-normal fs-5 pb-3 pt-3 text-start text-black" style={{ textAlign: 'justify', padding: '30px' }}>
              {content1}
            </p>
          </div>
        </div>

        <br />

        <div className="bg-[#D1E2C4] max-w-[1000px] mx-auto py-5">
          <h2 className="text-center font-bold">Edge Computing</h2>
          <div className="flex justify-center">
            <p className="fw-normal fs-5 pb-3 pt-3 text-start text-black" style={{ textAlign: 'justify', padding: '30px' }}>
              {content2}
            </p>
          </div>
        </div>

        <br />

        <div className="bg-[#D1E2C4] max-w-[1000px] mx-auto py-5">
          <h2 className="text-center font-bold">Artificial Intelligence</h2>
          <div className="flex justify-center">
            <p className="fw-normal fs-5 pb-3 pt-3 text-start text-black" style={{ textAlign: 'justify', padding: '30px' }}>
              {content3}
            </p>
          </div>
        </div>

        <br />

        <div className="bg-[#D1E2C4] max-w-[1000px] mx-auto py-5 mb-20">
          <h2 className="text-center font-bold">New IoT Standards</h2>
          <div className="flex justify-center">
            <p className="fw-normal fs-5 pb-3 pt-3 text-start text-black" style={{ textAlign: 'justify', padding: '30px' }}>
              {content4}
            </p>
          </div>
        </div>

        <br />
      </Screen>
    );
  }
}

export const iotUpdatesSearchableContents = [
  content1,
  content2,
  content3,
  content4,
];

export default IotUpdates;
