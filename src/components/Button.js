import React from "react";
import "../css/Button.css";

function Button({ details }) {
  return (
    <div className="frequent-button">
      <span className="details">{details}</span>
    </div>
  );
}

export default Button;
