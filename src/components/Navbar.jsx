import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <h2>Sharda Tutorial</h2>

      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/batches">Batches</NavLink>
        <NavLink to="/apply">Apply</NavLink>
        <NavLink to="/alumni">Alumni</NavLink>
      </div>
    </nav>
  );
}