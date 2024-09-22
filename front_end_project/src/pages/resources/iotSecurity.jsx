import React, { Component } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import the Quill styles
import Screen from "../../components/app/Screen";

class IotSecurity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "It's a very good project, where we evaluate the security of applications developed by other teams. We ran a bunch of different attacks to test security, and then wrote detailed reports on our findings. Some of the attacks we ran included DDoS attacks (DDoS attacks - where an attacker tries to flood a website with requests, to prevent normal users from accessing the website), encryption attacks targeting the website's HTTPS, and a bunch of audits. We also created a bunch of audits, and created a bunch of security policies, for Chameleon." ,
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
        const strippedContent = prevState.content.replace(/\/?p/g, "");
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
            SECURITY
          </h1>
        </div>

        <div className="mb-20 ml-auto mr-auto w-full max-w-[1000px] bg-[#D1E2C4]">
          <h2 className="fw-bold pt-3 text-center text-black">
            IoT Security in Australia
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
                  {content}&nbsp;
                  <a href="https://github.com/Chameleon-company/Chameleon-security/tree/master">https://github.com/Chameleon-company/Chameleon-security/tree/master</a>
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
export const iotSecuritySearchableContents = [
  "It's a very good project, where we evaluate the security of applications developed by other teams. We ran a bunch of different attacks to test security, and then wrote detailed reports on our findings. Some of the attacks we ran included DDoS attacks (DDoS attacks - where an attacker tries to flood a website with requests, to prevent normal users from accessing the website), encryption attacks targeting the website's HTTPS, and a bunch of audits. We also created a bunch of audits, and created a bunch of security policies, for Chameleon."];

export default IotSecurity;
