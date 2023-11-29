import React, { Component } from "react";
import tech from "./images/tech.png";
import IoTMelbourne from "./images/IoTMelbourne.jpg";
import device from "./images/device.jpg";

class IotResources extends Component {
  render() {
    return (
      <div className="m-auto flex max-w-[1500px] flex-row flex-wrap justify-between bg-[#67A170] p-5">
        <div className="2xl:max-w-[1320px] ml-auto mr-auto w-full sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
          <h1 className="pb-3 pt-3 text-center">RESOURCES</h1>
        </div>

        <div className="mb-[50px] ml-auto mr-auto w-full max-w-[400px] bg-[#D1E2C4]">
          <div className="shrink-0 grow">
            <div className="ml-3 mr-3 mt-0 flex flex-wrap">
              <img
                src={device}
                className="padding-10 mx-auto h-[300px] w-[400px] max-w-full pb-4 pt-7"
                alt="Technology Graphic"
              />
            </div>
          </div>

          <a href="/iotTechnologies" class="text-decoration-none">
            <h2 className="fw-bold pb-4 text-center text-black">
              Technologies
            </h2>
          </a>
        </div>

        <br></br>

        <div className="mb-[50px] ml-auto mr-auto w-full max-w-[400px] bg-[#D1E2C4]">
          <div className="shrink-0 grow">
            <div className="ml-3 mr-3 mt-0 flex flex-wrap">
              <img
                src={IoTMelbourne}
                className="padding-10 mx-auto h-[300px] w-[400px] max-w-full pb-4 pt-7"
                alt="Melbourne Street View"
              />
            </div>
          </div>

          <a href="/iotStatistics" class="text-decoration-none">
            <h2 className="fw-bold pb-4 text-center text-black">Statistics</h2>
          </a>
        </div>

        <br></br>

        <div className="mb-[50px] ml-auto mr-auto w-full max-w-[400px] bg-[#D1E2C4]">
          <div className="shrink-0 grow">
            <div className="ml-3 mr-3 mt-0 flex flex-wrap">
              <img
                src={tech}
                className="padding-10 mx-auto h-[300px] w-[400px] max-w-full pb-4 pt-7"
                alt="Technology Graphic"
              />
            </div>
          </div>

          <a href="/iotUpdates" class="text-decoration-none">
            <h2 className="fw-bold pb-4 text-center text-black">Innovations</h2>
          </a>
        </div>

        <br></br>
      </div>
    );
  }
}

export default IotResources;
