import { users } from '@/user/data/users'
import { UserDTO } from '@/user/dtos/UserDTO'
import { ListUsersRepository } from '@/user/repositories/UserRepository'

export class ListUsersRepositoryLocal implements ListUsersRepository {
  async list(): Promise<UserDTO[]> {
    return users
  }
}
