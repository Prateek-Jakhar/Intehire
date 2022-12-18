import React from "react";
import "../css/Profile.css";
import LeftHeader from "./LeftHeader";
import ProfileButton from "./ProfileButton";
import { db } from "./Firebase";
import { collection, getDoc, setDoc, doc, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  let navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    name: "",
    rollNumber: "",
    phoneNumber: "",
    email: "",
    branch: "",
    cgpa: "",
    address: "",
    driveLink: "",
  });

  const submitForm = async () =>{
    const userimg = localStorage.getItem("photoURL");
    console.log("Yahan hoon");
    const tempdata = {
      name: formData.name,
      roll: formData.rollNumber,
      phone_number: formData.phoneNumber,
      email: formData.email,
      department: formData.branch,
      cgpa: formData.cgpa,
      address: formData.address,
      resume_link: formData.driveLink,
      program: "B.Tech",
      batch_year: "Y19",
      user_id: 'random',
      applications:[],
      opportunities:[],
      user_image_link:userimg
    }
    console.log("Yahan hoon2");
    
    const usermail = localStorage.getItem("usermail");
    console.log("Yahan hoon3");
    await setDoc(doc(db, "people", usermail), tempdata);
    console.log("Yahan hoon4");
    navigate("/", { replace: true });
  }

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
        // e.target.name = e.target.value;
      };
    });
  }
  const imgUrl = localStorage.getItem("photoURL");
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }
  const rows = 5,
    cols = 50;
  return (
    <div className="mainProfile">
      <div>
        <LeftHeader />
      </div>
      <div style={{ position: "absolute", right: "50px" }}>
        <ProfileButton />
      </div>
      <div className="profileLeft" style={{ marginLeft: "50px" }}>
        <h1
          style={{
            color: "#41337a",
            fontSize: "3rem",
            marginTop: "25px",
            textAlign: "center",
          }}
        >
          My Profile
        </h1>
        <br />
          <label>
            <div
              style={{
                marginRight: "30px",
                width: "150px",
                display: "inline-block",
              }}
            >
              Name
            </div>
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </label>
          <br />
          <br />
          <br />
          <label>
            <div
              style={{
                marginRight: "30px",
                width: "150px",
                display: "inline-block",
              }}
            >
              Roll Number
            </div>
            <input
              name="rollNumber"
              type="text"
              value={formData.rollNumber}
              onChange={handleChange}
              placeholder="Enter your Roll Number"
            />
          </label>
          <br />
          <br />
          <br />
          <label>
            <div
              style={{
                marginRight: "30px",
                width: "150px",
                display: "inline-block",
              }}
            >
              Phone Number
            </div>
            <input
              name="phoneNumber"
              type="phone"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Enter your Phone Number"
            />
          </label>
          <br /> <br />
          <br />
          <label>
            <div
              style={{
                marginRight: "30px",
                width: "150px",
                display: "inline-block",
              }}
            >
              Email
            </div>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <br />
          <br />
          <br />
          <label>
            <div
              style={{
                marginRight: "30px",
                width: "150px",
                display: "inline-block",
              }}
            >
              Branch
            </div>
            <input
              name="branch"
              type="string"
              value={formData.branch}
              onChange={handleChange}
              placeholder="Enter your Branch"
            />
          </label>
          <br />
          <br />
          <br />
          <label>
            <span
              style={{
                marginRight: "30px",
                width: "150px",
                display: "inline-block",
              }}
            >
              CGPA
            </span>
            <input
              name="cgpa"
              type="number"
              value={formData.cgpa}
              onChange={handleChange}
              placeholder="Enter your CGPA"
            />
          </label>
          <br />
          <br />
          <br />
          <label>
            <span
              style={{
                marginRight: "30px",
                width: "150px",
                display: "inline-block",
              }}
            >
              Address
            </span>
            <input
              name="address"
              type="string"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your Address"
            />
          </label>
          <br />
          <br />
          <br />
          <label>
            <span
              style={{
                marginRight: "30px",
                width: "150px",
                display: "inline-block",
              }}
            >
              Resume
            </span>
            <input
              name="driveLink"
              type="string"
              value={formData.driveLink}
              onChange={handleChange}
              placeholder="Enter Resume Link"
            />
          </label>
          <br />
          <br />
          <div className="btn">
            <button onClick={()=>(submitForm())}>Submit</button>
          </div>
        <div style={{ height: "100px" }}></div>
      </div>

      <div className="profileRight">
        <img src={imgUrl} alt="profileimage" />
      </div>
    </div>
  );
};

export default Profile;
