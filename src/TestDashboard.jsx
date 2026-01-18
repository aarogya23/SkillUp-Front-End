import React, { useState } from 'react'
import Sidebar from './Sidebar'

const TestDashboard = () => {
  const testSeries = [
    {
      id: 1,
      title: 'Data Structures Fundamentals',
      category: 'DSA',
      questions: 50,
      duration: '60 min',
      difficulty: 'Medium',
      attempted: true,
      score: 42,
      totalScore: 50,
      color: 'bg-purple-100',
      icon: '📊'
    },
    {
      id: 2,
      title: 'JavaScript Advanced Concepts',
      category: 'Web Development',
      questions: 40,
      duration: '45 min',
      difficulty: 'Hard',
      attempted: true,
      score: 35,
      totalScore: 40,
      color: 'bg-yellow-100',
      icon: '💻'
    },
    {
      id: 3,
      title: 'React Hooks & State Management',
      category: 'Frontend',
      questions: 30,
      duration: '30 min',
      difficulty: 'Medium',
      attempted: false,
      color: 'bg-blue-100',
      icon: '⚛️'
    },
    {
      id: 4,
      title: 'SQL Database Queries',
      category: 'Database',
      questions: 35,
      duration: '40 min',
      difficulty: 'Easy',
      attempted: false,
      color: 'bg-green-100',
      icon: '🗄️'
    },
    {
      id: 5,
      title: 'Python Programming Basics',
      category: 'Programming',
      questions: 45,
      duration: '50 min',
      difficulty: 'Easy',
      attempted: true,
      score: 40,
      totalScore: 45,
      color: 'bg-indigo-100',
      icon: '🐍'
    }
  ]

  const upcomingTests = [
    {
      id: 1,
      title: 'Java Spring Boot Assessment',
      date: 'Jan 20, 2026',
      time: '10:00 AM',
      duration: '90 min'
    },
    {
      id: 2,
      title: 'System Design Mock Interview',
      date: 'Jan 22, 2026',
      time: '2:00 PM',
      duration: '120 min'
    }
  ]

  const StatCard = ({ icon, value, label, color }) => (
    <div className={`${color} rounded-xl p-6 w-56 border`}>
      <div className="text-3xl mb-3">{icon}</div>
      <p className="text-2xl font-bold mb-1">{value}</p>
      <p className="text-sm text-gray-600">{label}</p>
    </div>
  )

  const TestCard = ({ test }) => {
    const difficultyColor = {
      'Easy': 'bg-green-100 text-green-700',
      'Medium': 'bg-yellow-100 text-yellow-700',
      'Hard': 'bg-red-100 text-red-700'
    }

    return (
      <div className={`${test.color} rounded-xl p-5 hover:shadow-lg transition-shadow`}>
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="text-4xl">{test.icon}</div>
            <div>
              <h3 className="text-lg font-semibold mb-1">{test.title}</h3>
              <p className="text-xs text-gray-600">{test.category}</p>
            </div>
          </div>
          <button className="text-gray-600 hover:text-gray-800">⋮</button>
        </div>

        <div className="flex items-center gap-4 text-sm text-gray-700 mb-3">
          <span className="flex items-center gap-1">
            <span>📝</span>
            {test.questions} Questions
          </span>
          <span className="flex items-center gap-1">
            <span>⏱️</span>
            {test.duration}
          </span>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${difficultyColor[test.difficulty]}`}>
            {test.difficulty}
          </span>
        </div>

        {test.attempted ? (
          <div className="mt-4 pt-4 border-t border-gray-300">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">Your Score</span>
              <span className="text-lg font-bold text-blue-600">{test.score}/{test.totalScore}</span>
            </div>
            <div className="flex gap-3">
              <button className="flex-1 bg-white hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition">
                View Results
              </button>
              <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition">
                Retake Test
              </button>
            </div>
          </div>
        ) : (
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-lg font-medium mt-4 transition">
            Start Test
          </button>
        )}
      </div>
    )
  }

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
                placeholder="search"
              />
              <span className="absolute right-3 top-2.5 text-gray-400">🔍</span>
            </div>
            <button className="p-2 rounded-lg hover:bg-gray-100">🔔</button>
            <button className="p-2 rounded-lg hover:bg-gray-100">⚙️</button>
          </div>
        </div>

        {/* STATS OVERVIEW */}
        <p className="text-xs text-gray-400 font-semibold mb-4">OVERVIEW</p>
        <div className="flex gap-6 mb-8">
          <StatCard icon="📋" value="7" label="Active Test Series" color="bg-blue-50" />
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

        {/* AVAILABLE TESTS */}
        <div className="flex justify-between items-center mb-4">
          <p className="text-xs text-gray-400 font-semibold">AVAILABLE TESTS</p>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600">All</button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200">Attempted</button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200">Pending</button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {testSeries.map(test => (
            <TestCard key={test.id} test={test} />
          ))}
        </div>
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
                <p className="flex items-center gap-2">
                  <span>📅</span>
                  {test.date}
                </p>
                <p className="flex items-center gap-2">
                  <span>⏰</span>
                  {test.time}
                </p>
                <p className="flex items-center gap-2">
                  <span>⏱️</span>
                  {test.duration}
                </p>
              </div>
              <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium mt-3 hover:bg-blue-600">
                Set Reminder
              </button>
            </div>
          ))}
        </div>

        {/* LEADERBOARD PREVIEW */}
        <p className="text-xs text-gray-400 font-semibold mb-4">TOP PERFORMERS</p>
        <div className="space-y-3">
          {[
            { name: 'Ramesh Kumar', score: 95, rank: 1, avatar: 1 },
            { name: 'Priya Sharma', score: 92, rank: 2, avatar: 5 },
            { name: 'Amit Patel', score: 90, rank: 3, avatar: 8 }
          ].map(user => (
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