import React, { useEffect, useRef, useState } from "react";
import { Input } from "antd";
import axios from "axios";
import "../css/OffCampus.css";
import OffCampusCard from "./OffCampusCard";
import LeftHeader from "./LeftHeader";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import ContentLoader from "react-content-loader";

const SearchOffcampus = () => {
  const [role, setRole] = useState("Backend Developer in India");
  const [show, setShow] = useState(false);
  const [result, setResult] = useState([]);

  const options = {
    method: "GET",
    url: "https://jsearch.p.rapidapi.com/search",
    params: { query: role, num_pages: "2" },
    headers: {
      "X-RapidAPI-Key": "c579dbe24fmshbb268f2fa843165p18d482jsn5df8f554a588",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };

  const getData = () => {
    axios
      .request(options)
      .then(function (response) {
        const company = response.data.data;
        setResult(company);
        console.log(company);
        setShow(true);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const handleClick = () => {
    getData();
  };

  useEffect(() => {});
  return (
    <div className="offCampusMain">
      <div style={{ width: "228px" }}>
        <LeftHeader />
      </div>
      <div>
        <div className="searchOffCampus">
          <div className="search-jobType">
            <Input
              className="searchItem"
              placeholder="Search Role"
              // ref={role}
              onChange={(e) => setRole(e.target.value)}
            />
          </div>
          {/* <div className="search-jobType">
          <Input
            className="searchItem"
            placeholder="Search Location"
            // onChange={(e) => setLocation(e.target.value)}
          />
        </div> */}

          <button className="searchButtonOff" onClick={handleClick}>
            Search
          </button>
        </div>

        {show ? (
          <div className="offCampusCard">
            {result.map((item) => (
              <div className="offCampusSingleCard">
                <OffCampusCard result={item} />
              </div>
            ))}
          </div>
        ) : (
          <div style={{ marginLeft: "20px" }}>
            <ContentLoader />
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchOffcampus;
