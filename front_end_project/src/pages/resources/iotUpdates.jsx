import React, { Component } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Screen from '../../components/app/Screen';

class IotUpdates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content1: "The advancement of 6G wireless technology: 6G is the following generation of wireless technology and is anticipated to provide significantly higher speeds and lower latency than 5G. IoT applications will have more options as a result of the ability for devices to communicate data more quickly and dependably.",
      content2: "Edge computing is becoming more popular because it moves storage and computation closer to the network's edge. In addition to making IoT applications more resilient to network failures, this can increase performance and decrease latency for such applications.",
      content3: "Artificial intelligence (AI) is becoming more prevalent in the Internet of Things (IoT). AI is being utilised to power a variety of IoT applications, from smart home gadgets to industrial automation systems. IoT devices' efficiency, precision, and ability to make decisions can all be improved by AI. The IoT is increasingly using distributed ledger technology called blockchain, which may be used to track and record transactions between IoT devices. This could aid in enhancing the security and openness of IoT applications.",
      content4: "The creation of new IoT standards: To solve the issues of scalability, interoperability, and security, new IoT standards are being created. These standards will aid in ensuring the security and dependability of IoT devices as well as their ability to connect with one another and other systems."
    };
  }

  handleContentChange = (index, value) => {
    this.setState({ [`content${index}`]: value });
  };

  render() {
    const titleStyle = {
      color: 'white'
    };

    const { content1, content2, content3, content4 } = this.state;

    return (
      <Screen>
        <div>
          <h1 className="text-center pt-3 pb-3" style={titleStyle}>LATEST IOT UPDATES</h1>
        </div>

        {[{ title: '6G Wireless Technology', content: content1, index: 1 },
          { title: 'Edge Computing', content: content2, index: 2 },
          { title: 'Artificial Intelligence', content: content3, index: 3 },
          { title: 'New IoT Standards', content: content4, index: 4 }].map(({ title, content, index }) => (
            <div key={index} className="bg-[#D1E2C4] max-w-[1000px] m-auto py-[20px] mb-[20px]">
              <h2 className="text-center font-bold">{title}</h2>
              <div className="flex justify-center">
                <ReactQuill
                  value={content}
                  onChange={(value) => this.handleContentChange(index, value)}
                  theme="snow"
                  className="w-full max-w-[940px] my-3"
                />
              </div>
            </div>
          ))}

        <br></br>
      </Screen>
    );
  }
}

export default IotUpdates;

// Optional: If you need to export the contents for other use
export const iotUpdatesSearchableContents = (state) => [
  state.content1,
  state.content2,
  state.content3,
  state.content4,
];