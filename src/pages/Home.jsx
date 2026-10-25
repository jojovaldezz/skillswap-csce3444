import { rankStudents } from "../services/skillMatching";
import { Link } from "react-router-dom";
import StudentCard from "../components/StudentCard";
import { students } from "../services/mockData";

export default function Home({ profile }) {
  const matches = rankStudents(students, profile).filter((match) => match.total > 0);
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
        <h2>Recommended skill matches</h2>
        <Link to="/discover">View all →</Link>
      </div>
      <p className="muted">Based on your profile skills. Mutual exchanges appear first.</p>
      {!profile.wanted.length && <p><Link className="back" to="/profile">Add skills you want to learn to find teachers →</Link></p>}
      {!matches.length && <div className="card empty"><h3>No skill matches yet</h3><p>Try adding other skills to your profile.</p><Link className="back" to="/profile">Edit my skills →</Link></div>}
      <div className="student-grid">
        {matches.slice(0, 2).map((match) => (
          <StudentCard key={match.student.id} student={match.student} match={match} />
        ))}
      </div>
    </section>
  </>
)}
