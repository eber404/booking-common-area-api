import { User } from '@/user/entities/User'
import { users } from '@/user/data/users'
import { ListUserRepository } from '@/user/repositories/UserRepository'

export class ListUsersRepositoryLocal implements ListUserRepository {
  async list(): Promise<User[]> {
    return users
  }
}
