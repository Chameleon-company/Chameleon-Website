// import { Component } from "react";
// import Screen from '../../components/app/Screen';

// const content1 =
//   "The Internet of Things (IoT) is a network of connected computing devices, mechanical and digital machinery, items, animals, or people that can exchange data across a network without the need for human-to-human or human-to-computer interaction. The Internet of Things (IoT) is a huge network of physical items that are equipped with sensors, software, and network connectivity in order to gather and share data. By using this information, procedures can be automated and judgements can be improved.";
// const content2 =
//   "Efficiency gain: By automating procedures and gathering data that can be utilised to optimise operations, IoT can assist firms in becoming more efficient. IoT-connected sensors, for instance, can be used to optimise HVAC systems and monitor energy usage, which can help businesses save their energy expenditures. Enhanced collaboration among employees and the ability to work remotely are two ways that IoT might help firms be more productive. IoT-connected devices, for instance, can be used to automatically order supplies and keep track of inventory levels, freeing up staff members to concentrate on other responsibilities. Better customer service: The Internet of Things (IoT) can aid businesses by giving real-time data on customer wants and preferences. IoT-connected gadgets, for instance, can track customer behaviour in stores and offer individualised recommendations. IoT help to improve safety by monitoring and regulating potentially dangerous conditions. For instance, IoT-connected sensors can be used to track air quality and immediately turn off equipment if levels go too high. New business prospects: The Internet of Things (IoT) is generating new business opportunities across a range of industries, including manufacturing, transportation, and healthcare. For instance, real- time patient health monitoring and individualised care are both possible with IoT-connected equipment.";
// const content3 =
//   "Smart homes: Home appliances, security systems, and lighting may all be controlled and monitored via IoT devices. For instance, you might use your smartphone to adjust the thermostat or turn on the lights before you get home, or you could programme your security system to arm itself once you leave the house. Smart cities: IoT devices can be used to keep an eye on water use, air quality, and traffic conditions. Making better resource allocation decisions and improving city planning are both possible with the use of this data. For instance, IoT-connected sensors can be used to monitor water use and find leaks, or they can be used to detect traffic congestion and automatically modify traffic lights. Transportation: IoT devices may be used to optimise routes, track the position of assets and vehicles, and increase safety. IoT-connected sensors, for instance, can be used to track the whereabouts of buses and trains in real-time or to keep an eye on the state of roads and bridges. Energy management systems:IoT devices can be used to monitor energy usage and optimise it using energy management systems. For instance, IoT-connected sensors can be used to monitor the energy usage of electronics and appliances or to instantly manage the power grid";

// class IotTechnolgies extends Component {
//   render () {

//     const titleStyle = {
//       color: 'white'
//     };

//     return (
//       <Screen>
//         <div className="2xl:max-w-[1320px] ml-auto mr-auto w-full sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
//           <h1 className="pb-3 pt-3 text-center" style={titleStyle}>WHAT IS INTERNET OF THINGS?</h1>
//         </div>

//         <div className="ml-auto mr-auto w-full max-w-[1000px] bg-[#D1E2C4]">
//           <h2 className="fw-bold pt-3 text-center text-black">
//             Internet of Things Technologies
//           </h2>
//           <div className="ml-3 mr-3 mt-0 flex flex-wrap">
//             <div className="flex-[1_0]">
//               <p class="fw-normal fs-5 pb-3 pt-3 text-start text-black" style={{ textAlign: 'justify', padding: '30px' }} >
//                 {content1}
//               </p>
//             </div>
//           </div>
//         </div>

//         <br></br>

//         <div className="ml-auto mr-auto w-full max-w-[1000px] bg-[#D1E2C4]">
//           <h2 class="fw-bold pt-3 text-center text-black">
//             The Advantages of IoT Technology
//           </h2>
//           <div className="ml-3 mr-3 mt-0 flex flex-wrap">
//             <div className="flex-[1_0]">
//               <p class="fw-normal fs-5 pb-3 pt-3 text-start text-black" style={{ textAlign: 'justify', padding: '30px' }} >
//                 {content2}
//               </p>
//             </div>
//           </div>
//         </div>

