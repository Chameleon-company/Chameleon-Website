import React from "react";
import "./css/Profile+Bio.css";
import background from "./images/Sydney1.jpg";
import profile from "../src/layouts/header/images/profile.jpg";
import Chameleon from "./images/Chameleon.png";
import City from "./images/City.png";

function Profile() {
  return (
    <div className="temp_background">
      <div className="profile">
        <div>
          <img className="background_S"
            src={background}
            alt="Background for user profile"
          />
        </div>
        <div className="profile_position">
          <img
            src={profile}
            className="img-with-border profile-image"
            alt="User Profile Avatar"
            height="200"
            width="200"
          />
        </div>
        <div className="blod_font">
          <p>Name Surname</p>
          <p>Product Designer</p>
          <p>Waurn Ponds, Australia</p>
          <button className="share_profile">Share Profile</button>
        </div>
        <div>
          <div className="container organization">
            <img
              src={City}
              className="organization-image"
              alt="City of Mel"
            />
            <div className="organization-title">
              <p>City of Melbourne Open Data</p>
            </div>
          </div>
          <div className="container organization">
            <img
              src={Chameleon}
              className="organization-image"
              alt="Chameleon"
            />
            <div className="organization-title">
              <p>Website Uplift</p>
            </div>
          </div>
        </div>
      </div>

      <div className="Bio">
        <p className="bio-font">Bio</p>
        <p className="underline">_____________________________________________________________________________________________________________________________________________________</p>
        <p className="bio-description">Add personal bio about role within the company you are working on.</p>
      </div>
    </div>
  );
}

export default Profile;
