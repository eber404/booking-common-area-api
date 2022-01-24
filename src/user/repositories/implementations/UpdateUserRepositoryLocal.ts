import { users } from '@/user/data/users'
import { User } from '@/user/entities/User'
import { UpdateUserRepository } from '@/user/repositories/UserRepository'

export class UpdateUserRepositoryLocal implements UpdateUserRepository {
  async update(id: string, user: User): Promise<void> {
    await users.forEach((retriviedUser, index) => {
      if (retriviedUser.id === id) {
        users[index] = {
          ...users[index],
          ...user,
        }
      }
    })
  }
}