//         <br></br>

//         <div className="mb-20 ml-auto mr-auto w-full max-w-[1000px] bg-[#D1E2C4]">
//           <h2 class="fw-bold pt-3 text-center text-black">
//             How IoT Technology is Utilised
//           </h2>
//           <div className="ml-3 mr-3 mt-0 flex flex-wrap">
//             <div className="flex-[1_0]">
//               <p class="fw-normal fs-5 pb-3 pt-3 text-start text-black" style={{ textAlign: 'justify', padding: '30px' }} >
//                 {content3}
//               </p>
//             </div>
//           </div>
//         </div>

//         <br></br>
//       </Screen>
//     );
//   }
// }

// export const iotTechnologiesSearchableContents = [content1, content2, content3];

// export default IotTechnolgies;

import React, { Component } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill styles
import Screen from "../../components/app/Screen";

// Define the content outside the component
export const iotTechnologiesSearchableContents = [
  "The Internet of Things (IoT) is a network of connected computing devices, mechanical and digital machinery, items, animals, or people that can exchange data across a network without the need for human-to-human or human-to-computer interaction. The Internet of Things (IoT) is a huge network of physical items that are equipped with sensors, software, and network connectivity in order to gather and share data. By using this information, procedures can be automated and judgements can be improved.",
  "Efficiency gain: By automating procedures and gathering data that can be utilised to optimise operations, IoT can assist firms in becoming more efficient. IoT-connected sensors, for instance, can be used to optimise HVAC systems and monitor energy usage, which can help businesses save their energy expenditures. Enhanced collaboration among employees and the ability to work remotely are two ways that IoT might help firms be more productive. IoT-connected devices, for instance, can be used to automatically order supplies and keep track of inventory levels, freeing up staff members to concentrate on other responsibilities. Better customer service: The Internet of Things (IoT) can aid businesses by giving real-time data on customer wants and preferences. IoT-connected gadgets, for instance, can track customer behaviour in stores and offer individualised recommendations. IoT help to improve safety by monitoring and regulating potentially dangerous conditions. For instance, IoT-connected sensors can be used to track air quality and immediately turn off equipment if levels go too high. New business prospects: The Internet of Things (IoT) is generating new business opportunities across a range of industries, including manufacturing, transportation, and healthcare. For instance, real-time patient health monitoring and individualised care are both possible with IoT-connected equipment.",
  "Smart homes: Home appliances, security systems, and lighting may all be controlled and monitored via IoT devices. For instance, you might use your smartphone to adjust the thermostat or turn on the lights before you get home, or you could programme your security system to arm itself once you leave the house. Smart cities: IoT devices can be used to keep an eye on water use, air quality, and traffic conditions. Making better resource allocation decisions and improving city planning are both possible with the use of this data. For instance, IoT-connected sensors can be used to monitor water use and find leaks, or they can be used to detect traffic congestion and automatically modify traffic lights. Transportation: IoT devices may be used to optimise routes, track the position of assets and vehicles, and increase safety. IoT-connected sensors, for instance, can be used to track the whereabouts of buses and trains in real-time or to keep an eye on the state of roads and bridges. Energy management systems: IoT devices can be used to monitor energy usage and optimise it using energy management systems. For instance, IoT-connected sensors can be used to monitor the energy usage of electronics and appliances or to instantly manage the power grid",
];

