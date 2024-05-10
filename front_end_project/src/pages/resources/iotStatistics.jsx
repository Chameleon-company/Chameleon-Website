import { Component } from "react";

let content1 =
  "By 2028, the Australian IoT market is projected to have increased from US$15.46 billion to US$27.13 billion. The largest IoT market in Australia is the automotive industry, followed by the industrial and retail sectors. In Australia, there will be 16.7 million linked IoT devices by 2022. By 2028, Australia is projected to have 28.9 million linked IoT devices. IoT devices are connected to 10 ordinary Australian homes. Smart speakers, smart thermostats, and smart security cameras are the most widely used IoT devices in Australia. The adoption of Industry 4.0 technologies, the rise of the Internet of Vehicles (IAV), and the desire for smart city solutions are what are driving the IoT market in Australia.";

class IotStatistics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      editedContent: content1,
    };
  }

  handleEditButtonClick = () => {
    this.setState({ isEditing: !this.state.isEditing });
  };

  handleContentChange = (e) => {
    this.setState({ editedContent: e.target.value });
  };

  handleSaveClick = () => {
    content1 = this.state.editedContent;
    this.setState({ isEditing: false });
  };

  render() {
    return (
      <div className="mb-20 ml-auto mr-auto w-full max-w-[800px] bg-[#D1E2C4] rounded-md shadow-md p-6">
        <h2 className="text-center font-bold text-black text-2xl mb-4">
          IoT Statistics in Australia
        </h2>
        {this.state.isEditing ? (
          <div>
            <textarea
              className="iot-update-content text-black w-full h-40 resize-none border border-gray-300 rounded-md p-2 mb-4"
              value={this.state.editedContent}
              onChange={this.handleContentChange}
            />
            <div className="flex justify-end">
              <button
                className="edit-button bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
                onClick={this.handleSaveClick}
              >
                Save
              </button>
            </div>
          </div>
        ) : (
          <p className="text-start text-black text-lg">{content1}</p>
        )}
        <div className="flex justify-end mt-4">
          <button
            className="edit-button bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
            onClick={this.handleEditButtonClick}
          >
            {this.state.isEditing ? "Save" : "Edit"}
          </button>
        </div>
      </div>
    );
  }
}

export const iotStatisticsSearchableContents = [content1];

export default IotStatistics;
