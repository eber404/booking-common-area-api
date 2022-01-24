import { User } from '@/user/entities/User'
import { CreateUserRepository } from '@/user/repositories/UserRepository'

import { users } from '@/user/data/users'

export class CreateUserRepositoryLocal implements CreateUserRepository {
  async create(user: User) {
    users.push(user)
  }
}
