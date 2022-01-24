import { ListUserRepository } from '@/user/repositories/UserRepository'

import { ListUsersDTO } from './ListUsersDTO'

export class ListUsersUseCase {
  constructor(private readonly listUsersRepository: ListUserRepository) {}

  async execute(): Promise<ListUsersDTO> {
    const users = await this.listUsersRepository.list()

    const output = {
      data: users,
    }

    return output
  }
}
