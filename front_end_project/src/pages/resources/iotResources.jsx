import { Component } from "react";
import tech from "./images/tech.png";
import IoTMelbourne from "./images/IoTMelbourne.jpg";
import device from "./images/device.jpg";
import chameleon from "./images/future.jpg.webp"
import IotResourcesComponent from "../../components/resources/iotResources";

class IotResources extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div className="m-auto flex max-w-[1500px] flex-row flex-wrap justify-between bg-[#67A170] p-5">
        <div className="2xl:max-w-[1320px] ml-auto mr-auto w-full sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
          <h1 className="pb-3 pt-3 text-center">RESOURCES</h1>
=======
      <Screen>
        <div className="m-auto flex max-w-[1500px] flex-row flex-wrap justify-between bg-[#67A170] p-5">
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
>>>>>>> db1939d69bb9697f788773c90f333f0b8a741edc
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

        <IotResourcesComponent
          img={chameleon}
          altImg="The Future of Work"
          url="/iotChameleon"
          heading="The Future of Work"
        />
        <br></br>

      </div>
    
    );
  }
}

export default IotResources;
