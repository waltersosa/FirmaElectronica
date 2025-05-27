import { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate, Link } from 'react-router-dom'
import InputField from './InputField'
import { authService } from '../services/api'
import LoadingSpinner from './LoadingSpinner'

function LoginForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  
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
    setSuccessMessage('')
    setErrors({})
    
    try {
      const response = await authService.login(formData)
      console.log('Inicio de sesión exitoso:', response)
      
      // Guardar el token en localStorage
      if (response.token) {
        localStorage.setItem('token', response.token)
      }
      
      setSuccessMessage('¡Inicio de sesión exitoso!')
      
      // Navegar inmediatamente a home
      navigate('/home', { replace: true })
      
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
      {successMessage && (
        <div className="mb-4 p-3 bg-green-500/20 border border-green-500 rounded text-green-500 text-sm">
          {successMessage}
        </div>
      )}
      
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
              <LoadingSpinner className="mr-2" />
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