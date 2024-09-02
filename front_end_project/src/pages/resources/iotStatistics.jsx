// import { Component } from "react";
// import Screen from '../../components/app/Screen';

// const content1 =
//   "By 2028, the Australian IoT market is projected to have increased from US$15.46 billion to US$27.13 billion. The largest IoT market in Australia is the automotive industry, followed by the industrial and retail sectors. In Australia, there will be 16.7 million linked IoT devices by 2022. By 2028, Australia is projected to have 28.9 million linked IoT devices. IoT devices are connected to 10 ordinary Australian homes. Smart speakers, smart thermostats, and smart security cameras are the most widely used IoT devices in Australia. The adoption of Industry 4.0 technologies, the rise of the Internet of Vehicles (IAV), and the desire for smart city solutions are what are driving the IoT market in Australia.";

// class IotStatistics extends Component {
//   render () {

//     const titleStyle = {
//       color: 'white'
//     };

//     return (
//       <Screen>
//         <div className="2xl:max-w-[1320px] ml-auto mr-auto w-full sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
//           <h1 className="pb-3 pt-3 text-center" style={titleStyle}>STATISTICS</h1>
//         </div>

//         <div className="mb-20 ml-auto mr-auto w-full max-w-[1000px] bg-[#D1E2C4]">
//           <h2 className="fw-bold pt-3 text-center text-black">
//             IoT Statistics in Australia
//           </h2>
//           <div className="ml-3 mr-3 mt-0 flex flex-wrap">
//             <div className="flex-[1_0]">
//               <p className="fw-normal fs-5 pb-3 pt-3 text-start text-black" style={{ textAlign: 'justify', padding: '30px'}}>
//                 {content1}
//               </p>
//             </div>
//           </div>
//         </div>
//       </Screen>
//     );
//   }
// }

// export const iotStatisticsSearchableContents = [content1];

// export default IotStatistics;

import React, { Component } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import the Quill styles
import Screen from "../../components/app/Screen";

class IotStatistics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content:
        "By 2028, the Australian IoT market is projected to have increased from US$15.46 billion to US$27.13 billion. The largest IoT market in Australia is the automotive industry, followed by the industrial and retail sectors. In Australia, there will be 16.7 million linked IoT devices by 2022. By 2028, Australia is projected to have 28.9 million linked IoT devices. IoT devices are connected to 10 ordinary Australian homes. Smart speakers, smart thermostats, and smart security cameras are the most widely used IoT devices in Australia. The adoption of Industry 4.0 technologies, the rise of the Internet of Vehicles (IAV), and the desire for smart city solutions are what are driving the IoT market in Australia.",
      isEditing: false,
    };
  }

  handleChange = (value) => {
    this.setState({ content: value });
  };
  // toggleEdit = () => {
  //   this.setState((prevState) => ({ isEditing: !prevState.isEditing }));
  // };
  toggleEdit = () => {
    this.setState((prevState) => {
      if (prevState.isEditing) {
        const strippedContent = prevState.content.replace(/<\/?p>/g, "");
        return {
          content: strippedContent,
          isEditing: !prevState.isEditing,
        };
      } else {
        return { isEditing: !prevState.isEditing };
      }
    });
  };
  render() {
    const { content } = this.state;

    const titleStyle = {
      color: "white",
    };

    return (
      <Screen>
        <div className="2xl:max-w-[1320px] ml-auto mr-auto w-full sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
          <h1 className="pb-3 pt-3 text-center" style={titleStyle}>
            STATISTICS
          </h1>
        </div>

        <div className="mb-20 ml-auto mr-auto w-full max-w-[1000px] bg-[#D1E2C4]">
          <h2 className="fw-bold pt-3 text-center text-black">
            IoT Statistics in Australia
          </h2>
          <div className="ml-3 mr-3 mt-0 flex flex-wrap">
            <div className="flex-[1_0]">
              {this.state.isEditing ? (
                <ReactQuill
                  value={content}
                  onChange={this.handleChange}
                  style={{
                    textAlign: "justify",
                    padding: "30px",
                    backgroundColor: "white",
                  }}
                />
              ) : (
                <div
                  style={{
                    textAlign: "justify",
                    padding: "30px",
                    backgroundColor: "white",
                  }}
                >
                  {content}
                </div>
              )}
            </div>
          </div>
          <div className="text-center mt-4">
            <button
              onClick={this.toggleEdit}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              {this.state.isEditing ? "Save" : "Edit"}
            </button>
          </div>
        </div>
      </Screen>
    );
  }
}

// Exporting content for use in other parts of the application
export const iotStatisticsSearchableContents = [
  "By 2028, the Australian IoT market is projected to have increased from US$15.46 billion to US$27.13 billion. The largest IoT market in Australia is the automotive industry, followed by the industrial and retail sectors. In Australia, there will be 16.7 million linked IoT devices by 2022. By 2028, Australia is projected to have 28.9 million linked IoT devices. IoT devices are connected to 10 ordinary Australian homes. Smart speakers, smart thermostats, and smart security cameras are the most widely used IoT devices in Australia. The adoption of Industry 4.0 technologies, the rise of the Internet of Vehicles (IAV), and the desire for smart city solutions are what are driving the IoT market in Australia.",
];

export default IotStatistics;
