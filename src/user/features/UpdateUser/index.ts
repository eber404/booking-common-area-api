import { GetUserRepositoryLocal } from '@/user/repositories/implementations/GetUserUseCaseRepository'
import { UpdateUserRepositoryLocal } from '@/user/repositories/implementations/UpdateUserRepositoryLocal'

import { UpdateUserController } from './UpdateUserController'
import { UpdateUserUseCase } from './UpdateUserUseCase'

const updateUserRepository = new UpdateUserRepositoryLocal()
const getUserRepository = new GetUserRepositoryLocal()
const updateUserUseCase = new UpdateUserUseCase(
  updateUserRepository,
  getUserRepository
)
const updateUserController = new UpdateUserController(updateUserUseCase)

export { updateUserController }
