
// ==================== Sidebar.jsx ====================
import React from 'react'
import { NavLink } from 'react-router-dom'

import logo from './assets/image 1.png'
import dashboardIcon from './assets/dot.png'
import school from './assets/school.png'
import bulbIcon from './assets/idea.png'
import Live from './assets/live.png'
import chat from './assets/chat.png'
import profile from './assets/profile.png'

const navStyle = ({ isActive }) =>
  `w-14 h-14 rounded-xl flex items-center justify-center transition-all
   ${isActive
     ? 'bg-black bg-opacity-25'
     : 'hover:bg-black hover:bg-opacity-15'
   }`

const Sidebar = () => {
  return (
    <div
      className="w-28 flex flex-col items-center py-5"
      style={{ backgroundColor: '#2D9CDB' }}
    >
      {/* Logo */}
      <div className="text-center mb-6">
        <img src={logo} alt="Skill Up Logo" className="w-160 h-106 mx-auto" />
      </div>

      {/* Nav Icons */}
      <div className="flex-1 flex flex-col gap-4">
        <NavLink to="/home" className={navStyle}>
          <img src={dashboardIcon} alt="Dashboard" className="w-6 h-6" />
        </NavLink>

        <NavLink to="/courses" className={navStyle}>
          <img src={school} alt="Courses" className="w-5 h-5" />
        </NavLink>

        <NavLink to="/ideas" className={navStyle}>
          <img src={bulbIcon} alt="Ideas" className="w-4 h-6" />
        </NavLink>

        <NavLink to="/chat" className={navStyle}>
          <img src={chat} alt="Chat" className="w-6 h-6" />
        </NavLink>

        <NavLink to="/live" className={navStyle}>
          <img src={Live} alt="Live" className="w-6 h-6" />
        </NavLink>
      </div>

      {/* Profile */}
      <NavLink to="/profile" className={navStyle + ' mt-4'}>
        <img src={profile} alt="Profile" className="w-7 h-7" />
      </NavLink>
    </div>
  )
}

export default Sidebar