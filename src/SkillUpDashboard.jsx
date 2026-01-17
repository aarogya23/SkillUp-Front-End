import React from 'react';


import logo from './assets/image 1.png';
import dashboardIcon from './assets/dot.png';
// import booksIcon from './assets/books-icon.png';
// import bulbIcon from './assets/bulb-icon.png';
// import chatIcon from './assets/chat-icon.png';
// import headphoneIcon from './assets/headphone-icon.png';
// import settingsIcon from './assets/settings-icon.png';

const SkillUpDashboard = () => {
  const studyData = [
    { day: 'SAT', value: 30 },
    { day: 'SUN', value: 60 },
    { day: 'MON', value: 50 },
    { day: 'TUE', value: 55 },
    { day: 'WED', value: 100 },
    { day: 'THU', value: 65 },
    { day: 'FRI', value: 70 }
  ];

  const StatCard = ({ icon, label, value, color }) => (
    <div className="bg-white p-5 rounded-xl border border-gray-100 flex-1 min-w-[180px]">
      <div 
        className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
        style={{ backgroundColor: color }}
      >
        <span className="text-lg">{icon}</span>
      </div>
      <p className="text-xs text-gray-500 mb-2">{label}</p>
      <p className="text-3xl font-bold text-gray-800">{value}</p>
    </div>
  );

  const CourseCard = ({ title, instructor, progress, color }) => (
    <div 
      className="w-56 p-5 rounded-xl flex-shrink-0"
      style={{ backgroundColor: color }}
    >
      <div className="flex justify-between mb-4">
        <span className="text-2xl">🎓</span>
        <span className="text-xl text-gray-600">⋮</span>
      </div>
      <h3 className="text-base font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-xs text-gray-600 mb-5">👨‍🏫 {instructor}</p>
      <div className="relative w-20 h-20">
        <div 
          className="w-20 h-20 rounded-full flex items-center justify-center"
          style={{ 
            backgroundColor: 'rgba(139, 92, 246, 0.15)',
            border: `8px solid ${progress > 50 ? '#8B5CF6' : '#60A5FA'}`
          }}
        >
          <span className="text-lg font-bold text-gray-800">{progress}%</span>
        </div>
      </div>
    </div>
  );

  const ActivityItem = ({ name, action, details, time, color }) => (
    <div className="py-3 border-l-4 border-blue-500 pl-3 mb-4">
      <div className="flex gap-3">
        <div 
          className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: color }}
        >
          <span className="text-white font-bold text-sm">{name.charAt(0)}</span>
        </div>
        <div className="flex-1">
          <p className="text-sm mb-1">
            <span className="font-bold text-gray-800">{name}</span>
            <span className="text-gray-600"> {action}</span>
          </p>
          <p className="text-xs text-gray-600 leading-relaxed mb-1">{details}</p>
          {time && (
            <p className="text-xs text-gray-400 mt-1">📅 {time} ⏰ 11:00 am</p>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen w-screen bg-gray-50 fixed top-0 left-0 right-0 bottom-0">
      {/* Sidebar */}
      <div className="w-28 flex flex-col items-center py-5" style={{ backgroundColor: '#2D9CDB' }}>
        <div className="text-center mb-6">
          {/* Replace with your logo */}
          <img src={logo} alt="Skill Up Logo" className="w-160 h-106 mx-auto" />
          {/* <span className="text-2xl">📊</span> */}
        </div>
        <div className="flex-1 flex flex-col gap-4">
          {/* Replace emojis with your icon imports */}
          <button className="w-14 h-14 rounded-xl bg-black bg-opacity-15 flex items-center justify-center hover:bg-opacity-25 transition-all">
            <img src={dashboardIcon} alt="Dashboard" className="w-6 h-6" />
            {/* ▦ */}
          </button>
          <button className="w-14 h-14 rounded-xl flex items-center justify-center hover:bg-black hover:bg-opacity-15 transition-all">
            <img src="/path/to/books-icon.png" alt="Books" className="w-7 h-7" />
            {/* 📚 */}
          </button>
          <button className="w-14 h-14 rounded-xl flex items-center justify-center hover:bg-black hover:bg-opacity-15 transition-all">
            <img src="/path/to/bulb-icon.png" alt="Ideas" className="w-7 h-7" />
            {/* 💡 */}
          </button>
          <button className="w-14 h-14 rounded-xl flex items-center justify-center hover:bg-black hover:bg-opacity-15 transition-all">
            <img src="/path/to/chat-icon.png" alt="Chat" className="w-7 h-7" />
            {/* 💬 */}
          </button>
          <button className="w-14 h-14 rounded-xl flex items-center justify-center hover:bg-black hover:bg-opacity-15 transition-all">
            <img src="/path/to/headphone-icon.png" alt="Audio" className="w-7 h-7" />
            {/* 🎧 */}
          </button>
        </div>
        <button className="w-14 h-14 rounded-xl flex items-center justify-center hover:bg-black hover:bg-opacity-15 transition-all mt-4">
          <img src="/path/to/settings-icon.png" alt="Settings" className="w-7 h-7" />
          {/* ⚙️ */}
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Dashboard</h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center bg-white px-3 py-2 rounded-lg border border-gray-200 gap-2">
              <span className="text-base">🔍</span>
              <input 
                type="text"
                placeholder="search"
                className="w-44 text-sm outline-none"
              />
            </div>
            <div className="relative">
              <button className="text-xl">🔔</button>
              <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></div>
            </div>
            <button className="text-xl">⚙️</button>
          </div>
        </div>

        {/* Overview Stats */}
        <div className="mb-6">
          <h2 className="text-xs font-bold text-gray-400 mb-4 tracking-wider">OVERVIEW</h2>
          <div className="flex flex-wrap gap-4">
            <StatCard icon="📖" label="Courses in progress" value="3" color="#3B9FE8" />
            <StatCard icon="📝" label="Active Test Series" value="7" color="#3B9FE8" />
            <StatCard icon="⏱️" label="Hours Learning" value="3h 15m" color="#3B9FE8" />
            <StatCard icon="🏆" label="Total score" value="240" color="#3B9FE8" />
          </div>
        </div>

        {/* Study Statistics and Progress */}
        <div className="flex gap-5 mb-6">
          {/* Study Statistics */}
          <div className="flex-[2] bg-white p-5 rounded-xl border border-gray-100">
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-xs font-bold text-gray-400 tracking-wider">STUDY STATISTICS</h2>
              <div className="flex gap-4">
                <span className="text-xs text-gray-400">week</span>
                <span className="text-xs text-gray-800 font-semibold border-b-2 border-blue-500 pb-1">month</span>
              </div>
            </div>
            <div className="flex items-end justify-between h-36 gap-2">
              {studyData.map((item, index) => (
                <div key={index} className="flex-1 flex flex-col items-center gap-2">
                  <div className="flex-1 flex items-end w-full justify-center">
                    <div 
                      className="w-7 rounded"
                      style={{ 
                        height: `${item.value}px`,
                        backgroundColor: item.day === 'WED' ? '#3B9FE8' : '#93C5FD'
                      }}
                    />
                  </div>
                  <span className="text-xs text-gray-500 font-medium mt-2">{item.day}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Progress */}
          <div className="flex-1 bg-white p-5 rounded-xl border border-gray-100">
            <h2 className="text-xs font-bold text-gray-400 mb-6 tracking-wider">PROGRESS</h2>
            <div className="flex justify-center my-6 relative">
              <div className="relative">
                <svg width="140" height="140" className="transform -rotate-90">
                  <circle
                    cx="70"
                    cy="70"
                    r="60"
                    fill="none"
                    stroke="#E5E7EB"
                    strokeWidth="12"
                  />
                  <circle
                    cx="70"
                    cy="70"
                    r="60"
                    fill="none"
                    stroke="#1E40AF"
                    strokeWidth="12"
                    strokeDasharray="377"
                    strokeDashoffset="207"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="70"
                    cy="70"
                    r="60"
                    fill="none"
                    stroke="#3B9FE8"
                    strokeWidth="12"
                    strokeDasharray="377"
                    strokeDashoffset="75"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <span className="text-3xl font-bold text-gray-800">45%</span>
                  <span className="text-sm text-blue-500 font-semibold">80%</span>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-900 rounded-sm"></div>
                <span className="text-xs text-gray-600">Courses</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-sm"></div>
                <span className="text-xs text-gray-600">Tests Series</span>
              </div>
            </div>
          </div>
        </div>

        {/* My Courses */}
        <div className="mb-6">
          <h2 className="text-xs font-bold text-gray-400 mb-4 tracking-wider">MY COURSES</h2>
          <div className="flex gap-4 overflow-x-auto pb-2">
            <CourseCard 
              title="Introduction to Web" 
              instructor="Aarogya Thapa"
              progress={75}
              color="#E9D5FF"
            />
            <CourseCard 
              title="English for today" 
              instructor="Aarogya Thapa"
              progress={60}
              color="#BFDBFE"
            />
            <CourseCard 
              title="Basic of Java Programming.." 
              instructor="Aarogya Thapa"
              progress={40}
              color="#A5F3FC"
            />
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-80 bg-gray-50 p-5 overflow-y-auto">
        {/* Live Events */}
        <div className="mb-6">
          <h2 className="text-xs font-bold text-gray-400 mb-4 tracking-wider">LIVE EVENTS</h2>
          <div className="bg-white p-4 rounded-xl border border-gray-100 relative">
            <div className="flex gap-3">
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex flex-col items-center justify-center flex-shrink-0">
                <span className="text-base">📊</span>
                <span className="text-white text-[7px] font-bold mt-1">SKILL UP</span>
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-800 leading-relaxed mb-1">
                  The next live class for DSA is going on
                </p>
                <p className="text-xs text-gray-600">👨‍🏫 Bikalpa Dhungana</p>
              </div>
            </div>
            <div className="absolute top-4 right-4 bg-red-500 px-2 py-1 rounded">
              <span className="text-white text-[10px] font-bold">Live</span>
            </div>
          </div>
        </div>

        {/* Activity */}
        <div className="bg-white p-4 rounded-xl border border-gray-100">
          <h2 className="text-xs font-bold text-gray-400 mb-4 tracking-wider">ACTIVITY</h2>
          <ActivityItem 
            name="Ramesh"
            action="has replied on"
            details="Update on the file structure in database
I update all the necessary file and study material for datastructure and algorithms"
            color="#3B9FE8"
          />
          <ActivityItem 
            name="Kumar"
            action="has invited you to"
            details="Join code camp in this data"
            time="25th Sep."
            color="#F59E0B"
          />
          <ActivityItem 
            name="Hari"
            action="has commented on"
            details="On seminar with Kumar
We are going to join this seminar bro don't worry"
            color="#EF4444"
          />
        </div>
      </div>
    </div>
  );
};

export default SkillUpDashboard;