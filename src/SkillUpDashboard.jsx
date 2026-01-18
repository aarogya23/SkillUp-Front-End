import React from 'react'
import Sidebar from './Sidebar'

const SkillUpDashboard = () => {
  const studyData = [
    { day: 'SAT', value: 30 },
    { day: 'SUN', value: 60 },
    { day: 'MON', value: 50 },
    { day: 'TUE', value: 55 },
    { day: 'WED', value: 100 },
    { day: 'THU', value: 65 },
    { day: 'FRI', value: 70 }
  ]

  const StatCard = ({ icon, label, value }) => (
    <div className="bg-white p-5 rounded-xl border flex-1 min-w-[180px]">
      <div className="w-9 h-9 rounded-lg bg-blue-500 flex items-center justify-center mb-3">
        <span className="text-white">{icon}</span>
      </div>
      <p className="text-xs text-gray-500">{label}</p>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  )

  const CourseCard = ({ title, instructor, progress, color }) => (
    <div className="w-56 p-5 rounded-xl" style={{ backgroundColor: color }}>
      <h3 className="font-semibold mb-1">{title}</h3>
      <p className="text-xs mb-4">👨‍🏫 {instructor}</p>

      <div className="w-20 h-20 rounded-full border-8 border-blue-500 flex items-center justify-center">
        <span className="font-bold">{progress}%</span>
      </div>
    </div>
  )

  const ActivityItem = ({ name, action, details, color }) => (
    <div className="border-l-4 pl-3 mb-4" style={{ borderColor: color }}>
      <p className="text-sm">
        <span className="font-bold">{name}</span> {action}
      </p>
      <p className="text-xs text-gray-500">{details}</p>
    </div>
  )

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />

      {/* MAIN CONTENT */}
      <div className="flex-1 p-6 overflow-y-auto">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Dashboard</h1>
          <div className="flex gap-3">
            <input className="border px-3 py-2 rounded-lg" placeholder="Search" />
            <button>🔔</button>
            <button>⚙️</button>
          </div>
        </div>

        {/* OVERVIEW */}
        <h2 className="text-xs font-bold text-gray-400 mb-4">OVERVIEW</h2>
        <div className="flex gap-4 mb-6">
          <StatCard icon="📖" label="Courses" value="3" />
          <StatCard icon="📝" label="Test Series" value="7" />
          <StatCard icon="⏱️" label="Learning Hours" value="3h 15m" />
          <StatCard icon="🏆" label="Score" value="240" />
        </div>

        {/* GRAPH + PROGRESS */}
        <div className="flex gap-6 mb-6">
          {/* BAR GRAPH */}
          <div className="flex-1 bg-white p-5 rounded-xl">
            <h2 className="text-xs font-bold text-gray-400 mb-4">
              STUDY STATISTICS
            </h2>
            <div className="flex items-end h-36 gap-2">
              {studyData.map((item, i) => (
                <div key={i} className="flex-1 text-center">
                  <div
                    className={`w-6 mx-auto rounded ${
                      item.day === 'WED'
                        ? 'bg-blue-600'
                        : 'bg-blue-300'
                    }`}
                    style={{ height: item.value }}
                  />
                  <p className="text-xs mt-2">{item.day}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CIRCULAR PROGRESS */}
          <div className="w-80 bg-white p-5 rounded-xl">
            <h2 className="text-xs font-bold text-gray-400 mb-4">PROGRESS</h2>

            <div className="relative flex justify-center">
              <svg width="140" height="140" className="-rotate-90">
                <circle
                  cx="70"
                  cy="70"
                  r="60"
                  stroke="#E5E7EB"
                  strokeWidth="12"
                  fill="none"
                />
                <circle
                  cx="70"
                  cy="70"
                  r="60"
                  stroke="#1E40AF"
                  strokeWidth="12"
                  strokeDasharray="377"
                  strokeDashoffset="190"
                  fill="none"
                />
                <circle
                  cx="70"
                  cy="70"
                  r="60"
                  stroke="#3B9FE8"
                  strokeWidth="12"
                  strokeDasharray="377"
                  strokeDashoffset="75"
                  fill="none"
                />
              </svg>

              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold">45%</span>
                <span className="text-sm text-blue-500 font-semibold">
                  80%
                </span>
              </div>
            </div>

            <div className="mt-4 text-xs space-y-2">
              <p>⬛ Courses</p>
              <p>⬛ Test Series</p>
            </div>
          </div>
        </div>

        {/* COURSES */}
        <h2 className="text-xs font-bold text-gray-400 mb-4">MY COURSES</h2>
        <div className="flex gap-4 overflow-x-auto pb-2">
          <CourseCard
            title="Introduction to Web"
            instructor="Aarogya Thapa"
            progress={75}
            color="#E9D5FF"
          />
          <CourseCard
            title="English for Today"
            instructor="Aarogya Thapa"
            progress={60}
            color="#BFDBFE"
          />
          <CourseCard
            title="Java Programming"
            instructor="Aarogya Thapa"
            progress={40}
            color="#A5F3FC"
          />
        </div>
      </div>

      {/* RIGHT SIDEBAR */}
      <div className="w-80 bg-gray-50 p-5 overflow-y-auto">
        {/* LIVE EVENT */}
        <h2 className="text-xs font-bold text-gray-400 mb-4">LIVE EVENTS</h2>
        <div className="bg-white p-4 rounded-xl mb-6 relative">
          <span className="absolute top-3 right-3 bg-red-500 text-white text-xs px-2 py-1 rounded">
            Live
          </span>
          <p className="text-sm font-semibold">
            DSA Live Class Going On
          </p>
          <p className="text-xs text-gray-500">
            👨‍🏫 Bikalpa Dhungana
          </p>
        </div>

        {/* ACTIVITY */}
        <div className="bg-white p-4 rounded-xl">
          <h2 className="text-xs font-bold text-gray-400 mb-4">
            ACTIVITY
          </h2>

          <ActivityItem
            name="Ramesh"
            action="commented on"
            details="Updated DB structure"
            color="#3B9FE8"
          />
          <ActivityItem
            name="Kumar"
            action="invited you to"
            details="Join Code Camp"
            color="#F59E0B"
          />
        </div>
      </div>
    </div>
  )
}

export default SkillUpDashboard
