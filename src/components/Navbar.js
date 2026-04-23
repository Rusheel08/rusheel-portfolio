import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/skills">Skills</NavLink>
      <NavLink to="/internships">Internships</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/achievements">Achievements</NavLink>
      <NavLink to="/education">Education</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
}
