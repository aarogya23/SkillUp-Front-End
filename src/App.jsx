// ==================== App.jsx ====================
import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import Dashboard from "./Dashboard"
import SkillUpDashboard from "./SkillUpDashboard"
import MyCoursesDashboard from "./MyCoursesDashboard"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/home" element={<SkillUpDashboard/>} /> 
      <Route path="/courses" element={<MyCoursesDashboard/>} />
    </Routes>
  )
}

export default App
