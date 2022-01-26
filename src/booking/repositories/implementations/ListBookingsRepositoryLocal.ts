import { bookings as bookingsCollection } from '@/booking/data/bookings'
import { BookingDTO } from '@/booking/dtos/BookingDTO'
import { ListBookingRepository } from '@/booking/repositories/BookingRepository'

export class ListBookingsRepositoryLocal implements ListBookingRepository {
  async list(): Promise<BookingDTO[]> {
    return bookingsCollection
  }
}
