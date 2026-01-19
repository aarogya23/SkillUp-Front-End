import { Link } from 'react-router-dom'
import { useState } from 'react'
import logo from './assets/logo.png' // 👈 put your logo image here

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar-header">
      <nav className="navbar container">
        {/* LOGO */}
       <div
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  }}
>
  <img
    src={logo}
    alt="SkillUp Logo"
    style={{
      width: "140px",
      height: "auto",
      objectFit: "contain",
      cursor: "pointer"
    }}
  />
</div>


        {/* LINKS */}
        <ul className={`nav-links ${open ? 'mobile-open' : ''}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><a href="#courses">Courses</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* BUTTON */}
        <div className="auth-buttons">
          <Link to="/dashboard" className="btn btn-primary">
            Dashboard
          </Link>
        </div>

        {/* MOBILE MENU */}
        <button className="mobile-menu-btn" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </nav>
    </header>
  )
}

export default Navbar
