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
    // No añadir token a las rutas de autenticación
    if (!config.url.includes('/auth/login') && !config.url.includes('/auth/register')) {
      const token = localStorage.getItem('token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
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
      return response.data
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Error al registrar usuario'
      throw { message: errorMessage }
    }
  },

  // Inicio de sesión
  login: async (credentials) => {
    try {
      const response = await api.post('/auth/login', credentials)
      return response.data
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Error al iniciar sesión'
      throw { message: errorMessage }
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
      const errorMessage = error.response?.data?.message || 'Error al obtener perfil'
      throw { message: errorMessage }
    }
  },

  // Verificar si el usuario está autenticado
  isAuthenticated: () => {
    return !!localStorage.getItem('token')
  }
}

export default api 