import { Component } from "react";
import Screen from '../../components/app/Screen';

const content1 = 
  "By 2028, the Australian IoT market is projected to grow from US$15.46 billion to US$27.13 billion. The largest IoT market in Australia is the automotive industry, followed by the industrial and retail sectors. By 2022, there will be 16.7 million connected IoT devices in Australia, and this number is expected to reach 28.9 million by 2028. IoT devices are now present in 10 typical Australian homes, with smart speakers, smart thermostats, and smart security cameras being the most commonly used. The growth of the IoT market in Australia is driven by the adoption of Industry 4.0 technologies, the rise of the Internet of Vehicles (IAV), and the demand for smart city solutions.";

class IotStatistics extends Component {
  render() {
    const titleStyle = {
      color: 'white'
    };

    return (
      <Screen>
        <div className="2xl:max-w-[1320px] mx-auto w-full sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
          <h1 className="pb-3 pt-3 text-center" style={titleStyle}>Statistics</h1>
        </div>

        <div className="mb-20 mx-auto w-full max-w-[1000px] bg-[#D1E2C4]">
          <h2 className="fw-bold pt-3 text-center text-black">
            IoT Statistics in Australia
          </h2>
          <div className="mx-3 mt-0 flex flex-wrap">
            <div className="flex-1">
              <p className="fw-normal fs-5 pb-3 pt-3 text-start text-black" style={{ textAlign: 'justify', padding: '30px' }}>
                {content1}
              </p>
            </div>
          </div>
        </div>
      </Screen>
    );
  }
}

export const iotStatisticsSearchableContents = [content1];

export default IotStatistics;
