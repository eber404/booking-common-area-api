import { ListBookingsRepositoryLocal } from '@/booking/repositories/implementations/ListBookingsRepositoryLocal'
import { GetCommonAreaRepositoryLocal } from '@/commonArea/repositories/implementations/GetCommonAreaRepositoryLocal'
import { GetUserRepositoryLocal } from '@/user/repositories/implementations/GetUserUseCaseRepository'

import { ListBookingsController } from './ListBookingsController'
import { ListBookingsUseCase } from './ListBookingsUseCase'

const listBookingRepository = new ListBookingsRepositoryLocal()

const getUserRepository = new GetUserRepositoryLocal()

const getCommonAreaRepository = new GetCommonAreaRepositoryLocal()

const listBookingsUseCase = new ListBookingsUseCase(
  listBookingRepository,
  getUserRepository,
  getCommonAreaRepository
)
const listBookingsController = new ListBookingsController(listBookingsUseCase)

export { listBookingsController }
