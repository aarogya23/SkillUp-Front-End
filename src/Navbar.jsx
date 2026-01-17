import { Link } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header>
      <nav className="container">
        <div className="logo">SkillUp</div>

        <ul className={`nav-links ${open ? 'mobile-open' : ''}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><a href="#courses">Courses</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="auth-buttons">
          <Link to="/dashboard" className="btn btn-primary">
            Dashboard
          </Link>
        </div>

        <button className="mobile-menu-btn" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </nav>
    </header>
  )
}

export default Navbar
