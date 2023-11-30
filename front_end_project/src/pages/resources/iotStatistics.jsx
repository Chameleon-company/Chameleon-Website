import { Component } from "react";

class IotStatistics extends Component {
  render() {
    return (
      <>
        <div className="2xl:max-w-[1320px] ml-auto mr-auto w-full sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
          <h1 className="pb-3 text-center">STATISTICS</h1>
        </div>

        <div className="mb-20 ml-auto mr-auto w-full max-w-[1000px] bg-[#D1E2C4]">
          <h2 className="fw-bold pt-3 text-center text-black">
            IoT Statistics in Australia
          </h2>
          <div className="ml-3 mr-3 mt-0 flex flex-wrap">
            <div className="flex-[1_0]">
              <p className="fw-normal fs-4 pb-3 pt-3 text-start text-black">
                By 2028, the Australian IoT market is projected to have
                increased from US$15.46 billion to US$27.13 billion. The largest
                IoT market in Australia is the automotive industry, followed by
                the industrial and retail sectors. In Australia, there will be
                16.7 million linked IoT devices by 2022. By 2028, Australia is
                projected to have 28.9 million linked IoT devices. IoT devices
                are connected to 10 ordinary Australian homes. Smart speakers,
                smart thermostats, and smart security cameras are the most
                widely used IoT devices in Australia. The adoption of Industry
                4.0 technologies, the rise of the Internet of Vehicles (IAV),
                and the desire for smart city solutions are what are driving the
                IoT market in Australia.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default IotStatistics;
