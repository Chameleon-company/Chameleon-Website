import { Component } from "react";
import Screen from '../../components/app/Screen';

const content1 = 
  "The Internet of Things (IoT) is a network of connected computing devices, mechanical and digital machinery, items, animals, or people that can exchange data across a network without human-to-human or human-to-computer interaction. IoT encompasses a vast network of physical items equipped with sensors, software, and network connectivity to gather and share data. This information can be used to automate processes and improve decision-making.";

const content2 = 
  "Efficiency Gain: By automating procedures and collecting data to optimize operations, IoT helps businesses become more efficient. For example, IoT-connected sensors can optimize HVAC systems and monitor energy usage, reducing energy costs. Enhanced collaboration and remote work capabilities are additional benefits, as IoT-connected devices can automate supply ordering and inventory tracking, allowing staff to focus on other tasks. Better Customer Service: IoT provides real-time data on customer needs and preferences, enabling personalized recommendations through connected devices. Improved Safety: IoT can monitor and manage potentially dangerous conditions, such as air quality, and automatically shut down equipment if necessary. New Business Opportunities: IoT creates new opportunities across various industries, including manufacturing, transportation, and healthcare, with applications like real-time patient monitoring and personalized care.";

const content3 = 
  "Smart Homes: IoT devices allow control and monitoring of home appliances, security systems, and lighting. For example, you can use your smartphone to adjust the thermostat or turn on lights before you arrive home, or automate your security system. Smart Cities: IoT devices monitor water usage, air quality, and traffic conditions, improving resource allocation and city planning. For instance, sensors can detect water leaks or traffic congestion and adjust traffic lights accordingly. Transportation: IoT devices optimize routes, track assets and vehicles, and enhance safety. Sensors can track buses and trains in real-time or monitor road and bridge conditions. Energy Management Systems: IoT devices monitor and optimize energy usage. Sensors can track energy consumption of appliances or manage the power grid.";

class IotTechnologies extends Component {
  render() {
    const titleStyle = {
      color: 'white'
    };

    return (
      <Screen>
        <div className="2xl:max-w-[1320px] mx-auto w-full sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
          <h1 className="pb-3 pt-3 text-center" style={titleStyle}>What is the Internet of Things?</h1>
        </div>

        <div className="mx-auto w-full max-w-[1000px] bg-[#D1E2C4]">
          <h2 className="fw-bold pt-3 text-center text-black">
            Internet of Things Technologies
          </h2>
          <div className="mx-3 mt-0 flex flex-wrap">
            <div className="flex-1">
              <p className="fw-normal fs-5 pb-3 pt-3 text-start text-black" style={{ textAlign: 'justify', padding: '30px' }}>
                {content1}
              </p>
            </div>
          </div>
        </div>

        <br />

        <div className="mx-auto w-full max-w-[1000px] bg-[#D1E2C4]">
          <h2 className="fw-bold pt-3 text-center text-black">
            The Advantages of IoT Technology
          </h2>
          <div className="mx-3 mt-0 flex flex-wrap">
            <div className="flex-1">
              <p className="fw-normal fs-5 pb-3 pt-3 text-start text-black" style={{ textAlign: 'justify', padding: '30px' }}>
                {content2}
              </p>
            </div>
          </div>
        </div>

        <br />

        <div className="mb-20 mx-auto w-full max-w-[1000px] bg-[#D1E2C4]">
          <h2 className="fw-bold pt-3 text-center text-black">
            How IoT Technology is Utilised
          </h2>
          <div className="mx-3 mt-0 flex flex-wrap">
            <div className="flex-1">
              <p className="fw-normal fs-5 pb-3 pt-3 text-start text-black" style={{ textAlign: 'justify', padding: '30px' }}>
                {content3}
              </p>
            </div>
          </div>
        </div>

        <br />
      </Screen>
    );
  }
}

export const iotTechnologiesSearchableContents = [content1, content2, content3];

export default IotTechnologies;
