import AddSkill from "../components/addSkill";


export default function Profile() {
  return(
  <section>
    <span className="eyebrow">YOUR SKILLSWAP SPACE</span>
    <h1>My profile</h1>
    <div className="card profile">
      <div className="student-avatar">SS</div>

      <div>
        <h2>Student profile</h2>
        <p className="muted">
          Profile editing and saved skills will be connected to Supabase in the
          next sprint.
        </p>
        <h3>Skills I can teach</h3>

        <div className="chips">
        
          <AddSkill/>
        </div>
        <h3>Skills I want to learn</h3>
        <div className="chips">
          <AddSkill/>
        </div>
      </div>
    </div>
  </section>
)}
