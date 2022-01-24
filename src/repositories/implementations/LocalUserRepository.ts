import { User } from '@/entities/User'
import { BadRequest } from '@/http/HttpError'
import { CreateUserRepository } from '@/repositories/UserRepository'

export class LocalUserRepository implements CreateUserRepository {
  public readonly users = []

  async create(user: User) {
    console.log({ user })

    throw BadRequest()

    this.users.push(user)
  }

  async list() {
    return this.users
  }

  async get(id: string) {
    this.users.find((user) => user.id === id)
  }
}
