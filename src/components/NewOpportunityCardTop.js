import React from "react";
import "../css/NewOpportunityCardTop.css";

const NewOpportunityCardTop2 = () => {
  return (
    <div className="main-new">
      <div className="heading">
        <span className="opportunity-heading">
          Qoala - New Opportunity for You
        </span>
        {/* <button className="remove-button">Remove</button> */}
      </div>

      <hr style={{ marginLeft: "30px" }} />
      <span className="sub-heading">About Software Development Intership:</span>
      <p className="company-details">
        We are looking for enthusiastic pre-final year students or fresh
        graduates to be involved in our Software Development Internship Program.
        As an intern, you will be mentored by experienced software engineers and
        contribute in building the biggest insurtech in Southeast Asia. You will
        work on impactful projects, expand your networks and learn the best
        practices during your internship.
      </p>
    </div>
  );
};

export default NewOpportunityCardTop2;
