import { users } from '@/user/data/users'

import { User } from '@/user/entities/User'
import { GetUserRepository } from '@/user/repositories/UserRepository'

export class GetUserRepositoryLocal implements GetUserRepository {
  async get(id: string): Promise<User> {
    const user = users.find((user) => user.id === id)

    if (!user) return null

    return user
  }
}
