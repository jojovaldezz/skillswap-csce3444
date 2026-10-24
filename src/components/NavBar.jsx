import { NavLink } from "react-router-dom";

const links = [
  ["Home", "/"],
  ["Discover", "/discover"],
  ["Messages", "/messages"],
  ["Profile", "/profile"],
];

export default function NavBar() {

  return (
  <header className="header">
    <div className="brand">
      <span className="brand-mark">S</span>Skill<span>Swap</span>
    </div>
    <nav aria-label="Main navigation">
      {links.map(([name, path]) => (
        <NavLink
          key={path}
          to={path}
          end={path === "/"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          {name}
        </NavLink>
      ))}
    </nav>
    <span className="avatar">SS</span>
  </header>
)}
