import axios from 'axios'

// Crear una instancia de axios con la configuración base
const api = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json'
  }
})

// Interceptor para agregar el token a las peticiones
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Servicios de autenticación
export const authService = {
  // Registro de usuario
  register: async (userData) => {
    try {
      const response = await api.post('/auth/register', userData)
      if (response.data.token) {
        localStorage.setItem('token', response.data.token)
      }
      return response.data
    } catch (error) {
      throw error.response?.data || { message: 'Error al registrar usuario' }
    }
  },

  // Inicio de sesión
  login: async (credentials) => {
    try {
      const response = await api.post('/auth/login', credentials)
      if (response.data.token) {
        localStorage.setItem('token', response.data.token)
      }
      return response.data
    } catch (error) {
      throw error.response?.data || { message: 'Error al iniciar sesión' }
    }
  },

  // Cerrar sesión
  logout: () => {
    localStorage.removeItem('token')
  },

  // Obtener perfil del usuario
  getProfile: async () => {
    try {
      const response = await api.get('/auth/profile')
      return response.data
    } catch (error) {
      throw error.response?.data || { message: 'Error al obtener perfil' }
    }
  },

  // Verificar si el usuario está autenticado
  isAuthenticated: () => {
    return !!localStorage.getItem('token')
  }
}

export default api 