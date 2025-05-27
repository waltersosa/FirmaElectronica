const jwt = require('jsonwebtoken')
const User = require('../models/User')

const authController = {
  register: async (req, res) => {
    try {
      const { username, password, fullName } = req.body

      // Verificar si el usuario ya existe
      const existingUser = await User.findByUsername(username)
      if (existingUser) {
        return res.status(400).json({ message: 'El nombre de usuario ya está en uso' })
      }

      // Crear nuevo usuario
      const user = await User.create({ username, password, fullName })

      // Generar token
      const token = jwt.sign(
        { userId: user.id },
        process.env.JWT_SECRET,
        { expiresIn: '24h' }
      )

      res.status(201).json({
        message: 'Usuario registrado exitosamente',
        user: {
          id: user.id,
          username: user.username,
          fullName: user.full_name
        },
        token
      })
    } catch (error) {
      console.error('Error en registro:', error)
      res.status(500).json({ message: 'Error al registrar usuario' })
    }
  },

  login: async (req, res) => {
    try {
      const { username, password } = req.body

      // Buscar usuario
      const user = await User.findByUsername(username)
      if (!user) {
        return res.status(401).json({ message: 'Credenciales inválidas' })
      }

      // Verificar contraseña
      const isValidPassword = await User.verifyPassword(password, user.password)
      if (!isValidPassword) {
        return res.status(401).json({ message: 'Credenciales inválidas' })
      }

      // Generar token
      const token = jwt.sign(
        { userId: user.id },
        process.env.JWT_SECRET,
        { expiresIn: '24h' }
      )

      res.json({
        message: 'Inicio de sesión exitoso',
        user: {
          id: user.id,
          username: user.username,
          fullName: user.full_name
        },
        token
      })
    } catch (error) {
      console.error('Error en login:', error)
      res.status(500).json({ message: 'Error al iniciar sesión' })
    }
  },

  getProfile: async (req, res) => {
    try {
      const user = await User.findById(req.user.userId)
      if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado' })
      }

      res.json({
        user: {
          id: user.id,
          username: user.username,
          fullName: user.full_name
        }
      })
    } catch (error) {
      console.error('Error al obtener perfil:', error)
      res.status(500).json({ message: 'Error al obtener perfil' })
    }
  },

  logout: (req, res) => {
    // Para JWT, el "logout" es principalmente del lado del cliente
    // Aquí simplemente confirmamos la acción.
    res.json({ message: 'Sesión cerrada exitosamente' });
  }
}

module.exports = authController 