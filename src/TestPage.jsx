import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Sidebar from './Sidebar'
import { motion, AnimatePresence } from 'framer-motion'

const TestPage = () => {
  const { category } = useParams()
  const [questions, setQuestions] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedOption, setSelectedOption] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`http://localhost:8083/mcq/category/${category}`)
      .then(res => res.json())
      .then(data => setQuestions(data))
      .catch(err => console.error(err))
  }, [category])

  if (questions.length === 0) {
    return <div className="p-10">Loading questions...</div>
  }

  const currentQuestion = questions[currentIndex]

  const handleNext = () => {
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(prev => prev + 1)
    }

    setSelectedOption('')

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(prev => prev + 1)
    } else {
      // Test finished, navigate back or show summary
      alert(`Test completed!\nYour score: ${selectedOption === currentQuestion.correctAnswer ? score + 1 : score} / ${questions.length}`)
      navigate('/')
    }
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <div className="flex-1 flex justify-center items-center p-10">
        <div className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">{category} Test</h2>
          <p className="text-sm text-gray-500 mb-6">
            Question {currentIndex + 1} of {questions.length}
          </p>

          {/* Animate question */}
          <AnimatePresence exitBeforeEnter>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-lg font-medium mb-4">{currentQuestion.question}</h3>
              <div className="grid grid-cols-2 gap-4">
                {['optionA', 'optionB', 'optionC', 'optionD'].map(opt => (
                  <motion.button
                    key={opt}
                    onClick={() => setSelectedOption(currentQuestion[opt])}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`border rounded-lg p-4 text-left transition-colors 
                      ${selectedOption === currentQuestion[opt] ? 'bg-blue-100 border-blue-500' : 'hover:bg-blue-50'}`}
                  >
                    {currentQuestion[opt]}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={handleNext}
            disabled={!selectedOption}
            className={`w-full text-white px-6 py-3 rounded-lg font-medium mt-6 transition-colors
              ${selectedOption ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-300 cursor-not-allowed'}`}
          >
            {currentIndex + 1 === questions.length ? 'Finish Test' : 'Next Question'}
          </button>

          <p className="text-sm text-gray-500 mt-4">
            Current Score: {score} / {questions.length}
          </p>
        </div>
      </div>
    </div>
  )
}

export default TestPage
