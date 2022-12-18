import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBExpTF2Pu7-dERrEtpkZSKS2UDL2hmqzY",
  authDomain: "calyxpod-39022.firebaseapp.com",
  projectId: "calyxpod-39022",
  storageBucket: "calyxpod-39022.appspot.com",
  messagingSenderId: "512993603612",
  appId: "1:512993603612:web:46a387d8a43ad97239afd9"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


export {db, auth, googleProvider};