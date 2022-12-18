import React from "react";
import "../css/ProfileButton.css";
import pic from "../assets/student-pic.png";
import bell from "../assets/notification-bell.png";
import plus from "../assets/add.png";
import minus from "../assets/minus.png";
import LogoutMenu from "./LogoutMenu";
const ProfileButton = () => {
  const name = localStorage.getItem("userName");
  const imgUrl = localStorage.getItem("photoURL");
  const [isActive, setisActive] = React.useState(false);
  function handleClick() {
    setisActive((prevState) => !prevState);
  }

  return (
    <>
      <div style={{ height: "100px" }}>
        <div onClick={handleClick} className="profile-button">
          <img
            src={imgUrl}
            style={{ marginTop: "10px", marginLeft: "10px" }}
            alt=""
          />
          <text
            style={{ marginTop: "20px", width: "200px" }}
            className="profile-name"
          >
            {name}
          </text>
          {/* <img
            className="profile-image"
            src={bell}
            alt=""
            height="20px"
            width="20px"
            style={{ marginRight: "20px", marginLeft: "20px" }}
          /> */}
          {!isActive && (
            <img
              className="profile-image"
              style={{
                margin: "auto",
                height: "20px",
                width: "20px",
                filter: "invert(100%)",
                marginLeft: "45px",
              }}
              src={plus}
              alt=""
            />
          )}
          {isActive && (
            <img
              className="profile-image"
              style={{
                margin: "auto",
                height: "20px",
                width: "20px",
                filter: "invert(100%)",
                marginLeft: "45px",
              }}
              src={minus}
              alt=""
            />
          )}
        </div>
        <div style={{ marginTop: "15px" }}>{isActive && <LogoutMenu />}</div>
      </div>
    </>
  );
};

export default ProfileButton;
