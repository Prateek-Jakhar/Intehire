import React from "react";
import "../css/PeopleButton.css";

const PeopleButton = ({ text }) => {
  return (
    <div>
      <button className="peopleButton">{text}</button>
    </div>
  );
};

export default PeopleButton;
