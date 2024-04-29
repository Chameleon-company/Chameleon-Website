// import React, { Component } from "react";

// let content1 =
//   "The advancement of 6G wireless technology: 6G is the following generation of wireless technology and is anticipated to provide significantly higher speeds and lower latency than 5G. IoT applications will have more options as a result of the ability for devices to communicate data more quickly and dependably.";
// let content2 =
//   "Edge computing is becoming more popular because it moves storage and computation closer to the network's edge. In addition to making IoT applications more resilient to network failures, this can increase performance and decrease latency for such applications.";
// let content3 =
//   "Artificial intelligence (AI) is becoming more prevalent in the Internet of Things (IoT). AI is being utilised to power a variety of IoT applications, from smart home gadgets to industrial automation systems. IoT devices' efficiency, precision, and ability to make decisions can all be improved by AI. The IoT is increasingly using distributed ledger technology called blockchain, which may be used to track and record transactions between IoT devices. This could aid in enhancing the security and openness of IoT applications.";
// let content4 =
//   "The creation of new IoT standards: To solve the issues of scalability, interoperability, and security, new IoT standards are being created. These standards will aid in ensuring the security and dependability of IoT devices as well as their ability to connect with one another and other systems.";

// class IotUpdates extends Component {
//   state = {
//     editingContent: null,
//     editedContent: "",
//   };

//   handleEditClick = (index) => {
//     this.setState({
//       editingContent: index,
//       editedContent: [content1, content2, content3, content4][index],
//     });
//   };

//   handleSaveClick = (index) => {
//     const updatedContents = [...[content1, content2, content3, content4]];
//     updatedContents[index] = this.state.editedContent;
//     [content1, content2, content3, content4] = updatedContents;
//     this.setState({ editingContent: null, editedContent: "" });
//   };

//   handleContentChange = (event) => {
//     this.setState({ editedContent: event.target.value });
//   };

//   render() {
//     return (
//       <div className="iot-updates-container font-poppins">
//         <div className="text-center py-6">
//           <h1 className="text-black text-2xl font-bold">LATEST IOT UPDATES</h1>
//         </div>

//         <div className="iot-update-card bg-[#D1E2C4] rounded-md shadow-md p-6 mb-6 max-w-[800px] mx-auto">
//           <h2 className="text-center font-bold text-black text-xl mb-4">
//             6G Wireless Technology
//           </h2>
//           {this.state.editingContent === 0 ? (
//             <div>
//               <textarea
//                 className="iot-update-content text-black w-full h-40 resize-none border border-gray-300 rounded-md p-2 mb-4"
//                 value={this.state.editedContent}
//                 onChange={this.handleContentChange}
//               />
//               <div className="flex justify-end">
//                 <button
//                   className="iot-update-button bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
//                   onClick={() => this.handleSaveClick(0)}
//                 >
//                   Save
//                 </button>
//               </div>
//             </div>
//           ) : (
//             <p className="iot-update-content text-black">{content1}</p>
//           )}
//           <div className="flex justify-end mt-4">
//             <button
//               className="iot-update-button bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
//               onClick={() => this.handleEditClick(0)}
//             >
//               Edit
//             </button>
//           </div>
//         </div>

//         <div className="iot-update-card bg-[#D1E2C4] rounded-md shadow-md p-6 mb-6 max-w-[800px] mx-auto">
//           <h2 className="text-center font-bold text-black text-xl mb-4">
//             Edge Computing
//           </h2>
//           {this.state.editingContent === 1 ? (
//             <div>
//               <textarea
//                 className="iot-update-content text-black w-full h-40 resize-none border border-gray-300 rounded-md p-2 mb-4"
//                 value={this.state.editedContent}
//                 onChange={this.handleContentChange}
//               />
//               <div className="flex justify-end">
//                 <button
//                   className="iot-update-button bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
//                   onClick={() => this.handleSaveClick(1)}
//                 >
//                   Save
//                 </button>
//               </div>
//             </div>
//           ) : (
//             <p className="iot-update-content text-black">{content2}</p>
//           )}
//           <div className="flex justify-end mt-4">
//             <button
//               className="iot-update-button bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
//               onClick={() => this.handleEditClick(1)}
//             >
//               Edit
//             </button>
//           </div>
//         </div>

