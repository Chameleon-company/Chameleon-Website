import React, { Component } from "react";
import Screen from '../../components/app/Screen';
import axios from "axios";
// import Container from 'react-bootstrap';
import CommentSection from "./CommentSection";

let content1, content2, content3, content4 = "";
class IotUpdates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content1: "",
      content2: "",
      content3: "",
      content4: ""
    };
  }
  componentDidMount() {
    axios.get('http://localhost:3002/resources/getIotUpdates')
      .then(response => {
        const data = response.data;
        this.setState({
          content1: data.find(item => item.content1) ? data.find(item => item.content1).content1 : '',
          content2: data.find(item => item.content2) ? data.find(item => item.content2).content2 : '',
          content3: data.find(item => item.content3) ? data.find(item => item.content3).content3 : '',
          content4: data.find(item => item.content4) ? data.find(item => item.content4).content4 : '',
        });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
  render() {
    const { content1, content2, content3, content4 } = this.state;
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
          <h1 className="text-center pt-3 pb-3" style={titleStyle}>LATEST IOT UPDATES</h1>
        </div>

        <div className="bg-[#D1E2C4] max-w-[1000px] m-auto py-[20px]">
          <h2 className="text-center font-bold">6G Wireless Technology</h2>
          <div className="flex justify-center">
            <p className="fw-normal fs-5 pb-3 pt-3 text-start text-black" style={{ textAlign: 'justify', padding: '30px' }}>{content1}</p>
          </div>
        </div>

        <br />

        <div className="bg-[#D1E2C4] max-w-[1000px] m-auto py-[20px]">
          <h2 className="text-center font-bold">Edge Computing</h2>
          <div className="flex justify-center">
            <p className="fw-normal fs-5 pb-3 pt-3 text-start text-black" style={{ textAlign: 'justify', padding: '30px' }}>{content2}</p>
          </div>
        </div>

        <br />

        <div className="bg-[#D1E2C4] max-w-[1000px] m-auto py-[20px]">
          <h2 className="text-center font-bold">Artificial intelligence</h2>
          <div className="flex justify-center">
            <p className="fw-normal fs-5 pb-3 pt-3 text-start text-black" style={{ textAlign: 'justify', padding: '30px' }}>{content3}</p>
          </div>
        </div>

        <br />

        <div className="bg-[#D1E2C4] max-w-[1000px] m-auto py-[20px] mb-[80px]">
          <h2 className="text-center font-bold">New IoT Standards</h2>
          <div className="flex justify-center">
            <p className="fw-normal fs-5 pb-3 pt-3 text-start text-black" style={{ textAlign: 'justify', padding: '30px' }}>{content4}</p>
          </div>
        </div>

        <div style={commentSectionStyle}><CommentSection /></div>
      </Screen>
    );
  }
}

export const iotUpdatesSearchableContents = [content1, content2, content3, content4];
export default IotUpdates;