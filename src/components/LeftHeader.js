import React from "react";
import "../css/LeftHeader.css";
import mainLogo from "../assets/mainLogo.png";
import HeaderOptions from "./HeaderOptions";

function LeftHeader() {
  return (
    <div className="main-leftHeader">
      <div style={{ height: "fitContent" }} className="main-inner-leftHeader">
        <img className="main-logo" src={mainLogo} alt="" />
      </div>
      <div id="name" className="main-inner-label">
        InteHire
      </div>
      <div className="header-options">
        <div className="option1">
          <HeaderOptions name={"Dashboard"} />
          {/* <HeaderOptions name={"People"} /> */}
        </div>
      </div>
    </div>
  );
}

export default LeftHeader;
