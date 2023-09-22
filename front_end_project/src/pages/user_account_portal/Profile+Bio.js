import React from "react";
import "./css/Profile+Bio.css";
import background from "./images/Sydney1.jpg";
import profile from "../src/layouts/header/images/profile.jpg";
import Chameleon from "./images/Chameleon.png";
import City from "./images/City.png";
import 'bootstrap-icons/font/bootstrap-icons.css';

function Profile() {
  return (
    <div className="temp_background">
      <div className="profile">
        <div>
          <img className="background_S"
            src={background}
            alt="background for user profile"
          />

        </div>
        <div className="profile_position">
          <img
            src={profile}
            className="rounded-circle ml-3 img-with-border"
            alt="User Profile Avatar"
            height="200"
            width="200"
          />
        </div>
        <div className="blod_font">
          <p className="blod_font">Name Surname</p>
          <p className="blod_font">Product Designer</p>
          <p className="blod_font">Waurn Ponds, Australia</p>
          <button className="share_profile">Share Profile</button>
        </div>
        <div>
          <div className="container">
            <img
              src={City}
              className="organization1"
              alt="City of Mel"
            />
            <div className="organization1_title">
              <p>City of Melbourne Open Data</p>
            </div>
          </div>

          <div className="container">
            <img
              src={Chameleon}
              className="organization2"
              alt="Chameleon"
            />
            <div className="organization2_title">
              <p>Website Uplift</p>
            </div>
          </div>
        </div>
      </div>

      <div className="Bio">
        <p className="bio_font">Bio</p>
        <p className="underline">_____________________________________________________________________________________________________________________________________________________</p>
        <p className="font">Add personal bio about role within the company you are working on.</p>
      </div>
    </div>
  );
}

export default Profile;