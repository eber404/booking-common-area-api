import { ListCommonAreasRepositoryLocal } from '@/commonArea/repositories/implementations/ListCommonAreasRepositoryLocal'
import { ListCommonAreasController } from './ListCommonAreasController'
import { ListCommonAreasUseCase } from './ListCommonAreasUseCase'

const listCommonAreasRepositoryLocal = new ListCommonAreasRepositoryLocal()
const listCommonAreasUseCase = new ListCommonAreasUseCase(
  listCommonAreasRepositoryLocal
)
const listCommonAreasController = new ListCommonAreasController(
  listCommonAreasUseCase
)

export { listCommonAreasController }
