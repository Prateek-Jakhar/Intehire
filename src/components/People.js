import React from "react";
import "../css/people.css";
import LeftHeader from "./LeftHeader";
import PeopleList from "./PeopleCardList";
import { useNavigate } from "react-router-dom";
// import FeedButton from "../FeedButton";
// import PeopleButton from "../PeopleButton";


const People = () => {
  let navigate = useNavigate();
  if (localStorage.getItem('isLoggedIn') !== 'true'){
    navigate("/login", { replace: true });
  }
  return (
    <div>
      <div className="peopleMain">
        <div style={{ width: "228px" }}>
          <LeftHeader />
        </div>
          <PeopleList/>
      </div>
    </div>
  );
};

export default People;
