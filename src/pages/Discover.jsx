import { useState } from "react";
import StudentCard from "../components/StudentCard";
import { students } from "../services/mockData";

export default function Discover() {
  const [search, setSearch] = useState("");
  const filtered = students.filter((s) =>
    [s.name, s.major, ...(s.skills ?? [])]
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
        <p className="muted">Nothing matches "{search}". Try another search.</p>
        <button type="button" onClick={() => setSearch("")}>
          Clear search
        </button>
      </div>
    ) :(
      <div className="student-grid">
        {filtered.map((s) => (
          <StudentCard key={s.id} student={s} />
        ))}
      </div>
    )}
    </section>
    );
  }
