import React, { Component } from "react";
import axios from "axios";
import Screen from "../../components/app/Screen";
import CommentSection from "./CommentSection";

let content1, content2, content3, content4, content5 = ""
class IotSecurity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content1: "",
      content2: "",
      content3: "",
      content4: "",
      content5: ""
    };
  }
  componentDidMount() {
    axios.get('http://localhost:3002/resources/getIotSecurity')
      .then(response => {
        this.setState({
          content1: response.data.content1,
          content2: response.data.content2,
          content3: response.data.content3,
          content4: response.data.content4,
          content5: response.data.content5
        });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
  render() {
    const { content1, content2, content3, content4, content5 } = this.state;
    const titleStyle = {
      color: 'white'
    };
    // Styling for comment section
    const commentSectionStyle = {
      width: '100%',
      maxWidth: '1000px',
      margin: '20px auto',
      padding: '60px',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
    };
    return (
      <Screen>
        <div>
          <h1 className="text-center pt-3 pb-3" style={titleStyle}>
            SECURITY IN IOT
          </h1>
        </div>

        <div className="bg-[#D1E2C4] max-w-[1000px] m-auto py-[20px]">
          <h2 className="text-center font-bold">Importance of IoT Security</h2>
          <div className="flex justify-center">
            <p
              className="fw-normal fs-5 pb-3 pt-3 text-start text-black"
              style={{ textAlign: "justify", padding: "30px" }}
            >
              {content1}
            </p>
          </div>
        </div>

        <br />

        <div className="bg-[#D1E2C4] max-w-[1000px] m-auto py-[20px]">
          <h2 className="text-center font-bold">Common IoT Security Threats</h2>
          <div className="flex justify-center">
            <p
              className="fw-normal fs-5 pb-3 pt-3 text-start text-black"
              style={{ textAlign: "justify", padding: "30px" }}
            >
              {content2}
            </p>
          </div>
        </div>

        <br />

        <div className="bg-[#D1E2C4] max-w-[1000px] m-auto py-[20px]">
          <h2 className="text-center font-bold">
            Strategies for Enhancing IoT Security
          </h2>
          <div className="flex justify-center">
            <p
              className="fw-normal fs-5 pb-3 pt-3 text-start text-black"
              style={{ textAlign: "justify", padding: "30px" }}
            >
              {content3}
            </p>
          </div>
        </div>

        <br />

        <div className="bg-[#D1E2C4] max-w-[1000px] m-auto py-[20px]">
          <h2 className="text-center font-bold">Case Studies and Examples</h2>
          <div className="flex justify-center">
            <p
              className="fw-normal fs-5 pb-3 pt-3 text-start text-black"
              style={{ textAlign: "justify", padding: "30px" }}
            >
              {content4}
            </p>
          </div>
        </div>

        <br />

        <div className="bg-[#D1E2C4] max-w-[1000px] m-auto py-[20px] mb-[80px]">
          <h2 className="text-center font-bold">
            Future Trends in IoT Security
          </h2>
          <div className="flex justify-center">
            <p
              className="fw-normal fs-5 pb-3 pt-3 text-start text-black"
              style={{ textAlign: "justify", padding: "30px" }}
            >
              {content5}
            </p>
          </div>
        </div>

        <div style={commentSectionStyle}><CommentSection /></div>
      </Screen>
    );
  }
}

export const iotSecuritySearchableContents = [
  content1,
  content2,
  content3,
  content4,
  content5,
];

export default IotSecurity;