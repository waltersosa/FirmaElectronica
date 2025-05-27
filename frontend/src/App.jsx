import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useState } from 'react'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import HomePage from './components/HomePage'
import AuthContext from './context/AuthContext'

function App() {
  const [user, setUser] = useState(null)
  
  const login = (userData) => {
    console.log('Inicio de sesión exitoso:', userData)
    setUser(userData)
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <Router>
        <div className="min-h-screen bg-background">
          <Routes>
            <Route 
              path="/login" 
              element={user ? <Navigate to="/home" /> : <LoginPage />} 
            />
            <Route 
              path="/register" 
              element={user ? <Navigate to="/home" /> : <RegisterPage />} 
            />
            <Route 
              path="/home" 
              element={user ? <HomePage /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/" 
              element={<Navigate to={user ? "/home" : "/login"} />} 
            />
          </Routes>
        </div>
      </Router>
    </AuthContext.Provider>
  )
}

export default App