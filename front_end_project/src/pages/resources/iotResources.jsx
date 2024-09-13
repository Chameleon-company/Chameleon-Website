import { Component } from "react";
import Screen from "../../components/app/Screen";
import IotResourcesComponent from "../../components/resources/iotResources";
import IoTMelbourne from "./images/IoTMelbourne.jpg";
import device from "./images/device.jpg";
import tech from "./images/tech.png";
import "./iot.css";

class IotResources extends Component {
  render() {
    return (
      <Screen>
        <div className="max-w-[1500px] bg-[#67A170] px-3 xl:px-5">
            <h1 className="pb-3 pt-3 text-center font-bold">RESOURCES</h1>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-4 xl:gap-5 mx-2 pb-2 xl:pb-4">
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
        </div>
        </div>
      </Screen>
    );
  }
}

export default IotResources;
