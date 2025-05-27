import { useState, useContext } from 'react'
import { motion } from 'framer-motion'
import { useNavigate, Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'
import InputField from './InputField'
import LoadingSpinner from './LoadingSpinner'
import { authService } from '../services/api'

function RegisterForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: ''
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
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'La confirmación de contraseña es requerida'
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Las contraseñas no coinciden'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    
    setIsLoading(true)
    
    try {
      const { confirmPassword, ...registerData } = formData
      const response = await authService.register(registerData)
      setErrors({
        form: 'Usuario registrado exitosamente. Redirigiendo al inicio de sesión...',
        type: 'success'
      })
      setTimeout(() => {
        navigate('/login')
      }, 2000)
    } catch (error) {
      console.error('Error en el registro:', error)
      setErrors({
        form: error.message || 'Error al registrar. Por favor, intenta de nuevo.',
        type: 'error'
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
        <div className={`mb-4 p-3 border rounded text-sm ${
          errors.type === 'success' 
            ? 'bg-green-500/20 border-green-500 text-green-500'
            : 'bg-red-500/20 border-red-500 text-red-500'
        }`}>
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
          autoComplete="new-password"
        />
        
        <InputField
          type="password"
          name="confirmPassword"
          label="Confirmar Contraseña"
          value={formData.confirmPassword}
          onChange={handleChange}
          error={errors.confirmPassword}
          autoComplete="new-password"
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
              Registrando...
            </span>
          ) : (
            'Registrarse'
          )}
        </motion.button>
      </div>
      
      <div className="mt-6 text-center text-sm text-gray-400">
        ¿Ya tienes una cuenta?{' '}
        <Link 
          to="/login"
          className="secondary-button font-medium"
        >
          Volver al inicio de sesión
        </Link>
      </div>
    </motion.form>
  )
}

export default RegisterForm