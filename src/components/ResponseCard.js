import React, { useState, useEffect } from "react";
import pic from "../assets/student-pic.png";
import "../css/ResponseCard.css";
import { db } from "./Firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const ResponseCard = ({ id }) => {
  const [data, setData] = useState({});
  const [dateStr, setDateStr] = useState("");
  const [userImg, setUserImg] = useState(pic);

  const fetchPost = async () => {
    const q = query(collection(db, "experience"), where("id", "==", id));
    const querySnapshot = await getDocs(q);
    let data_list = [];
    querySnapshot.forEach((doc) => {
      setData(doc.data());
      var date1 = new Date(doc.data().date.seconds * 1000);
      setDateStr(
        date1.getDate() + " " + date1.getMonth() + " '" + date1.getFullYear()
      );
      // console.log(doc.data().user_img);
      if (doc.data().user_img !== "") {
        setUserImg(
          doc
            .data()
            .user_img.split("file/d/")
            .join("uc?export=view&id=")
            .split("/view")[0]
        );
        // console.log(userImg);
      } else {
        setUserImg(pic);
      }
    });
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div style={{ marginBottom: "20px" }} className="response-card">
      <div className="student-details-response">
        <img className="student-pic-response" src={userImg} alt="" />
        <div className="student-response">
          <div className="name-response">{data.name}</div>
          <div className="date-of-response">{dateStr}</div>
        </div>
      </div>
      <div className="questions">
        <div className="first-question">
          For what role was the interview conducted?
        </div>
        <br />
        <div className="first-answer">{data.a1}</div>
        <hr />
        <div className="second-question">
          What questions were asked in the various rounds? You can also provide
          the answers to them.
        </div>
        <div style={{ marginTop: "10px" }} className="second-answer">
          {data.a2}
        </div>
        <hr />
        <div style={{ marginTop: "10px" }} className="second-question">
          What was their selection and interview process like?
        </div>
        <div style={{ marginTop: "10px" }} className="second-answer">
          {data.a3}
        </div>
        <hr />
        <div className="second-question">
          What was the Interview Difficulty Level in your opinion?
        </div>
        <div style={{ marginTop: "10px" }} className="second-answer">
          {data.a4}
        </div>
        <hr />
        <div className="second-question">How was the overall experience?</div>
        <div style={{ marginTop: "10px" }} className="second-answer">
          {data.a5}
        </div>
        <hr />
      </div>
    </div>
  );
};
export default ResponseCard;
