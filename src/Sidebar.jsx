import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import logo from './assets/image 1.png'
import dashboardIcon from './assets/dot.png'
import school from './assets/school.png'
import bulbIcon from './assets/idea.png'
import Live from './assets/live.png'
import chat from './assets/chat.png'
import profile from './assets/profile.png'

// Import user and mentor images
import userImage from './assets/user-profile.png' // Add your user profile image
import mentor1 from './assets/tt.png' // Add your mentor images
import mentor2 from './assets/tt.png'
import mentor3 from './assets/tt.png'
import mentor4 from './assets/tt.png'
import mentor5 from './assets/tt.png'

const navStyle = ({ isActive }) =>
  `w-14 h-14 rounded-xl flex items-center justify-center transition-all
   ${isActive
     ? 'bg-black bg-opacity-25'
     : 'hover:bg-black hover:bg-opacity-15'
   }`;

const Sidebar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const mentors = [
    { id: 1, name: 'Prashant Kumar Singh', role: 'Software Developer', image: mentor1 },
    { id: 2, name: 'Prashant Kumar Singh', role: 'Software Developer', image: mentor2 },
    { id: 3, name: 'Prashant Kumar Singh', role: 'Software Developer', image: mentor3 },
    { id: 4, name: 'Prashant Kumar Singh', role: 'Software Developer', image: mentor4 },
    { id: 5, name: 'Prashant Kumar Singh', role: 'Software Developer', image: mentor5 },
  ];

  return (
    <>
      {/* Sidebar */}
      <div
        className="w-28 flex flex-col items-center py-5 relative z-20"
        style={{ backgroundColor: '#2D9CDB' }}
      >
        {/* Logo */}
        <div className="text-center mb-6">
          <img src={logo} alt="Skill Up Logo" className="w-24 h-16 mx-auto" />
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

        {/* Profile Button - Now opens panel instead of navigating */}
        <button
          onClick={() => setIsProfileOpen(true)}
          className="w-14 h-14 rounded-xl flex items-center justify-center transition-all hover:bg-black hover:bg-opacity-15 mt-4"
        >
          <img src={profile} alt="Profile" className="w-7 h-7" />
        </button>
      </div>

      {/* Overlay - Click to close */}
      {isProfileOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity"
          onClick={() => setIsProfileOpen(false)}
        />
      )}

      {/* Profile Panel - Slides in from right */}
      <div
        className={`fixed top-0 right-0 h-full w-96 bg-white shadow-2xl z-40 transform transition-transform duration-300 ease-in-out ${
          isProfileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full overflow-y-auto p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-xl font-semibold text-gray-800">Your Profile</h1>
            <div className="flex gap-2">
              <button className="text-gray-600 hover:text-gray-800">
                <svg width="4" height="16" viewBox="0 0 4 16" fill="currentColor">
                  <circle cx="2" cy="2" r="2"/>
                  <circle cx="2" cy="8" r="2"/>
                  <circle cx="2" cy="14" r="2"/>
                </svg>
              </button>
              <button
                onClick={() => setIsProfileOpen(false)}
                className="text-gray-600 hover:text-gray-800"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 5L5 15M5 5l10 10"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Profile Picture with Progress Ring */}
          <div className="flex flex-col items-center mb-6">
            <div className="relative mb-4">
              <svg className="w-32 h-32 transform -rotate-90">
                <circle
                  cx="64"
                  cy="64"
                  r="60"
                  stroke="#E5E7EB"
                  strokeWidth="8"
                  fill="none"
                />
                <circle
                  cx="64"
                  cy="64"
                  r="60"
                  stroke="#2D9CDB"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray="377"
                  strokeDashoffset="94"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center overflow-hidden">
                  {/* User Profile Image */}
                  <img 
                    src={userImage} 
                    alt="User Profile" 
                    className="w-20 h-20 rounded-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Greeting */}
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Good Morning Aarogya
            </h2>
            <p className="text-sm text-gray-500 text-center max-w-xs">
              Continue Your Journey And Achieve Your Target
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-6 mb-8">
            <button className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-blue-500 hover:text-blue-500 transition-colors">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M10 2C7.5 2 6 4 6 6v2c0 1-1 2-2 2v6c0 1 1 2 2 2h8c1 0 2-1 2-2v-6c-1 0-2-1-2-2V6c0-2-1.5-4-4-4z"/>
              </svg>
            </button>
            <button className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-blue-500 hover:text-blue-500 transition-colors">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="5" width="14" height="12" rx="2"/>
                <path d="M3 9l7 4 7-4"/>
              </svg>
            </button>
            <button className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-blue-500 hover:text-blue-500 transition-colors">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="4" y="4" width="12" height="12" rx="2"/>
                <path d="M14 2v4M6 2v4M4 8h12"/>
              </svg>
            </button>
          </div>

          {/* Activity Chart */}
          <div className="mb-8">
            <div className="flex items-end justify-center gap-3 h-32">
              {[40, 60, 75, 95, 70].map((height, index) => (
                <div key={index} className="flex flex-col items-center gap-1 flex-1">
                  <div
                    className="w-full rounded-t-lg bg-gradient-to-t from-blue-500 to-blue-400"
                    style={{ height: `${height}%` }}
                  />
                  <div
                    className="w-full rounded-b-lg bg-gradient-to-t from-blue-600 to-blue-500"
                    style={{ height: `${height * 0.6}%` }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Mentors Section */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Your Mentor</h3>
              <button className="w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-blue-500 hover:text-blue-500 transition-colors">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M8 3v10M3 8h10"/>
                </svg>
              </button>
            </div>

            <div className="space-y-3 max-h-64 overflow-y-auto">
              {mentors.map((mentor) => (
                <div
                  key={mentor.id}
                  className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <div className="flex items-center gap-3">
                    {/* Mentor Profile Image */}
                    <img 
                      src={mentor.image} 
                      alt={mentor.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-800">
                        {mentor.name}
                      </p>
                      <p className="text-xs text-gray-500">{mentor.role}</p>
                    </div>
                  </div>
                  <button className="px-4 py-1.5 bg-blue-500 text-white text-sm rounded-full hover:bg-blue-600 transition-colors">
                    Follow
                  </button>
                </div>
              ))}
            </div>

            <button className="w-full mt-4 py-2 text-blue-500 text-sm font-medium hover:bg-blue-50 rounded-lg transition-colors">
              See All
            </button>
          </div>

          {/* Logout Button */}
          <button className="w-full py-3 flex items-center justify-center gap-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M13 16l4-4-4-4M17 12H7M10 16v1a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h3a2 2 0 012 2v1"/>
            </svg>
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;