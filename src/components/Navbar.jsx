import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        Nootana Coaching Centre
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/admissions">Admissions</Link>
      </div>
      
    </nav>
    
  );
}

export default Navbar;
