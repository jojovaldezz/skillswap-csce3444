import { Link } from 'react-router-dom';
import AddSkill from '../components/addSkill';

export default function Profile({ profile, onChange, saved }) {
  return <section>
    <span className="eyebrow">YOUR SKILLSWAP SPACE</span>
    <h1>My profile</h1>
    <div className="card profile">
      <div className="student-avatar">SS</div>
      <div>
        <h2>Student profile</h2>
        <p className="muted">Add skills to find students you can learn from and teach.</p>
        <p role="status">{saved ? 'Skills are saved in this browser.' : 'Browser storage is unavailable. Skills will last until you reload.'}</p>
        <h3>Skills I can teach</h3>
        <AddSkill skills={profile.skills} label="skills I can teach"
          onChange={(skills) => onChange({ ...profile, skills })} />
        <h3>Skills I want to learn</h3>
        <AddSkill skills={profile.wanted} label="skills I want to learn"
          onChange={(wanted) => onChange({ ...profile, wanted })} />
        <p><Link className="back" to="/discover">Find skill matches →</Link></p>
      </div>
    </div>
  </section>;
}
