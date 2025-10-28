import "./navbar.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-title">Zachary Gonzalez</div>
      <div className="navbar-links">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Professional
        </NavLink>
        <NavLink
          to="/personal"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          } 
        >
          Personal
        </NavLink>
      </div>
    </nav>
  );
}
