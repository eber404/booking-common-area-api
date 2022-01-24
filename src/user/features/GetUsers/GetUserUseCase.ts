import { NotFound } from '@/common/http/HttpError'
import { User } from '@/user/entities/User'
import { GetUserRepository } from '@/user/repositories/UserRepository'

import { GetUserDTO } from './GetUserDTO'

export class GetUsersUseCase {
  constructor(private readonly getUserRepository: GetUserRepository) {}

  async execute(input: GetUserDTO): Promise<User> {
    const { id } = input

    const user = await this.getUserRepository.get(id)

    if (!user) throw NotFound('Usuário não encontrado.')

    return user
  }
}
