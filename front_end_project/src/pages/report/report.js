import React from 'react';
import './report.css';
import ev from './images/ev.png';
import mop from './images/mop.png';
import cham from './images/cham.png';
import Screen from '../../components/app/Screen';
// import { Row, Col, Form, Button } from 'react-bootstrap';

function Report() {

    return (
        <div></div>
        // import { Row, Col, Form, Button } from 'react-bootstrap'; is not working for some reason, needs to be looked into for next commit.
        // <Screen>
        //     <Row>
        //         <div className="report">
        //             Project Progress Report: Trimester 1, 2023
        //             <br />
        //             <br />
        //         </div>
        //         <div className="col-xs-12">
        //             <div className="back">
        //                 <br />
        //                 <br />
        //                 <div id="evDiv">
        //                     <div id="myBar">30%</div>
        //                     <div className='evImage'>
        //                         <img alt="ev" src={ev} width="100" height="100" />
        //                         <p>EV Chargers</p>
        //                     </div>
        //                 </div>
        //                 <br />
        //                 <br />
        //                 <br />
        //                 <div id="websiteDiv">
        //                     <div id="webBar">40%</div>
        //                     <div className='chamImage'>
        //                         <img alt="cham" src={cham} width="100" height="100" />
        //                         <p>Chameleon Website</p>
        //                     </div>
        //                 </div>

        //                 <br />
        //                 <br />
        //                 <br />

        //                 <div id="mopDiv">
        //                     <div id="mopBar">60%</div>
        //                     <div className='mopImage'>
        //                         <img alt="mop" src={mop} width="100" height="100" />
        //                         <p>Melbourne Open Data</p>
        //                     </div>
        //                 </div>

        //                 <div className='contributions'>

        //                     <h2> Chameleon Website Contributions Table</h2>

        //                     <table>
        //                         <thead>
        //                             <tr>
        //                                 <th></th>
        //                                 <th>2022 T2</th>
        //                                 <th>2022 T3</th>
        //                                 <th>2023 T1</th>
        //                             </tr>
        //                         </thead>
        //                         <tbody>
        //                             <tr>
        //                                 <td>Project Leader</td>
        //                                 <td>Nykolai Garcia McHerron</td>
        //                                 <td>Kinshuk Jain</td>
        //                                 <td>Janvi Gupta</td>
        //                             </tr>
        //                             <tr>
        //                                 <td>Web Dev Leadership Team</td>
        //                                 <td>
        //                                     Shakwat Hossain Limon
        //                                     <br />
        //                                     Kinshuk Jain
        //                                 </td>
        //                                 <td> Janvi Gupta
        //                                     <br />
        //                                     Michael Wei Zhang Lai
        //                                 </td>
        //                                 <td>
        //                                     Mayank Verma
        //                                     <br />
        //                                     Navin Dharmarajan
        //                                 </td>
        //                             </tr>
        //                             <tr>
        //                                 <td>Design Leadership Team</td>
        //                                 <td>Ayushi Natalie Alujjage </td>
        //                                 <td>
        //                                     Muhammad Haris Saeed
        //                                     <br />
        //                                     Pratham
        //                                 </td>
        //                                 <td> ZAK CONSTABLE
        //                                     <br />
        //                                     Jon Suwannakot
        //                                 </td>

        //                             </tr>
        //                             <tr>
        //                                 <td>Web Dev Team Members</td>
        //                                 <td>
        //                                     Jack Hagen
        //                                     <br />
        //                                     Mathew Ho<br />
        //                                     Julian Ryan<br />
        //                                     Lachlan James Exton<br />
        //                                     Xinyu Ji<br />
        //                                     Dasun Tharaka Kodikara Munasinghege<br />
        //                                     Surpreet Singh<br />
        //                                     Zhenyu Ye<br />
        //                                     VINEETH KARUPPIAH<br />
        //                                     Gideon Kiptugen<br />
        //                                     Jason Hu<br />
        //                                     ChenXuan Hao<br />
        //                                     Jiayi Wei<br />
        //                                 </td>

        //                                 <td>
        //                                     JIAYI WEI<br />
        //                                     JASON HU<br />
        //                                     SURPRRET SINGH<br />
        //                                     BHAVIKA SOOD<br />
        //                                     MAYANK VERMA<br />
        //                                     TUAN MINH VU<br />
        //                                     QIUSHI HUANG<br />
        //                                     KOK LUEN CHIA<br />
        //                                     JIANKUN WANG<br />
        //                                 </td>

        //                                 <td>
        //                                     Antony Raju<br />
        //                                     Bhavika Sood<br />
        //                                     Jordan Reeves<br />
        //                                     Seung Hwan Kim<br />
        //                                     Zhuo Yu Li<br />
        //                                     Ziyan Zhai<br />
        //                                     Aishwarya Mariselvam<br />
        //                                     Jiankun Wang<br />
        //                                     Mathew Ho<br />
        //                                     Qiushi Huang<br />
        //                                     Regan Tam<br />
        //                                     Thomas Koutsaplis<br />
        //                                     Davinderjit Singh<br />
        //                                     Amal Paul<br />
        //                                     Jiankun Wang<br />
        //                                     Qiushi Huang<br />
        //                                 </td>

        //                             </tr>
        //                             <tr>
        //                                 <td>Design Team Members</td>
        //                                 <td>
        //                                     Nathan Cahill<br />
        //                                     Nikhil Nikhil<br />
        //                                     Sangjun/Samual Kim<br />
        //                                     Tejal Girish Ranade<br />
        //                                     Muhammed Haris Saeed<br />
        //                                     Pratham<br />
        //                                     Aye Moh Moh Shwe<br />
        //                                     Uche Ajoku<br />
        //                                 </td>

        //                                 <td>
        //                                     ZAK CONSTABLE<br />
        //                                     CHENXUAN HAO<br />
        //                                     ZIYAN SHEN
        //                                 </td>

        //                                 <td>
        //                                     Yin Chak Yiu<br />
        //                                     Ziyan Shen<br />
        //                                     Nitin Singh Dogra
        //                                 </td>
        //                             </tr>
        //                         </tbody>
        //                     </table>
        //                 </div>

        //                 <br />
        //                 <br />
        //             </div>
        //         </div>
        //     </Row>
        // </Screen>
    );
}

export default Report;