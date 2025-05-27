const jwt = require('jsonwebtoken')

const JWT_SECRET = process.env.JWT_SECRET
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET
const ACCESS_TOKEN_EXPIRY = '15m'
const REFRESH_TOKEN_EXPIRY = '7d'

const generateTokens = (userId) => {
  const accessToken = jwt.sign(
    { userId },
    JWT_SECRET,
    { expiresIn: ACCESS_TOKEN_EXPIRY }
  )

  const refreshToken = jwt.sign(
    { userId },
    JWT_REFRESH_SECRET,
    { expiresIn: REFRESH_TOKEN_EXPIRY }
  )

  return { accessToken, refreshToken }
}

const verifyAccessToken = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET)
  } catch (error) {
    throw new Error('Token inválido o expirado')
  }
}

const verifyRefreshToken = (token) => {
  try {
    return jwt.verify(token, JWT_REFRESH_SECRET)
  } catch (error) {
    throw new Error('Refresh token inválido o expirado')
  }
}

module.exports = {
  generateTokens,
  verifyAccessToken,
  verifyRefreshToken
} 