import { Component } from "react";
import tech from "./images/tech.png";
import IoTMelbourne from "./images/IoTMelbourne.jpg";
import device from "./images/device.jpg";
import IotResourcesComponent from "../../components/resources/iotResources";
import Screen from '../../components/app/Screen';

import Chatbox from '../Chatbot/Chatbox'; // newly add

import './iot.css'
import '../Chatbot/Chatbox.css'; // newly added

// newly added
import chameleonLogo from "../../assets/ChameleonLogo.png";
import chatOpenImg from "../Chatbot/images/chat-open.png";
import chatCloseImg from "../Chatbot/images/chat-close.png";
import dotMenuImg from "../Chatbot/images/dot-menu.png";
import chatIcon from "../Chatbot/images/chat-icon.png";
import fileSelectIcon from "../Chatbot/images/file-select.png";
import sendMessageImg from "../Chatbot/images/send-message.png";

class IotResources extends Component {
  render () {
    return (
      <Screen >
        <div className="m-auto flex max-w-[1500px] flex-row flex-wrap justify-between bg-[#67A170] p-5 section-height">
          <div className="2xl:max-w-[1320px] ml-auto mr-auto w-full sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
            <h1 className="pb-3 pt-3 text-center">RESOURCES</h1>
          </div>
          <div className="hover:scale-105 hover:shadow-lg transition-transform duration-300">
            <IotResourcesComponent
              img={device}
              altImg="Technology Graphic"
              url="/iotTechnologies"
              heading="Technologies"
            />
          </div>

          <div className="hover:scale-105 hover:shadow-lg transition-transform duration-300">
            <IotResourcesComponent
              img={IoTMelbourne}
              altImg="Melbourne Street View"
              url="/iotStatistics"
              heading="Statistics"
            />
          </div>

          <div className="hover:scale-105 hover:shadow-lg transition-transform duration-300">
            <IotResourcesComponent
              img={tech}
              altImg="Technology Graphic"
              url="/iotUpdates"
              heading="Innovations"
            />
          </div>

          <br></br>
        </div>
        {/* Add the Chatbox component */} {/* newly added */}
        <Chatbox // newly added
          chameleonLogo={chameleonLogo} // newly added
          chatOpenImg={chatOpenImg} // newly added
          chatCloseImg={chatCloseImg} // newly added
          dotMenuImg={dotMenuImg} // newly added
          chatIcon={chatIcon} // newly added
          fileSelectIcon={fileSelectIcon} // newly added
          sendMessageImg={sendMessageImg} // newly added
        /> {/* newly added */}
      </Screen>
    );
  }
}

export default IotResources;
