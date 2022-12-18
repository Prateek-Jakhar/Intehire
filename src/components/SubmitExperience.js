import React from "react";
import "./../css/SubmitExperience.css";
import { Link, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { db } from "./Firebase";
import {
  collection,
  getDoc,
  setDoc,
  where,
  query,
  doc,
  addDoc,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function SubmitExperience() {
  let navigate = useNavigate();
  const { forum_id } = useParams();
  const [formData, setFormData] = React.useState({
    whatRole: "",
    whatQuestion: "",
    whatProcess: "",
    difficulty: "",
    experience: "",
  });

  const today = new Date();

  async function handleSubmit() {
    console.log(formData);
    const name = localStorage.getItem("userName");
    const userimg = localStorage.getItem("photoURL");
    const docRef = await addDoc(collection(db, "experience"), {
      a1: formData.whatRole,
      a2: formData.whatQuestion,
      a3: formData.whatProcess,
      a4: formData.difficulty,
      a5: formData.experience,
      name: name,
      date: today,
      user_img: userimg,
    });
    const exp_id = docRef.id;
    console.log(exp_id);
    console.log(exp_id);
    await setDoc(doc(db, "experience", exp_id), {
      a1: formData.whatRole,
      a2: formData.whatQuestion,
      a3: formData.whatProcess,
      a4: formData.difficulty,
      a5: formData.experience,
      name: name,
      date: today,
      user_img: userimg,
      id: exp_id,
    });
    console.log(forum_id);
    // const q = query(collection(db, "forums", "test"));
    // const querySnapshot = await getDocs(doc(db, "forums", "test"));

    // const q = query(collection(db, "forums"), where("id", "==", forum_id));
    const querySnapshot = await getDoc(doc(db, "forums", forum_id));
    let forum_data = querySnapshot.data();
    console.log(forum_data);

    forum_data.experience.push({
      date: today,
      id: exp_id,
      name: name,
      user_id: "random",
    });

    console.log(forum_data);

    await setDoc(doc(db, "forums", forum_id), forum_data);

    toast.success("Form Submitted", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    navigate(`/forum/${forum_id}`, { replace: true });
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

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   console.log(formData);
  // }
  const rows = 5,
    cols = 50;
  return (
    <>
      <ToastContainer />
      <div className="Form">
        <h1 style={{ color: "#41337a", fontSize: "3rem", marginTop: "25px" }}>
          Submit Your Experience
        </h1>
        <br />
          <label>
            <div>For what role was the interview conducted?</div>
            <br />
            <textarea
              name="whatRole"
              value={formData.whatRole}
              onChange={handleChange}
              rows={rows}
              cols={cols}
            />
          </label>
          <br />
          <br />
          <br />
          <label>
            <div>
              What questions were asked in the various rounds? <br /> You can
              also provide the answers to them.
            </div>
            <br></br>
            <textarea
              name="whatQuestion"
              value={formData.whatQuestion}
              onChange={handleChange}
              rows={rows}
              cols={cols}
            />
          </label>
          <br />
          <br />
          <br />
          <label>
            <div>What was their selection and interview process like?</div>
            <br />
            <textarea
              name="whatProcess"
              value={formData.whatProcess}
              onChange={handleChange}
              rows={rows}
              cols={cols}
            />
          </label>
          <br /> <br />
          <br />
          <label>
            What was the Interview Difficulty Level in your opinion?
          </label>
          <br />
          <div style={{}}>
            <br />
            <input
              type="radio"
              name="difficulty"
              className="radio"
              id="Easy"
              checked={formData.difficulty === "Easy"}
              onChange={handleChange}
              value="Easy"
            />
            <label htmlFor="Easy">Easy</label>

            <input
              type="radio"
              name="difficulty"
              id="Medium"
              className="radio"
              checked={formData.difficulty === "Medium"}
              onChange={handleChange}
              value="Medium"
            />
            <label htmlFor="Medium">Medium</label>
            <input
              type="radio"
              name="difficulty"
              className="radio"
              id="Hard"
              checked={formData.difficulty === "Hard"}
              onChange={handleChange}
              value="Hard"
            />
            <label htmlFor="Hard">Hard</label>
          </div>
          <br />
          <br />
          <br />
          <label>
            <div style={{ fontWeight: "bold" }}>
              How was the overall experience?
            </div>
            <br />
            <textarea
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              rows={rows}
              cols={cols}
            />
          </label>
          <br />
          <br />
          <br />
          <div className="btn">
            <button onClick={() => (handleSubmit())}>Submit</button>
          </div>
        <div style={{ height: "100px" }}></div>
      </div>
    </>
  );
}
