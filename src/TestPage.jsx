import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const TestPage = () => {
  const { category } = useParams()
  const [questions, setQuestions] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedOption, setSelectedOption] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`http://localhost:8080/mcq/category/${category}`)
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
      setScore(score + 1)
    }
    setSelectedOption('')

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1)
    } else {
      // Test finished
      alert(`Test completed! Your score: ${score + (selectedOption === currentQuestion.correctAnswer ? 1 : 0)} / ${questions.length}`)
      navigate('/')
    }
  }

  return (
    <div className="flex min-h-screen bg-gray-50 p-10">
      <div className="flex-1 bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">{category} Test</h2>
        <p className="text-sm text-gray-500 mb-6">
          Question {currentIndex + 1} of {questions.length}
        </p>

        <div className="mb-6">
          <h3 className="text-lg font-medium mb-4">{currentQuestion.question}</h3>
          <div className="grid grid-cols-2 gap-4">
            {['optionA', 'optionB', 'optionC', 'optionD'].map(opt => (
              <button
                key={opt}
                onClick={() => setSelectedOption(currentQuestion[opt])}
                className={`border rounded-lg p-4 text-left hover:bg-blue-50 transition ${
                  selectedOption === currentQuestion[opt] ? 'bg-blue-100 border-blue-500' : ''
                }`}
              >
                {currentQuestion[opt]}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleNext}
          disabled={!selectedOption}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium mt-4"
        >
          {currentIndex + 1 === questions.length ? 'Finish Test' : 'Next Question'}
        </button>
      </div>
    </div>
  )
}

export default TestPage
