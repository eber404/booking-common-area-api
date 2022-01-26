import crypto from 'crypto'

import { CreateUserRepository } from '@/user/repositories/UserRepository'
import { users } from '@/user/data/users'
import { UserDTO } from '@/user/dtos/UserDTO'

export class CreateUserRepositoryLocal implements CreateUserRepository {
  async create({ ...userDTO }: UserDTO) {
    const user: UserDTO = {
      ...userDTO,
      id: crypto.randomUUID(),
      role: userDTO.role.toString(),
    }

    users.push(user)
  }
}
