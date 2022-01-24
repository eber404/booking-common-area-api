import { GetUserRepositoryLocal } from '@/user/repositories/implementations/GetUserUseCaseRepository'

import { GetUserController } from './GetUserController'
import { GetUsersUseCase } from './GetUserUseCase'

const getUserRepository = new GetUserRepositoryLocal()
const getUserUseCase = new GetUsersUseCase(getUserRepository)
const getUserController = new GetUserController(getUserUseCase)

export { getUserController }
