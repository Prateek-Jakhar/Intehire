import React, { useEffect, useState } from "react";
import logo from "../assets/letter_z.png";
import "../css/NewOpportunityCard.css";
import { Icon } from "semantic-ui-react";
import hat from "../assets/hat.png";
import { indigo } from "@mui/material/colors";
import { toast, ToastContainer } from "react-toastify";
import { db } from "./Firebase";
import { collection, getDoc, setDoc, doc, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const NewOpportunityCard = ({ info }) => {
  const [cgpa, setCgpa] = React.useState(0);
  const [branch, setBranch] = React.useState(0);
  const [branchArray, setBranchArray] = React.useState([]);

  let navigate = useNavigate();
  console.log(JSON.stringify(info));
  var date1 = new Date(info.date.seconds * 1000);
  var date2 = new Date();
  var diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  console.log(diffDays);
  date1 = new Date(info.end_date.seconds * 1000);
  diffTime = Math.abs(date2 - date1);
  const diffEndDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  let usermail, querySnapshot, branchString;

  const handleApply = async () => {
    const docRef = await addDoc(collection(db, "applications"), {
      company_name: info.company_name,
      date: info.date,
      end_date: info.end_date,
      job_type: info.job_type,
      stipend: info.stipend,
      title: info.title,
      oppor_id: info.id,
    });
    const app_id = docRef.id;
    console.log(app_id);
    console.log(info.id + " info");
    await setDoc(doc(db, "applications", app_id), {
      company_name: info.company_name,
      date: info.date,
      end_date: info.end_date,
      id: app_id,
      job_type: info.job_type,
      stipend: info.stipend,
      title: info.title,
      oppor_id: info.id,
      cgpa: info.cgpa_required,
      cse: info.cse,
      cce: info.cce,
      ece: info.ece,
      me: info.me,
    });

    usermail = localStorage.getItem("usermail");
    querySnapshot = await getDoc(doc(db, "people", usermail));

    let forum_data;
    // console.log(doc.data());

    forum_data = querySnapshot.data();

    forum_data.applications.push(app_id);
    forum_data.opportunities.push(info.id);

    await setDoc(doc(db, "people", usermail), forum_data);

    console.log("Done");
    navigate("/application", { replace: true });
  };

  const handleTest = async () => {
    // branchString = info.cse === true ? "cse" : "";

    usermail = localStorage.getItem("usermail");
    querySnapshot = await getDoc(doc(db, "people", usermail));
    let forum_data;

    forum_data = querySnapshot.data();
    setCgpa(forum_data.cgpa);
    setBranch(forum_data.department.toLowerCase());

    // const contains = arr.includes(forum_data.department.toLowerCase());
    // console.log(contains + "contains");

    // console.log(usermail + " usermail");
    parseInt(cgpa);
    parseInt(info.cgpa_required);
    // console.log(cgpa < info.cgpa_required);

    console.log(cgpa + "snap");

    let arr = [];
    if (info.cse === true) {
      arr.push("cse");
    }
    if (info.cce === true) {
      arr.push("cce");
    }
    if (info.ece === true) {
      arr.push("ece");
    }
    if (info.me === true) {
      arr.push("me");
    }

    setBranchArray(arr);
    console.log(branchArray + "depart");
  };
  const handleTemp = () => {
    console.log({
      company_name: info.company_name,
      date: info.date,
      end_date: info.end_date,
      job_type: info.job_type,
      stipend: info.stipend,
      title: info.title,
    });
  };

  useEffect(() => {
    handleTest();
  }, [cgpa, branch]);

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
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          // position: "absolute",
          // right: "621px",
          width: "877px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            marginLeft: "25px",
          }}
        >
          <span>
            <strong>CGPA Required: </strong>
            {info.cgpa_required}
          </span>
          <span>
            <strong>Branch Allowed:</strong>
            {info.cse === true ? " CSE " : ""}
            {info.cce === true ? " CCE " : ""}
            {info.ece === true ? " ECE " : ""}
            {info.me === true ? " ME " : ""}
          </span>
        </div>
        <span style={{ marginRight: "30px", marginTop: "15px" }}>
          {diffDays} days ago
        </span>
        {/* {console.log(branch + "daea")}
        {console.log(branchArray.includes(branch) + "check")} */}
        {console.log(branchArray + " my arry")}
        {cgpa > info.cgpa_required && branchArray.includes(branch) ? (
          <button
            style={{ height: "37px", width: "229px" }}
            onClick={() => handleApply()}
            // className={cgpa < info.cgpa_required ? "disabled" : ""}
          >
            Apply
          </button>
        ) : (
          <span style={{ fontWeight: "bold", color: "Red", marginTop: "5px" }}>
            You are not allowed to register
          </span>
        )}
      </div>

      <div className="Nbottom">
        {/* <span style={{ marginRight: "30px", marginTop: "15px" }}>
          {diffDays} days ago
        </span> */}
        <span
          style={{ marginRight: "0px", marginTop: "15px", color: "#D7263D" }}
        >
          {/* <Icon enabled name="clock outline" />
          Registration Ended {diffEndDays} days ago */}
        </span>
      </div>
    </div>
  );
};

export default NewOpportunityCard;
