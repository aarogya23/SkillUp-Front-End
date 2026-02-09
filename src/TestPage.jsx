import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Sidebar from './Sidebar'

const TestPage = () => {
  const { category } = useParams()
  const navigate = useNavigate()

  const [questions, setQuestions] = useState([])
  const [filteredQuestions, setFilteredQuestions] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState('')
  const [score, setScore] = useState(0)
  const [search, setSearch] = useState('')
  const [timeLeft, setTimeLeft] = useState(3599) // 59:59 in seconds

  useEffect(() => {
    fetch(`http://localhost:8083/mcq/category/${category}`)
      .then(res => res.json())
      .then(data => {
        setQuestions(data)
        setFilteredQuestions(data)
      })
  }, [category])

  // Timer countdown
  useEffect(() => {
    if (timeLeft <= 0) return
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1)
    }, 1000)
    return () => clearInterval(timer)
  }, [timeLeft])

  // Search filter
  useEffect(() => {
    const filtered = questions.filter(q =>
      q.question.toLowerCase().includes(search.toLowerCase())
    )
    setFilteredQuestions(filtered)
    setCurrentIndex(0)
  }, [search, questions])

  if (filteredQuestions.length === 0) {
    return <div className="p-10">No questions found</div>
  }

  const currentQuestion = filteredQuestions[currentIndex]

  const handleNext = () => {
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(score + 1)
    }

    setSelectedOption('')

    if (currentIndex + 1 < filteredQuestions.length) {
      setCurrentIndex(currentIndex + 1)
    } else {
      alert(`Test Completed! Score: ${score + 1}/${filteredQuestions.length}`)
      navigate('/')
    }
  }

  const handleSubmit = () => {
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(score + 1)
    }
    alert(`Test Completed! Score: ${score + (selectedOption === currentQuestion.correctAnswer ? 1 : 0)}/${filteredQuestions.length}`)
    navigate('/')
  }

  // Group questions by section
  const sections = {}
  questions.forEach(q => {
    const section = q.section || 'General'
    if (!sections[section]) sections[section] = []
    sections[section].push(q)
  })

  // Format timer
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* SIDEBAR */}
      <Sidebar />

      {/* LEFT SIDEBAR - LESSONS/SECTIONS */}
      <div className="w-72 bg-white border-r border-gray-200 ml-20">
        <div className="p-6">
          {/* Back button */}
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6"
          >
            <span>←</span>
            <span className="text-sm">back</span>
          </button>

          {/* Lessons/Sections */}
          <h3 className="text-xs font-semibold text-gray-500 uppercase mb-4">Lessons</h3>
          
          <div className="space-y-2">
            <div className="text-sm text-blue-500 font-medium mb-3">
              📘 Quick 10 Questions
            </div>

            {Object.keys(sections).map((section, index) => (
              <div
                key={index}
                className={`flex items-center gap-2 py-2.5 px-4 rounded-lg cursor-pointer transition
                  ${index === 0 
                    ? 'bg-blue-500 text-white' 
                    : 'text-gray-700 hover:bg-gray-100'
                  }`}
              >
                <span className="text-sm">📄</span>
                <span className="text-sm font-medium">{section}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-1">Mcqs</h1>
            <p className="text-gray-600">{currentQuestion.section || 'Basic DSA Question'}</p>
          </div>

          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="search"
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-64 px-4 py-2 pr-10 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
              <span className="absolute right-3 top-2.5 text-gray-400">🔍</span>
            </div>

            {/* Icons */}
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <span className="text-gray-600">🔔</span>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <span className="text-gray-600">⚙️</span>
            </button>
          </div>
        </div>

        {/* Question Card */}
        <div className="max-w-4xl bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          {/* Timer */}
          <div className="flex justify-end mb-6">
            <span className="bg-blue-500 text-white text-sm font-semibold px-4 py-1.5 rounded-full">
              {formatTime(timeLeft)}
            </span>
          </div>

          {/* Question */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-6">
              {currentIndex + 1}. {currentQuestion.question}
            </h2>

            {/* Options */}
            <div className="space-y-3">
              {['optionA', 'optionB', 'optionC', 'optionD'].map(opt => (
                <button
                  key={opt}
                  onClick={() => setSelectedOption(currentQuestion[opt])}
                  className={`w-full text-left px-5 py-4 rounded-lg border transition
                    ${
                      selectedOption === currentQuestion[opt]
                        ? 'bg-blue-50 border-blue-500 text-gray-800'
                        : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'
                    }`}
                >
                  {currentQuestion[opt]}
                </button>
              ))}
            </div>
          </div>

          {/* Progress and Navigation */}
          <div className="flex items-center justify-between pt-6 border-t border-gray-200">
            <div className="flex items-center gap-3 flex-1">
              <span className="text-sm text-gray-600">
                Question {currentIndex + 1} of {filteredQuestions.length}
              </span>
              <div className="flex-1 bg-gray-200 rounded-full h-2 max-w-md">
                <div 
                  className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentIndex + 1) / filteredQuestions.length) * 100}%` }}
                />
              </div>
            </div>

            {currentIndex + 1 === filteredQuestions.length ? (
              <button
                onClick={handleSubmit}
                disabled={!selectedOption}
                className="bg-blue-500 hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-2.5 rounded-lg font-medium transition"
              >
                Submit
              </button>
            ) : (
              <button
                onClick={handleNext}
                disabled={!selectedOption}
                className="bg-blue-500 hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-2.5 rounded-lg font-medium transition"
              >
                Next
              </button>
            )}
          </div>
        </div>

        {/* All Questions Preview (Optional - shown below) */}
        {filteredQuestions.length > 1 && (
          <div className="max-w-4xl mt-6 bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">All Questions</h3>
            <div className="space-y-6">
              {filteredQuestions.slice(0, 3).map((q, idx) => (
                <div key={idx} className="pb-6 border-b border-gray-100 last:border-b-0">
                  <h4 className="text-base font-semibold text-gray-800 mb-3">
                    {idx + 1}. {q.question}
                  </h4>
                  <div className="space-y-2">
                    {['optionA', 'optionB', 'optionC', 'optionD'].map(opt => (
                      <div
                        key={opt}
                        className="px-5 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700"
                      >
                        {q[opt]}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-sm text-gray-600">
                      Question {idx + 1} of {filteredQuestions.length}
                    </span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2 max-w-xs mx-4">
                      <div 
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: `${((idx + 1) / filteredQuestions.length) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default TestPage