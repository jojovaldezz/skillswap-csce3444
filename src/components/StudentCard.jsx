import  {  Link  }  from  "react-router-dom";

export default function StudentCard({ student, match }) {
  const { id, name = "Unnamed student", major, skills = [] } = student;

  return (
  <article className="card student">
    <div className="student-avatar" aria-hidden="true">
      {name
        .split(" ")
        .map((n) => n[0])
        .join("")}
    </div>
    <div>
      <h3>
        <Link to={`/students/${id}`}>
          {name}
        </Link>
      </h3>
      <p className="muted">{major || "Major not listed"}</p>
      <div className="chips">
        {skills.length == 0 && <span className="muted">No skills listed</span>}
        {skills.map((skill) => (
          <span className="chip" key={skill}>
            {skill}
          </span>
        ))}
      </div>
    </div>
    {match?.total > 0 && <div className="match-details">
      <strong>{match.mutual ? "Mutual skill exchange" : match.canLearn.length ? "Can help you learn" : "You can help"}</strong>
      {match.canLearn.length > 0 && <p>Learn: {match.canLearn.join(", ")}</p>}
      {match.canTeach.length > 0 && <p>Teach: {match.canTeach.join(", ")}</p>}
    </div>}
    <button
      type="button"
      onClick={() =>
        alert("Connection requests will be implemented in the next sprint.")
      }
    >
      Connect
    </button>
  </article>
);
}
