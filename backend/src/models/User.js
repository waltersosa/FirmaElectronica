const pool = require('../config/database')
const bcrypt = require('bcryptjs')

class User {
  static async create({ username, password }) {
    const hashedPassword = await bcrypt.hash(password, 10)
    const query = `
      INSERT INTO users (username, password)
      VALUES ($1, $2)
      RETURNING id, username
    `
    const values = [username, hashedPassword]
    const { rows } = await pool.query(query, values)
    return rows[0]
  }

  static async findByUsername(username) {
    const query = 'SELECT * FROM users WHERE username = $1'
    const { rows } = await pool.query(query, [username])
    return rows[0]
  }

  static async findById(id) {
    const query = 'SELECT id, username FROM users WHERE id = $1'
    const { rows } = await pool.query(query, [id])
    return rows[0]
  }

  static async verifyPassword(plainPassword, hashedPassword) {
    return await bcrypt.compare(plainPassword, hashedPassword)
  }
}

module.exports = User 