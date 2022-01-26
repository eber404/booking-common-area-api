import { NotFound } from '@/common/http/HttpError'
import { User } from '@/user/entities/User'
import { GetUserRepository } from '@/user/repositories/UserRepository'
import { GetUserRequestDTO } from '@/user/dtos/GetUserRequestDTO'
import { UserRole } from '@/user/entities/UserRole'

export class GetUsersUseCase {
  constructor(private readonly getUserRepository: GetUserRepository) {}

  async execute(input: GetUserRequestDTO): Promise<User> {
    const { id } = input

    const retriviedUser = await this.getUserRepository.get(id)

    if (!retriviedUser) throw NotFound('Usuário não encontrado.')

    const user = new User({
      ...retriviedUser,
      role: UserRole[retriviedUser.role.toUpperCase()],
    })

    return user
  }
}
