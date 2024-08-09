import React, { Component } from "react";
import { notifyWelcome } from "../../components/notificationComp/NotificationComponent";
import styles from "./support.module.css";

class Support extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showGeneralQuestions: false,
            showTechnologyQuestions: false,
            showResourcesQuestions: false
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
            <div className="bg-[#deece3]">
                <div className={`${styles.support_title} bg-[#4fa373]  md:text-5xl text-4xl font-medium text-center text-black`}>
                    Frequently Asked Questions
                </div>
                <div className={`${styles.support_body} grid grid-cols-1   max-w-6xl mx-auto   justify-between items-start gap-3 `}>
                    <div className="support_item">
                        <div className="flex justify-start items-center gap-3" onClick={this.toggleGeneralQuestions}>
                            <div className="support_item_title lg:text-3xl md:text-2xl text-[22px] font-semibold ">
                                General Questions
                            </div>
                            <div className="arrow-icon">{this.state.showGeneralQuestions ? '-' : '+'}</div>
                        </div>
                        {this.state.showGeneralQuestions && (
                            <div className="support_item_context border-2 border-[#7a7e7c] w-[100%] p-2 font-semibold text-black mt-3">
                                <ul>
                                    <li><a href="general_ques1.js" style={{ color: 'black' }}>What is Chameleon's mission?</a></li>
                                    <li href="general_ques2">What areas does Chameleon focus on?</li>
                                    <li href="general_ques3">How does Chameleon approach its projects?</li>
                                    <li value="general_ques4">Highlight the potential benefits of Chameleon's solutions</li>
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className="support_item">
                        <div className="flex justify-start items-center gap-3" onClick={this.toggleTechnologyQuestions}>
                            <div className="support_item_title lg:text-3xl md:text-2xl text-[22px] font-semibold ">
                                Technology
                            </div>
                            <div className="arrow-icon">{this.state.showTechnologyQuestions ? '-' : '+'}</div>
                        </div>
                        {this.state.showTechnologyQuestions && (
                            <div className="support_item_context border-2 border-[#7a7e7c] w-[100%] p-2 font-semibold text-black mt-3">
                                {/* Add your technology-related questions here */}
                            </div>
                        )}
                    </div>
                    <div className="support_item">
                        <div className="flex justify-start items-center gap-3" onClick={this.toggleResourcesQuestions}>
                            <div className="support_item_title lg:text-3xl md:text-2xl text-[22px] font-semibold ">
                                Resources
                            </div>
                            <div className="arrow-icon">{this.state.showResourcesQuestions ? '-' : '+'}</div>
                        </div>
                        {this.state.showResourcesQuestions && (
                            <div className="support_item_context border-2 border-[#7a7e7c] w-[100%] p-2 font-semibold text-black mt-3">
                                {/* Add your resource-related questions here */}
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
                                className="bg-green-emerald p-3 text-white w-24"
                                type="submit"
                                style={{ padding: "10px 80px", fontSize: "1rem" }}
                            >
                                Submit
                            </button>
                        </div>

                        <div className="d-flex justify-content-between">
                            <div
                                style={{
                                    backgroundColor: "green",
                                    borderRadius: "50%",
                                    width: "40px",
                                    height: "40px",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                            </div>

                            <div
                                style={{
                                    backgroundColor: "green",
                                    borderRadius: "50%",
                                    width: "40px",
                                    height: "40px",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                            </div>

                            <div
                                style={{
                                    backgroundColor: "green",
                                    borderRadius: "50%",
                                    width: "40px",
                                    height: "40px",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export const supportSearchableContents = [
    "Support Us",
    "Phone Us",
    "Send a Email",
    "Live Chat",
];

export default Support;
