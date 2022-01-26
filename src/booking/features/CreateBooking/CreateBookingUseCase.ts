import { CreateBookingDTO } from '@/booking/dtos/CreateBookingDTO'
import {
  CreateBookingRepository,
  ListBookingRepository,
} from '@/booking/repositories/BookingRepository'
import { BadRequest } from '@/common/http/HttpError'
import { GetCommonAreaRepository } from '@/commonArea/repositories/CommonAreaRepository'
import { GetUserRepository } from '@/user/repositories/UserRepository'

export class CreateBookingUseCase {
  constructor(
    private readonly createBookingRepository: CreateBookingRepository,
    private readonly listBookinsRepository: ListBookingRepository,
    private readonly getUserRepository: GetUserRepository,
    private readonly getAreaRepository: GetCommonAreaRepository
  ) {}

  async execute(input: CreateBookingDTO) {
    const { userId, areaId, startDate, endDate } = input

    const allBookings = await this.listBookinsRepository.list()

    const userExists = await this.getUserRepository.get(userId)
    const areaExists = await this.getAreaRepository.get(areaId)

    if (!userExists) throw BadRequest('Usuário não existe.')
    if (!areaExists) throw BadRequest('Área comum não existe.')

    const bookingsByArea = allBookings.filter(
      (booking) => booking.areaId === areaId
    )

    const startDateIsLowerThanEndDate =
      new Date(startDate).valueOf() < new Date(endDate).valueOf()

    console.log({
      start: new Date(startDate).valueOf(),
      end: new Date(endDate).valueOf(),
      startDateIsLowerThanEndDate,
    })

    if (!startDateIsLowerThanEndDate)
      throw BadRequest('A data de ínicio deve ser menor que a data final.')

    const hasValidStartDate = bookingsByArea.every(
      (booking) => new Date(startDate).valueOf() >= booking.endDate.valueOf()
    )

    const hasValidEndDate = bookingsByArea.every(
      (booking) => new Date(endDate).valueOf() <= booking.startDate.valueOf()
    )

    const hasValidDates = hasValidStartDate && hasValidEndDate

    if (!hasValidDates)
      throw BadRequest('Horários já cadastrados para esta área comum.')

    await this.createBookingRepository.create({
      userId,
      areaId,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
    })
  }
}
