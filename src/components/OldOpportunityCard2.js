import React, { useState, useEffect } from "react";
import "../css/OldOpportunityCard.css";
import Button from "./Button";
import pic from "../assets/student-pic.png";

const OldOpportunityCard2 = ({ info }) => {
  let profile_data = info.company_name + " - Hiring for ";
  for (let i = 0; i < info.profile.length; i++) {
    if (i === 0) {
      profile_data += info.profile[i];
    } else if (i === info.profile.length - 1) {
      profile_data += " and ";
      profile_data += info.profile[i];
    } else {
      profile_data += ", ";
      profile_data += info.profile[i];
    }
  }
  const recruit_year = parseInt(info.batch_year) + 4;
  profile_data += ". - " + recruit_year + " Batch Recruitment Event";

  var date1 = new Date(info.experience[0].date.seconds * 1000);
  var date2 = new Date();
  var diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const imgUrl = localStorage.getItem("photoURL");

  return (
    <div className="main-old">
      <div className="company-heading">
        <p style={{ marginBottom: "4px" }}>{profile_data}</p>
      </div>
      <span className="posted-by-system">Posted by system</span>
      <p className="main-content">{info.description}</p>
      <div className="detail-tag">
        <div>
          {/* <span>
            <Button details={"FEV India"} />
          </span> */}
        </div>
        {/* <div>
          <span>
            <Button details={"chutiya"} />
          </span>
        </div> */}
      </div>
      <br />
      <hr />
      <div className="bottom">
        <img src={imgUrl} alt="" />
        <span className="name">
          <strong>{info.experience[0].name}</strong> shared his experience
        </span>
        <span className="numberOfDays">{diffDays} days ago</span>
      </div>
    </div>
  );
};

export default OldOpportunityCard2;
