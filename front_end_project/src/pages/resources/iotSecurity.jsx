import React, { Component } from "react";
import Screen from "../../components/app/Screen";
import CommentSection from "./CommentSection";

const content1 =
  "The proliferation of IoT devices introduces a significant challenge: security. With billions of devices connected to the internet, the potential attack surface for malicious actors has expanded exponentially. Ensuring the security of these devices is paramount to protect sensitive data, maintain user privacy, and ensure the reliability of IoT systems.";
const content2 =
  "Data breaches involve unauthorized access to sensitive information collected by IoT devices. DDoS attacks can occur when compromised IoT devices are used to launch distributed denial-of-service attacks. Device hijacking refers to the unauthorized control of IoT devices, potentially leading to malicious activities. Network attacks exploit vulnerabilities in network protocols to intercept or alter data.";
const content3 =
  "Encryption is crucial, as it involves implementing robust encryption protocols to protect data in transit and at rest. Ensuring strong authentication mechanisms is essential to verify the identity of devices and users. Regular updates of firmware and software are necessary to patch vulnerabilities. Network segmentation helps by isolating IoT devices on separate networks to limit the spread of potential attacks. Educating users about best practices for securing IoT devices and networks is also important.";
const content4 =
  "In healthcare, securing IoT is vital for protecting patient data and ensuring the reliability of medical IoT devices. For smart homes, it involves securing home automation systems to prevent unauthorized access and control. In the context of industrial IoT, safeguarding critical infrastructure and industrial processes from cyber threats is of utmost importance.";
const content5 =
  "AI-powered security solutions are on the rise, using artificial intelligence to detect and respond to threats in real-time. Blockchain for IoT security leverages blockchain technology to enhance transparency and security in IoT transactions. Adopting a zero-trust architecture, where every device and user must be verified before gaining access to network resources, is also becoming increasingly popular.";

class IotSecurity extends Component {
  render() {
    const titleStyle = {
      color: "white",
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
