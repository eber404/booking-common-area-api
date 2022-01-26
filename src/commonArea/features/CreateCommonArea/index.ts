import { CreateCommonAreaRepositoryLocal } from '@/commonArea/repositories/implementations/CreateCommonAreaRepositoryLocal'
import { CreateCommonAreaController } from './CreateCommonAreaController'
import { CreateCommonAreaUseCase } from './CreateCommonAreaUseCase'

const createCommonAreaRepository = new CreateCommonAreaRepositoryLocal()
const createCommonAreaUseCase = new CreateCommonAreaUseCase(
  createCommonAreaRepository
)
const createCommonAreaController = new CreateCommonAreaController(
  createCommonAreaUseCase
)

export { createCommonAreaController }
