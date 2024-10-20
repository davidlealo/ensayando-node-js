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

export class userRepository {
  static create ({ username, password }) {
    if (typeof username !== 'string') throw new Error('username must be a string')

    if (username < 3) throw new Error('username must at least 3 characters long')

    if (typeof password !== 'string') throw new Error('password must be a string')

    if (password < 6) throw new Error('password must at least 6 characters long')

    const user = User.findOne({ username })
    if (user) throw new Error('username already exist')

    const id = crypto.randomUUID()
    const hashPassword = bcrypt.hashSync(password, SALT_ROUNDS)

    User.create({
      _id: id,
      username,
      password: hashPassword
    }).save()

    return id
  }

  static login ({ username, password }) {}
}
