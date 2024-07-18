import React from "react";
import bgcover from "../../components/Assets/bgcoverpic.png";
import profilepic from "../../components/Assets/profilepic.png";
import "../../components/HeroPage/HeroPage.css";

const HeroPage = () => {
  return (
    <div className="hero-container">
      <div className="main-cover-card1">
        <img className="main-cover-pic" src={bgcover} alt="bgcoverlady" />
      </div>
      <div className="main-cover-card2">
        <h5 className="label">Technology</h5>
        <p className="main-cover-card-title">
          The Impact of Technology on the Workplace: How Technology is Changing
        </p>
        <div className="main-cover-profile-timestamp">
          <img className="profile-pic" src={profilepic} alt="profilepic" />
          <h5>Jason Francisco</h5>
          <h5>August 20, 2020</h5>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
