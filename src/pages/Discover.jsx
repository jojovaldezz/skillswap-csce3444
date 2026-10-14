import { useState } from "react";
import StudentCard from "../components/StudentCard";
import { students } from "../services/mockData";

export default function Discover() {
  const [search, setSearch] = useState("");
  const filtered = students.filter((s) =>
    (s.name + " " + s.major + " " + s.skills.join(" "))
      .toLowerCase()
      .includes(search.toLowerCase()),
  );

  return(

  <section>
    <span className="eyebrow">FIND YOUR PEOPLE</span>
    <h1>Discover skills & students</h1>
    <p className="muted">Explore what your campus community has to offer.</p>
    <input
      className="search"
      aria-label="Search students and skills"
      placeholder="Search by skill, student, or major..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
    <p>{filtered.length} Students found</p>
    <div className="student-grid">
      {filtered.map((s) => (
        <StudentCard key={s.id} student={s} />
      ))}
      {filtered.length === 0 && <p>No matches found. Try another search.</p>}
    </div>
  </section>
  )
}
