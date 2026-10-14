import  {  Link  }  from  "react-router-dom";

export default function StudentCard({ student }) {


  return (
  <article className="card student">
    <div className="student-avatar">
      {student.name
        .split(" ")
        .map((n) => n[0])
        .join("")}
    </div>
    <div>
      <h3>
        <Link to={`/students/${student.id}`}>
          {student.name}
        </Link>
      </h3>
      <p className="muted">{student.major}</p>
      <div className="chips">
        {student.skills.map((skill) => (
          <span className="chip" key={skill}>
            {skill}
          </span>
        ))}
      </div>
    </div>
    <button
      type="button"
      onClick={() =>
        alert("Connection requests will be implemented in the next sprint.")
      }
    >
      Connect
    </button>
  </article>
)}
