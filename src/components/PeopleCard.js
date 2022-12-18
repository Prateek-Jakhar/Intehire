import React, { useEffect, useState } from "react";
import "../css/PeopleCard.css";
import pic from "../assets/pic.png";
import msg from "../assets/msg-icon.png";
import db from "./Firebase";
import { collection, getDocs } from "firebase/firestore";
import { listClasses } from "@mui/material";

const PeopleCard = ({ info }) => {
  // console.log(info);
  // { name: "Aryan Seth", department: "CSE", resume_link: "", batch_year: "Y19", user_image_link: "", phone_number: "8299821151", user_id: "001", program: "B.Tech" }
  const [userImg, setUserImg] = useState(pic);
  console.log(info.user_image_link);
  useEffect(() => {
    console.log(info.user_image_link);
    // if (info.user_image_link !== "") {
    //   setUserImg(info.user_image_link);
    // }
  }, []);

  return (
    <div className="main">
      <div className="student-details">
        <div className="student-name">
          <p>{info.name}</p>
        </div>
        <div className="branch">
          <p>
            {info.program}-{info.department}
          </p>
        </div>
        <div className="batch">
          <p>Student-Batch of '{info.batch_year.slice(-2)}</p>
        </div>
      </div>
      <div className="photo">
        <img src={userImg} alt="" />
      </div>
      <div className="msg-bottom">
        <span className="Message-button">
          <strong className="Message-bottom-label">&#128222; Messages</strong>
        </span>
      </div>
    </div>
  );
};
export default PeopleCard;
