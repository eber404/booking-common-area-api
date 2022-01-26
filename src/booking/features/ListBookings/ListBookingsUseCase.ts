import { Booking } from '@/booking/entities/Booking'
import { ListBookingsRepositoryLocal } from '@/booking/repositories/implementations/ListBookingsRepositoryLocal'
import { GetCommonAreaRepository } from '@/commonArea/repositories/CommonAreaRepository'
import { GetUserRepository } from '@/user/repositories/UserRepository'
import { UserRole } from '@/user/entities/UserRole'

export class ListBookingsUseCase {
  constructor(
    private readonly listBookingsRepository: ListBookingsRepositoryLocal,
    private readonly getUserRepository: GetUserRepository,
    private readonly getCommonAreaRepository: GetCommonAreaRepository
  ) {}

  async execute(): Promise<Booking[]> {
    const bookingsCollection = await this.listBookingsRepository.list()

    const bookings: Booking[] = []
    for (const booking of bookingsCollection) {
      const locator = await this.getUserRepository.get(booking.userId)
      const area = await this.getCommonAreaRepository.get(booking.areaId)

      bookings.push(
        new Booking({
          id: booking.id,
          area,
          locator: {
            ...locator,
            role: UserRole[locator.role],
          },
          startDate: booking.startDate,
          endDate: booking.endDate,
        })
      )
    }

    return bookings
  }
}
