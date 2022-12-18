import React from "react";
import {
  CCard,
  CCardImage,
  CCardBody,
  CCardTitle,
  CCardText,
  CButton,
  CCardHeader,
  CListGroup,
  CListGroupItem,
  CRow,
  CCol,
} from "@coreui/react";
import "../css/OffCampus.css";
import ReactReadMoreReadLess from "react-read-more-read-less";

const OffCampusCard = (props) => {
  // console.log(props.result);
  return (
    <div>
      <CCard
        className={`mb-3 border-top-secondary border-top-3`}
        style={{ width: "80rem", marginLeft: "30px" }}
      >
        {/* <CCardImage
          // style={{ height: "100px", width: "100px", marginLeft: "170px" }}
          orientation="top"
          src={props.result[1].employer_logo}
        /> */}
        <CCardHeader style={{ fontSize: "25px" }} component="h5">
          {props.result.job_title}
        </CCardHeader>
        <CCardBody>
          <CCardTitle style={{ fontSize: "30px", marginBottom: "20px" }}>
            {props.result.employer_name}
          </CCardTitle>
          <CCardText style={{ fontSize: "18px" }}>
            <ReactReadMoreReadLess
              charLimit={800}
              readMoreText={"Read more ▼"}
              readLessText={"Read less ▲"}
            >
              {props.result.job_description}
            </ReactReadMoreReadLess>
          </CCardText>
          <div
            style={{
              display: "flex",
              justifyContent: "left",
              marginBottom: "10px",
              marginTop: "20px",
              marginLeft: "10x",
            }}
          >
            <div></div>
            <div style={{ marginTop: "10px" }}>
              <CListGroup flush>
                <CListGroupItem
                  style={{ fontSize: "25px", marginBottom: "10px" }}
                >
                  <span
                    style={{
                      fontWeight: "bold",
                      marginRight: "20px",
                    }}
                  >
                    Location:
                  </span>
                  {props.result.job_city}, {props.result.job_state}
                </CListGroupItem>
                <CListGroupItem style={{ fontSize: "25px" }}>
                  <span
                    style={{
                      fontWeight: "bold",
                      marginRight: "20px",
                    }}
                  >
                    Job Publisher:
                  </span>
                  {props.result.job_publisher}
                </CListGroupItem>
              </CListGroup>
            </div>
          </div>

          <div style={{ display: "flex" }}>
            <CButton
              style={{
                width: "201px",
                background: "#41337a",
                fontSize: "22px",
                marginRight: "38px",
              }}
              href={props.result.job_apply_link}
              target="_blank"
            >
              Apply
            </CButton>
          </div>
        </CCardBody>
      </CCard>
    </div>
  );
};

export default OffCampusCard;
