import crypto from 'crypto'

import { bookings } from '@/booking/data/bookings'
import { BookingDTO } from '@/booking/dtos/BookingDTO'
import { CreateBookingRepository } from '@/booking/repositories/BookingRepository'

export class CreateBookingRepositoryLocal implements CreateBookingRepository {
  async create({ ...retriviedBooking }: BookingDTO): Promise<void> {
    const { areaId, endDate, startDate, userId } = retriviedBooking

    bookings.push({
      id: crypto.randomUUID(),
      areaId,
      userId,
      startDate: startDate,
      endDate: endDate,
    })
  }
}
