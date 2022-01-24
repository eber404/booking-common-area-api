import { LocalUserRepository } from '@/repositories/implementations/LocalUserRepository'

import { CreateUserUseCase } from './CreateUserUseCase'
import { CreateUserController } from './CreateUserController'

const userRepository = new LocalUserRepository()
const createUserUseCase = new CreateUserUseCase(userRepository)
const createUserController = new CreateUserController(createUserUseCase)

export { createUserController }
