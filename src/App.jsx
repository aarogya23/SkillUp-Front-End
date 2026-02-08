// ==================== App.jsx ====================
import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import Dashboard from "./Dashboard"
import SkillUpDashboard from "./SkillUpDashboard"
import MyCoursesDashboard from "./MyCoursesDashboard"
import TestDashboard from "./TestDashboard"
import Message from "./Message"
import LiveClasses from "./LiveClass"
import CourseDetails from "./CourseDetails"
import TestPage from "./Testpage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/home" element={<SkillUpDashboard/>} /> 
      <Route path="/courses" element={<MyCoursesDashboard/>} />
      <Route path="/ideas" element={<TestDashboard/>} />
      <Route path="/chat" element={<Message/>} />
      <Route path="/live" element={<LiveClasses/>} />
       <Route path="/test/:category" element={<TestPage />} />
      <Route path="/courses/:id" element={<CourseDetails />} />
    </Routes>
  )
}

export default App
