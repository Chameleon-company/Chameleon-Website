import React, { useState } from 'react';
import Screen from '../../components/app/Screen';
import { Accordion, Button, Col, Form, Row } from 'react-bootstrap';

export default function Support (props) {

    // TODO: Fill in questions and answers
    const general_questions = [
        { id: 1, title: `What is Chameleon's mission?`, content: `Provide a concise overview of Chameleon's mission to research, create, test, document, and deploy IoT-based solutions aimed at enhancing life through smart city technologies.` },
        { id: 2, title: `What areas does Chameleon focus on?`, content: `Detail the specific areas where Chameleon applies its expertise, including: \n Building smarter cities: Discuss how Chameleon develops solutions to improve urban infrastructure and services. \n Smart homes: Explain Chameleon's role in creating IoT devices and systems for residential use. \n Transportation: Describe Chameleon's efforts to enhance transportation systems through IoT technology, such as traffic management and public transit systems. \n Energy management systems: Highlight Chameleon's initiatives to optimize energy usage and promote sustainability in urban environments.` },
        { id: 3, title: `How does Chameleon approach its projects?`, content: `Outline Chameleon's methodology for researching, creating, testing, documenting, and deploying IoT solutions. \n Emphasize the importance of rigorous testing and documentation in ensuring the reliability and effectiveness of deployed solutions.` },
    ];

    return (
        <>
            <Screen>
                <div className='container mt-xl-5 my-auto p-5 bg-light text-dark' style={{ borderRadius: 25 }}>
                    {/* Page Title */}
                    <Row className='p-2 text-center'>
                        <h1>Support</h1>
                    </Row>

                    {/* Page Content */}
                    <Row className='p-5'>

                        {/* FAQs TODO: Border*/}
                        <Col className='p-3' xs={12} md={12} lg={6} xl={6}>

                            {/* Section Title */}
                            <div className='text-center p-1'>
                                <h2>FAQs</h2>
                            </div>

                            {/* Section Content */}
                            <Accordion defaultActiveKey="0">
                                {Array.isArray(general_questions) && general_questions.map((question) => (
                                    <Accordion.Item eventKey={question.id} key={question.id}>
                                        <Accordion.Header>{question.title}</Accordion.Header>
                                        <Accordion.Body> {question.content} </Accordion.Body>
                                    </Accordion.Item>
                                ))}
                            </Accordion>
                        </Col>

                        {/* Submit Query */}
                        <Col>
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
            </Screen>
        </>
    );
}