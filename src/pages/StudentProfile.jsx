import {Link, useParams } from  "react-router-dom";
import { students }  from "../services/mockData";

export default function StudentProfile() {
    const {id} = useParams();
    const student = students.find((s) => String(s.id) === id);  
    if  (!student) {
        return (
            <section>
                <h1>Student  not  found</h1>
                <p>We couldn't find a student with that ID.</p>
            </section>
        )
    }
    
return (
  <section>
    <span className="eyebrow">STUDENT PROFILE</span>

    <h1>{student.name}</h1>

    <p className="muted">{student.major}</p>

    <h2>Skills</h2>

    <div className="chips">
      {student.skills.map((skill) => (
        <span className="chip" key={skill}>
          {skill}
        </span>
      ))}
    </div>
    <Link to="/discover"> ← Back to Discover</Link>
  </section>

);
}