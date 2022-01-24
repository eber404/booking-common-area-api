import { BadRequest } from '@/common/http/HttpError'
import { UserRole } from '@/user/entities/UserRole'
import {
  UpdateUserRepository,
  GetUserRepository,
} from '@/user/repositories/UserRepository'

import { UpdateUserDTO } from './UpdateUserDTO'

export class UpdateUserUseCase {
  constructor(
    private readonly updateUserRepository: UpdateUserRepository,
    private readonly getUserRepository: GetUserRepository
  ) {}

  async execute(input: UpdateUserDTO) {
    const { id, ...userInput } = input

    const retriviedUser = await this.getUserRepository.get(id)

    if (!retriviedUser) throw BadRequest('Usuário não encontrado.')

    if (userInput.role) {
      const availableRoles = Object.values(UserRole)

      const isRoleValid = availableRoles.some(
        (retriviedRole) =>
          retriviedRole.toString().toUpperCase() ===
          userInput.role.toString().toUpperCase()
      )

      if (!isRoleValid) throw BadRequest('Role inválida.')
    }

    const role = UserRole[userInput.role.toUpperCase()]

    await this.updateUserRepository.update(id, {
      ...retriviedUser,
      ...userInput,
      role,
    })
  }
}
