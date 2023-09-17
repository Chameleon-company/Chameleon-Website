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

                        <div className='contributions'>

                            <h2> Chameleon Website Contributions Table</h2>

                            <table>
                                <tr>
                                    <th></th>
                                    <th>2022 T2</th>
                                    <th>2022 T3</th>
                                    <th>2023 T1</th>
                                </tr>
                                <tr>
                                    <td>Project Leader</td>
                                    <td>Nykolai Garcia McHerron</td>
                                    <td>Kinshuk Jain</td>
                                    <td>Janvi Gupta</td>
                                </tr>
                                <tr>
                                    <td>Web Dev Leadership Team</td>
                                    <td>
                                        Shakwat Hossain Limon
                                        <br></br>
                                        Kinshuk Jain
                                    </td>
                                    <td> Janvi Gupta
                                    <br></br>
                                        Michael Wei Zhang Lai
                                    </td>
                                    <td>
                                        Mayank Verma
                                        <br></br>
                                        Navin Dharmarajan
                                    </td>
                                </tr>
                                <tr>
                                    <td>Design Leadership Team</td>
                                    <td>Ayushi Natalie Alujjage </td>
                                    <td>
                                        Muhammad Haris Saeed
                                        <br></br>
                                        Pratham
                                    </td>
                                    <td> ZAK CONSTABLE
                                    <br></br>
                                        Jon Suwannakot
                                    </td>

                                </tr>
                                <tr>
                                    <td>Web Dev Team Members</td>
                                    <td>
                                        Jack Hagen
                                        <br></br>
                                        Mathew Ho<br></br>
                                        Julian Ryan<br></br>
                                        Lachlan James Exton<br></br>
                                        Xinyu Ji<br></br>
                                        Dasun Tharaka Kodikara Munasinghege<br></br>
                                        Surpreet Singh<br></br>
                                        Zhenyu Ye<br></br>
                                        VINEETH KARUPPIAH<br></br>
                                        Gideon Kiptugen<br></br>
                                        Jason Hu<br></br>
                                        ChenXuan Hao<br></br>
                                        Jiayi Wei<br></br>
                                    </td>

                                    <td>
                                        JIAYI WEI<br></br>
                                        JASON HU<br></br>
                                        SURPRRET SINGH<br></br>
                                        BHAVIKA SOOD<br></br>
                                        MAYANK VERMA<br></br>
                                        TUAN MINH VU<br></br>
                                        QIUSHI HUANG<br></br>
                                        KOK LUEN CHIA<br></br>
                                        JIANKUN WANG<br></br>
                                    </td>

                                    <td>
                                        Antony Raju<br></br>
                                        Bhavika Sood<br></br>
                                        Jordan Reeves<br></br>
                                        Seung Hwan Kim<br></br>
                                        Zhuo Yu Li<br></br>
                                        Ziyan Zhai<br></br>
                                        Aishwarya Mariselvam<br></br>
                                        Jiankun Wang<br></br>
                                        Mathew Ho<br></br>
                                        Qiushi Huang<br></br>
                                        Regan Tam<br></br>
                                        Thomas Koutsaplis<br></br>
                                        Davinderjit Singh<br></br>
                                        Amal Paul<br></br>
                                        Jiankun Wang<br></br>
                                        Qiushi Huang<br></br>
                                    </td>

                                </tr>
                                <tr>
                                    <td>Design Team Members</td>
                                    <td>
                                        Nathan Cahill<br></br>
                                        Nikhil Nikhil<br></br>
                                        Sangjun/Samual Kim<br></br>
                                        Tejal Girish Ranade<br></br>
                                        Muhammed Haris Saeed<br></br>
                                        Pratham<br></br>
                                        Aye Moh Moh Shwe<br></br>
                                        Uche Ajoku<br></br>
                                    </td>

                                    <td>
                                        ZAK CONSTABLE<br></br>
                                        CHENXUAN HAO<br></br>
                                        ZIYAN SHEN
                                    </td>

                                    <td>
                                        Yin Chak Yiu<br></br>
                                        Ziyan Shen<br></br>
                                        Nitin Singh Dogra
                                    </td>
                                </tr>

                            </table>
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