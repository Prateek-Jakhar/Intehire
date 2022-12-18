import React from "react";
import { Link } from "react-router-dom";
// import { Icon } from 'semantic-ui-react'
import "../css/HeaderOptions.css";
import LeftHeader from "./LeftHeader";
import Vector from "../assets/Vector.png";
import dashimg from "../assets/dashboard-img.png";
import twopeople from "../assets/bi_people-fill.png";
import forum from "../assets/Forum.png";
import asessment from "../assets/Assesments.png";
import tests from "../assets/practice-tests.png";
import Opportunity from "../assets/Opportunity.png";
import application from "../assets/Applications.png";
import offer from "../assets/Offers.png";
import offCampus from "../assets/off.png";
import resume from "../assets/Resume.png";

const HeaderOptions = () => {
  return (
    <div className="menu">
      <Link to={"/"}>
        <div classname="Dashboard" style={{ marginLeft: "-89px" }}>
          <img classname="image" src={dashimg} alt="" />
          <span className="header-button">Dashboard</span>
        </div>
      </Link>

      <Link to={"/people"}>
        <div className="People" style={{ marginLeft: "-120px" }}>
          <img classname="image" style={{}} src={twopeople} alt="" />
          <span className="header-button">People</span>
        </div>
      </Link>

      {/* <Link to={'/forum'}>
        <div classname="Forum" style={{ marginLeft: "-120px" }}>
          <img classname="image" src={forum} alt="" />
          <span className="header-button">Forum</span>
        </div>
      </Link> */}

      {/* <Link to={"/"}>
        <div classname="messages" style={{ marginLeft: "-93px" }}>
          <img classname="image" src={Vector} alt="" />
          <span className="header-button">Messages</span>
        </div>
      </Link> */}

      {/* <Link to={"/"}>
        <div classname="Assessments" style={{ marginLeft: "-74px" }}>
          <img classname="image" src={asessment} alt="" />
          <span className="header-button">Assessments</span>
        </div>
      </Link> */}

      <Link to={"/opportunity"}>
        <div classname="Opportunity" style={{ marginLeft: "-78px" }}>
          <img classname="image" src={Opportunity} alt="" />
          <span className="header-button">Opportunity</span>
        </div>
      </Link>

      <Link to={"/application"}>
        <div classname="Application" style={{ marginLeft: "-70px" }}>
          <img classname="image" src={application} alt="" />
          <span className="header-button">Applications</span>
        </div>
      </Link>

      {/* <Link to={"/"}>
        <div classname="Offers" style={{ marginLeft: "-123px" }}>
          <img classname="image" src={offer} alt="" />
          <span className="header-button">Offers</span>
        </div>
      </Link> */}

      <Link to={"/Profile"}>
        <div classname="Resume" style={{ marginLeft: "-108px" }}>
          <img classname="image" src={resume} alt="" />
          <span className="header-button">Profile</span>
        </div>
      </Link>
      <Link to={"/offcampus"}>
        <div classname="Resume" style={{ marginLeft: "-90px" }}>
          <img classname="image" src={offCampus} alt="" />
          <span className="header-button">OffCampus</span>
        </div>
      </Link>
    </div>
  );
};

export default HeaderOptions;
