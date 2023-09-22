import './user_account.css';
import city from './icon/City.png';
import EV from './icon/EV.jpeg';
import website from './icon/Website.png';
import tick from './icon/tick.png';
import smart_home from './icon/smart_home.jpg';
import apartment from './icon/apartment.jpg';
import charge from './icon/charge.jpg';
import black_star from './icon/star.png';
import React from 'react';
import trello from './icon/Trello.png';
import time from './icon/time.png';
import collect from './icon/collect.png';
import calendar from './icon/calendar.png';
import github from './icon/github.png';
import 'bootstrap/dist/css/bootstrap.min.css';



function User_account() {
    return (
        <div className='background'>

            {/* Projects */}
            <div className='white-background'>
                <br />
                <h1 className="left-title-1">Projects</h1>
                <div className="line"></div>

                <div class="d-flex justify-content-center">
                    <div className='rectangle'>
                        <img src={EV} alt="EV Adoption Tools" class="picture-1" />
                        <p className='small-title'>EV Adoption Tools</p>
                        <div class="container">
                            <img src={tick} alt="tick" class="icon" />
                            <button className="button">Check Progress</button>
                        </div> 
                    </div>

                    <div className='rectangle'>
                        <img src={city} alt="city of melbourne" class="picture-1" />
                        <p className='small-title'>City of Melbourne Open Data</p>
                        <div class="d-flex justify-content-center">
                            <img src={tick} alt="tick" class="icon" />
                            <button className="button">Check Progress</button>
                        </div>
                    </div>

                    <div className='rectangle'>
                        <img src={website} alt="website" class="picture-1" />
                        <p className='small-title'>Website Uplift</p>
                        <div class="d-flex justify-content-center">
                            <img src={tick} alt="tick" class="icon" />
                            <button className="button">Check Progress</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Saved items */}
            <div className='white-background-2'>
                <br />
                <h1 className="left-title">Saved Items</h1>
                <div className="line-1"></div>

                <div class="d-flex justify-content-center">
                    <div className='rectangle'>
                        <img src={apartment} alt="apartment" class="picture" />
                        <p className='title'>TITLE</p>
                        <p className='small-title'>Add opening sentence followed by ellipsea</p>
                        <div class="d-flex justify-content-center">
                            <p className='small-title'>8 August 2023</p>
                            <img src={black_star} alt="black_star" class="star" />
                        </div>

                        {/* <div className='white-background-3'>
                
                         </div> */}

                    </div>

                    <div className='rectangle'>
                        <img src={smart_home} alt="city of melbourne" class="picture" />
                        <p className='title'>TITLE</p>
                        <p className='small-title'>Add opening sentence followed by ellipsea</p>
                        <div class="d-flex justify-content-center">
                            <p className='small-title'>8 August 2023</p>
                            <img src={black_star} alt="black_star" class="star" />
                        </div>
                    </div>

                    <div className='rectangle'>
                        <img src={charge} alt="website" class="picture" />
                        <p className='title'>TITLE</p>
                        <p className='small-title'>Add opening sentence followed by ellipsea</p>
                        <div class="d-flex justify-content-center">
                            <p className='small-title'>8 August 2023</p>
                            <img src={black_star} alt="black_star" class="star" />
                        </div>
                    </div>
                </div>
                <br />
            </div>



            <div className='white-background-3'>
                <br />
                <h1 className="link-title">Quick Links</h1>
                <div className="link-line"></div>

                <div class="d-flex align-start">
                    <img src={trello} alt="trello" class="link-picture" />
                    <p className='small-title'>Trello</p>
                </div>
                <br />
                {/* Github */}
                <div class="d-flex align-start">
                    <img src={github} alt="github" class="link-picture" />
                    <p className='small-title'>Github</p>
                </div>

                <br />
                <h1 className="link-title">Recent Activity</h1>
                <div className="link-line"></div>
                <div class="d-flex align-start">
                    <img src={time} alt="time" class="link-picture" />
                    <p className='small-title'>Posted Article</p>
                </div>
                <br />
                <div class="d-flex align-start">
                    <img src={time} alt="time" class="link-picture" />
                    <p className='small-title'>Updated Website Uplift Progress</p>
                </div>

                <br />
                <h1 className="link-title">Upcoming Tasks</h1>
                <div className="link-line"></div>
                <div class="d-flex align-start">
                    <img src={calendar} alt="trello" class="link-picture" />
                    <p className='small-title'>Push front-end commit to git.</p>
                </div>
                <br />
                <div class="d-flex align-start">
                    <img src={calendar} alt="trello" class="link-picture" />
                    <p className='small-title'>Finalise SRS doc</p>
                </div>

                <br />
                <h1 className="link-title">Suggested Content</h1>
                <div className="link-line"></div>
                <div class="d-flex align-start">
                    <img src={collect} alt="trello" class="link-picture" />
                    <p className='small-title'>Blog Post</p>
                </div>
                <br />
                <div class="d-flex align-start">
                    <img src={collect} alt="trello" class="link-picture" />
                    <p className='small-title'>News Article</p>
                </div>



            </div>
            <br />

        </div>
    );
}

export default User_account;
