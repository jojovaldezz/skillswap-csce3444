import {Link, useParams } from  "react-router-dom";
import { students }  from "../services/mockData";

function Chips({ items, empty }){
  if ( !items || items.length == 0) return <p className="muted">{empty}</p>;
  return (
    <div className="chips">
      {items.map((skill) => (
        <span className="chip" key={skill}>
          {skill}
        </span>
      ))}
    </div>
  );
}

export default function StudentProfile() {
    const {id} = useParams();
    const student = students.find((s) => String(s.id) === id);  
    if  (!student) {
        return (
            <section className="card empty">
                <h1>Student  not  found</h1>
                <p className="muted">We couldn't find a student with that ID.</p>
                <Link to="/discover" className="back">← Back to Discover</Link>
            </section>
        );
    }
    
return (
  <section>
    <span className="eyebrow">STUDENT PROFILE</span>

    <h1>{student.name ?? "Unnamed student"}</h1>

    <p className="muted">{student.major || "Major not listed"}</p>

    <h2>About Me</h2>
    <p>
      {student.bio?.trim() || (
        <span className="muted">This student hasn't added a bio yet.</span>
      )}
      </p>
    <h2>Skills I Offer</h2>
    <Chips items={student.skills} empty="No skills listed yet." />

    <h2>Skills I Want to Learn</h2>
    <Chips items={student.wanted} empty="Nothing listed yet." />

    <h2>Availablility</h2>
    <p>
      {student.availability?.trim() || (
        <span className="muted">No availability listed.</span>
      )}
    </p>

    <Link to="/discover" className="back"> ← Back to Discover</Link>
  </section>

);
}