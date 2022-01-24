import { ListUsersRepositoryLocal } from '@/user/repositories/implementations/ListUsersRepositoryLocal'

import { ListUsersController } from './ListUsersController'
import { ListUsersUseCase } from './ListUsersUseCase'

const listUsersRepository = new ListUsersRepositoryLocal()
const listUsersUseCase = new ListUsersUseCase(listUsersRepository)
const listUsersController = new ListUsersController(listUsersUseCase)

export { listUsersController }
