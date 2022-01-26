import { UpdateUserDTO } from '@/user/dtos/UpdateUserDTO'
import { BadRequest } from '@/common/http/HttpError'
import { UserRole } from '@/user/entities/UserRole'
import {
  UpdateUserRepository,
  GetUserRepository,
} from '@/user/repositories/UserRepository'
import { validateEnumValue } from '@/common/utils/validateEnumValue'

export class UpdateUserUseCase {
  constructor(
    private readonly updateUserRepository: UpdateUserRepository,
    private readonly getUserRepository: GetUserRepository
  ) {}

  async execute(input: UpdateUserDTO) {
    const { id, ...userInput } = input

    const retriviedUser = await this.getUserRepository.get(id)

    if (!retriviedUser) throw BadRequest('User not found.')

    if (userInput.role) {
      const isRoleValid = validateEnumValue(userInput.role, UserRole)

      if (!isRoleValid) throw BadRequest('Invalid user role.')
    }

    const role = UserRole[userInput.role.toUpperCase()]

    await this.updateUserRepository.update({
      ...retriviedUser,
      ...userInput,
      id,
      role,
    })
  }
}
