
import { useState } from "react";

export default function Sessions() {
  const [sessions, setSessions] = useState([
    {
      id: 1,
      title: "Python Basics",
      skill: "Python",
      date: "2026-11-10",
      time: "14:00",
      description: "Learn Python fundamentals together."
    }
  ]);
  const [joinedSessions, setJoinedSessions] = useState([]);
  const [title, setTitle] = useState("");
  const [skill, setSkill] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!title.trim() || !skill.trim() || !date || !time) {
      alert("Please fill in all required fields.");
      return;
    }

    if (new Date(`${date}T${time}`).getTime() <= Date.now()) {
      alert("Please choose a future date and time.");
      return;
    }

    const newSession = {
      id: crypto.randomUUID(),
      title: title.trim(),
      skill: skill.trim(),
      date,
      time,
      description: description.trim(),
    };

    setSessions((previous) => [...previous, newSession]);

    setTitle("");
    setSkill("");
    setDate("");
    setTime("");
    setDescription("");
  }

function handleJoin(sessionId) {
  if (joinedSessions.includes(sessionId)) {
    return;
  }

  setJoinedSessions((previous) => [
    ...previous,
    sessionId
  ]);

  alert("You're in! You successfully joined the session.");
}

function handleLeave(sessionId) {
  setJoinedSessions((previous) =>
    previous.filter((id) => id !== sessionId)
  );

  alert("You have left the session.");
}

  return (
    <div>
      <h1>Study Sessions</h1>
      <p>Create and manage your SkillSwap learning sessions.</p>

      <h2>Create Session</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Session Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Skill / Topic</label>
          <input
            type="text"
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Time</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Description (Optional)</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <button type="submit">Create Session</button>
      </form>

     
<h2>Upcoming Sessions</h2>

{sessions.length === 0 ? (
  <p>No sessions scheduled yet.</p>
) : (
  sessions.map((session) => (
    <div key={session.id}>
      <h3>{session.title}</h3>

      <p>Skill: {session.skill}</p>
      <p>Date: {session.date}</p>
      <p>Time: {session.time}</p>
      <p>{session.description}</p>

      <button
        type="button"
        onClick={() => handleJoin(session.id)}
        disabled={joinedSessions.includes(session.id)}
      >
        {joinedSessions.includes(session.id)
          ? "Joined ✓"
          : "Join Session"}
      </button>
    </div>
  ))
)}


<h2>My Joined Sessions</h2>

{joinedSessions.length === 0 ? (
  <p>You haven't joined any sessions yet.</p>
) : (
  sessions
    .filter((session) => joinedSessions.includes(session.id))
    .map((session) => (
      <div key={session.id}>
        <h3>{session.title}</h3>

        <p>Skill: {session.skill}</p>
        <p>Date: {session.date}</p>
        <p>Time: {session.time}</p>

        {session.description && (
          <p>Description: {session.description}</p>
        )}

        <button
          type="button"
          onClick={() => handleLeave(session.id)}
        >
          Leave Session
        </button>
      </div>
    ))
)}


    </div>
  );
}
