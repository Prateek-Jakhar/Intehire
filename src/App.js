import "./App.css";
// import FeedButton from "./components/FeedButton";
// import HeaderOptions from "./components/HeaderOptions";
import LogIn from "./components/LogIn";
// import NewOpportunityCard from "./components/NewOpportunityCard";
import NewOpportunityCardTop from "./components/NewOpportunityCardTop";
// import OldOpportunityCard from "./components/OldOpportunityCard";
// import LeftHeader from "./components/LeftHeader";
import Dashboard from "./components/Dashboard";
import People from "./components/People";
import Forum from "./components/Forum.js";
import Applications from "./components/Applications";
import Opportunity from "./components/Opportunity";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SubmitExperience from "./components/SubmitExperience";
import Profile from "./components/Profile";
import { UserContainer, UserContext } from "./components/NameContext";
import OffCampus from "./components/OffCampus";
import Admin from "./components/Admin";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/forum/:id" element={<Forum />} />
          <Route path="/application" element={<Applications />} />
          <Route path="/opportunity" element={<Opportunity />} />
          <Route path="/people" element={<People />} />
          <Route path="/submitExp/:forum_id" element={<SubmitExperience />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/offcampus" element={<OffCampus />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
