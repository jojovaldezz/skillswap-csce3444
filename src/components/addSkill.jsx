import { useState } from 'react';
import { normalizeSkill } from '../services/skillMatching';

export default function AddSkill({ skills, onChange, label }) {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  function add(event) {
    event.preventDefault();
    const skill = input.trim().replace(/\s+/g, ' ');
    if (!skill) { setError('Enter a skill.'); return; }
    if (skills.some((item) => normalizeSkill(item) === normalizeSkill(skill))) {
      setError('That skill is already listed.'); return;
    }
    onChange([...skills, skill]); setInput(''); setError('');
  }
  return <div className="skill-editor">
    <div className="chips">
      {skills.map((skill) => <span className="chip" key={skill}>{skill}
        <button className="remove-skill" type="button" aria-label={`Remove ${skill} from ${label}`}
          onClick={() => onChange(skills.filter((item) => item !== skill))}>×</button>
      </span>)}
      {!skills.length && <p className="muted">No skills added yet.</p>}
    </div>
    <form onSubmit={add} className="skill-form">
      <input aria-label={`Add skill to ${label}`} placeholder="e.g. Python" value={input}
        maxLength={80} onChange={(event) => { setInput(event.target.value); setError(''); }} />
      <button type="submit">Add skill</button>
    </form>
    {error && <p role="alert">{error}</p>}
  </div>;
}
