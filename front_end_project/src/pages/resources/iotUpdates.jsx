import React, { Component } from "react";
import Screen from '../../components/app/Screen';
// import Container from 'react-bootstrap';

const content1 =
  "The advancement of 6G wireless technology: 6G is the following generation of wireless technology and is anticipated to provide significantly higher speeds and lower latency than 5G. IoT applications will have more options as a result of the ability for devices to communicate data more quickly and dependably.";
const content2 =
  "Edge computing is becoming more popular because it moves storage and computation closer to the network's edge. In addition to making IoT applications more resilient to network failures, this can increase performance and decrease latency for such applications.";
const content3 =
  "Artificial intelligence (AI) is becoming more prevalent in the Internet of Things (IoT). AI is being utilised to power a variety of IoT applications, from smart home gadgets to industrial automation systems. IoT devices' efficiency, precision, and ability to make decisions can all be improved by AI. The IoT is increasingly using distributed ledger technology called blockchain, which may be used to track and record transactions between IoT devices. This could aid in enhancing the security and openness of IoT applications.";
const content4 =
  "The creation of new IoT standards: To solve the issues of scalability, interoperability, and security, new IoT standards are being created. These standards will aid in ensuring the security and dependability of IoT devices as well as their ability to connect with one another and other systems.";

class IotUpdates extends Component {
  render () {
    return (
      <Screen>
        <div>
          <h1 class="text-center pt-3 pb-3">LATEST IOT UPDATES</h1>
        </div>

        <div className="bg-[#D1E2C4] max-w-[1000px] m-auto py-[20px]">
          <h2 className="text-center font-bold">6G Wireless Technology</h2>
          <div className="flex justify-center">
            <p className="max-w-[800px] text-xl">{content1}</p>
          </div>
        </div>

        <br />

        <div className="bg-[#D1E2C4] max-w-[1000px] m-auto py-[20px]">
          <h2 className="text-center font-bold">Edge Computing</h2>
          <div className="flex justify-center">
            <p className="max-w-[800px] text-xl">{content2}</p>
          </div>
        </div>

        <br />

        <div className="bg-[#D1E2C4] max-w-[1000px] m-auto py-[20px]">
          <h2 className="text-center font-bold">Artificial intelligence</h2>
          <div className="flex justify-center">
            <p className="max-w-[800px] text-xl">{content3}</p>
          </div>
        </div>

        <br />

        <div className="bg-[#D1E2C4] max-w-[1000px] m-auto py-[20px] mb-[80px]">
          <h2 className="text-center font-bold">New IoT Standards</h2>
          <div className="flex justify-center">
            <p className="max-w-[800px] text-xl">{content4}</p>
          </div>
        </div>

        <br></br>
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
