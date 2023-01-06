import React, { useState } from "react";
import { collection, getDoc, setDoc, doc, addDoc } from "firebase/firestore";
import { db } from "./Firebase";
import ProfileButton from "./ProfileButton";

const AdminForumUpload = () => {
  const [formData, setFormData] = useState({
    batch_year: "",
    company_name: "",
    description: "",
    date: "",
    id: "",
  });

  function handleCheck(e) {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === value,
        // e.target.name = e.target.value;
      };
    });
  }

  async function sendData() {
    const date = new Date();
    try {
      await addDoc(collection(db, "forums"), {
        batch_year: formData.batchYear,
        company_name: formData.companyName,
        description: formData.description,
        date: date,
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
    <div>
      <div style={{ position: "absolute", right: "50px", top: "1px" }}>
        <ProfileButton />
      </div>
      <div style={{ marginLeft: "480px" }}>
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
              Batch Year
            </div>
            <input
              name="batchYear"
              type="number"
              className="inputs"
              // value={formData.companyName}
              onChange={handleCheck}
              placeholder="Enter Batch Year"
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
              Company Name
            </div>
            <input
              name="companyName"
              type="text"
              className="inputs"
              // value={formData.jobType}
              onChange={handleCheck}
              placeholder="Enter Company Name"
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
              Description
            </div>
            <input
              name="description"
              type="text"
              className="inputs"
              // value={formData.roleTitle}
              onChange={handleCheck}
              placeholder="Enter Description"
            />
          </label>
          <br />
          <br />
          <br />
          <div className="btn">
            <button onClick={sendData}>Submit</button>
          </div>
        </form>
        <div style={{ height: "100px" }}></div>
      </div>
    </div>
  );
};

export default AdminForumUpload;
