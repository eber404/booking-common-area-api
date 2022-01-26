import { BookingDTO } from '@/booking/dtos/BookingDTO'

export interface CreateBookingRepository {
  create(booking: BookingDTO): Promise<void>
}

export interface ListBookingRepository {
  list(): Promise<BookingDTO[]>
}
