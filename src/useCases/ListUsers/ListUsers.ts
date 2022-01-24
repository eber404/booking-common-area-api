import { UserRepository } from '@/repositories/UserRepository'
import { ListUsersOutput } from './ListUsersOutput'

export class ListUsers {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(): Promise<ListUsersOutput> {
    const users = await this.userRepository.list()

    const output = {
      data: users,
    }

    return output
  }
}
