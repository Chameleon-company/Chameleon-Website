import { Component } from "react";
import Screen from "../../components/app/Screen";
import IotResourcesComponent from "../../components/resources/iotResources";
import IoTMelbourne from "./images/IoTMelbourne.jpg";
import device from "./images/device.jpg";
import tech from "./images/tech.png";
import security from "./images/security.jpg";
import "./iot.css";

class IotResources extends Component {
  render() {
    return (
      <Screen>
        <div className="m-auto flex max-w-[1600px] flex-row flex-wrap justify-between bg-[#67A170] p-5">
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

          <div className="hover:scale-105 hover:shadow-lg transition-transform duration-300">
            <IotResourcesComponent
              img={security}
              altImg="Security"
              url="/iotSecurity"
              heading="Security"
            />
          </div>
        </div>
      </Screen>
    );
  }
}

export default IotResources;
