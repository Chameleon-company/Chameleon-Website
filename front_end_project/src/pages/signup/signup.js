import React, { Component } from "react";
import Background from "./images/Background.png";
import Logo from "./images/Chameleon_Logo.png";
import Google from "./images/google.png";
import GIT from "./images/GIT.png";
import Microsoft from "./images/microsoft.png";

class Signup extends Component {
  render() {
    return (
      <div
        style={{
          height: "123.5vh",
          backgroundImage: `linear-gradient(to right, transparent 43.43%, white 0%), url(${Background})`,
          backgroundSize: "cover",
          backgroundPosition: "left center",
          overflow: "hidden",
        }}>
        <div
          className="container mx-auto p-0"
          style={{ maxWidth: "80%", marginTop: "3%", border: "3px solid gray" }}>
          <div className="grid grid-cols-12">
            <div
              className="md:col-span-5"
              style={{
                backgroundColor: "gray",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}>
              <img
                src={Logo}
                alt="Logo"
                style={{ width: "50%", height: "auto", marginBottom: "2rem" }}/>
              <p
                style={{
                  fontSize: "1.7rem",
                  fontWeight: "bold",
                  textAlign: "center",
                }}>
                Enhancing life through IoT-Powered Smart City Solutions
              </p>
              <div
                style={{
                  position: "absolute",
                  right: 0,
                  top: 0,
                  bottom: 0,
                  width: "1px",
                  backgroundColor: "black",
                }}
              ></div>
            </div>

            <div className="md:col-span-7" style={{ padding: "8%" }}>
              <h1
                style={{
                  fontWeight: "bold",
                  marginBottom: "2rem",
                  textAlign: "center",
                }}>
                Sign Up
              </h1>

              <form>

              <div controlId="fName" style={{ marginBottom: "2rem" }}>
                  <input
                    type="text"
                    placeholder="FIRST NAME"
                    className="w-100"
                    style={{
                      backgroundColor: "#ccc",
                      border: "1px solid black",
                      height: "50px",
                    }}/>
                </div>

                <div controlId="lName" style={{ marginBottom: "2rem" }}>
                  <input
                    type="text"
                    placeholder="LAST NAME"
                    className="w-100"
                    style={{
                      backgroundColor: "#ccc",
                      border: "1px solid black",
                      height: "50px",
                    }}/>
                </div>

                <div controlId="formEmail" style={{ marginBottom: "2rem" }}>
                  <input
                    type="Email"
                    placeholder="EMAIL ADDRESS"
                    className="w-100"
                    style={{
                      backgroundColor: "#ccc",
                      border: "1px solid black",
                      height: "50px",
                    }}/>
                </div>

                <div controlId="formpassword" style={{ marginBottom: "2rem" }}>
                  <input
                    type="password"
                    placeholder="PASSWORD"
                    className="w-100"
                    style={{
                      backgroundColor: "#ccc",
                      border: "1px solid black",
                      height: "50px",
                    }}/>
                </div>

                <div controlId="formrepassword" style={{ marginBottom: "2rem" }}>
                  <input
                    type="password"
                    placeholder="RE-PASSWORD"
                    className="w-100"
                    style={{
                      backgroundColor: "#ccc",
                      border: "1px solid black",
                      height: "50px",
                    }}/>
                </div>

                <p style={{ fontWeight: "bold", textAlign: "right" }}>
                  <a href="/login">Already have an account? Sign in</a>
                </p>

                <div className="d-flex justify-content-center mb-3">
                  <button
                    type="submit"
                    style={{ padding: "10px 80px", fontSize: "1rem", backgroundColor: "green", color: "white" }}>
                    {" "}
                    SIGNUP
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
                    }}>
                    <a href="https://github.com/" target="_blank"><img src={GIT} alt="GITHub Icon" /></a>
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
                    }}>
                    <a href="https://mail.google.com/" target="_blank"><img
                      src={Google}
                      alt="Google Icon"
                      style={{ width: "90%", height: "60%" }}/></a>
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
                    }}>
                    <a href="https://www.microsoft.com/en-us" target="_blank"><img
                      src={Microsoft}
                      alt="Microsoft Icon"
                      style={{ width: "60%", height: "60%" }}/></a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;