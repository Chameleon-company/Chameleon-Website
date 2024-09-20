<<<<<<< HEAD
import React, { Component } from "react";
import tech from "./images/tech.png";
import IoTMelbourne from "./images/IoTMelbourne.jpg";
import device from "./images/device.jpg";
import security from "./images/security.jpg";
import IotResourcesComponent from "../../components/resources/iotResources";
import Screen from "../../components/app/Screen";
import { Modal, Button, Form } from "react-bootstrap";
import "./iot.css";

// Modal Form Component
function ResourceFormModal({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Resource</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formResourceTitle">
            <Form.Label>Resource Title</Form.Label>
            <Form.Control type="text" placeholder="Enter resource title" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formResourceDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter description"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formResourceImage">
            <Form.Label>Image URL</Form.Label>
            <Form.Control type="text" placeholder="Enter image URL" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Save Changes
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

class IotResources extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resources: [
        {
          id: 1,
          img: device,
          altImg: "Technology Graphic",
          url: "/iotTechnologies",
          heading: "Technologies",
        },
        {
          id: 2,
          img: IoTMelbourne,
          altImg: "Melbourne Street View",
          url: "/iotStatistics",
          heading: "Statistics",
        },
        {
          id: 3,
          img: tech,
          altImg: "Technology Graphic",
          url: "/iotUpdates",
          heading: "Innovations",
        },
        {
          id: 4,
          img: security,
          altImg: "Security Graphic",
          url: "/iotSecurity",
          heading: "Security",
        },
      ],
      showModal: false,
    };
  }

  handleShow = () => this.setState({ showModal: true });
  handleClose = () => this.setState({ showModal: false });

  handleRemove = (id) => {
    const updatedResources = this.state.resources.filter(
      (resource) => resource.id !== id,
    );
    this.setState({ resources: updatedResources });
  };

  render() {
    return (
      <Screen>
        <div className="m-auto flex max-w-[1500px] flex-col justify-between bg-[#67A170] p-5 section-height">
          <div className="2xl:max-w-[1320px] ml-auto mr-auto w-full sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
            <h1 className="pb-3 pt-3 text-center">RESOURCES</h1>
          </div>

          <div className="flex flex-wrap justify-center">
            {this.state.resources.map((resource) => (
              <div
                key={resource.id}
                className="hover:scale-105 hover:shadow-lg transition-transform duration-300 m-2"
              >
                <IotResourcesComponent
                  img={resource.img}
                  altImg={resource.altImg}
                  url={resource.url}
                  heading={resource.heading}
                />
                <div className="d-flex justify-content-center mt-2">
                  <Button
                    variant="dark"
                    onClick={() => this.handleRemove(resource.id)}
                    className="btn-sm"
                    style={{ marginTop: "-10px" }} // Adjust the margin to bring it closer to the card
                  >
                    Remove
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Button to trigger the modal form */}
          <div className="w-full flex justify-center mt-6">
            <Button variant="success" onClick={this.handleShow} size="lg">
              Add New Resource
            </Button>
          </div>

          {/* Modal Form */}
          <ResourceFormModal
            show={this.state.showModal}
            handleClose={this.handleClose}
          />
=======
import { Component } from "react";
import Screen from "../../components/app/Screen";
import IotResourcesComponent from "../../components/resources/iotResources";
import IoTMelbourne from "./images/IoTMelbourne.jpg";
import device from "./images/device.jpg";
import tech from "./images/tech.png";
import "./iot.css";

class IotResources extends Component {
  render() {
    return (
      <Screen>
        <div className="m-auto flex max-w-[1500px] flex-row flex-wrap justify-between bg-[#67A170] p-5 section-height">
          <div className="2xl:max-w-[1320px] ml-auto mr-auto w-full sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
            <h1 className="pb-3 pt-3 text-center">RESOURCES</h1>
          </div>
          <div className="hover:scale-105 hover:shadow-lg transition-transform duration-300">
            <IotResourcesComponent
              img={device}
              altImg="Technology Graphic"
              url="/iotTechnologies"
              heading="Technologies"
            />
          </div>

          <div className="hover:scale-105 hover:shadow-lg transition-transform duration-300">
            <IotResourcesComponent
              img={IoTMelbourne}
              altImg="Melbourne Street View"
              url="/iotStatistics"
              heading="Statistics"
            />
          </div>

          <div className="hover:scale-105 hover:shadow-lg transition-transform duration-300">
            <IotResourcesComponent
              img={tech}
              altImg="Technology Graphic"
              url="/iotUpdates"
              heading="Innovations"
            />
          </div>

          <br></br>
>>>>>>> cd8b56efe52d4749a167e1e5ff76480437a637d2
        </div>
      </Screen>
    );
  }
}

export default IotResources;
