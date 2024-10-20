import DBlocal from 'db-local'
import crypto from 'node:crypto'
import bcrypt from 'bcrypt'
import { SALT_ROUNDS } from './config.js'

const { Schema } = new DBlocal({ path: './db' })

const User = Schema('User', {
  _id: { Type: String, required: true },
  username: { Type: String, required: true },
  password: { Type: String, required: true }
})

export class UserRepository {
  static async create ({ username, password }) {
    Validation.username(username)
    Validation.password(password)

    const user = User.findOne({ username })
    if (user) throw new Error('username already exist')

    const id = crypto.randomUUID()
    const hashPassword = await bcrypt.hashSync(password, SALT_ROUNDS)

    User.create({
      _id: id,
      username,
      password: hashPassword
    }).save()

    return id
  }

  static async login ({ username, password }) {
    Validation.username(username)
    Validation.password(password)

    const user = User.findOne({ username })
    if (!user) throw new Error('This user does not exists')

    const isValid = await bcrypt.compareSync(password, user.password)
    if (!isValid) throw new Error('Password is invalid')

    return user
  }
}

class Validation {
  static username (username) {
    if (typeof username !== 'string') throw new Error('username must be a string')

    if (username.length < 3) throw new Error('username must at least 3 characters long')
  }

  static password (password) {
    if (typeof password !== 'string') throw new Error('password must be a string')

    if (password.length < 6) throw new Error('password must at least 6 characters long')
  }
}
