import React from "react";
import logo from "../assets/letter_z.png";
import "../css/NewOpportunityCard.css";
import { Icon } from "semantic-ui-react";
import hat from "../assets/hat.png";

const NewOpportunityCard = ({ info }) => {
  console.log(JSON.stringify(info));
  var date1 = new Date(info.date.seconds * 1000);
  var date2 = new Date();
  var diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  date1 = new Date(info.end_date.seconds * 1000);
  diffTime = Math.abs(date2 - date1);
  const diffEndDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return (
    <div className="main-card">
      <div className="top">
        <div className="company-info">
          <img src={logo} alt="" />
          <div>
            <div className="xyz">
              <h3>{info.title}</h3>
              <img className="logoImage" src={hat} alt="" />
            </div>
            {/* <h3>{info.title}</h3> */}
            <p style={{ "text-align": "left" }}>{info.company_name}</p>
          </div>

          {/* <div className="graduation-cap">
            <img src={hat} alt="" />
          </div> */}
        </div>
        {/* <div className="graduation-cap">
        </div> */}
        {/* <div className="date"></div> */}
      </div>
      <div className="middle">
        <div className="job-type">
          <span style={{ fontWeight: "600", marginLeft: "30px" }}>
            Job Type
          </span>
          <span style={{ fontWeight: "600", marginRight: "250px" }}>
            Cost to Company
          </span>
        </div>
        <div className="intern">
          <span style={{ marginLeft: "30px" }}>{info.job_type}</span>
          <span style={{ marginRight: "247px" }}>
            Stipend: Rs {info.stipend}
          </span>
        </div>
      </div>
      <hr style={{ marginLeft: "24px" }} />
      <div className="Nbottom">
        <span style={{ marginRight: "30px", marginTop: "15px" }}>
          {diffDays} days ago
        </span>
        <span
          style={{ marginRight: "0px", marginTop: "15px", color: "#D7263D" }}
        >
          <Icon enabled name="clock outline" />
          Registration Ended {diffEndDays} days ago
        </span>
      </div>
    </div>
  );
};

export default NewOpportunityCard;
