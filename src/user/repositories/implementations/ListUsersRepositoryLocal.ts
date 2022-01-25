import { User } from '@/user/entities/User'
import { users } from '@/user/data/users'
import { ListUsersRepository } from '@/user/repositories/UserRepository'

export class ListUsersRepositoryLocal implements ListUsersRepository {
  async list(): Promise<User[]> {
    return users
  }
}
