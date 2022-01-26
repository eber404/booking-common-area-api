import { CreateBookingRepositoryLocal } from '@/booking/repositories/implementations/CreateBookingRepositoryLocal'
import { ListBookingsRepositoryLocal } from '@/booking/repositories/implementations/ListBookingsRepositoryLocal'
import { GetCommonAreaRepositoryLocal } from '@/commonArea/repositories/implementations/GetCommonAreaRepositoryLocal'
import { GetUserRepositoryLocal } from '@/user/repositories/implementations/GetUserUseCaseRepository'

import { CreateBookingController } from './CreateBookingController'
import { CreateBookingUseCase } from './CreateBookingUseCase'

const createBookingRepository = new CreateBookingRepositoryLocal()
const listBookingsRepository = new ListBookingsRepositoryLocal()
const getUserRepository = new GetUserRepositoryLocal()
const getAreaRepository = new GetCommonAreaRepositoryLocal()
const createBookingUseCase = new CreateBookingUseCase(
  createBookingRepository,
  listBookingsRepository,
  getUserRepository,
  getAreaRepository
)
const createBookingController = new CreateBookingController(
  createBookingUseCase
)
export { createBookingController }
