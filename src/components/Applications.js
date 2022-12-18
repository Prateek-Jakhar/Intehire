import React, { useEffect, useState } from "react";
import OldOpportunityCard from "./OldOpportunityCard";
import "../css/Applications.css";
import NewOpportunityCard from "./NewOpportunityCard";
import ProfileButton from "./ProfileButton";
import { db } from "./Firebase";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import LeftHeader from "./LeftHeader";

const Applications = () => {
  const [dataApplication, setDataApplication] = useState([]);
  let navigate = useNavigate();
  if (localStorage.getItem("isLoggedIn") !== "true") {
    navigate("/login", { replace: true });
  }

  const fetchPost = async () => {
    const querySnapshot = await getDocs(collection(db, "applications"));
    let data_list = [];
    const userMail = localStorage.getItem("usermail");
    const querySnapshot2 = await getDoc(doc(db, "people", userMail));
    const applications = querySnapshot2.data().applications;
    querySnapshot.forEach((doc) => {
      if (applications.includes(doc.data().id)) {
        data_list.push(doc.data());
      }
    });
    setDataApplication(data_list);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div className="applicationMain">
      <div style={{ width: "228px" }}>
        <LeftHeader />
      </div>
      <div className="main-applications">
        <div className="application-header">
          <span className="on-campus">
            <text>On Campus</text>
          </span>
          <span className="apply-filters">
            <text></text>
          </span>
          <ProfileButton />
        </div>
        <div className="application-cards">
          {/* <NewOpportunityCard />
                <br />
                <NewOpportunityCard />
                <br />
                <NewOpportunityCard />
                <br /> */}

          {dataApplication.map((item) => {
            return (
              <>
                <NewOpportunityCard info={item} />
                <br />
              </>
            );
          })}
        </div>
        <text className="finish">Yay, You have seen it all!</text>
      </div>
    </div>
  );
};

export default Applications;
