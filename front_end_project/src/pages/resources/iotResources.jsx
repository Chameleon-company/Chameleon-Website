import { Component } from "react";
import tech from "./images/tech.png";
import IoTMelbourne from "./images/IoTMelbourne.jpg";
import device from "./images/device.jpg";
import IotResourcesComponent from "../../components/resources/iotResources";

class IotResources extends Component {
  render() {
    return (
      <div className="m-auto flex max-w-[1500px] flex-row flex-wrap justify-between bg-[#67A170] p-5">
        <div className="2xl:max-w-[1320px] ml-auto mr-auto w-full sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
          <h1 className="pb-3 pt-3 text-center">RESOURCES</h1>
        </div>

        <IotResourcesComponent
          img={device}
          altImg="Technology Graphic"
          url="/iotTechnologies"
          heading="Technologies"
        />

        <br></br>

        <IotResourcesComponent
          img={IoTMelbourne}
          altImg="Melbourne Street View"
          url="/iotStatistics"
          heading="Statistics"
        />

        <br></br>

        <IotResourcesComponent
          img={tech}
          altImg="Technology Graphic"
          url="/iotUpdates"
          heading="Innovations"
        />

        <br></br>
      </div>
    );
  }
}

export default IotResources;
