import React, { useState } from 'react'
import Sidebar from './Sidebar'

const MyCoursesDashboard = () => {
  const [selectedDate, setSelectedDate] = useState(29)

  const enrolledCourses = [
    {
      id: 1,
      title: 'Basic of Data Structure And Algorithms',
      progress: 35,
      icon: '📚',
      color: 'bg-purple-100',
      videos: 2,
      quizzes: 5,
      duration: '3/5'
    },
    {
      id: 2,
      title: 'Introduction the web development',
      progress: 60,
      icon: '📚',
      color: 'bg-blue-100',
      videos: null,
      quizzes: null,
      duration: '0/10'
    },
    {
      id: 3,
      title: 'React Application Development',
      progress: 0,
      icon: '📚',
      color: 'bg-purple-100',
      badge: 'Completed',
      certificate: true
    },
    {
      id: 4,
      title: 'Advance Java with Spring Boot Framework',
      progress: 0,
      icon: '📚',
      color: 'bg-blue-100',
      certificate: true,
      badge: 'Completed'
    }
  ]

  const StatCard = ({ icon, value, label }) => (
    <div className="flex flex-col items-center justify-center bg-white border rounded-xl p-6 w-36">
      <div className="text-3xl mb-2">{icon}</div>
      <p className="text-2xl font-semibold mb-1">{value}</p>
      <p className="text-xs text-gray-500 text-center">{label}</p>
    </div>
  )

  const CourseCard = ({ course }) => (
    <div className={`${course.color} rounded-xl p-4 flex items-center gap-4`}>
      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-2xl">
        {course.icon}
      </div>
      <div className="flex-1">
        <h3 className="text-sm font-semibold mb-1">{course.title}</h3>
        <div className="flex items-center gap-3 text-xs text-gray-600">
          {course.progress > 0 && (
            <>
              <span>Progress</span>
              <div className="flex-1 max-w-[100px] bg-white rounded-full h-1.5">
                <div 
                  className="bg-blue-600 h-1.5 rounded-full" 
                  style={{ width: `${course.progress}%` }}
                />
              </div>
            </>
          )}
          {course.badge && (
            <span className="bg-blue-500 text-white px-2 py-0.5 rounded text-xs">
              {course.badge}
            </span>
          )}
        </div>
      </div>
      <div className="flex items-center gap-3 text-xs">
        {course.videos && (
          <div className="flex items-center gap-1 bg-white px-2 py-1 rounded">
            <span>📹</span>
            <span>{course.videos}/{course.duration}</span>
          </div>
        )}
        {course.quizzes && (
          <div className="flex items-center gap-1 bg-white px-2 py-1 rounded">
            <span>📝</span>
            <span>{course.quizzes}</span>
          </div>
        )}
        {course.duration && !course.videos && (
          <div className="flex items-center gap-1 bg-white px-2 py-1 rounded">
            <span>{course.duration}</span>
          </div>
        )}
        {course.certificate && (
          <button className="flex items-center gap-1 bg-white px-2 py-1 rounded hover:bg-gray-50">
            <span>🏆</span>
            <span>View Certificate</span>
          </button>
        )}
      </div>
      <button className="text-gray-600 hover:text-gray-800">⋮</button>
    </div>
  )

  const calendar = [
    { day: 'Mon', dates: [26, 27, 28, 29, 30] },
    { day: 'Tue', dates: [27] },
    { day: 'Wed', dates: [28] },
    { day: 'Thu', dates: [29] },
    { day: 'Fri', dates: [30, 1] },
    { day: 'Sat', dates: [2] },
    { day: 'Sun', dates: [3] }
  ]

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <div className="flex-1 px-10 py-6">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-semibold">My Courses</h1>
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

       {/* PROGRESS SECTION */}
        <div className="mb-8">
          <p className="text-xs text-gray-400 font-semibold mb-4">Progress</p>
          <div className="bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 rounded-xl p-8 relative overflow-hidden h-48">
            {/* Trees positioned along path */}
            <div className="absolute left-40 bottom-16">
              <div className="w-10 h-14 bg-purple-500 rounded-full"></div>
              <div className="w-3 h-8 bg-purple-700 mx-auto"></div>
            </div>
            <div className="absolute left-64 bottom-16">
              <div className="w-12 h-16 bg-purple-500 rounded-full"></div>
              <div className="w-3 h-10 bg-purple-700 mx-auto"></div>
            </div>
            <div className="absolute left-96 bottom-16">
              <div className="w-10 h-14 bg-purple-500 rounded-full"></div>
              <div className="w-3 h-8 bg-purple-700 mx-auto"></div>
            </div>
            <div className="absolute right-80 bottom-16">
              <div className="w-12 h-16 bg-pink-500 rounded-full"></div>
              <div className="w-3 h-10 bg-pink-700 mx-auto"></div>
            </div>

            {/* Character with backpack */}
            <div className="absolute left-32 bottom-20">
              <div className="relative">
                {/* Head */}
                <div className="w-16 h-16 bg-green-300 rounded-full border-4 border-white relative">
                  <div className="absolute top-3 left-3 w-2 h-2 bg-black rounded-full"></div>
                  <div className="absolute top-3 right-3 w-2 h-2 bg-black rounded-full"></div>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-black rounded-full"></div>
                </div>
                {/* Backpack */}
                <div className="absolute -right-2 top-10 w-6 h-8 bg-orange-400 rounded"></div>
              </div>
            </div>

            {/* Trophy with shine */}
            <div className="absolute right-32 bottom-20">
              <div className="relative">
                <div className="text-6xl">🏆</div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-300 rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Progress Path/Bar */}
            <div className="absolute bottom-10 left-12 right-12">
              <div className="bg-purple-300 bg-opacity-50 h-3 rounded-full relative shadow-inner">
                <div className="absolute left-0 top-0 bottom-0 w-[30%] bg-purple-600 rounded-full shadow-lg">
                  <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-white border-4 border-purple-600 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Labels */}
            <div className="absolute bottom-2 left-12 text-sm font-bold text-purple-700">30%</div>
            <div className="absolute bottom-2 right-12">
              <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">Beginner</span>
            </div>
          </div>
        </div>


        {/* ALL STATUS */}
        <p className="text-xs text-gray-400 font-semibold mb-4">All Status</p>
        <div className="flex gap-6 mb-8">
          <StatCard icon="📚" value="3/7" label="courses" />
          <StatCard icon="📝" value="30/70" label="quizzes" />
          <StatCard icon="🎯" value="2" label="practices completed" />
          <StatCard icon="⏱️" value="2 hours" label="learning" />
        </div>

        {/* ENROLLED COURSES */}
        <div className="flex justify-between items-center mb-4">
          <p className="text-xs text-gray-400 font-semibold">Enrolled Courses</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2">
            <span>📚</span>
            COURSE CATALOG
          </button>
        </div>
        <div className="space-y-4">
          {enrolledCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="w-96 px-6 py-6 bg-white border-l">
        {/* CALENDAR */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <span className="font-semibold">Sept 2023</span>
            <div className="flex gap-2">
              <button className="text-gray-400 hover:text-gray-600">‹</button>
              <button className="text-gray-400 hover:text-gray-600">›</button>
            </div>
          </div>
          <div className="grid grid-cols-7 gap-2 text-xs text-center mb-2">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
              <div key={day} className="text-gray-500 font-medium">{day}</div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-2 text-xs text-center">
            <div className="text-gray-400">26</div>
            <div className="text-gray-400">27</div>
            <div className="text-gray-400">28</div>
            <div className="bg-blue-500 text-white rounded-md py-1 cursor-pointer">29</div>
            <div className="text-gray-800 hover:bg-gray-100 rounded-md py-1 cursor-pointer">30</div>
            <div className="text-gray-400">01</div>
            <div className="text-gray-400">02</div>
          </div>
        </div>

        {/* DUE DONE */}
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-6">
          <div className="flex gap-3">
            <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center text-white">
              ☑️
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-1">
                <span className="text-sm font-semibold">Due Done</span>
                <span className="text-xs text-gray-500">📅 Oct 14, 2022</span>
              </div>
              <p className="text-xs text-gray-600">Assignment 04</p>
              <p className="text-xs text-gray-500 mt-1">Complete the AVL tree structure</p>
            </div>
          </div>
        </div>

        {/* FEATURED */}
        <p className="text-xs text-gray-400 font-semibold mb-4">Featured</p>
        
        <div className="bg-gray-50 border rounded-xl p-4 mb-4">
          <div className="flex gap-3 mb-3">
            <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center text-white">
              📚
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-1">
                <span className="text-xs text-gray-500">5 lessons • 4 quizes</span>
              </div>
              <p className="text-sm font-semibold mb-1">Update on the file structure</p>
              <p className="text-xs text-gray-500">Update all the necessary file and study material for datastructure and algorithms</p>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-3">
            <img
              src="https://i.pravatar.cc/24?img=15"
              className="w-6 h-6 rounded-full"
              alt="Shama Tabasir"
            />
            <span className="text-xs text-gray-600">Shama Tabasir</span>
          </div>
        </div>

        <div className="bg-blue-500 text-white rounded-xl p-4">
          <div className="flex gap-3 mb-3">
            <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center">
              📚
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-1">
                <span className="text-xs">5 lessons • 4 quizes</span>
              </div>
              <p className="text-sm font-semibold mb-1">Practice Together</p>
              <p className="text-xs opacity-90">There will be regular test series in this platform be ready</p>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-3">
            <img
              src="https://i.pravatar.cc/24?img=16"
              className="w-6 h-6 rounded-full"
              alt="Shama Tabasir"
            />
            <span className="text-xs">Shama Tabasir</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyCoursesDashboard