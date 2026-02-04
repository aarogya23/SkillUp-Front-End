import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from './Sidebar'

const TestDashboard = () => {
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [questions, setQuestions] = useState([])
  const navigate = useNavigate()

  // Fetch categories from API on load
  useEffect(() => {
    fetch('http://localhost:8083/mcq/all')
      .then(res => res.json())
      .then(data => {
        const uniqueCategories = [...new Set(data.map(q => q.category))]
        setCategories(uniqueCategories)
      })
      .catch(err => console.error('Error fetching categories:', err))
  }, [])

  // Fetch questions when category is selected
  useEffect(() => {
    if (selectedCategory) {
      fetch(`http://localhost:8083/mcq/category/${selectedCategory}`)
        .then(res => res.json())
        .then(data => setQuestions(data))
        .catch(err => console.error('Error fetching questions:', err))
    }
  }, [selectedCategory])

  // UI COMPONENTS
  const StatCard = ({ icon, value, label, color }) => (
    <div className={`${color} rounded-xl p-6 w-56 border`}>
      <div className="text-3xl mb-3">{icon}</div>
      <p className="text-2xl font-bold mb-1">{value}</p>
      <p className="text-sm text-gray-600">{label}</p>
    </div>
  )

  // CATEGORY CARD
  const CategoryCard = ({ category }) => (
    <div
      onClick={() => setSelectedCategory(category)}
      className="cursor-pointer bg-blue-100 hover:bg-blue-200 p-6 rounded-xl transition"
    >
      <h2 className="text-xl font-semibold">{category}</h2>
      <p className="text-sm text-gray-600">Start Test</p>
    </div>
  )

  // QUESTION CARD
  const QuestionCard = ({ question, index }) => (
    <div key={question.id} className="mb-6 bg-white p-4 rounded-lg border">
      <p className="font-semibold mb-3">
        {index + 1}. {question.question}
      </p>
      <ul className="space-y-2">
        <li>A. {question.optionA}</li>
        <li>B. {question.optionB}</li>
        <li>C. {question.optionC}</li>
        <li>D. {question.optionD}</li>
      </ul>
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
          <h1 className="text-3xl font-semibold">Test Dashboard</h1>
        </div>

        {/* STATS OVERVIEW */}
        <p className="text-xs text-gray-400 font-semibold mb-4">OVERVIEW</p>
        <div className="flex gap-6 mb-8">
          <StatCard icon="📋" value={categories.length} label="Categories" color="bg-blue-50" />
          <StatCard icon="✅" value="3" label="Tests Completed" color="bg-green-50" />
          <StatCard icon="📊" value="85%" label="Average Score" color="bg-purple-50" />
          <StatCard icon="🏆" value="12" label="Rank Position" color="bg-yellow-50" />
        </div>

        {/* CATEGORY LIST */}
        <p className="text-xs text-gray-400 font-semibold mb-4">CATEGORIES</p>
        <div className="grid grid-cols-3 gap-6 mb-8">
          {categories.map(cat => (
            <CategoryCard key={cat} category={cat} />
          ))}
        </div>

        {/* QUESTIONS SECTION */}
        {selectedCategory && (
          <div>
            <h2 className="text-2xl font-bold mb-4">{selectedCategory} Questions</h2>
            {questions.map((q, index) => (
              <QuestionCard key={q.id} question={q} index={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default TestDashboard
