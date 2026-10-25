import { Link } from "react-router-dom";
import { rankStudents } from "../services/skillMatching";
import { useState } from "react";
import StudentCard from "../components/StudentCard";
import { students } from "../services/mockData";

export default function Discover({ profile }) {
  const [search, setSearch] = useState("");
  const [matchesOnly, setMatchesOnly] = useState(false);
  const filtered = rankStudents(students, profile).filter((match) => !matchesOnly || match.total > 0).filter(({ student: s }) =>
    [s.name, s.major, ...(s.skills ?? []), ...(s.wanted ?? [])]
      .filter(Boolean)
      .join(" ")
      .toLowerCase()
      .includes(search.trim().toLowerCase()),
  );

  return(

  <section>
    <span className="eyebrow">FIND YOUR PEOPLE</span>
    <h1>Discover skills & students</h1>
    <p className="muted">Explore what your campus community has to offer.</p>
    <p className="muted">Sorted by skill match, with mutual exchanges first. Matches use whole skill names, ignoring case and extra spaces.</p>
    <p><Link className="back" to="/profile">Edit your skills →</Link></p>
    <label><input type="checkbox" checked={matchesOnly} onChange={(event) => setMatchesOnly(event.target.checked)} /> Matches only</label>
    <input
      className="search"
      type="search"
      aria-label="Search students and skills"
      placeholder="Search by skill, student, or major..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
    <p role="status" aria-live="polite">
      {filtered.length} {filtered.length === 1 ? "student" : "students"} found
    </p>
    {filtered.length === 0 ? (
      <div className="card empty">
        <h2>No matches found</h2>
        <p className="muted">No students match your current search and filters. Try another search or update your profile skills.</p>
        <button type="button" onClick={() => { setSearch(""); setMatchesOnly(false); }}>
          Clear search and filters
        </button>
      </div>
    ) :(
      <div className="student-grid">
        {filtered.map((match) => (
          <StudentCard key={match.student.id} student={match.student} match={match} />
        ))}
      </div>
    )}
    </section>
    );
  }
