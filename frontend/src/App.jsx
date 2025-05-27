import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import HomePage from './components/HomePage'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App