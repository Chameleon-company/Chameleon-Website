import React from 'react';
import { Accordion, Button, Col, Form, Row } from 'react-bootstrap';
import Screen from '../../components/app/Screen';
import Chatbox from '../Chatbot/Chatbox';
import '../Chatbot/chatbox.css';
import chameleonLogo from "../../assets/ChameleonLogo.png";
import chatOpenImg from "../Chatbot/images/chat-open.png";
import chatCloseImg from "../Chatbot/images/chat-close.png";
import dotMenuImg from "../Chatbot/images/dot-menu.png";
import chatIcon from "../Chatbot/images/chat-icon.png";
import fileSelectIcon from "../Chatbot/images/file-select.png";
import sendMessageImg from "../Chatbot/images/send-message.png";

export default function Support (props) {
    const general_questions = [
        { id: 1, title: `What is Chameleon's mission?`, content: `Provide a concise overview of Chameleon's mission to research, create, test, document, and deploy IoT-based solutions aimed at enhancing life through smart city technologies.` },
        { id: 2, title: `What areas does Chameleon focus on?`, content: `Detail the specific areas where Chameleon applies its expertise, including: \n Building smarter cities: Discuss how Chameleon develops solutions to improve urban infrastructure and services. \n Smart homes: Explain Chameleon's role in creating IoT devices and systems for residential use. \n Transportation: Describe Chameleon's efforts to enhance transportation systems through IoT technology, such as traffic management and public transit systems. \n Energy management systems: Highlight Chameleon's initiatives to optimize energy usage and promote sustainability in urban environments.` },
        { id: 3, title: `How does Chameleon approach its projects?`, content: `Outline Chameleon's methodology for researching, creating, testing, documenting, and deploying IoT solutions. \n Emphasize the importance of rigorous testing and documentation in ensuring the reliability and effectiveness of deployed solutions.` },
        { id: 4, title: `Are there collaboration opportunities or partnerships available with Chameleon?`, content: `Yes, Chameleon welcomes collaboration opportunities and partnerships on smart city projects, research initiatives, and innovation ventures. Partnering with Chameleon provides access to expertise, resources, and networks within the smart city ecosystem.` },
        { id: 5, title: `Does Chameleon prioritize data privacy and security?`, content: `Yes, data privacy and security are top priorities for Chameleon. We implement measures to safeguard sensitive information and comply with relevant regulations such as GDPR or CCPA to ensure the protection of user data in our IoT solutions.` },
    ];

    return (
        <div className='bg-green-emrld'>
            <Screen>
                <div className='container bg-green-sage mt-xl-5 my-auto p-5 text-dark' style={{ borderRadius: 25 }}>
                    {/* Page Title */}
                    <Row className='p-2 text-center'>
                        <h1>Support</h1>
                    </Row>

                    {/* Page Content */}
                    <Row className='p-5'>

                        {/* FAQs TODO: Border*/}
                        <Col className='p-3' xs={12} md={12} lg={6} xl={6} style={{ border: '1px solid #0fcd25', borderRadius: '0.25rem' }}>

                            {/* Section Title */}
                            <div className='text-center p-1'>
                                <h2>FAQs</h2>
                            </div>

                            {/* Section Content */}
                            <Accordion defaultActiveKey="0">
                                {Array.isArray(general_questions) && general_questions.map((question) => (
                                    <Accordion.Item eventKey={question.id} key={question.id}>
                                        <Accordion.Header>{question.title}
                                        </Accordion.Header>
                                        <Accordion.Body>{question.content} </Accordion.Body>
                                    </Accordion.Item>
                                ))}
                            </Accordion>
                        </Col>

                        {/* Submit Query */}
                        <Col style={{ border: '1px solid #0fcd25', borderRadius: '0.25rem' }}>
                            {/* Section Title */}
                            <div className='text-center p-1'>
                                <h2>Submit a Query</h2>
                            </div>

                            {/* Section Content */}
                            <Form className='p-2'>
                                <fieldset>
                                    <Form.Group className="mb-3" controlId="fullname">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" placeholder="John Doe" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="email">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="john@doe.com" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="query">
                                        <Form.Label>Example textarea</Form.Label>
                                        <Form.Control as="textarea" rows={3} placeholder='Type your query here' />
                                    </Form.Group>
                                    <Button type='submit' variant='outline-success'>Submit</Button>
                                </fieldset>
                            </Form>
                        </Col>

                    </Row>
                </div>

                {/* Add the Chatbox component */}
                <Chatbox chameleonLogo={chameleonLogo} chatOpenImg={chatOpenImg} chatCloseImg={chatCloseImg} dotMenuImg={dotMenuImg} chatIcon={chatIcon} fileSelectIcon={fileSelectIcon} sendMessageImg={sendMessageImg} />
            </Screen>
        </div>
    );
}
