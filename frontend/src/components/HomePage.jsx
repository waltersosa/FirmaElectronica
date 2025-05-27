import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from 'react'

function HomePage() {
  const navigate = useNavigate()
  const [successMessage, setSuccessMessage] = useState('')

  const handleLogout = () => {
    // Mostrar mensaje de éxito
    setSuccessMessage('¡Sesión cerrada exitosamente!')
    
    // Limpiar el token si existe
    localStorage.removeItem('token')
    
    // Esperar un momento para mostrar el mensaje antes de navegar
    setTimeout(() => {
      navigate('/login', { replace: true })
    }, 1000)
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center justify-center min-h-screen p-4 text-white"
    >
      <h1 className="text-3xl font-bold mb-4">Bienvenido a Digital Sign</h1>
      <p className="text-gray-400 text-center max-w-md mb-8">
        Tu plataforma de confianza para gestionar y crear firmas electrónicas
      </p>
      
      {successMessage && (
        <div className="mb-4 p-3 bg-green-500/20 border border-green-500 rounded text-green-500 text-sm">
          {successMessage}
        </div>
      )}
      
      <button 
        onClick={handleLogout}
        className="primary-button max-w-xs"
      >
        Cerrar Sesión
      </button>
    </motion.div>
  )
}

export default HomePage 