class IotTechnolgies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content1: iotTechnologiesSearchableContents[0],
      content2: iotTechnologiesSearchableContents[1],
      content3: iotTechnologiesSearchableContents[2],
      isEditing: { content1: false, content2: false, content3: false },
    };
  }
  toggleEdit = (contentKey) => {
    this.setState((prevState) => ({
      isEditing: {
        ...prevState.isEditing,
        [contentKey]: !prevState.isEditing[contentKey],
      },
    }));
  };

  handleChange = (contentKey, value) => {
    this.setState({ [contentKey]: value });
  };

  render() {
    const { content1, content2, content3, isEditing } = this.state;

    const titleStyle = {
      color: "white",
    };

    return (
      <Screen>
        <div className="2xl:max-w-[1320px] ml-auto mr-auto w-full sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
          <h1 className="pb-3 pt-3 text-center" style={titleStyle}>
            WHAT IS INTERNET OF THINGS?
          </h1>
        </div>

        <div className="ml-auto mr-auto w-full max-w-[1000px] bg-[#D1E2C4]">
          <h2 className="fw-bold pt-3 text-center text-black">
            Internet of Things Technologies
          </h2>
          <div className="ml-3 mr-3 mt-0 flex flex-wrap">
            <div className="flex-[1_0]">
              {isEditing.content1 ? (
                <ReactQuill
                  theme="snow"
                  value={content1}
                  onChange={(value) => this.handleChange("content1", value)}
                  style={{
                    padding: "30px",
                    backgroundColor: "#fff",
                    color: "#000",
                  }}
                />
              ) : (
                <div
                  style={{
                    padding: "30px",
                    backgroundColor: "#fff",
                    color: "#000",
                  }}
                  dangerouslySetInnerHTML={{ __html: content1 }}
                />
              )}
            </div>
          </div>
          <div className="text-center mt-4">
            <button
              onClick={() => this.toggleEdit("content1")}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              {isEditing.content1 ? "Save" : "Edit"}
            </button>
          </div>
        </div>

        <br />

        <div className="ml-auto mr-auto w-full max-w-[1000px] bg-[#D1E2C4]">
          <h2 className="fw-bold pt-3 text-center text-black">
            The Advantages of IoT Technology
          </h2>
          <div className="ml-3 mr-3 mt-0 flex flex-wrap">
            <div className="flex-[1_0]">
              {isEditing.content2 ? (
                <ReactQuill
                  theme="snow"
                  value={content2}
                  onChange={(value) => this.handleChange("content2", value)}
                  style={{
                    padding: "30px",
                    backgroundColor: "#fff",
                    color: "#000",
                  }}
                />
              ) : (
                <div
                  style={{
                    padding: "30px",
                    backgroundColor: "#fff",
                    color: "#000",
                  }}
                  dangerouslySetInnerHTML={{ __html: content2 }}
                />
              )}
            </div>
          </div>
          <div className="text-center mt-4">
            <button
              onClick={() => this.toggleEdit("content2")}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              {isEditing.content2 ? "Save" : "Edit"}
            </button>
          </div>
        </div>

        <br />

        <div className="mb-20 ml-auto mr-auto w-full max-w-[1000px] bg-[#D1E2C4]">
          <h2 className="fw-bold pt-3 text-center text-black">
            How IoT Technology is Utilised
          </h2>
          <div className="ml-3 mr-3 mt-0 flex flex-wrap">
            <div className="flex-[1_0]">
              {isEditing.content3 ? (
                <ReactQuill
                  theme="snow"
                  value={content3}
                  onChange={(value) => this.handleChange("content3", value)}
                  style={{
                    padding: "30px",
                    backgroundColor: "#fff",
                    color: "#000",
                  }}
                />
              ) : (
                <div
                  style={{
                    padding: "30px",
                    backgroundColor: "#fff",
                    color: "#000",
                  }}
                  dangerouslySetInnerHTML={{ __html: content3 }}
                />
              )}
            </div>
          </div>
          <div className="text-center mt-4">
            <button
              onClick={() => this.toggleEdit("content3")}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              {isEditing.content3 ? "Save" : "Edit"}
            </button>
          </div>
        </div>

        <br />
      </Screen>
    );
  }
}

export default IotTechnolgies;
