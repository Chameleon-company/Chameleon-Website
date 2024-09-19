import React, { Component } from "react";
import axios from "axios";
import Screen from '../../components/app/Screen';
import CommentSection from "./CommentSection";

let content = ""
class IotStatistics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3002/resources/getIotStats')
      .then(response => {
        this.setState({ content: response.data.content });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  render() {
    ({ content } = this.state)
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
        <div className="2xl:max-w-[1320px] ml-auto mr-auto w-full sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
          <h1 className="pb-3 pt-3 text-center" style={titleStyle}>STATISTICS</h1>
        </div>

        <div className="mb-20 ml-auto mr-auto w-full max-w-[1000px] bg-[#D1E2C4]">
          <h2 className="fw-bold pt-3 text-center text-black">
            IoT Statistics in Australia
          </h2>
          <div className="ml-3 mr-3 mt-0 flex flex-wrap">
            <div className="flex-[1_0]">
              <p className="fw-normal fs-5 pb-3 pt-3 text-start text-black" style={{ textAlign: 'justify', padding: '30px'}}>
                {content}
              </p>
            </div>
          </div>
        </div>
        <div style={commentSectionStyle}><CommentSection /></div>
      </Screen>
    );
  }
}
export const iotStatisticsSearchableContents = [content];
export default IotStatistics;
