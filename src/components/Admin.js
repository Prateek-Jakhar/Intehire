import React, { useState } from "react";
import "../css/Admin.css";
import { collection, getDoc, setDoc, doc, addDoc } from "firebase/firestore";
import { db } from "./Firebase";
// import { toast, ToastContainer } from "react-toastify";
// import LeftHeader from "./LeftHeader";
// import ProfileButton from "./ProfileButton";
const Admin = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    roleTitle: "",
    jobType: "",
    stipend: "",
    cse: false,
    cce: false,
    ece: false,
    me: false,
    cgpa: "",
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === value,
        // e.target.name = e.target.value;
      };
    });
  }
  function test(e) {
    e.preventDefault();
    console.log(formData);
  }

  function handleCheck(e) {
    e.preventDefault();
    const { name, value, type, checked } = e.target;

    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
        // e.target.name = e.target.value;
      };
    });
  }

  // console.log(formData);
  async function sendOpportunityDetail(name, job_type, cgpa, stipend, array) {
    const date = new Date();
    const end_date = new Date();
    end_date.setDate(date.getDate() + 1);

    try {
      await addDoc(collection(db, "opportunities"), {
        company_name: formData.companyName,
        job_type: formData.jobType,
        cgpa_required: formData.cgpa,
        stipend: formData.stipend,
        date: date,
        end_date: end_date,
        title: formData.roleTitle,
        cce: formData.cce,
        cse: formData.cse,
        me: formData.me,
        ece: formData.ece,
      });
      // toast.success("Company Added Successfully");
      console.log("added");
    } catch (error) {
      console.log(error);
      // toast.error("Could not Add Company");
      console.log(error.message);
    }
  }
  return (
    <div className="mainProfile">
      <div className="profileLeft" style={{ marginLeft: "480px" }}>
        <h1
          style={{
            color: "#41337a",
            fontSize: "3rem",
            marginTop: "25px",
            textAlign: "center",
          }}
        >
          Company Details
        </h1>
        <br />
        <form>
          <label>
            <div
              style={{
                marginRight: "30px",
                width: "200px",
                display: "inline-block",
              }}
            >
              Company Name
            </div>
            <input
              name="companyName"
              type="text"
              className="inputs"
              // value={formData.companyName}
              onChange={handleCheck}
              placeholder="Enter Company name"
            />
          </label>
          <br />
          <br />
          <br />
          <label>
            <div
              style={{
                marginRight: "30px",
                width: "200px",
                display: "inline-block",
              }}
            >
              Job Type
            </div>
            <input
              name="jobType"
              type="text"
              className="inputs"
              // value={formData.jobType}
              onChange={handleCheck}
              placeholder="Enter Role details"
            />
          </label>
          <br />
          <br />
          <br />
          <label>
            <div
              style={{
                marginRight: "30px",
                width: "200px",
                display: "inline-block",
              }}
            >
              Role Title
            </div>
            <input
              name="roleTitle"
              type="text"
              className="inputs"
              value={formData.roleTitle}
              onChange={handleCheck}
              placeholder="Enter Role Title"
            />
          </label>
          <br />
          <br />
          <br />
          <label>
            <div
              style={{
                marginRight: "30px",
                width: "200px",
                display: "inline-block",
              }}
            >
              Stipend
            </div>
            <input
              name="stipend"
              type="phone"
              className="inputs"
              value={formData.stipend}
              onChange={handleCheck}
              placeholder="Stipend"
            />
          </label>
          <br /> <br />
          <br />
          <label>
            <div
              style={{
                marginRight: "30px",
                width: "200px",
                display: "inline-block",
              }}
            >
              CGPA Required
            </div>
            <input
              name="cgpa"
              type="number"
              value={formData.cgpa}
              className="inputs"
              onChange={handleCheck}
              placeholder="Minimum CGPA required"
              min={0}
            />
          </label>
          <br />
          <br />
          <br />
          <fieldset style={{ display: "flex" }}>
            <div>
              <legend>Branch Allowed</legend>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                marginLeft: "20px",
                width: "320px",
              }}
            >
              <div>
                <input
                  type="checkbox"
                  id="scales"
                  name="cse"
                  value="cse"
                  onChange={handleCheck}
                />
                <label style={{ marginLeft: "5px" }} for="scales">
                  CSE
                </label>
              </div>

              <div>
                <input
                  type="checkbox"
                  id="horns"
                  name="cce"
                  onChange={handleCheck}
                />
                <label style={{ marginLeft: "5px" }} for="horns">
                  CCE
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="horns"
                  name="ece"
                  onChange={handleCheck}
                />
                <label style={{ marginLeft: "5px" }} for="horns">
                  ECE
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="horns"
                  name="me"
                  onChange={handleCheck}
                />
                <label style={{ marginLeft: "5px" }} for="horns">
                  ME
                </label>
              </div>
            </div>
          </fieldset>
          <br />
          <br />
          <br />
          <div className="btn">
            <button onClick={sendOpportunityDetail}>Submit</button>
          </div>
        </form>
        <div style={{ height: "100px" }}></div>
      </div>
    </div>
  );
};

export default Admin;
