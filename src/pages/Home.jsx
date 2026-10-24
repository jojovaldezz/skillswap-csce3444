import { Link } from "react-router-dom";
import StudentCard from "../components/StudentCard";
import { students } from "../services/mockData";

export default function Home() {
  return(
  <>
    <section className="hero">
      <div>
        <span className="eyebrow">YOUR CAMPUS. YOUR COMMUNITY.</span>
        <h1>
          Learn something new.
          <br />
          <em>Share what you know.</em>
        </h1>
        <p>
          Find students who can teach you new skills—and share yours in return.
        </p>
        <Link className="btn" to="/discover">
          Explore Skills →
        </Link>
      </div>
      <div className="hero-art">
        <span>✦</span>
        <strong>Grow together</strong>
        <p>One skill at a time.</p>
      </div>
    </section>
    <section>
      <div className="section-head">
        <h2>Recommended connections</h2>
        <Link to="/discover">View all →</Link>
      </div>
      <div className="student-grid">
        {students.slice(0, 2).map((s) => (
          <StudentCard key={s.id} student={s} />
        ))}
      </div>
    </section>
  </>
)}
