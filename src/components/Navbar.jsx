import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      {/* LEFT SIDE (LOGO CLICKABLE) */}
      <div className="nav-left">
        <Link 
          to="/" 
          style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}
        >
          <img src="/logo.jpg" alt="logo" className="logo" />
          <h2 style={{ margin: 0 }}>Sharda Tutorial</h2>
        </Link>
      </div>

      {/* RIGHT SIDE (LINKS) */}
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/batches">Batches</NavLink>
        <NavLink to="/apply">Apply</NavLink>
        <NavLink to="/alumni">Alumni</NavLink>
      </div>
    </nav>
  );
}