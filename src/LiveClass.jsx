import React, { useState } from 'react'
import Sidebar from './Sidebar'

const LiveClasses = () => {
  const [selectedClass, setSelectedClass] = useState(null)

  const liveClasses = [
    {
      id: 1,
      title: 'Data Structures and Algorithms - Tree Traversal',
      instructor: 'Bikalpa Dhungana',
      instructorAvatar: 12,
      subject: 'DSA',
      viewers: 234,
      startTime: '10:00 AM',
      duration: '2 hours',
      isLive: true,
      thumbnail: 'bg-gradient-to-br from-purple-400 to-pink-400',
      tags: ['Advanced', 'Interactive']
    },
    {
      id: 2,
      title: 'React Hooks Deep Dive - useState and useEffect',
      instructor: 'Aarogya Thapa',
      instructorAvatar: 15,
      subject: 'Web Development',
      viewers: 189,
      startTime: '11:30 AM',
      duration: '1.5 hours',
      isLive: true,
      thumbnail: 'bg-gradient-to-br from-blue-400 to-cyan-400',
      tags: ['Beginner Friendly', 'Practical']
    },
    {
      id: 3,
      title: 'Database Design Fundamentals',
      instructor: 'Shama Tabasir',
      instructorAvatar: 8,
      subject: 'Database',
      viewers: 156,
      startTime: '2:00 PM',
      duration: '1 hour',
      isLive: true,
      thumbnail: 'bg-gradient-to-br from-green-400 to-teal-400',
      tags: ['Essential', 'Theory']
    }
  ]

  const upcomingClasses = [
    {
      id: 4,
      title: 'Python for Data Science',
      instructor: 'Ramesh Kumar',
      instructorAvatar: 20,
      subject: 'Programming',
      scheduledTime: 'Today, 4:00 PM',
      duration: '2 hours',
      enrolled: 145,
      thumbnail: 'bg-gradient-to-br from-yellow-400 to-orange-400'
    },
    {
      id: 5,
      title: 'System Design Interview Preparation',
      instructor: 'Priya Sharma',
      instructorAvatar: 5,
      subject: 'Interview Prep',
      scheduledTime: 'Tomorrow, 10:00 AM',
      duration: '3 hours',
      enrolled: 198,
      thumbnail: 'bg-gradient-to-br from-indigo-400 to-purple-400'
    },
    {
      id: 6,
      title: 'JavaScript ES6+ Features',
      instructor: 'Kumar Singh',
      instructorAvatar: 1,
      subject: 'Web Development',
      scheduledTime: 'Tomorrow, 3:00 PM',
      duration: '1.5 hours',
      enrolled: 167,
      thumbnail: 'bg-gradient-to-br from-red-400 to-pink-400'
    }
  ]

  const recordedSessions = [
    {
      id: 7,
      title: 'Introduction to Machine Learning',
      instructor: 'Aarogya Thapa',
      views: 1234,
      duration: '2h 15m',
      date: 'Jan 15, 2026'
    },
    {
      id: 8,
      title: 'Advanced CSS Techniques',
      instructor: 'Shama Tabasir',
      views: 856,
      duration: '1h 45m',
      date: 'Jan 14, 2026'
    },
    {
      id: 9,
      title: 'Git and GitHub Essentials',
      instructor: 'Bikalpa Dhungana',
      views: 2145,
      duration: '1h 30m',
      date: 'Jan 12, 2026'
    }
  ]

  const LiveClassCard = ({ classItem }) => (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className={`${classItem.thumbnail} h-48 relative`}>
        <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 animate-pulse">
          <span className="w-2 h-2 bg-white rounded-full"></span>
          LIVE
        </div>
        <div className="absolute top-3 right-3 bg-black bg-opacity-60 text-white px-2 py-1 rounded text-xs flex items-center gap-1">
          <span>👁️</span>
          {classItem.viewers}
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition">
            <span className="text-2xl">▶️</span>
          </button>
        </div>
      </div>
      <div className="p-4">
        <div className="flex gap-2 mb-2">
          {classItem.tags.map((tag, i) => (
            <span key={i} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="font-semibold mb-2 text-sm">{classItem.title}</h3>
        <div className="flex items-center gap-2 mb-3">
          <img
            src={`https://i.pravatar.cc/32?img=${classItem.instructorAvatar}`}
            className="w-8 h-8 rounded-full"
            alt={classItem.instructor}
          />
          <div className="flex-1">
            <p className="text-xs font-medium">{classItem.instructor}</p>
            <p className="text-xs text-gray-500">{classItem.subject}</p>
          </div>
        </div>
        <div className="flex justify-between items-center text-xs text-gray-600 mb-3">
          <span className="flex items-center gap-1">
            <span>⏰</span>
            {classItem.startTime}
          </span>
          <span className="flex items-center gap-1">
            <span>⏱️</span>
            {classItem.duration}
          </span>
        </div>
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-medium transition">
          Join Now
        </button>
      </div>
    </div>
  )

  const UpcomingClassCard = ({ classItem }) => (
    <div className="bg-white rounded-xl p-4 border hover:shadow-lg transition-shadow">
      <div className="flex gap-4">
        <div className={`${classItem.thumbnail} w-24 h-24 rounded-lg flex items-center justify-center text-white text-2xl`}>
          📚
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-sm mb-1">{classItem.title}</h4>
          <div className="flex items-center gap-2 mb-2">
            <img
              src={`https://i.pravatar.cc/24?img=${classItem.instructorAvatar}`}
              className="w-6 h-6 rounded-full"
              alt={classItem.instructor}
            />
            <p className="text-xs text-gray-600">{classItem.instructor}</p>
          </div>
          <div className="flex gap-3 text-xs text-gray-600 mb-2">
            <span className="flex items-center gap-1">
              <span>📅</span>
              {classItem.scheduledTime}
            </span>
            <span className="flex items-center gap-1">
              <span>⏱️</span>
              {classItem.duration}
            </span>
          </div>
          <div className="flex gap-2">
            <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 rounded-lg text-xs font-medium transition">
              Set Reminder
            </button>
            <button className="flex-1 border border-gray-300 hover:bg-gray-50 text-gray-700 px-3 py-1.5 rounded-lg text-xs font-medium transition">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <div className="flex-1 px-10 py-6">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-semibold mb-1">Live Classes</h1>
            <p className="text-sm text-gray-500">Join live sessions or watch recorded lectures</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                className="border rounded-lg px-4 py-2 w-64 pr-10"
                placeholder="search classes"
              />
              <span className="absolute right-3 top-2.5 text-gray-400">🔍</span>
            </div>
            <button className="p-2 rounded-lg hover:bg-gray-100">🔔</button>
            <button className="p-2 rounded-lg hover:bg-gray-100">⚙️</button>
          </div>
        </div>

        {/* LIVE NOW */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-semibold">Live Now</h2>
              <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold animate-pulse">
                {liveClasses.length} Active
              </span>
            </div>
            <button className="text-sm text-blue-600 hover:underline">View All</button>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {liveClasses.map(classItem => (
              <LiveClassCard key={classItem.id} classItem={classItem} />
            ))}
          </div>
        </div>

        {/* UPCOMING CLASSES */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Upcoming Classes</h2>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600">Today</button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200">This Week</button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200">All</button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {upcomingClasses.map(classItem => (
              <UpcomingClassCard key={classItem.id} classItem={classItem} />
            ))}
          </div>
        </div>

        {/* MY SCHEDULE */}
        <div className="bg-white rounded-xl p-6 border mb-8">
          <h2 className="text-lg font-semibold mb-4">My Schedule for Today</h2>
          <div className="space-y-3">
            <div className="flex items-center gap-4 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
              <div className="text-center">
                <p className="text-xs text-gray-500">TIME</p>
                <p className="text-sm font-semibold">10:00 AM</p>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-sm">DSA - Tree Traversal</p>
                <p className="text-xs text-gray-600">Bikalpa Dhungana</p>
              </div>
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">Live</span>
            </div>
            <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg border-l-4 border-gray-300">
              <div className="text-center">
                <p className="text-xs text-gray-500">TIME</p>
                <p className="text-sm font-semibold">4:00 PM</p>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-sm">Python for Data Science</p>
                <p className="text-xs text-gray-600">Ramesh Kumar</p>
              </div>
              <span className="bg-gray-300 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">Upcoming</span>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="w-96 px-6 py-6 bg-white border-l">
        {/* CALENDAR */}
        <div className="mb-6">
          <h3 className="font-semibold mb-3">January 2026</h3>
          <div className="grid grid-cols-7 gap-2 text-xs text-center mb-2">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
              <div key={day} className="text-gray-500 font-medium">{day}</div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-2 text-xs text-center">
            {[13, 14, 15, 16, 17, 18, 19].map(date => (
              <div
                key={date}
                className={`py-2 rounded-md cursor-pointer ${
                  date === 18
                    ? 'bg-blue-500 text-white font-semibold'
                    : date === 15 || date === 17
                    ? 'bg-purple-100 text-purple-700'
                    : 'hover:bg-gray-100'
                }`}
              >
                {date}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 mt-3 text-xs">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-purple-100 rounded"></div>
              <span>Has Classes</span>
            </div>
          </div>
        </div>

        {/* RECORDED SESSIONS */}
        <div className="mb-6">
          <h3 className="text-xs text-gray-400 font-semibold mb-3">RECENTLY RECORDED</h3>
          <div className="space-y-3">
            {recordedSessions.map(session => (
              <div key={session.id} className="border rounded-lg p-3 hover:shadow-md transition-shadow cursor-pointer">
                <h4 className="font-semibold text-sm mb-1">{session.title}</h4>
                <p className="text-xs text-gray-600 mb-2">{session.instructor}</p>
                <div className="flex justify-between text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <span>👁️</span>
                    {session.views}
                  </span>
                  <span>{session.duration}</span>
                  <span>{session.date}</span>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-3 text-sm text-blue-600 hover:underline">
            View All Recordings
          </button>
        </div>

        {/* QUICK ACTIONS */}
        <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl p-4">
          <div className="text-3xl mb-2">🎥</div>
          <h4 className="font-semibold text-sm mb-2">Start Your Own Class</h4>
          <p className="text-xs text-gray-700 mb-3">
            Share your knowledge with students. Create and host live classes.
          </p>
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition">
            Create Live Class
          </button>
        </div>

        {/* STATS */}
        <div className="mt-6 grid grid-cols-2 gap-3">
          <div className="bg-green-50 rounded-lg p-3 text-center border border-green-200">
            <p className="text-2xl font-bold text-green-600">12</p>
            <p className="text-xs text-gray-600">Attended</p>
          </div>
          <div className="bg-blue-50 rounded-lg p-3 text-center border border-blue-200">
            <p className="text-2xl font-bold text-blue-600">8</p>
            <p className="text-xs text-gray-600">Upcoming</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LiveClasses