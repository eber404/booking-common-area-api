import { users } from '@/user/data/users'
import { UserDTO } from '@/user/dtos/UserDTO'
import { UpdateUserRepository } from '@/user/repositories/UserRepository'

export class UpdateUserRepositoryLocal implements UpdateUserRepository {
  async update(user: UserDTO): Promise<void> {
    await users.forEach((retriviedUser, index) => {
      if (retriviedUser.id === user.id) {
        users[index] = {
          ...users[index],
          ...user,
        }
      }
    })
  }
}
