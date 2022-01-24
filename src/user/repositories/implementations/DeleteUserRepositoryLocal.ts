import { users } from '@/user/data/users'
import { DeleteUserRepository } from '@/user/repositories/UserRepository'

export class DeleteUserRepositoryLocal implements DeleteUserRepository {
  async delete(id: string): Promise<void> {
    await users.forEach((user, index) => {
      if (user.id === id) {
        users.splice(index, 1)
      }
    })
  }
}
