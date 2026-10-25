const KEY = 'skillswap.profile.skills.v1';
const defaults = { skills: ['HTML/CSS', 'JavaScript'], wanted: [] };
export function loadProfile() {
  try {
    const data = JSON.parse(localStorage.getItem(KEY));
    if (data && ['skills', 'wanted'].every((key) => Array.isArray(data[key]) &&
      data[key].every((value) => typeof value === 'string'))) return data;
  } catch { /* Use defaults when storage is unavailable or invalid. */ }
  return defaults;
}
export function saveProfile(profile) {
  try { localStorage.setItem(KEY, JSON.stringify(profile)); return true; }
  catch { return false; }
}
