import { useState } from "react";
import { loadProfile, saveProfile } from "./services/profileStorage";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Discover from "./pages/Discover";
import Messages from "./pages/Messages";
import Profile from "./pages/Profile";
import  StudentProfile  from "./pages/StudentProfile";


export default function App() {
  const [profile, setProfile] = useState(loadProfile);
  const [saved, setSaved] = useState(true);
  function updateProfile(next) {
    setProfile(next);
    setSaved(saveProfile(next));
  }

  return (
  
  <>
    <NavBar />
    <main className="container">

      <Routes>
        <Route path="/" element={<Home profile={profile} />} />
        <Route path="/discover" element={<Discover profile={profile} />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/profile" element={<Profile profile={profile} onChange={updateProfile} saved={saved} />} />
        <Route path="*" element={<h1>Page not found</h1>} />
        <Route path="/students/:id" element={<StudentProfile />}  />
      </Routes>
    </main>
    <footer>SkillSwap • Built for students, by students.</footer>
  </>
)};
