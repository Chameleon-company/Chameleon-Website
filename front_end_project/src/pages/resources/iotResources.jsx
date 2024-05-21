import { Component } from "react";
import tech from "./images/tech.png";
import IoTMelbourne from "./images/IoTMelbourne.jpg";
import device from "./images/device.jpg";
import IotResourcesComponent from "../../components/resources/iotResources";
import "./iotResources.css";

class IotResources extends Component {
  render() {
    return (
      <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600&display=swap"
      />

<section className="bg-green-emrld">
        <div className="">
          <h3 className="text-center pt-3 font-semibold lg:text-4xl sm:text-3xl text-[26px] uppercase text-white">
            Resources
          </h3>
          <div className="flex flex-col items-center justify-center lg:flex-row text-center lg:justify-around gap-4 p-5 container">
            <div className="max-w-sm bg-green-sage border border-gray-200 rounded-lg shadow">
              <a href="/iotTechnologies" className="no-underline">
              <img
                className="rounded-t-lg thumbnail"
                src={device}
                alt="Technologies"
              />
              <div className="p-5">
                <h5
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    fontStyle: "normal",
                  }}
                  url="/iotTechnologies"
                  className="mb-2 text-2xl font-bold tracking-tight text-gray-900"
                >
                  Technologies
                </h5>
              </div>
              </a>
            </div>

            <div className="max-w-sm bg-green-sage border border-gray-200 rounded-lg shadow">
            <a href="/iotTechnologies" className="no-underline">
              <img
                className="rounded-t-lg thumbnail"
                src={IoTMelbourne}
                alt="Technologies"
              />
              <div className="p-5">
                <h5
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    fontStyle: "normal",
                  }}
                  url="/iotStatistics"
                  className="mb-2 text-2xl font-bold tracking-tight text-gray-900"
                >
                  Statistics
                </h5>
              </div>
              </a>
            </div>

            <div className="max-w-sm bg-green-sage border border-gray-200 rounded-lg shadow">
            <a href="/iotUpdates" className="no-underline">
              <img
                className="rounded-t-lg thumbnail"
                src={tech}
                alt="Technologies"
              />
              <div className="p-5">
                <h5
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    fontStyle: "normal",
                  }}
                  url="/iotTechnologies"
                  className="mb-2 text-2xl font-bold tracking-tight text-gray-900"
                >
                  Innovations
                </h5>
              </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>);
  }
}

export default IotResources;
