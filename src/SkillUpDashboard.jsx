import React from 'react'
import Sidebar from './Sidebar'

const SkillUpDashboard = () => {
  const studyData = [
    { day: 'SAT', value: 20 },
    { day: 'SUN', value: 55 },
    { day: 'MON', value: 35 },
    { day: 'TUE', value: 45 },
    { day: 'WED', value: 80 },
    { day: 'THU', value: 50 },
    { day: 'FRI', value: 50 }
  ]

  const StatCard = ({ label, value }) => (
    <div className="bg-white border rounded-xl p-4 w-56">
      <p className="text-xs text-gray-500 mb-2">{label}</p>
      <p className="text-2xl font-semibold">{value}</p>
    </div>
  )

  const CourseCard = ({ title, instructor, percent, bg, fg }) => (
    <div className={`w-72 rounded-xl p-5 ${bg}`}>
      <div className="flex justify-between mb-2">
        <span className="text-sm font-semibold">{title}</span>
        <span>⋮</span>
      </div>
      <p className="text-xs text-gray-600">{instructor}</p>

      {/* COURSE PROGRESS GRAPH */}
      <div className="relative w-32 h-32 mx-auto mt-6">
        <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
          <path
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="#E5E7EB"
            strokeWidth="3"
          />
          <path
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke={fg}
            strokeWidth="3"
            strokeDasharray={`${percent}, 100`}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center font-semibold">
          {percent}%
        </div>
      </div>
    </div>
  )

  // PROGRESS DATA
  const coursesProgress = 45
  const testSeriesProgress = 80

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN DASHBOARD */}
      <div className="flex-1 px-10 py-6">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-semibold">Dashboard</h1>
          <div className="flex items-center gap-6">
            <input
              className="border rounded-lg px-4 py-2 w-72"
              placeholder="Search"
            />
            <button className="p-2 rounded-lg hover:bg-gray-100">🔔</button>
            <button className="p-2 rounded-lg hover:bg-gray-100">⚙️</button>
          </div>
        </div>

        {/* OVERVIEW */}
        <p className="text-xs text-gray-400 font-semibold mb-3">OVERVIEW</p>
        <div className="flex gap-6 mb-8">
          <StatCard label="Courses in progress" value="3" />
          <StatCard label="Active Test Series" value="7" />
          <StatCard label="Hours Learning" value="3h 15m" />
          <StatCard label="Total score" value="240" />
        </div>

        {/* STATS + PROGRESS */}
        <div className="flex gap-8 mb-10">
          {/* BAR CHART */}
          <div className="bg-white border rounded-xl p-6 flex-1">
            <div className="flex justify-between mb-4">
              <p className="text-xs text-gray-400 font-semibold">STUDY STATISTICS</p>
              <div className="text-xs text-gray-400">week | <span className="text-black">month</span></div>
            </div>
            <div className="flex items-end gap-6 h-44">
              {studyData.map((d, i) => (
                <div key={i} className="flex-1 text-center">
                  <div
                    className={`rounded-md mx-auto ${d.day === 'WED' ? 'bg-blue-500' : 'bg-blue-300'}`}
                    style={{ height: d.value, width: '36px' }}
                  />
                  <p className="text-xs mt-2 text-gray-500">{d.day}</p>
                </div>
              ))}
            </div>
          </div>

          {/* SINGLE PROGRESS RING LIKE IMAGE */}
<div className="bg-white border rounded-xl p-6 w-72 flex flex-col items-center">
  <p className="text-xs text-gray-400 font-semibold mb-4">PROGRESS</p>

  <div className="relative w-36 h-36">
    <svg viewBox="0 0 36 36" className="-rotate-90 w-full h-full">
      {/* Background Circle */}
      <circle cx="18" cy="18" r="15.9155" fill="none" stroke="#F3F4F6" strokeWidth="3" />
      
      {/* Courses Outer Circle */}
      <circle
        cx="18"
        cy="18"
        r="15.9155"
        fill="none"
        stroke="#1D4ED8"
        strokeWidth="3"
        strokeDasharray={`${(45 / 100) * 100}, 100`}
      />

      {/* Test Series Inner Circle */}
      <circle
        cx="18"
        cy="18"
        r="12"
        fill="none"
        stroke="#3B82F6"
        strokeWidth="3"
        strokeDasharray={`${(80 / 100) * 100}, 100`}
      />
    </svg>

    {/* Center Text */}
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
      <span className="text-2xl font-semibold text-gray-800">45%</span>
      <span className="text-sm text-blue-500">80%</span>
    </div>
  </div>

  {/* Legend */}
  <div className="flex gap-4 mt-4 text-xs">
    <div className="flex items-center gap-1">
      <span className="w-3 h-3 bg-blue-800 rounded-full"></span>
      <span>Courses</span>
    </div>
    <div className="flex items-center gap-1">
      <span className="w-3 h-3 bg-blue-400 rounded-full"></span>
      <span>Test Series</span>
    </div>
  </div>
</div>


        {/* MY COURSES */}
        <p className="text-xs text-gray-400 font-semibold mb-4">MY COURSES</p>
        <div className="flex gap-8 mb-10">
          <CourseCard title="Introduction to Web" instructor="Aarogya Thapa" percent={75} bg="bg-purple-100" fg="#8B5CF6" />
          <CourseCard title="English for today" instructor="Aarogya Thapa" percent={60} bg="bg-blue-100" fg="#3B82F6" />
          <CourseCard title="Basic of Java Programming" instructor="Aarogya Thapa" percent={40} bg="bg-cyan-100" fg="#06B6D4" />
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="w-96 px-6 py-6 bg-white border-l">
        <p className="text-xs text-gray-400 font-semibold mb-4">LIVE EVENTS</p>
        <div className="bg-white border rounded-xl p-4 mb-6 relative flex gap-3">
          <img
            src="https://i.pravatar.cc/48?img=12"
            alt="Instructor"
            className="w-12 h-12 rounded-lg object-cover"
          />
          <div>
            <span className="absolute right-3 top-3 text-xs text-red-500">Live</span>
            <p className="text-sm">The next live class for DSA is going on</p>
            <p className="text-xs text-gray-500">Bikalpa Dhungana</p>
          </div>
        </div>

        <p className="text-xs text-gray-400 font-semibold mb-4">ACTIVITY</p>
        <div className="space-y-4">
          <div className="flex gap-3 border-l-4 border-blue-500 pl-3">
            <img
              src="https://i.pravatar.cc/40?img=1"
              className="w-10 h-10 rounded-full"
              alt="Ramesh"
            />
            <div>
              <p className="text-sm"><b>Ramesh</b> has replied</p>
              <p className="text-xs text-gray-500">Update on the file structure in database</p>
            </div>
          </div>

          <div className="flex gap-3 border-l-4 border-blue-500 pl-3">
            <img
              src="https://i.pravatar.cc/40?img=5"
              className="w-10 h-10 rounded-full"
              alt="Kumar"
            />
            <div>
              <p className="text-sm"><b>Kumar</b> invited you</p>
              <p className="text-xs text-gray-500">Join code camp</p>
            </div>
          </div>

          <div className="flex gap-3 border-l-4 border-blue-500 pl-3">
            <img
              src="https://i.pravatar.cc/40?img=8"
              className="w-10 h-10 rounded-full"
              alt="Hari"
            />
            <div>
              <p className="text-sm"><b>Hari</b> commented</p>
              <p className="text-xs text-gray-500">On seminar with Kumar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillUpDashboard
