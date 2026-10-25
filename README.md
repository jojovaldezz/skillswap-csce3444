# SkillSwap — CSCE 3444

Starter frontend for the SkillSwap campus peer-learning application. **Current functionality:** client-side routing, responsive UI, mock-data skill/student search, and skill matching with browser-saved profile skills. **Not yet implemented:** authentication, database persistence, connection requests, messaging, sessions, and feedback. Buttons marked as placeholders are not completed features.

## Setup
1. Install Node.js (LTS recommended).
2. Open this folder in VS Code.
3. Run `npm install`.
4. Run `npm run dev` and open the local URL printed in the terminal.
5. Run `npm run build` before opening a pull request.

## Architecture
- `src/pages/`: route-level screens
- `src/components/`: reusable visual components
- `src/features/`: feature-specific logic
- `src/services/`: database/API operations and temporary mock data
- `src/lib/`: external client configuration
- `src/styles/`: shared styling
- `supabase/migrations/`: reviewed SQL migrations (none yet)

## Team rules
- Branch from `main` using `feature/short-name`.
- No direct pushes to `main`; submit pull requests.
- Keep data queries in `services/`, not page components.
- Do not commit `.env.local` or any Supabase secret/service-role keys.
- Before connecting real user data, define and test Row Level Security policies.
- Use mock data until backend interfaces and schemas are agreed.

## Suggested next sprint
Implement registration/login and profiles end-to-end, then skills and discovery, then connections/sessions. Confirm with the instructor how 65% completion is measured.
# Skill Swap

A peer learning platform that connects university students based on skills they can teach and skills they want to learn. 

Build for CSCE 3444 (Software Engineering) at the University of North Texas, Fall 2026

## Team - Skill Builders
- Jayden Price
- Dinojah Mahendiran
- Krishala Panta
- Doris Umuhire
- Jose Valdez

## Status
In development. Requirements and design phase complete; 
Implementation in Progress...

## Documentation
- Software Requirements Specification (SRS)

## Skill matching
Add teaching and learning skills on My Profile. Home recommends matching students; Discover ranks all students and offers a Matches only filter. Cards explain which skills you can learn or teach. Mutual exchanges rank first, then total shared skills, learning matches, and student name. Matching compares whole skill names without case or extra whitespace; synonyms are not inferred.

Profile skills are stored locally in this browser, not in Supabase or a user account. Student offers and learning goals remain mock data. Connection requests are still placeholders.

Run matching tests with `node --test src/services/skillMatching.test.js` and verify production compilation with `npm run build`.
