import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { useNavigate } from 'react-router-dom'

const TestDashboard = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  // Fetch all questions and extract unique categories
  useEffect(() => {
    fetch('http://localhost:8083/mcq/all')
      .then(res => res.json())
      .then(data => {
        const uniqueCategories = [...new Set(data.map(q => q.category))]
        setCategories(uniqueCategories)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
      })
  }, [])

  const StatCard = ({ icon, value, label, color }) => (
    <div className={`${color} rounded-xl p-6 w-56 border`}>
      <div className="text-3xl mb-3">{icon}</div>
      <p className="text-2xl font-bold mb-1">{value}</p>
      <p className="text-sm text-gray-600">{label}</p>
    </div>
  )

  const topPerformers = [
    { name: 'Ramesh Kumar', score: 95, rank: 1, avatar: 1 },
    { name: 'Priya Sharma', score: 92, rank: 2, avatar: 5 },
    { name: 'Amit Patel', score: 90, rank: 3, avatar: 8 },
  ]

  const upcomingTests = [
    { id: 1, title: 'Java Spring Boot Assessment', date: 'Jan 20, 2026', time: '10:00 AM', duration: '90 min' },
    { id: 2, title: 'System Design Mock Interview', date: 'Jan 22, 2026', time: '2:00 PM', duration: '120 min' },
  ]

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <div className="flex-1 px-10 py-6">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-semibold">Test Series</h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                className="border rounded-lg px-4 py-2 w-64 pr-10"
                placeholder="Search tests..."
              />
              <span className="absolute right-3 top-2.5 text-gray-400">🔍</span>
            </div>
            <button className="p-2 rounded-lg hover:bg-gray-100">🔔</button>
            <button className="p-2 rounded-lg hover:bg-gray-100">⚙️</button>
          </div>
        </div>

        {/* STATS OVERVIEW */}
        <p className="text-xs text-gray-400 font-semibold mb-4">OVERVIEW</p>
        <div className="flex gap-6 mb-8 flex-wrap">
          <StatCard icon="📋" value={categories.length} label="Total Categories" color="bg-blue-50" />
          <StatCard icon="✅" value="3" label="Tests Completed" color="bg-green-50" />
          <StatCard icon="📊" value="85%" label="Average Score" color="bg-purple-50" />
          <StatCard icon="🏆" value="12" label="Rank Position" color="bg-yellow-50" />
        </div>

        {/* PERFORMANCE CHART */}
        <div className="bg-white border rounded-xl p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <p className="text-xs text-gray-400 font-semibold">PERFORMANCE TREND</p>
            <div className="text-xs text-gray-400">Last 5 Tests</div>
          </div>
          <div className="flex items-end gap-8 h-48">
            {[75, 82, 78, 88, 85].map((score, i) => (
              <div key={i} className="flex-1 text-center">
                <div className="relative h-full flex flex-col justify-end">
                  <div className="text-sm font-semibold mb-2 text-blue-600">{score}%</div>
                  <div
                    className="bg-gradient-to-t from-blue-500 to-blue-300 rounded-t-lg mx-auto w-full"
                    style={{ height: `${score}%` }}
                  />
                </div>
                <p className="text-xs mt-3 text-gray-500">Test {i + 1}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CATEGORIES */}
        <p className="text-xs text-gray-400 font-semibold mb-4">CATEGORIES</p>
        {loading ? (
          <p>Loading categories...</p>
        ) : (
          <div className="grid grid-cols-3 gap-6 mb-8">
            {categories.map((category, i) => (
              <div
                key={i}
                onClick={() => navigate(`/test/${category}`)}
                className="cursor-pointer bg-blue-100 hover:bg-blue-200 p-6 rounded-xl transition text-center"
              >
                <h2 className="text-xl font-semibold">{category}</h2>
                <p className="text-sm text-gray-600 mt-1">Start Test</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* RIGHT PANEL */}
      <div className="w-96 px-6 py-6 bg-white border-l">
        {/* UPCOMING TESTS */}
        <p className="text-xs text-gray-400 font-semibold mb-4">UPCOMING TESTS</p>
        <div className="space-y-4 mb-8">
          {upcomingTests.map(test => (
            <div key={test.id} className="bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-4">
              <h4 className="font-semibold text-sm mb-2">{test.title}</h4>
              <div className="space-y-1 text-xs text-gray-600">
                <p className="flex items-center gap-2">📅 {test.date}</p>
                <p className="flex items-center gap-2">⏰ {test.time}</p>
                <p className="flex items-center gap-2">⏱️ {test.duration}</p>
              </div>
              <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium mt-3 hover:bg-blue-600">
                Set Reminder
              </button>
            </div>
          ))}
        </div>

        {/* TOP PERFORMERS */}
        <p className="text-xs text-gray-400 font-semibold mb-4">TOP PERFORMERS</p>
        <div className="space-y-3">
          {topPerformers.map(user => (
            <div key={user.rank} className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                {user.rank}
              </div>
              <img
                src={`https://i.pravatar.cc/40?img=${user.avatar}`}
                className="w-10 h-10 rounded-full"
                alt={user.name}
              />
              <div className="flex-1">
                <p className="text-sm font-semibold">{user.name}</p>
                <p className="text-xs text-gray-500">{user.score}% avg</p>
              </div>
              <span className="text-yellow-500 text-lg">
                {user.rank === 1 ? '🥇' : user.rank === 2 ? '🥈' : '🥉'}
              </span>
            </div>
          ))}
        </div>

        {/* STUDY TIPS */}
        <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl p-4 mt-6">
          <div className="text-3xl mb-2">💡</div>
          <h4 className="font-semibold text-sm mb-2">Test Taking Tip</h4>
          <p className="text-xs text-gray-700">
            Review your incorrect answers after each test. Understanding your mistakes is key to improvement!
          </p>
        </div>
      </div>
    </div>
  )
}

export default TestDashboard
