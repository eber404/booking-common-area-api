import { User } from '@/entities/User'
import { UserRole } from '@/entities/UserRole'
import { CreateUserRepository } from '@/repositories/UserRepository'

import { CreateUserInput } from './CreateUserInput'

export class CreateUserUseCase {
  constructor(private readonly createUserRepository: CreateUserRepository) {}

  async execute(input: CreateUserInput): Promise<void> {
    const { apartment, name, role } = input

    console.log('before new user', input)

    const user = new User({
      apartment,
      name,
      role: UserRole[role.toUpperCase()],
    })

    console.log('use case', user)
    await this.createUserRepository.create(user)
  }
}
