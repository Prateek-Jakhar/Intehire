import React from "react";
import "../css/LogoutMenu.css";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, googleProvider } from "./Firebase";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

export default function LogoutMenu() {
  let navigate = useNavigate();

  const googleSignOut = () => {
    console.log("Working here");
    signOut(auth)
      .then(() => {
        console.log("Here");
        toast.success("User successfully logged out", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        localStorage.setItem("isLoggedIn", false);
        navigate("/login", { replace: true });
      })
      .catch((error) => {
        toast.error("An error occured! Please try again.", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };
  return (
    <div className="LogoutMenu">
      <button onClick={googleSignOut}>Logout</button>
    </div>
  );
}

// import React from "react";
// import "../css/LogoutMenu.css";
// export default function LogoutMenu() {
//   return (
//     <div className="LogoutMenu">
//       <button>Logout</button>
//     </div>
//   );
// }
