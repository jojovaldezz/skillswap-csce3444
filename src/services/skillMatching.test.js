import test from 'node:test';
import assert from 'node:assert/strict';
import { rankStudents } from './skillMatching.js';

test('matches both directions and ranks mutual exchanges before one-way matches', () => {
  const results = rankStudents([
    { id: 1, name: 'One way', skills: ['Python', 'React', 'Excel'] },
    { id: 2, name: 'Mutual', skills: ['Python'], wanted: ['JavaScript'] },
    { id: 3, name: 'Unrelated', skills: ['Design'] },
  ], { skills: ['JavaScript'], wanted: ['Python', 'React', 'Excel'] });
  assert.deepEqual(results.map((m) => m.student.id), [2, 1, 3]);
  assert.deepEqual(results[0].canLearn, ['Python']);
  assert.deepEqual(results[0].canTeach, ['JavaScript']);
  assert.equal(results[0].mutual, true);
});
test('normalizes case and whitespace, deduplicates, and avoids substring matches', () => {
  const [match] = rankStudents([{ name: 'A', skills: [' UI   Design ', 'ui design', 'JavaScript'] }],
    { wanted: ['ui design', 'Java'], skills: [] });
  assert.equal(match.total, 1);
  assert.deepEqual(match.canLearn, [' UI   Design ']);
});
test('handles empty profiles, missing skill lists and excludes the current student', () => {
  const matches = rankStudents([{ id: 1, name: 'Self' }, { id: 2, name: 'Other' }], { id: '1' });
  assert.equal(matches.length, 1);
  assert.equal(matches[0].total, 0);
});
test('orders ties consistently by name and counts teaching-only matches', () => {
  const matches = rankStudents([{ name: 'Z', wanted: ['React'] }, { name: 'A', wanted: ['React'] }], { skills: ['React'] });
  assert.deepEqual(matches.map((m) => m.student.name), ['A', 'Z']);
  assert.equal(matches[0].mutual, false);
  assert.equal(matches[0].total, 1);
});
