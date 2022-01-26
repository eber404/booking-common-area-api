import { users } from '@/user/data/users'
import { UserDTO } from '@/user/dtos/UserDTO'

import { GetUserRepository } from '@/user/repositories/UserRepository'

export class GetUserRepositoryLocal implements GetUserRepository {
  async get(id: string): Promise<UserDTO> {
    const user = users.find((user) => user.id === id)

    if (!user) return null

    return Promise.resolve(user)
  }
}
