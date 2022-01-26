import { BadRequest } from '@/common/http/HttpError'
import { User } from '@/user/entities/User'
import { UserRole } from '@/user/entities/UserRole'
import { ListUsersRepositoryLocal } from '@/user/repositories/implementations/ListUsersRepositoryLocal'
import { CreateUserRepository } from '@/user/repositories/UserRepository'

import { CreateUserDTO } from '@/user/dtos/CreateUserDTO'

export class CreateUserUseCase {
  constructor(
    private readonly createUserRepository: CreateUserRepository,
    private readonly listUsersRepository: ListUsersRepositoryLocal
  ) {}

  async execute(input: CreateUserDTO): Promise<void> {
    const { apartment, name, role } = input

    const userAlreadyExists = (await this.listUsersRepository.list()).some(
      (user) => user.name === name && user.apartment === apartment
    )

    if (userAlreadyExists) throw BadRequest('Usuário já cadastrado.')

    const user = new User({
      apartment,
      name,
      role: UserRole[role.toUpperCase()],
    })

    await this.createUserRepository.create(user)
  }
}
