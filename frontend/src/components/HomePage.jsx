import { useContext } from 'react'
import { motion } from 'framer-motion'
import AuthContext from '../context/AuthContext'

function HomePage() {
  const { user, logout } = useContext(AuthContext)

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
      <button 
        onClick={logout}
        className="primary-button max-w-xs"
      >
        Cerrar Sesión
      </button>
    </motion.div>
  )
}

export default HomePage 