import  {useState}  from  "react";
import  { FontAwesomeIcon }  from  '@fortawesome/react-fontawesome';
import  {faCirclePlus}  from  '@fortawesome/free-solid-svg-icons';

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
          
          
          <span className="chip">HTML/CSS</span>
          <span className="chip">Figma</span>
          <button type="button" className="addSkill">
              <FontAwesomeIcon icon={faCirclePlus}/>
          </button>
          <input  type='text' classname="teachSkillInput"></input>
        </div>
        <h3>Skills I want to learn</h3>
        <div className="chips">
          <span className="chip">React</span>
          <span className="chip">Cloud Security</span>
        </div>
      </div>
    </div>
  </section>
)}
