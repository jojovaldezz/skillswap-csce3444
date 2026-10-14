import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Discover from "./pages/Discover";
import Messages from "./pages/Messages";
import Profile from "./pages/Profile";
import  StudentProfile  from "./pages/StudentProfile";


export default function App() {

  return (
  
  <>
    <NavBar />
    <main className="container">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<h1>Page not found</h1>} />
        <Route path="/students/:id" element={<StudentProfile />}  />
      </Routes>
    </main>
    <footer>SkillSwap • Built for students, by students.</footer>
  </>
)};
