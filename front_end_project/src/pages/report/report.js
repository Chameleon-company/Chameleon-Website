import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import React, { Component } from 'react';
import './report.css'
// import cham from './images/cham.png'
import ev from './images/ev.png'
import mop from './images/mop.png'
import cham from './images/cham.png'
import "bootstrap/dist/css/bootstrap.min.css";

function Report() {

    return (
        <Container>
            <Row>
                <div className="report">
                    Project Progress Report: Trimester 1, 2023
                <br></br>
                <br></br>
                </div>
                <Col xs={12}>
                    <div className="back">

                        <br></br>
                        <br></br>

                        <div id="evDiv">
                            <div id="myBar">30%</div>
                            <div className='evImage'>
                                <img src={ev} width="100" height="100" />
                                <p>EV Chargers</p>
                            </div>
                        </div>

                        <br></br>
                        <br></br>
                        <br></br>

                        <div id="websiteDiv">
                            <div id="webBar">40%</div>
                            <div className='chamImage'>
                                <img src={cham} width="100" height="100"></img>
                                <p>Chameleon Website</p>
                            </div>
                        </div>

                        <br></br>
                        <br></br>
                        <br></br>

                        <div id="mopDiv">
                            <div id="mopBar">60%</div>
                            <div className='mopImage'>
                                <img src={mop} width="100" height="100" />
                                <p>Melbourne Open Data</p>
                            </div>
                        </div>

                        <br></br>
                        <br></br>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}


export default Report;