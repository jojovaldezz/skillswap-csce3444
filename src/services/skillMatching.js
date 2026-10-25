// Match whole skill names, ignoring capitalization and extra whitespace.
export const normalizeSkill = (skill) => skill.trim().replace(/\s+/g, " ").toLowerCase();

const overlap = (skills = [], targets = []) => {
  const wanted = new Set(targets.map(normalizeSkill).filter(Boolean));
  const seen = new Set();
  return skills.filter((skill) => {
    const key = normalizeSkill(skill);
    if (!wanted.has(key) || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
};

export function rankStudents(students, profile) {
  return students.filter((student) => profile.id == null || String(student.id) !== String(profile.id))
    .map((student) => {
      const canLearn = overlap(student.skills, profile.wanted);
      const canTeach = overlap(student.wanted, profile.skills);
      return { student, canLearn, canTeach, mutual: canLearn.length > 0 && canTeach.length > 0,
        total: canLearn.length + canTeach.length };
    })
    .sort((a, b) => Number(b.mutual) - Number(a.mutual) || b.total - a.total ||
      b.canLearn.length - a.canLearn.length || a.student.name.localeCompare(b.student.name));
}
