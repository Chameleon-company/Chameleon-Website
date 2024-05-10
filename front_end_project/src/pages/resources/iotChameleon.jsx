import { Component } from "react";

const content1 =
  "Imagine wearing a smart bracelet that tracks your focus levels and suggests short mindfulness breaks for optimal performance. Think of collaborative tools that leverage IoT sensors in meeting rooms to automatically adjust lighting and temperature based on occupancy, promoting a more comfortable and focused environment. With connected devices and remote-monitoring capabilities, the future of work allows for greater location flexibility. Imagine engineers using augmented reality (AR) headsets to collaborate on complex projects with colleagues located around the world, manipulating virtual objects in real-time. Medical professionals could remotely monitor patients using connected health devices, providing timely interventions and consultations regardless of location.";
const content2 =
  "IoT generates a wealth of data from sensors and connected devices. By analyzing this data, businesses gain valuable insights that empower employees to make informed decisions, optimize workflows, and improve efficiency. For instance, sales teams can leverage data from connected customer devices, such as smart appliances, to personalize their approach and recommend relevant products or services. Imagine marketing teams using data on customer interactions with IoT products to develop targeted marketing campaigns.";
const content3 =
  "IoT can significantly enhance workplace safety. Imagine smart sensors strategically placed in factories automatically detecting hazardous environments, such as excessive temperature or gas leaks, and triggering safety protocols. Connected equipment could monitor worker wellbeing by tracking vital signs or wearables alerting individuals to potential fatigue levels, promoting proactive health management.";

class IotChameleon extends Component {
  render() {
    return (
      <div className="container mx-auto">
        <div className="2xl:max-w-[1320px] ml-auto mr-auto w-full sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
          <h1 className="pb-3 pt-3 text-center">
            The Future of Work: How IoT is Transforming Your Career
          </h1>
        </div>

        <div className="ml-auto mr-auto w-full max-w-[1000px] bg-[#D1E2C4] p-6">
          <h2 className="font-bold pt-3 text-center text-black">
            Enhanced Productivity and Remote Collaboration
          </h2>
          <p className="font-normal text-start text-black">{content1}</p>
        </div>

        <div className="ml-auto mr-auto w-full max-w-[1000px] bg-[#D1E2C4] p-6">
          <h2 className="font-bold pt-3 text-center text-black">
            Data-Driven Decision Making
          </h2>
          <p className="font-normal text-start text-black">{content2}</p>
        </div>

        <div className="mb-20 ml-auto mr-auto w-full max-w-[1000px] bg-[#D1E2C4] p-6">
          <h2 className="font-bold pt-3 text-center text-black">
            Safety and Wellbeing
          </h2>
          <p className="font-normal text-start text-black">{content3}</p>
        </div>
      </div>
    );
  }
}

export const iotChameleonSearchableContents = [content1, content2, content3];

export default IotChameleon;
