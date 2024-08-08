import React, { Component } from "react";
import { notifyWelcome } from "../../components/notificationComp/NotificationComponent";
import styles from "./support.module.css";
import Screen from "../../components/app/Screen";

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showGeneralQuestions: false
        };
    }

    componentDidMount() {
        notifyWelcome(
            "Make sure to contact us only on working days 9:00 AM onwards!",
        );
    }

    toggleGeneralQuestions = () => {
        this.setState(prevState => ({
            showGeneralQuestions: !prevState.showGeneralQuestions
        }));
    };

    toggleTechnologyQuestions = () => {
      this.setState(prevState => ({
          showTechnologyQuestions: !prevState.showTechnologyQuestions
      }));
  };

  toggleResourcesQuestions = () => {
      this.setState(prevState => ({
          showResourcesQuestions: !prevState.showResourcesQuestions
      }));
  };

    render() {
        return (
            <Screen>
                <div className="bg-[#deece3]">
                    <div className={`${styles.contact_title} bg-[#4fa373]  md:text-5xl text-4xl font-medium text-center text-black`}>
                        Frequently Asked Questions
                    </div>
                    <div className={`${styles.contact_body} grid grid-cols-1   max-w-6xl mx-auto   justify-between items-start gap-3 `}>
                        <div className="contact_item">
                            <div className="flex justify-start items-center gap-3" onClick={this.toggleGeneralQuestions}>
                                <div className="contact_item_title lg:text-3xl md:text-2xl text-[22px] font-semibold ">
                                    General Questions
                                </div>
                                <div className="arrow-icon">{this.state.showGeneralQuestions ? '▼' : '▲'}</div>
                            </div>
                            {this.state.showGeneralQuestions && (
                                <div className="contact_item_context border-2 border-[#7a7e7c] w-[100%] p-2 font-semibold text-black mt-3">
                                    <ul>
                                        <li><a href="general_ques1" style={{ color: 'black' }}>What is Chameleon's mission?</a></li>
                                        <li><a href="general_ques2" style={{ color: 'black' }}>What areas does Chameleon focus on?</a></li>
                                        <li><a href="general_ques3" style={{ color: 'black' }}>How does Chameleon approach its projects?</a></li>
                                        <li><a href="general_ques4" style={{ color: 'black' }}>Highlight the potential benefits of Chameleon's solutions</a></li>                                </ul>
                                </div>
                            )}
                            </div>

                        <div className="support_item">
                            <div className="flex justify-start items-center gap-3" onClick={this.toggleTechnologyQuestions}>
                                <div className="support_item_title lg:text-3xl md:text-2xl text-[22px] font-semibold ">
                                    Technology
                                </div>
                                <div className="arrow-icon">{this.state.showTechnologyQuestions ? '▼' : '▲'}</div>
                            </div>
                            {this.state.showTechnologyQuestions && (
                                <div className="support_item_context border-2 border-[#7a7e7c] w-[100%] p-2 font-semibold text-black mt-3">
                                <ul>
                                        <li><a href="technology_ques1" style={{ color: 'black' }}>Does Chameleon prioritize data privacy and security?</a></li>
                                        <li><a href="technology_ques2" style={{ color: 'black' }}>Can Chameleon's solutions be customized for specific needs?</a></li>
                                        <li><a href="technology_ques3" style={{ color: 'black' }}>How does Chameleon deploy its solutions in real-world environments?</a></li>
                                        <li><a href="technology_ques4" style={{ color: 'black' }}>Where can users find support and troubleshooting resources?</a></li>                                </ul>
                            
                                </div>
                            )}
                            </div>
                        <div className="support_item">
                            <div className="flex justify-start items-center gap-3" onClick={this.toggleResourcesQuestions}>
                                <div className="support_item_title lg:text-3xl md:text-2xl text-[22px] font-semibold ">
                                    Resources
                                </div>
                                <div className="arrow-icon">{this.state.showResourcesQuestions ? '▼' : '▲'}</div>
                            </div>
                            {this.state.showResourcesQuestions && (
                                <div className="support_item_context border-2 border-[#7a7e7c] w-[100%] p-2 font-semibold text-black mt-3">
                                    <ul>
                                        <li><a href="resource_ques1" style={{ color: 'black' }}>Are there collaboration opportunities or partnerships available with Chameleon?</a></li>
                                        <li><a href="resource_ques2" style={{ color: 'black' }}>How can users provide feedback or suggestions to Chameleon?</a></li>
                                        <li><a href="resource_ques3" style={{ color: 'black' }}>How can I learn more or get involved with Chameleon's projects?</a></li>
                                    </ul>
                            
                                </div>
                            )}
                        
                        </div>
                    </div>

                    <div className="md:col-span-7" style={{ padding: "8%" }}>
                        <h1
                            style={{
                                fontWeight: "bold",
                                marginBottom: "2rem",
                                textAlign: "center",
                            }}
                        >
                            Submit your Query
                        </h1>
                        <form>
                            <div controlId="formname" style={{ marginBottom: "2rem" }}>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-100"
                                    style={{
                                        backgroundColor: "#ccc",
                                        border: "1px solid black",
                                        height: "50px",
                                    }}
                                />
                            </div>

                            <div controlId="formemail" style={{ marginBottom: "2rem" }}>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-100"
                                    style={{
                                        backgroundColor: "#ccc",
                                        border: "1px solid black",
                                        height: "50px",
                                    }}
                                />
                            </div>

                            <div controlId="formquery" style={{ marginBottom: "2rem" }}>
                                <input
                                    type="text"
                                    placeholder="Enter your query.."
                                    className="w-100"
                                    style={{
                                        backgroundColor: "#ccc",
                                        border: "1px solid black",
                                        height: "50px",
                                    }}
                                />
                            </div>

                            <div className="d-flex justify-content-center mb-3">
                                <button
                                    className="bg-green-emrld p-3 text-black-24"
                                    type="submit"
                                    style={{ padding: "10px 80px", fontSize: "1rem" }}
                                >
                                    Submit
                                </button>
                            </div>

                            
                        </form>
                    </div>
                </div>
            </Screen>
        );
    }
}

export const contactSearchableContents = [
    "Contact Us",
    "Phone Us",
    "Send a Email",
    "Live Chat",
];

export default Contact;
