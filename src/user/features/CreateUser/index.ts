import { CreateUserRepositoryLocal } from '@/user/repositories/implementations/CreateUserRepositoryLocal'

import { CreateUserUseCase } from './CreateUserUseCase'
import { CreateUserController } from './CreateUserController'
import { ListUsersRepositoryLocal } from '@/user/repositories/implementations/ListUsersRepositoryLocal'

const createUserRepository = new CreateUserRepositoryLocal()
const listUsersRepository = new ListUsersRepositoryLocal()
const createUserUseCase = new CreateUserUseCase(
  createUserRepository,
  listUsersRepository
)
const createUserController = new CreateUserController(createUserUseCase)

export { createUserController }
