import { useState, useContext } from 'react'
import { motion } from 'framer-motion'
import { useNavigate, Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'
import InputField from './InputField'
import { authService } from '../services/api'

function LoginForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  
  const { login } = useContext(AuthContext)
  const navigate = useNavigate()
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      })
    }
  }
  
  const validate = () => {
    const newErrors = {}
    
    if (!formData.username.trim()) {
      newErrors.username = 'El nombre de usuario es requerido'
    }
    
    if (!formData.password) {
      newErrors.password = 'La contraseña es requerida'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    
    setIsLoading(true)
    
    try {
      const response = await authService.login(formData)
      login(response.user)
      navigate('/home')
    } catch (error) {
      console.error('Error de inicio de sesión:', error)
      setErrors({
        form: error.message || 'Error al iniciar sesión. Por favor, intenta de nuevo.'
      })
    } finally {
      setIsLoading(false)
    }
  }
  
  return (
    <motion.form 
      onSubmit={handleSubmit}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      {errors.form && (
        <div className="mb-4 p-3 bg-red-500/20 border border-red-500 rounded text-red-500 text-sm">
          {errors.form}
        </div>
      )}
      
      <div className="space-y-5">
        <InputField
          type="text"
          name="username"
          label="Nombre de Usuario"
          value={formData.username}
          onChange={handleChange}
          error={errors.username}
          autoComplete="username"
        />
        
        <InputField
          type="password"
          name="password"
          label="Contraseña"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
          autoComplete="current-password"
        />
        
        <motion.button
          type="submit"
          className="primary-button"
          disabled={isLoading}
          whileTap={{ scale: 0.97 }}
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
                <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Iniciando sesión...
            </span>
          ) : (
            'Iniciar Sesión'
          )}
        </motion.button>
      </div>
      
      <div className="mt-6 text-center text-sm text-gray-400">
        ¿No tienes una cuenta?{' '}
        <Link 
          to="/register"
          className="secondary-button font-medium"
        >
          Regístrate ahora
        </Link>
      </div>
    </motion.form>
  )
}

export default LoginForm