//         <div className="iot-update-card bg-[#D1E2C4] rounded-md shadow-md p-6 mb-6 max-w-[800px] mx-auto">
//           <h2 className="text-center font-bold text-black text-xl mb-4">
//             Artificial intelligence
//           </h2>
//           {this.state.editingContent === 2 ? (
//             <div>
//               <textarea
//                 className="iot-update-content text-black w-full h-40 resize-none border border-gray-300 rounded-md p-2 mb-4"
//                 value={this.state.editedContent}
//                 onChange={this.handleContentChange}
//               />
//               <div className="flex justify-end">
//                 <button
//                   className="iot-update-button bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
//                   onClick={() => this.handleSaveClick(2)}
//                 >
//                   Save
//                 </button>
//               </div>
//             </div>
//           ) : (
//             <p className="iot-update-content text-black">{content3}</p>
//           )}
//           <div className="flex justify-end mt-4">
//             <button
//               className="iot-update-button bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
//               onClick={() => this.handleEditClick(2)}
//             >
//               Edit
//             </button>
//           </div>
//         </div>

//         <div className="iot-update-card bg-[#D1E2C4] rounded-md shadow-md p-6 mb-6 max-w-[800px] mx-auto">
//           <h2 className="text-center font-bold text-black text-xl mb-4">
//             New IoT Standards
//           </h2>
//           {this.state.editingContent === 3 ? (
//             <div>
//               <textarea
//                 className="iot-update-content text-black w-full h-40 resize-none border border-gray-300 rounded-md p-2 mb-4"
//                 value={this.state.editedContent}
//                 onChange={this.handleContentChange}
//               />
//               <div className="flex justify-end">
//                 <button
//                   className="iot-update-button bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
//                   onClick={() => this.handleSaveClick(3)}
//                 >
//                   Save
//                 </button>
//               </div>
//             </div>
//           ) : (
//             <p className="iot-update-content text-black">{content4}</p>
//           )}
//           <div className="flex justify-end mt-4">
//             <button
//               className="iot-update-button bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
//               onClick={() => this.handleEditClick(3)}
//             >
//               Edit
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export const iotUpdatesSearchableContents = [
//   content1,
//   content2,
//   content3,
//   content4,
// ];

// export default IotUpdates;

import React, { Component } from "react";
import { Editor } from "react-draft-wysiwyg";
import {
  EditorState,
  convertToRaw,
  convertFromRaw,
  ContentState,
} from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import axios from "axios"; // Add axios for HTTP requests

class IotUpdates extends Component {
  state = {
    news: [],
    editingContent: null,
    editorState: EditorState.createEmpty(),
  };

  componentDidMount() {
    this.fetchNews();
  }

  fetchNews = () => {
    axios
      .get("http://localhost:3002/news")
      .then((response) => {
        this.setState({ news: response.data });
        console.log("Fetched news:", response.data);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
      });
  };

  // handleEditClick = (index) => {
  //   const { news } = this.state;
  //   this.setState({
  //     editingContent: index,
  //     editorState: news[index].editorState,
  //   });
  // };

  handleEditClick = (index) => {
    const { news } = this.state;
    this.setState({
      editingContent: index,
      editorState: EditorState.createWithContent(
        ContentState.createFromText(news[index].content),
      ),
    });
  };

  handleSaveClick = async () => {
    const { editingContent, editorState, news } = this.state;
    const contentRaw = convertToRaw(editorState.getCurrentContent());
    const updatedNews = {
      ...news[editingContent],
      content: JSON.stringify(contentRaw),
    };

    try {
      await axios.put(
        `http://localhost:3002/news/${updatedNews.id}`,
        updatedNews,
      ); // Modify for your actual endpoint
      this.setState({
        news: news.map((item, index) =>
          index === editingContent ? updatedNews : item,
        ),
        editingContent: null,
        editorState: EditorState.createEmpty(),
      });
    } catch (error) {
      console.error("Failed to save news:", error);
    }
  };

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  render() {
    const { news, editingContent } = this.state;
    return (
      <div className="iot-updates-container font-poppins">
        <div className="text-center py-[20px]">
          <h1 className="text-black">LATEST IOT UPDATES</h1>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {news.map((item, index) => (
            <div
              key={item.id}
              className="iot-update-card bg-[#D1E2C4] rounded-md shadow-md p-6 flex flex-row justify-between items-center max-w-[1000px] mx-auto"
            >
              <div className="w-3/4">
                <h2 className="text-center font-bold text-black mb-4">
                  {item.title}
                </h2>
                {editingContent === index ? (
                  <Editor
                    editorState={this.state.editorState}
                    onEditorStateChange={this.onEditorStateChange}
                    toolbarClassName="rich-editor-toolbar"
                    editorClassName="rich-editor-content"
                  />
                ) : (
                  <p className="iot-update-content text-black">
                    {item.content}
                  </p>
                )}
              </div>
              <div className="flex flex-col items-end w-1/4">
                <button
                  className="iot-update-button bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 mb-4"
                  onClick={() => this.handleEditClick(index)}
                >
                  Edit
                </button>
                {editingContent === index && (
                  <button
                    className="iot-update-button bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
                    onClick={this.handleSaveClick}
                  >
                    Save
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default IotUpdates;
